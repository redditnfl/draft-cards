from django.core.management.base import BaseCommand, CommandError
from draftcardposter.models import Player
from django.urls import reverse
from redditnfl.nfltools import nflteams
import random

class Command(BaseCommand):

    def handle(self, *args, **options):
        teams = list(filter(lambda t: t not in ('NFC', 'AFC'), nflteams.fullinfo.keys()))
        assert len(teams) == 32, "There should be 32 teams"
        for p in Player.objects.all():
            t = random.choice(teams)
            o = random.randint(1, 256)
            url = reverse('player-card', kwargs={'overall': o, 'team': t, 'pos':p.position, 'name':p.name, 'college':p.college, 'fmt':'png'})
            self.stdout.write(url)
