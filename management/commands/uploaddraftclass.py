from django.core.management.base import BaseCommand
from django.urls import reverse
from redditnfl.nfltools import nflteams
from redditnfl.nfltools import draft
import requests

from draftcardposter.imgur import Imgur
from draftcardposter.models import Player

TEAM_ALBUM_TITLE = "{year} /r/nfl Draftcards - {team[fullname]}"

ALBUM_TITLE = "{year} /r/nfl Draftcards - Round {rnd} - Final"


class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('base_url')
        parser.add_argument('year')
        parser.add_argument('start_at_ovr')

    def handle(self, *args, **options):
        year = int(options['year'])
        start_at_ovr = int(options['start_at_ovr'])
        def draft_position(p):
            return [int(p.data[k]) for k in ('draft.round', 'draft.pick')]
        def drafted_player(p):
            return 'draft.round' in p.data and p.data['draft.round']

        drafted = filter(drafted_player, Player.objects.all())
        draft_class = sorted(drafted, key = draft_position)

        lastovr = 0
        for p in draft_class:
            rnd, pick = draft_position(p)
            ovr = draft.overall(year, rnd, pick)
            print("%s\t%s\t%s\t%s" % (ovr, rnd, pick, p.name))
            if ovr != lastovr + 1:
                raise Exception("Gap in draft class at %d - %d" % (lastovr, ovr))
            lastovr = ovr

        lastrnd = 0
        album = None
        albums = {}

        # mascot_lookup = {v: k for k, v in nflteams.mascots.items()}
        fullname_lookup = {v: k for k, v in nflteams.fullnames.items()}
        img = Imgur()

        #for rnd in range(1,8):
        #    album_id = img.get_or_make_album(ALBUM_TITLE.format(year=year, rnd=rnd))
        #    images = img.get_album_images(album_id)
        #    for image in images:
        #        print("Delete {image.title} ({image.link})".format(image=image))
        #        img.client.delete_image(image.id)

        for p in draft_class:
            team = nflteams.fullinfo[fullname_lookup[p.data['draft.team']]]
            rnd, pick = draft_position(p)
            ovr = draft.overall(year, rnd, pick)
            if ovr < start_at_ovr:
                continue
            title = "Round {rnd} - Pick {pick}: {p.name}, {p.data[draft.position]}, {p.college} ({team[fullname]})".format(p=p, pick=pick, rnd=rnd, team=team)
            url = options['base_url'] + reverse('player-card', kwargs={'overall':ovr, 'team':team['short'], 'pos':p.position, 'name':p.name, 'college': p.college, 'fmt':'png'})
            if rnd != lastrnd:
                lastrnd = rnd
                album = ALBUM_TITLE.format(year=year, rnd=rnd)
            teamalbum = TEAM_ALBUM_TITLE.format(team=team, year=year)

            temp_fn = 'temp.png'
            with open(temp_fn, 'wb') as fp:
                fp.write(requests.get(url).content)

            if team['fullname'] not in albums:
                albums[team['fullname']] = img.get_or_make_album(teamalbum)
            album_id = albums[team['fullname']]

            #res = img.upload_url(url, album, title)
            print(f"{url}\n  Title: {title}\n  Album: {album}\n  Team: {team['fullname']} ({album_id})")

            res = img.upload(temp_fn, album, title)
            img.album_add_images(album_id, [res['id']])

        for team, album_id in albums.items():
            imgs = img.get_album_images(album_id)
            img.update_album(album_id, {'cover': imgs[0].id})
            self.stdout.write("[{team}](https://imgur.com/a/{album_id})".format(team=team, album_id=album_id))
