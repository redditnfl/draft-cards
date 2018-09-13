#!/usr/bin/env python
from selenium import webdriver
from pathlib import Path
from time import sleep
from xvfbwrapper import Xvfb

class Screenshot:

    def __init__(self, w, h):
        self.w = w
        self.h = h

    def start(self):
        self.vdisplay = Xvfb()
        self.vdisplay.start()
        self.driver = webdriver.PhantomJS()
        self.driver.set_window_size(self.w, self.h)

    def stop(self):
        self.vdisplay.stop()

    def sshot(self, fn, outfn):
        p = Path(fn)
        if not p.exists():
            return None
        self.start()
        self.driver.get('file://' + str(p.resolve()))
        self.driver.save_screenshot(outfn)
        self.stop()

    def sshot_url_to_png(self, url, sleep_seconds=0.0):
        self.start()
        self.driver.get(url)
        sleep(sleep_seconds)
        png = self.driver.get_screenshot_as_png()
        self.stop()
        return png

if __name__ == "__main__":
    import sys
    s = Screenshot()
    s.sshot(sys.argv[1], sys.argv[2])
