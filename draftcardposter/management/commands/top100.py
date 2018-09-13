from django.core.management.base import BaseCommand, CommandError
from urllib.request import urlopen
import pprint
from draftcardposter.models import Player
from django.urls import reverse
import nflteams

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
        output_dir = options['output_dir']
        
        for p in players:
            if ranks is not None and rank(p) not in ranks:
                continue
            team = nflteams.findteam(p.data['TEAM'])
            url = options['base_url'] + reverse('player-card', kwargs={'overall':1, 'team':team['short'], 'pos':p.position, 'name':p.name, 'college': p.college, 'fmt':'png'})
            fn = "{output_dir}/{rank:03d} {p.name}.jpg".format(p=p, rank=rank(p), output_dir=output_dir)
            with open(fn, 'wb') as out:
                out.write(urlopen(url).read())
                print(fn)
