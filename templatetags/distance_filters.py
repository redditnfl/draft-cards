"""
>>> set(filter(lambda t: t not in ('AFC', 'NFC'), nflteams.fullinfo.keys())) - set(team_locations.keys())
set()
>>> set(filter(lambda t: t not in ('AFC', 'NFC'), nflteams.fullinfo.keys())) == set(team_locations.keys())
True
"""
import geopy.distance
from django import template
from redditnfl.nfltools import nflteams

register = template.Library()

team_locations = {x.split(':')[0]: tuple(map(float, x.split(':')[1].split(','))) for x in """
ARI:33.5275,-112.2625
ATL:33.755,-84.401
BAL:39.278056,-76.622778
BUF:42.774,-78.787
CAR:35.225833,-80.852778
CHI:41.8623,-87.6167
CIN:39.095,-84.516
CLE:41.506111,-81.699444
DAL:32.747778,-97.092778
DEN:39.743889,-105.02
DET:42.34,-83.045556
GB:44.501389,-88.062222
HOU:29.684722,-95.410833
IND:39.760056,-86.163806
JAX:30.323889,-81.6375
KC:39.048889,-94.483889
LA:34.014167,-118.287778
LAC:33.864,-118.261
MIA:25.958056,-80.238889
MIN:44.974,-93.258
NE:42.090944,-71.264344
NO:29.950833,-90.081111
NYG:40.813528,-74.074361
NYJ:40.813528,-74.074361
OAK:37.751667,-122.200556
PHI:39.900833,-75.1675
PIT:40.446667,-80.015833
SEA:47.5952,-122.3316
SF:37.403,-121.97
TB:27.975833,-82.503333
TEN:36.166389,-86.771389
WAS:38.907778,-76.864444
""".strip().split("\n")}


def distance(a, b):
    """
    >>> round(distance((39.900833,-75.1675), (39.900833,-75.1675)).km, 2)
    0.0
    >>> round(distance((39.900833,-75.1675), (34.014167,-118.287778)).km, 2)
    3857.54
    """
    return geopy.distance.distance(a, b)
    return 0.0


@register.filter
def team_location(team):
    """
    >>> team_location({'short': 'PHI'})
    (39.900833, -75.1675)
    >>> team_location({'short': 'ABC'})
    >>> team_location({})
    """
    return team_locations.get(team.get('short', ''), None)


@register.filter
def closest_team(data):
    """
    >>> closest_team({'lat':39.6094227, 'lng':-75.8395724})['short']
    'PHI'
    """
    latlng = (data['lat'], data['lng'])
    distances = [(team, distance(latlng, loc)) for team, loc in team_locations.items()]
    closest = sorted(distances, key=lambda d: d[1].km)[0]
    ct = nflteams.fullinfo[closest[0]]
    ct['distance'] = closest[1]
    return ct


@register.filter('distance')
def distance_filter(fromlatlng, todata):
    tolatlng = (todata['lat'], todata['lng'])
    return distance(fromlatlng, tolatlng)


if __name__ == "__main__":
    from pprint import pprint

    pprint(team_locations)
    import doctest

    doctest.testmod()
