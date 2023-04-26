from django.core.management.base import BaseCommand, CommandError
from draftcardposter.models import Player
import re

class Command(BaseCommand):

    def handle(self, *args, **options):
        regex = re.compile('[A-Z]{2}[a-z]+')
        for p in Player.objects.all():
            if regex.search(p.name):
                print("{p.name}".format(p=p))
            
