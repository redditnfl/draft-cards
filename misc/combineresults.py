#!/usr/bin/env python3
import sys
import json
from urllib.request import urlopen
import csv

URL = "https://www.nfl.com/feeds-rs/combine/allProspects/%d.json" % int(sys.argv[1])

prospects = json.load(urlopen(URL))

fields = ['firstName', 'lastName', 'position', 'college', 'homeState', 'homeTown', 'height', 'weight', 'handSize', 'armLength', '20YardShuttle', '3ConeDrill', '40YardDash', '60YardShuttle', 'benchPress', 'broadJump', 'verticalJump', 'expertGrade']
writer = csv.DictWriter(sys.stdout, fields, extrasaction='ignore')
writer.writeheader()
for p in prospects:
    p['handSize'] = p['handSizeInches'] + eval(p.get('handSizeFraction', '0'))
    p['armLength'] = p['armLengthInches'] + eval(p.get('armLengthFraction', '0'))
    for wo in p['workoutResults'] if p['workoutResults'] else []:
        name = wo['workoutName']
        name = name.replace(' ', '')
        name = name[0].lower() + name[1:]
        if name not in fields:
            raise Exception("Unknown workout %s" % name)
        p[name] = wo['result']
        if not wo['official']:
            sys.stderr.write("Unofficial: %s %s %s" % (p['firstName'], p['lastName'], name))
    writer.writerow(p)

