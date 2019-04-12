from django.core.management.base import BaseCommand, CommandError
from draftcardposter.models import Player
from django.urls import reverse
import nflteams
import random

class Command(BaseCommand):

    def handle(self, *args, **options):
        lf = (0, None)
        ll = (0, None)
        lt = (0, None)
        for p in Player.objects.all():
            firstname, lastname = p.name.split(' ', 1)
            if len(firstname) > lf[0]:
                lf = (len(firstname), p)
            if len(lastname) > ll[0]:
                ll = (len(lastname), p)
            if len(p.name) > lt[0]:
                lt = (len(p.name), p)
        self.stdout.write("Longest firstname: {p.name}".format(p=lf[1]))
        self.stdout.write("Longest lastname: {p.name}".format(p=ll[1]))
        self.stdout.write("Longest name: {p.name}".format(p=lt[1]))
