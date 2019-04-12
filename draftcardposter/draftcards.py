#!/usr/bin/env python
from pathlib import Path
from pprint import pprint
import json

from .render import Render
from .screenshot import Screenshot
from .sheets import GoogleSheetsData

def height_from_in(k, v):
    feet, inches = divmod(int(v), 12)
    s = '{0}\' {1}"'.format(feet, inches)
    return 'height', s

CONVERSIONS = {
        'height_in': height_from_in
}

def massage_values(player):
    ret = {}
    for key, value in player.items():
        ret[key] = value
        if key in CONVERSIONS:
            nk, nv = CONVERSIONS[key](key, value)
            ret[nk] = nv
    return ret

class DraftCards:

    def __init__(self, sheet_id, range_def, template):
        self.sheet_id = sheet_id
        self.range_def = range_def
        self.template = template
        self.sheet = GoogleSheetsData(sheet_id)
        self.sshot = Screenshot(300, 400)
        self.render = Render()

    def fn(self, player):
        safename = Path(player['Filename']).name
        return Path('output') / (safename + '.dummy')

    def main(self):
        for player in self.sheet.get_range_dict(self.range_def):
            player = massage_values(player)
            print(player['Name'], end='... ')
            fn = self.fn(player)

            html = fn.with_suffix('.html')
            with html.open('w') as fp:
                fp.write(self.render.render(self.template, {'p':player}))

            json_file = fn.with_suffix('.json')
            with json_file.open('w') as fp:
                json.dump(player, fp)

            png = fn.with_suffix('.png')
            self.sshot.sshot(str(html), str(png))
            html.unlink()
            print("done")
                

if __name__ == "__main__":
    import sys
    # Popping because the Google API reads args
    sheet_id = sys.argv.pop(1)
    range_def = sys.argv.pop(1)
    template = sys.argv.pop(1)
    dc = DraftCards(sheet_id, range_def, template)
    dc.main()
