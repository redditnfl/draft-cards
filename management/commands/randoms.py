from django.core.management.base import BaseCommand, CommandError
from draftcardposter.models import Player
from django.urls import reverse
import nflteams
import random

class Command(BaseCommand):

    def handle(self, *args, **options):
        for p in Player.objects.all():
            t = random.choice(list(nflteams.fullinfo.keys()))
            o = random.randint(1, 256)
            url = reverse('player-card', kwargs={'overall': o, 'team': t, 'pos':p.position, 'name':p.name, 'college':p.college, 'fmt':'png'})
            self.stdout.write(url)
