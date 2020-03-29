#!/usr/bin/env python3
import asyncio
from pyppeteer import launch
from asyncio import sleep

class Screenshot:
    @classmethod
    async def create(cls):
        self = cls()
        # Need to disable signal handling or things blow up
        self.browser = await launch(handleSIGINT=False, handleSIGTERM=False, handleSIGHUP=False, defaultViewport=None)
        self.page = await self.browser.newPage()
        await self.page.setViewport({'width': 1, 'height': 1})
        return self
    
    async def sshot_url_to_png(self, url, sleep_seconds=0.0):
        await self.page.goto(url)
        await sleep(sleep_seconds)
        return await self.page.screenshot(fullPage=True, omitBackground=True)

    async def close(self):
        await self.browser.close()

async def main():
    import sys
    s = await Screenshot.create()
    png = await s.sshot_url_to_png(sys.argv[1])
    with open(sys.argv[2], 'wb') as fp:
        fp.write(png)
    await s.close()

if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(main())
