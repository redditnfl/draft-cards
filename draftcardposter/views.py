from django.shortcuts import render, redirect
import traceback
from django.contrib.staticfiles import finders
from praw import Reddit
from praw.const import API_PATH
from django.urls import reverse
from django import http
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import last_modified
from django.utils.decorators import method_decorator
from django.core.cache import cache
from datetime import datetime, timezone
from pprint import pprint
from django.views import generic, View

from .models import Player, Settings, Priority
from .ajaxmixin import AJAXListMixin, AJAXSingleObjectMixin

from draftcards.sheets import GoogleSheetsData
from draftcards.render import Render
from draftcards.imgur import Imgur
from draftcards.screenshot import Screenshot
from redditnfl.nfltools import nflteams
from redditnfl.nfltools import draft
from django.db import transaction
from urllib.request import urlopen

def add_common_context(context):
    context['positions'] = Player.POSITIONS
    context['teams'] = sorted(nflteams.fullinfo.items(), key=lambda v: v[1]['fullname'])
    context['settings'] = Settings.objects.all()[0]
    context['msgs'] = []
    context['next_pick'] = draft.round_pick(2018, min(256, Settings.objects.all()[0].last_submitted_overall + 1))
    return context

def latest_update(*args, **kwargs):
    return Settings.objects.all()[0].last_updated

@method_decorator(login_required, name='dispatch')
class IndexView(generic.TemplateView):
    template_name = 'draftcardposter/index.html'

    def get_context_data(self, *args, **kwargs):
        context_data = super(IndexView, self).get_context_data(*args, **kwargs)
        return add_common_context(context_data)

class MissingPhotos(generic.TemplateView):
    template_name = 'draftcardposter/missingphotos.html'

    def get_context_data(self, *args, **kwargs):
        context = super(MissingPhotos, self).get_context_data(*args, **kwargs)
        players = []
        for player in Player.objects.all():
            photo = 'draftcardposter/top100-2018/playerimgs/' + player.data['filename'] + '.jpg'
            if not finders.find(photo):
                players.append(player)
        context['players'] = players
        return add_common_context(context);



@method_decorator(last_modified(latest_update), name='dispatch')
class PlayerList(AJAXListMixin, generic.ListView):
    model = Player
    context_object_name = 'players'

@method_decorator(last_modified(latest_update), name='dispatch')
class PlayerDetail(AJAXSingleObjectMixin, generic.DetailView):
    model = Player
    context_object_name = 'player'

def remove_na(d):
    dk = [k for k, v in d.items() if v.lower().strip() in ('n/a', '--')]
    for k in dk:
        del(d[k])
    return d

@method_decorator(login_required, name='dispatch')
class Picks(View):
    def get(self, request, *args, **kwargs):
        settings = Settings.objects.all()[0]
        if not request.is_ajax() and False:
            raise http.Http400("This is an ajax view, friend.")
        data = {
                'current_year': 2018,
                'next_pick': 36,
                'picks': draft.drafts
                }
        return http.JsonResponse(data)

@method_decorator(transaction.atomic, name='dispatch')
class UpdatePlayers(View):

    def get(self, request, *args, **kwargs):
        context = add_common_context({})
        settings = Settings.objects.all()[0]
        sheets = GoogleSheetsData(settings.sheet_id, parseargs=False)

        Priority.objects.all().delete()
        i = 0
        for prio in sheets.get_range_dict(settings.prio_range_def):
            lowercase_dict = dict([(k.lower(), v) for (k,v) in prio.items()])
            if len(lowercase_dict) == 0 or len(lowercase_dict['position']) == 0:
                continue
            p = Priority(**lowercase_dict)
            p.save()
            
            i += 1
        context['msgs'].append(('success', 'Updated %d priorities' % i))
        
        Player.objects.all().delete()
        players = sheets.get_range_dict(settings.range_def)
        i = 0
        for player in players:
            p = Player(name=player['name'], position=player['pos'], college=player['college'])
            del(player['name'])
            del(player['pos'])
            del(player['college'])
            player = remove_na(player)
            p.data = player
            p.save()
            i += 1
        context['msgs'].append(('success', 'Updated %d player%s' % (i, '' if i==1 else 's')))
        settings.last_updated = datetime.now(timezone.utc)
        settings.save()
        cache.clear()
        return render(request, 'draftcardposter/index.html', context=context)

def player_if_found(name, college):
    players = Player.objects.filter(name=name, college=college)
    if len(players) == 1:
        return players[0]

@method_decorator(login_required, name='dispatch')
class SubmitView(View):
    def post(self, request, *args, **kwargs):
        s = Settings.objects.all()[0]
        context = add_common_context({})
        title = request.POST.get('title', None)
        url = request.POST.get('imageurl', None)
        overall = request.POST.get('overall', None)

        if not title or not url or not overall:
            raise Exception("AAAAAAAAA")

        context['cardurl'] = url
        try:
            ret = self.upload_to_imgur(s.imguralbum, title, url)
            context['imgururl'] = ret['link']
            permalink = None
            if s.posting_enabled:
                submission = self.submit_img_to_reddit(s.subreddit, title, context['imgururl'])
                context['submission'] = submission
                permalink = submission._reddit.config.reddit_url + submission.permalink
                context['permalink'] = permalink
            if s.live_thread_id and permalink is not None:
                live_thread = self.post_to_live_thread(s.live_thread_id, context['permalink'])
        except Exception as e:
            context['msgs'].append(('danger', str(e)))
            context['msgs'].append(('danger', traceback.format_exc()))
        s.last_submitted_overall = overall
        s.save()
        
        return render(request, 'draftcardposter/submit.html', context=context)

    def upload_to_imgur(self, album, title, url):
        imgur = Imgur()
        return imgur.upload_url(url, album, title)

    def submit_img_to_reddit(self, srname, title, url):
        r = Reddit('draftcardposter')
        sub = r.subreddit(srname)
        return sub.submit(title, url=url)

    def post_to_live_thread(self, live_thread_id, body):
        r = Reddit('draftcardposter')
        live_thread = r.live(live_thread_id)
        live_thread.contrib.add(body)

@method_decorator(login_required, name='dispatch')
class PreviewPost(View):

    def post(self, request, *args, **kwargs):
        context = add_common_context({})
        for k in ('name', 'college', 'position', 'round', 'pick', 'team'):
            if k not in request.POST or not request.POST[k]:
                context['msgs'].append(('danger', 'You didn\'t set %s' % k))
                return render(request, 'draftcardposter/index.html', context=context)
            context[k] = request.POST[k]

        player = player_if_found(name=request.POST['name'], college=request.POST['college'])
        context['player'] = player
        
        team = nflteams.fullinfo[request.POST['team']]
        context['team'] = team

        overall = draft.overall(2018, int(context['round']), int(context['pick']))
        if overall is None:
            raise Exception("Pick {round}.{pick} does not exist".format(**context))
        context['overall'] = overall

        title = "Round {round} - Pick {pick}: {name}, {position}, {college} ({team[fullname]})".format(
                **context
                )
        context['title'] = title

        pick_type = draft.pick_type(2018, int(context['round']), int(context['pick']))
        if pick_type and pick_type in (draft.FORFEITED, draft.UNKNOWN, draft.MOVED):
            context['msgs'].append(('warning', 'I don\'t think round {round} has a pick #{pick}. Are you sure?'.format(**context)))
        elif pick_type and pick_type == draft.COMP:
            context['msgs'].append(('info', 'This is a compensatory pick. Just so you\'re aware'))
        
        url = reverse('player-card', kwargs={'overall':overall, 'team':team['short'], 'pos':context['position'], 'name':context['name'], 'college':context['college'], 'fmt':'png'})
        fullurl = request.build_absolute_uri(url)
        context['imageurl'] = fullurl
        
        return render(request, 'draftcardposter/preview.html', context=context)

def split_name(name):
    return name.split(' ', 1)

def beststats(player, pos):
    if player is None or player.data is None:
        return None
    prio = Priority.objects.get(position=pos)
    default = Priority.objects.get(position='Default')
    stats = []
    for p in prio.merge_with(default).as_list():
        if p in player.data and player.data[p]:
            stats.append((p, player.data[p]))
    return stats

class RandomCard(View):
    def get(self, request, *args, **kwargs):
        import random

        p = Player.objects.all().order_by('?')[0]
        t = random.choice(list(nflteams.mascots.keys()))

        return redirect('player-card', permanent=True,**{
            'overall': str(random.randint(1, 256)),
            'team': t,
            'pos': p.position,
            'name': p.name,
            'college': p.college,
            'fmt': 'png'
            })

def subdivide_stats(data):
    """
    If a key contains a ., create a sub-dict with the first part as parent key
    """
    ret = {}
    for key, value in data.items():
        if '.' in key:
            parent, subkey = key.split('.', 2)
            if parent not in ret:
                ret[parent] = {}
            ret[parent][subkey] = value
        else:
            ret[key] = value
    return ret

class PlayerCard(View):

    def get(self, request, overall, team, pos, name, college, fmt, *args, **kwargs):
        if fmt == 'png':
            sshot = Screenshot(840, 0) # Height expands automatically
            url = reverse('player-card', kwargs={'overall':overall, 'team':team, 'pos':pos, 'name':name, 'college':college, 'fmt':'html'})
            fullurl = request.build_absolute_uri(url)
            png = cache.get(fullurl)
            if not png:
                print("PNG not cached, regenerating")
                png = sshot.sshot_url_to_png(fullurl, 5.0)
                cache.set(fullurl, png, 300)
            return HttpResponse(png, content_type="image/png")
        else:
            player = player_if_found(name, college)
            misprint = name.startswith('MISPRINT ')
            if misprint:
                name = name.replace('MISPRINT ','')
            firstname, lastname = split_name(name)
            stats = subdivide_stats(player.data) if player is not None else None
            round_, pick = draft.round_pick(2018, int(overall))
            context = {
                    'p': player,
                    'position': pos,
                    'position_long': dict(Player.POSITIONS)[pos],
                    'overall': overall,
                    'round': round_,
                    'pick': pick,
                    'name': name,
                    'firstname': firstname,
                    'lastname': lastname,
                    'college': college,
                    'team': nflteams.fullinfo[team],
                    'stats': stats,
                    'misprint': misprint,
                    'priorities': Priority.objects.get(position=pos).merge_with(Priority.objects.get(position='Default')),
                    }
            context['photo'] = 'draftcardposter/draft-2018/playerimgs/some_fucking_guy.jpg'
            if player and 'filename' in player.data:
                photo = 'draftcardposter/top100-2018/playerimgs/' + player.data['filename'] + '.jpg'
                if finders.find(photo):
                    context['photo'] = photo

            settings = Settings.objects.all()[0]
            return render(request, 'draftcardposter/' + settings.layout, context=context)

