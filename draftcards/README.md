# draftcards
Tool to generate "draft cards" for players in the draft.

The process goes like this:

* Data is grabbed from Google Sheets
* HTML card is generated for each player using a Jinja2 template
* HTML card is "converted" to PNG using Selenium/PhantomJS

# Setup

1. Setup a Google Sheets client as explained in Step 1 in [Google's Python Quickstart](https://developers.google.com/sheets/api/quickstart/python)
2. Store the downloaded `client_secret.json` next to `draftcard.py` as `google_client_secret.json`
3. Register an application with [imgur](http://api.imgur.com/#registerapp)
4. Store your imgur application credentials in `imgur_client_secret.json` as JSON in the form `{"client_id": "...", "client_secret": "..."}`
3. Install [PhantomJS](http://phantomjs.org/). On Debian Unstable at least, you can simply `sudo apt-get install phantomjs`.
4. `pip install -f requirements.txt`

# Running

1. Find the sheet ID of the sheet containing player data. This will be in the URL when viewing the sheet. Looks like `1M9MBMYlxmDrqFaqCruGCJzj0Zgn2qn89nUv2K4qMrnw`
2. Find the range on the sheet that contains the data. Something like Sheet1!A1:P
3. Execute: `python draftcard.py sheetid range_def templatefile`
    * Example: `python draftcard.py "1M9MBMYlxmDrqFaqCruGCJzj0Zgn2qn89nUv2K4qMrnw" 'Sheet1!A1:P' dummy_card.html`
