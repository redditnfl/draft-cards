#!/usr/bin/env python
import re
import sys
import time
from urllib.parse import urlparse, parse_qs

import requests
from bs4 import BeautifulSoup

PAGE_URL = "http://www.draftscout.com/players.php?GenPos=%s&DraftYear=%d&sortby=PlayerId&order=ASC&startspot=%d"

PAGE_SIZE = 15

UA = "Mozilla/5.0 (X11; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0"

def request_with_retry(url, retries=5):
    headers = {
        'User-Agent': UA
    }
    try:
        sys.stderr.write("Getting %s\n" % url)
        r = requests.get(url, headers=headers)
        r.raise_for_status()
        soup = BeautifulSoup(r.content, "html5lib")
        rows = soup.select('table.sortable tr')
        assert len(rows) > 0, "No rows found"
        return rows
    except Exception as e:
        if retries > 0:
            sys.stderr.write("Getting %s\n" % url)
            time.sleep(120)
            request_with_retry(url, retries=retries - 1)
        else:
            raise e
    


def get_position(pos, year, page=1):
    url = PAGE_URL % (pos, year, (page - 1) * PAGE_SIZE)
    rows = request_with_retry(url)
    header = rows[0]
    player_rows = rows[1:]
    num_players = len(player_rows)
    sys.stderr.write("Found %d players\n" % num_players)
    time.sleep(5)
    players = []
    if num_players == 0:
        return []
    else:
        fields = [title.text.strip() for title in header.find_all('td')]
        for row in player_rows:
            player = dict(zip(fields, [x.text.strip() for x in row.find_all('td')]))
            player_link = row.find('a', href=re.compile('dsprofile')).get('href')
            parsed_url = urlparse(player_link)
            parsed_qs = parse_qs(parsed_url.query)
            player['DS PlayerId'] = parsed_qs['PlayerId'][0]
            player['Position'] = pos
            player['DraftYear'] = year
            if 'Height' in player and player['Height']:
                feet, inches = player['Height'].split('-', 1)
                player['Height inches'] = 12*int(feet) + int(inches)
            if 'Hometown, State' in player:
                hometown, state = player['Hometown, State'].split(',', 1)
                player['Hometown'] = hometown.strip()
                player['Home State'] = state.replace(",", ", ").strip()
                del(player['Hometown, State'])
            player['Player Name'] = re.sub(r'^\*', '', player['Player Name'])
            players.append(player)
            #sys.stderr.write(player['Player Name'] + "\n")
        if num_players < PAGE_SIZE:
            return players
        else:
            return players + get_position(pos, year, page + 1)


def main():
    import csv

    writer = None

    positions = (
            'QB',
            'RB',
            'FB',
            'TE',
            'WR',
            'C',
            'OT',
            'OG',
            'K',
            'DE',
            'DT',
            'ILB',
            'OLB',
            'CB',
            'FS',
            'SS',
            'P',
            )
    for pos in positions:
        players = {}
        for i in range(1):
            new_players = {p['DS PlayerId']: p for p in get_position(pos, 2019)}
            sys.stderr.write("Players: %d\n" % len(new_players))
            if len(new_players) > 0:
                players.update(new_players)
            time.sleep(60)

        if writer is None:
            sys.stderr.write("Opening writer\n")
            writer = csv.DictWriter(sys.stdout, fieldnames=list(players.values())[0].keys())
            writer.writeheader()
        sys.stderr.write("Writing %d players\n" % len(players))
        for player in players.values():
            writer.writerow(player)


if __name__ == '__main__':
    main()
