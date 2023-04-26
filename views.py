import glob
from pathlib import Path
import asyncio
import csv

from django.shortcuts import render, redirect
from django.template.loader import render_to_string
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
import time
from datetime import datetime, timezone
from pprint import pprint
from django.views import generic, View

from .models import Player, Settings, Priority
from .ajaxmixin import AJAXListMixin, AJAXSingleObjectMixin
from .sheets import GoogleSheetsData
from .imgur import Imgur
from .screenshot import Screenshot
from .tweet import Tweeter

from redditnfl.nfltools import nflteams
from redditnfl.nfltools import draft

from django.db import transaction


def add_common_context(context):
    settings = Settings.objects.all()[0]
    context['positions'] = Player.POSITIONS
    context['teams'] = sorted(filter(lambda v: v[1]['short'] not in ('AFC', 'NFC'), nflteams.fullinfo.items()), key=lambda v: v[1]['mascot'])
    context['settings'] = settings
    context['msgs'] = []
    lastpick = sum([sum([1 for pick in rd if pick[1] not in (draft.FORFEITED, draft.MOVED)]) for rd in draft.drafts[settings.draft_year]])
    context['next_pick'] = draft.round_pick(settings.draft_year, min(lastpick, settings.last_submitted_overall + 1))
    return context

def latest_update(*args, **kwargs):
    return Settings.objects.all()[0].last_updated

def buzz_sort(player):
    return (0.0-float(player.data.get('buzzscore', 0.0)))

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
        missing = []
        all_imgs = set()
        for player in sorted(Player.objects.all(), key=buzz_sort):
            all_imgs.add(player.data['filename'])
            if player.data.get('buzzscore', '0') == '0' and not player.data.get('draft.overall') and not player.data.get('RANK'):
                continue
            photo = 'draftcardposter/' + Settings.objects.all()[0].layout + '/playerimgs/' + player.data['filename'] + '.jpg'
            if not finders.find(photo):
                missing.append(player)
        context['missing'] = missing

        surplus = []
        for basedir in map(Path, finders.searched_locations):
            d = basedir / 'draftcardposter' / Settings.objects.all()[0].layout / 'playerimgs'
            for f in map(Path, glob.glob("%s/*.jpg" % d)):
                if f.stem not in all_imgs:
                    surplus.append(f)
        context['surplus'] = sorted(surplus)
        return add_common_context(context)


class MissingCsv(generic.ListView):
    model = Player
    context_object_name = 'players'

    def get(self, *args, **kwargs):
        settings = Settings.objects.all()[0]
        
        response = http.HttpResponse(content_type='text/plain')
        writer = csv.DictWriter(response, ['ds.playerid', 'name', 'position', 'college', 'jersey', 'filename', 'buzz', 'draft.overall', 'photo_found'])
        writer.writeheader()
        for player in sorted(self.get_queryset(), key=buzz_sort):
            photo = 'draftcardposter/' + Settings.objects.all()[0].layout + '/playerimgs/' + player.data['filename'] + '.jpg'
            found = finders.find(photo) is not None
            writer.writerow({
                'ds.playerid': player.data.get('ds.playerid', '0'),
                'name': player.name,
                'position': player.position,
                'college': player.college,
                'jersey': player.data.get('ds.jersey', ''),
                'filename': player.data.get('filename', ''),
                'buzz': player.data.get('buzzscore_rel', ''),
                'draft.overall': player.data.get('draft.overall', ''),
                'photo_found': found,
                })
        return response


class PhotoExists(View):
    def get(self, *args, **kwargs):
        settings = Settings.objects.all()[0]
        photo = 'draftcardposter/%s/playerimgs/%s.jpg' % (settings.layout, self.kwargs.get('filename', 'xyzzy'))
        found = finders.find(photo)
        obj = found is not None
        return http.HttpResponse('<?xml version="1.0" encoding="UTF-8"?>'+"\n"+'<HasPhoto>%s</HasPhoto>' % obj, content_type='text/xml')


@method_decorator(last_modified(latest_update), name='dispatch')
class HasPhoto(generic.DetailView):
    model = Player
    context_object_name = 'player'

    def get_object(self, *args, **kwargs):
        for player in self.get_queryset():
            if player.data and player.data.get('ds.playerid', False) == self.kwargs.get('dsplayerid', None):
                settings = Settings.objects.all()[0]
                playerimgs = 'draftcardposter/' + settings.layout + '/playerimgs'
                if 'filename' in player.data:
                    photo = playerimgs + '/' + player.data['filename'] + '.jpg'
                    found = finders.find(photo)
                    return found is not None
        raise http.Http404("Player does not exist")

    def get(self, *args, **kwargs):
        obj = self.get_object()
        return http.HttpResponse('<?xml version="1.0" encoding="UTF-8"?>'+"\n"+'<HasPhoto>%s</HasPhoto>' % obj, content_type='text/xml')

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
                'current_year': settings.draft_year,
                'next_pick': draft.round_pick(settings.draft_year, min(256, Settings.objects.all()[0].last_submitted_overall + 1)),
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


def render_template(type_, context):
    s = Settings.objects.all()[0]
    try:
        return render_to_string('draftcardposter/layout/' + getattr(s, type_ + "_template"), context).strip()
    except Exception:
        traceback.print_exc()
        return ''


@method_decorator(login_required, name='dispatch')
class SubmitView(View):
    def post(self, request, *args, **kwargs):
        s = Settings.objects.all()[0]
        context = add_common_context({})
        url = request.POST.get('imageurl', None)
        overall = request.POST.get('overall', None)
        name = request.POST.get('name', None)
        college = request.POST.get('college', None)
        position = request.POST.get('position', None)
        team = nflteams.fullinfo[request.POST.get('team', None)]

        if not url or not overall or not team or not name or not college or not position:
            raise Exception("AAAAAAAAA")

        context['cardurl'] = url
        context['player'] = player_if_found(name, college)
        context['name'] = name
        context['college'] = college
        context['position'] = position
        context['team'] = team
        context['overall'] = int(overall)
        context['round'], context['pick'] = draft.round_pick(s.draft_year, int(overall))

        fn = 'temp-card.png'
        image_data = get_and_cache_sshot(url.replace('.png', '.html'))
        with open(fn, 'wb') as fp:
            fp.write(image_data)

        try:
            if s.image_host == Settings.IMGUR:
                imgur_title = render_template("imgur", context)
                imgur_album = render_template("imgur_album", context)
                ret = self.upload_to_imgur(imgur_album, imgur_title, url)
                context['imagetitle'] = imgur_title
                context['imageurl'] = ret['link']

            permalink = None
            reddit_title = render_template("reddit_title", context)
            if s.posting_enabled and reddit_title:
                if s.image_host == Settings.REDDIT:
                    submission = self.submit_img_to_reddit_as_pic(s.subreddit, reddit_title, fn)
                else:
                    submission = self.submit_img_to_reddit(s.subreddit, reddit_title, context['imageurl'])
                permalink = submission._reddit.config.reddit_url + submission.permalink
                context['submission'] = submission
                context['permalink'] = permalink
                context['reddit_title'] = reddit_title

            reddit_live_msg = render_template("reddit_live", context)
            if s.live_thread_id and reddit_live_msg:
                reddit_live_thread = self.post_to_live_thread(s.live_thread_id, reddit_live_msg)
                context['reddit_live_msg'] = reddit_live_msg
                context['reddit_live_thread'] = reddit_live_thread

            tweet = render_template("tweet", context)
            if tweet:
                tweeturl = self.submit_twitter(tweet, image_data)
                context['tweet'] = tweet
                context['tweeturl'] = tweeturl
        except Exception as e:
            context['msgs'].append(('danger', str(e)))
            context['msgs'].append(('danger', traceback.format_exc()))
            traceback.print_exc()
        s.last_submitted_overall = overall
        s.save()
        
        return render(request, 'draftcardposter/submit.html', context=context)

    def upload_to_imgur(self, album, title, fn):
        imgur = Imgur()
        return imgur.upload(fn, album, title)

    def submit_img_to_reddit(self, srname, title, url):
        r = Reddit('draftcardposter')
        sub = r.subreddit(srname)
        return sub.submit(title, url=url)

    def submit_img_to_reddit_as_pic(self, srname, title, fn):
        r = Reddit('draftcardposter')
        sub = r.subreddit(srname)
        return sub.submit_image(title, fn, timeout=60)

    def post_to_live_thread(self, live_thread_id, body):
        r = Reddit('draftcardposter')
        live_thread = r.live(live_thread_id)
        live_thread.contrib.add(body)
        return live_thread

    def submit_twitter(self, status, imagedata):
        t = Tweeter()
        print("Tweeting: " + status)
        resp = t.tweet(status, imagedata)
        return "https://twitter.com/statuses/%s" % resp['id_str']

@method_decorator(login_required, name='dispatch')
class PreviewPost(View):

    def post(self, request, *args, **kwargs):
        settings = Settings.objects.all()[0]
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

        overall = draft.overall(settings.draft_year, int(context['round']), int(context['pick']))
        if overall is None:
            raise Exception("Pick {round}.{pick} does not exist".format(**context))
        context['overall'] = overall
        context['permalink'] = 'https://reddit.com/r/'+settings.subreddit+'/comments/_____/'

        for type_ in ('tweet', 'reddit_live', 'reddit_title', 'imgur'):
            context[type_] = render_template(type_, context)

        pick_type = draft.pick_type(settings.draft_year, int(context['round']), int(context['pick']))
        if pick_type and pick_type in (draft.FORFEITED, draft.UNKNOWN, draft.MOVED):
            context['msgs'].append(('warning', 'I don\'t think round {round} has a pick #{pick}. Are you sure? It has either been forfeited, moved or something else. This will probably mess up the overall pick.'.format(**context)))
        elif pick_type and pick_type in (draft.COMP, draft.JC2A):
            context['msgs'].append(('info', 'This is a compensatory or JC-2A pick. Just so you\'re aware'))
        
        url = reverse('player-card', kwargs={'overall':overall, 'team':team['short'], 'pos':context['position'], 'name':context['name'], 'college':context['college'], 'fmt':'png'})
        fullurl = request.build_absolute_uri(url)
        context['imageurl'] = fullurl
        
        return render(request, 'draftcardposter/preview.html', context=context)

def split_name(name):
    return name.split(' ', 1)

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


def current_time_in_millis():
    return int(round(time.time() * 1000))


def get_and_cache_sshot(fullurl):
    settings = Settings.objects.all()[0]
    png = cache.get(fullurl)
    start = current_time_in_millis()
    if not png:
        print("PNG %s not cached, regenerating" % fullurl)
        async def ss(url):
            sshot = await Screenshot.create()
            png = await sshot.sshot_url_to_png(url, 0.3)
            await sshot.close()
            return png
        png = asyncio.run(ss(fullurl))
        cache.set(fullurl, png, settings.cache_ttl)
    print("Retrieved %s in %d ms" % (fullurl, (current_time_in_millis() - start)))
    return png

class PlayerCard(View):

    def get(self, request, overall, team, pos, name, college, fmt, *args, **kwargs):
        settings = Settings.objects.all()[0]
        if fmt == 'png':
            url = reverse('player-card', kwargs={'overall':overall, 'team':team, 'pos':pos, 'name':name, 'college':college, 'fmt':'html'})
            fullurl = request.build_absolute_uri(url)
            png = get_and_cache_sshot(fullurl)
            return HttpResponse(png, content_type="image/png")
        else:
            player = player_if_found(name, college)
            misprint = name.startswith('MISPRINT ')
            if misprint:
                name = name.replace('MISPRINT ','')
            firstname, lastname = split_name(name)
            stats = subdivide_stats(player.data) if player is not None else None
            round_, pick = draft.round_pick(settings.draft_year, int(overall))
            context = {
                    'p': player,
                    'position': pos,
                    'position_long': dict(Player.POSITIONS)[pos],
                    'overall': int(overall),
                    'round': int(round_),
                    'pick': int(pick),
                    'name': name,
                    'firstname': firstname,
                    'lastname': lastname,
                    'college': college,
                    'team': nflteams.fullinfo[team],
                    'stats': stats,
                    'misprint': misprint,
                    'priorities': Priority.objects.get(position=pos).merge_with(Priority.objects.get(position='Default')),
                    'teams': sorted(filter(lambda v: v[1]['short'] not in ('AFC', 'NFC'), nflteams.fullinfo.items()), key=lambda v: v[1]['mascot']),
                    'last_pick': sum([sum([1 for pick in rd if pick[1] not in (draft.FORFEITED, draft.MOVED)]) for rd in draft.drafts[settings.draft_year]])
                    }
            playerimgs = 'draftcardposter/' + settings.layout + '/playerimgs'
            context['photo'] = playerimgs + '/missingno.jpg'
            context['hasphoto'] = False
            if player and 'filename' in player.data:
                photo = playerimgs + '/' + player.data['filename'] + '.jpg'
                if finders.find(photo):
                    context['photo'] = photo
                    context['hasphoto'] = True

            return render(request, 'draftcardposter/layout/' + settings.layout + '.html', context=context)

