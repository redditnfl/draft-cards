from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()

@register.filter
def order_stats(stats, priorities):
    from pprint import pprint
    items = list(stats.items())
    prio = priorities.as_list()
    def sorter(item):
        ismissing = False if item[1] else True
        key = item[0]
        if '.' in key:
            key = item[0].split('.', 2)[1]
        if key in prio:
            return (ismissing, prio.index(key), item[0])
        else:
            return (ismissing, 999, item[0])
    return sorted(items, key=sorter)

@register.filter
def remove_non_stats(stats, priorities):
    ret = []
    for item in stats:
        stat = item[0] if '.' not in item[0] else item[0].split('.', 2)[1]
        value = item[1]
        if value and stat in priorities.as_list():
            ret.append(item)
    return ret

@register.filter
def deduplicate(stats, priority):
    priority = priority.split(',')
    temp = {}
    for item in stats:
        if '.' in item[0]:
            type_, stat = item[0].split('.', 2)
        else:
            stat = item[0]
        if stat not in temp:
            temp[stat] = []
        temp[stat].append(item[0])

    def sorter(item):
        type_ = 'None' if '.' not in item else item.split('.')[0]
        return priority.index(type_)

    delete = []
    for stat, items in temp.items():
        if len(items) > 1:
            delete += sorted(items, key=sorter)[1:]

    ret = []
    for item in stats:
        if item[0] not in delete:
            type_ = None if '.' not in item[0] else item[0].split('.')[0]
            stat = item[0] if '.' not in item[0] else item[0].split('.')[1]
            value = item[1]
            ret.append([type_, stat, value])

    return ret

@register.filter
@stringfilter
def statname(statname, value):
    """
    >>> statname('Drops', 1)
    'Drop'
    >>> statname('Drops', 0)
    'Drops'
    >>> statname('Drops', 2)
    'Drops'
    >>> statname('Rec-TD', 1)
    'Rec. TD'
    >>> statname('Fumbles Forced', 1)
    'Fumble Forced'
    """
    statnames = {
            'hand_size': 'Hand Size',
            'arm_length': 'Arm Length',
            'wonderlic': 'Wonderlic',
            '40_yard': '40 yd dash',
            'bench_press': 'Bench Press Reps',
            'vert_leap'   : 'Vert. Leap',
            'broad_jump': 'Broad Jump',
            'shuttle': 'Short Shuttle',
            '3cone': '3-cone drill',
            '60ydshuttle': '60 yard shuttle',
            'Pass-Int': 'Interceptions',
            'Rec-TD': 'Rec. TDs'
            }
    if statname in statnames:
        statname = statnames[statname]
    else:
        statname = statname.replace("_", " ")#.title()
    if str(value) in ('1', '1.0'):
        if statname.endswith('s'):
            statname  = statname[:-1]
        elif statname.startswith("Fumbles"):
            statname = statname.replace("Fumbles", "Fumble")
    return statname

@register.filter
@stringfilter
def formatvalue(value, statname):
    if statname in ('hand_size', 'arm_length', 'vert_leap', 'broad_jump'):
        return value + '"'
    elif statname in ('40_yard', 'shuttle', '3cone', '60ydshuttle'):
        return value #+ ' s'
    elif statname in ('weight_lbs',):
        return value + ' lbs'
    elif statname in ('height_in',):
        return in_to_ft_in(value)
    return value

@register.filter
def in_to_ft_in(value):
    feet, inches = divmod(int(value), 12)
    return '{0}\'{1}"'.format(feet, inches)

@register.filter 
def teamcssclass(value):
    m = value['mascot']
    if m == '49ers':
        return 'fortyniners'
    else:
        return m.lower()

@register.filter 
def ordinal_suffix(n):
  """Return the ordinal suffix for a positive integer
  >>> ordinal_suffix(0)
  ''
  >>> ordinal_suffix(1)
  'st'
  >>> ordinal_suffix(2)
  'nd'
  >>> ordinal_suffix(3)
  'rd'
  >>> ordinal_suffix(4)
  'th'
  >>> ordinal_suffix(11)
  'th'
  >>> ordinal_suffix(12)
  'th'
  >>> ordinal_suffix(13)
  'th'
  >>> ordinal_suffix(21)
  'st'
  >>> ordinal_suffix(22)
  'nd'
  >>> ordinal_suffix(23)
  'rd'
  >>> ordinal_suffix(101)
  'st'
  >>> ordinal_suffix(111)
  'th'
  >>> ordinal_suffix(112)
  'th'
  >>> ordinal_suffix(113)
  'th'
  >>> ordinal_suffix(121)
  'st'
  >>> ordinal_suffix(1111)
  'th'
  >>> ordinal_suffix(1322)
  'nd'
  >>> ordinal_suffix('horse')
  ''
  """
  try:
      n = int(n)
  except Exception:
      return ''
  if n < 1:
    return ''
  elif n >= 100:
    return ordinal_suffix(n%100)
  elif 11 <= n <= 13:
    return 'th'
  elif n%10 in (1,2,3):
    return ('st','nd','rd')[n%10-1]
  else:
    return 'th'

if __name__ == "__main__":
    import doctest
    doctest.testmod()
