"""
>>> set(filter(lambda t: t not in ('AFC', 'NFC'), nflteams.fullinfo.keys())) - set(team_locations.keys())
set()
>>> set(filter(lambda t: t not in ('AFC', 'NFC'), nflteams.fullinfo.keys())) == set(team_locations.keys())
True
"""
import geopy.distance
from django import template
from redditnfl.nfltools import nflteams, sites

register = template.Library()

team_locations = {team['short']: sites.by_team(team['short'])[1][3] for team in filter(lambda t: t['short'] not in ('AFC', 'NFC'), nflteams.fullinfo.values())}

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
    if 'lat' not in data or 'lng' not in data:
        return None
    latlng = (data['lat'], data['lng'])
    distances = [(team, distance(latlng, loc)) for team, loc in team_locations.items()]
    closest = sorted(distances, key=lambda d: d[1].km)[0]
    ct = nflteams.fullinfo[closest[0]]
    ct['distance'] = closest[1]
    return ct


@register.filter('distance')
def distance_filter(fromlatlng, toplayer):
    if toplayer is None or not hasattr(toplayer, 'data'):
        return None
    todata = toplayer.data
    tolatlng = (todata['lat'], todata['lng'])
    return distance(fromlatlng, tolatlng)


if __name__ == "__main__":
    from pprint import pprint

    pprint(team_locations)
    import doctest

    doctest.testmod()
    print(" ".join(nflteams.fullinfo.keys()))
