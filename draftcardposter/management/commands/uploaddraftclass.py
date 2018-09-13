from django.core.management.base import BaseCommand, CommandError
import pprint
from draftcardposter.models import Player
from django.urls import reverse
import nflteams
import random
import draft
from draftcards.imgur import Imgur

class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('base_url')
        parser.add_argument('year')

    def handle(self, *args, **options):
        year = int(options['year'])
        def drafted_player(p):
            return 'draft.round' in p.data and p.data['draft.round']
        def draft_position(p):
            return [int(p.data[k]) for k in ('draft.round', 'draft.pick')]

        drafted = filter(drafted_player, Player.objects.all())
        draft_class = sorted(drafted, key = draft_position)
        
        lastrnd = 0
        album = None
        albums = {}

        mascot_lookup = {v: k for k, v in nflteams.mascots.items()}
        img = Imgur()
        for p in draft_class:
            team = nflteams.fullinfo[mascot_lookup[p.data['draft.team']]]
            rnd, pick = draft_position(p)
            ovr = draft.overall(year, rnd, pick)
            title = "Round {rnd} - Pick {pick}: {p.name}, {p.position}, {p.college} ({team[fullname]})".format(p=p, pick=pick, rnd=rnd, team=team)
            url = options['base_url'] + reverse('player-card', kwargs={'overall':ovr, 'team':team['short'], 'pos':p.position, 'name':p.name, 'college': p.college, 'fmt':'png'})
            if rnd != lastrnd:
                lastrnd = rnd
                album = "{year} /r/nfl Draftcards - Round {rnd} - Final".format(year=year, rnd=rnd)
            teamalbum = "{year} /r/nfl Draftcards - {team[fullname]}".format(team=team, year=year)
            self.stdout.write(title)
            
            if team['fullname'] not in albums:
                albums[team['fullname']] = img.get_or_make_album(teamalbum)
            album_id = albums[team['fullname']]

            res = img.upload_url(url, album, title)
            img.album_add_images(album_id, [res['id']])

        for team, album_id in albums.items():
            imgs = img.get_album_images(album_id)
            img.update_album(album_id, {'cover': imgs[0].id})
            self.stdout.write("[{team}](https://imgur.com/a/{album_id})".format(team=team, album_id=album_id))
