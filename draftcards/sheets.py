#!/usr/bin/env python
# Licensed under the Apache 2.0 License. See Apache-2.0
# Copyright 2017 Google Inc.
# Copyright 2017 Jonas Häggqvist
import httplib2
import os

from apiclient import discovery
from oauth2client import client
from oauth2client import tools
from oauth2client.file import Storage


# If modifying these scopes, delete your previously saved credentials
# at ~/.credentials/sheets.googleapis.com-python-quickstart.json
SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly'
CLIENT_SECRET_FILE = 'google_client_secret.json'
APPLICATION_NAME = 'rnfl draft cards'


class GoogleSheetsData:
    discovery_url = 'https://sheets.googleapis.com/$discovery/rest?version=v4'

    def __init__(self, sheet_id, parseargs=True):
        self.sheet_id = sheet_id
        self.flags = None
        if parseargs:
            try:
                import argparse
                self.flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
            except ImportError:
                pass


    def get_credentials(self):
        """Gets valid user credentials from storage.

        If nothing has been stored, or if the stored credentials are invalid,
        the OAuth2 flow is completed to obtain the new credentials.

        Returns:
            Credentials, the obtained credential.
        """
        home_dir = os.path.expanduser('~')
        credential_dir = os.path.join(home_dir, '.credentials')
        if not os.path.exists(credential_dir):
            os.makedirs(credential_dir)
        credential_path = os.path.join(credential_dir,
                                       'sheets.googleapis.com-python-quickstart.json')

        store = Storage(credential_path)
        credentials = store.get()
        if not credentials or credentials.invalid:
            flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
            flow.user_agent = APPLICATION_NAME
            if self.flags:
                credentials = tools.run_flow(flow, store, self.flags)
            else: # Needed only for compatibility with Python 2.6
                credentials = tools.run(flow, store)
            print('Storing credentials to ' + credential_path)
        return credentials

    def get_range(self, range_def):
        """Shows basic usage of the Sheets API.

        Creates a Sheets API service object and prints the names and majors of
        students in a sample spreadsheet:
        https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
        """
        credentials = self.get_credentials()
        http = credentials.authorize(httplib2.Http())
        service = discovery.build('sheets', 'v4', http=http,
                                  discoveryServiceUrl=self.discovery_url)

        result = service.spreadsheets().values().get(
            spreadsheetId=self.sheet_id, range=range_def).execute()
        return result.get('values', [])

    def get_range_dict(self, range_def):
        values = self.get_range(range_def)
        if len(values) > 1:
            header = values[0]
            values = values[1:]
            return [dict(zip(header, v)) for v in values]


if __name__ == '__main__':
    from pprint import pprint
    import sys
    pprint(sys.argv)
    sheet_id = sys.argv.pop(1)
    range_def = sys.argv.pop(1)
    gs = GoogleSheetsData(sheet_id)
    pprint(gs.get_range_dict(range_def))

