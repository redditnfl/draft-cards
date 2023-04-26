from django.core.management.base import BaseCommand, CommandError
from django.contrib.staticfiles import finders
from draftcardposter.models import Player, Settings
from django.urls import reverse
from redditnfl.nfltools import nflteams
import random

class Command(BaseCommand):

    def handle(self, *args, **options):
        teams = list(filter(lambda t: t not in ('NFC', 'AFC'), nflteams.fullinfo.keys()))
        assert len(teams) == 32, "There should be 32 teams"
        for i, p in enumerate(Player.objects.all()):
            photo = 'draftcardposter/' + Settings.objects.all()[0].layout + '/playerimgs/' + p.data['filename'] + '.jpg'
            if not finders.find(photo):
                continue

            t = teams[i % len(teams)]
            o = random.randint(1, 259)
            url = reverse('player-card', kwargs={'overall': o, 'team': t, 'pos':p.position, 'name':p.name, 'college':p.college, 'fmt':'png'})
            self.stdout.write(url)
