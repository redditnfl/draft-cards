from django.core.management.base import BaseCommand, CommandError
from urllib.request import urlopen
from draftcardposter.models import Player
from django.urls import reverse
from redditnfl.nfltools import nflteams
from pathlib import Path
import re

def expand_range(s):
    r = []
    for part in s.split(",") if s is not None else []:
        if part.isdigit():
            r.append(int(part))
        elif '-' in part:
            m = re.match(r"(?P<from>-?[0-9]+)-(?P<to>-?[0-9]+)", part)
            from_, to = int(m['from']), int(m['to'])+1
            assert from_ < to, "To is not larger than from: %s" % part
            r += range(from_, to)
        else:
            raise Exception("Unparsable part: %s" % part)
    return r


class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('output_dir')
        parser.add_argument('--ranks')
        parser.add_argument('--baseurl')

    def handle(self, *args, **options):
        ranks = expand_range(options['ranks'])
        base_url = options['baseurl'] if options['baseurl'] is not None else 'http://localhost:8000'
        def rank(p):
            return int(p.data['RANK'].replace('T-', ''))

        players = sorted(Player.objects.all(), key=rank)
        output_dir = Path(options['output_dir'])
        output_dir.mkdir(parents=True, exist_ok=True)
        
        for p in players:
            if ranks and rank(p) not in ranks:
                print("Skipping player with rank %s" % (rank(p), ranks))
                continue
            if not p.name or not p.data['GAMES_PLAYED']:
                print("Skipping TBD player %s" % p)
                continue
            print("Doing %s" % p)
            team = nflteams.get_team(next(filter(lambda x: x[1]==p.data['TEAM'], nflteams.fullnames.items()))[0])
            url = base_url + reverse('player-card', kwargs={'overall':1, 'team':team['short'], 'pos':p.position, 'name':p.name, 'college': p.college, 'fmt':'png'})
            fn = output_dir / Path("{rank:03d} {p.name}.png".format(p=p, rank=rank(p)))
            if fn.exists():
                print("    %s exists, skipping" % fn)
                continue
            with open(fn, 'wb') as out:
                print("  %s" % url)
                out.write(urlopen(url).read())
                print(" -> %s" % fn)
