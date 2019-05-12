from django.core.management.base import BaseCommand, CommandError
from urllib.request import urlopen
import pprint
from draftcardposter.models import Player
from django.urls import reverse
from redditnfl.nfltools import nflteams
from pathlib import Path

class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('base_url')
        parser.add_argument('output_dir')
        parser.add_argument('--ranks')

    def handle(self, *args, **options):
        ranks = None
        if options['ranks'] is not None:
            ranks = list(map(int, options['ranks'].split(',')))
        def rank(p):
            return int(p.data['RANK'].replace('T-', ''))

        players = sorted(Player.objects.all(), key=rank)
        output_dir = Path(options['output_dir'])
        output_dir.mkdir(parents=True, exist_ok=True)
        
        for p in players:
            if ranks is not None and rank(p) not in ranks:
                continue
            team = nflteams.get_team(next(filter(lambda x: x[1]==p.data['TEAM'], nflteams.fullnames.items()))[0])
            url = options['base_url'] + reverse('player-card', kwargs={'overall':1, 'team':team['short'], 'pos':p.position, 'name':p.name, 'college': p.college, 'fmt':'png'})
            fn = output_dir / Path("{rank:03d} {p.name}.png".format(p=p, rank=rank(p)))
            with open(fn, 'wb') as out:
                out.write(urlopen(url).read())
                print(fn)
