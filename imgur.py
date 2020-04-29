#!/usr/bin/env python
import time
import json
from imgurpython import ImgurClient
import os.path
import webbrowser
from imgurpython.helpers.error import ImgurClientRateLimitError, ImgurClientError
from requests.exceptions import ConnectionError, ConnectTimeout
import traceback

CREDENTIALS_FILE = 'imgur_client_secret.json'

def imgur_retry(f):
    import time
    def decorated(*args, **kwargs):
        while True:
            try:
                return f(*args, **kwargs)
                break
            except ImgurClientRateLimitError as e:
                print("Rate Limit Error, sleeping 5 minutes (%s)" % e)
                time.sleep(300)
            except ImgurClientError as e:
                traceback.print_exc()
                print("Imgur client error, sleeping 2 seconds (%s)" % e)
                time.sleep(2)
            except (ConnectionError, ConnectTimeout) as e:
                print("Connection issue, sleeping 10 seconds (%s)" % e)
                time.sleep(10)
    return decorated


class Imgur:
    def __init__(self):
        with open(CREDENTIALS_FILE, 'r') as fp:
            data = json.load(fp)
        self.client = ImgurClient(data['client_id'], data['client_secret'])
        self.get_credentials()
        self.created_albums = {}

    def get_credentials(self):
        home_dir = os.path.expanduser('~')
        credential_dir = os.path.join(home_dir, '.credentials')
        if not os.path.exists(credential_dir):
            os.makedirs(credential_dir)
        credential_path = os.path.join(credential_dir, 'rnfl-draftcards-imgur.json')

        try:
            with open(credential_path) as fp:
                credentials = json.load(fp)
        except Exception:
            credentials = None
        
        if not credentials:
            authorization_url = self.client.get_auth_url('pin')
            try:
                webbrowser.open_new_tab(authorization_url)
            except Exception:
                print("Go to %s" % authorization_url)
            pin = input('Input PIN: ')
            credentials = self.client.authorize(pin, 'pin')
        with open(credential_path, 'w') as fp:
            json.dump(credentials, fp)
        self.client.set_user_auth(credentials['access_token'], credentials['refresh_token'])

    @imgur_retry
    def get_or_make_album(self, albumtitle):
        if albumtitle not in self.created_albums:
            for album in self.client.get_account_albums('me'):
                if album.title == albumtitle:
                    return album.id
            ret = self.client.create_album({'title': albumtitle})
            self.created_albums[albumtitle] = ret['id']
        return self.created_albums[albumtitle]

    @imgur_retry
    def get_album_images(self, album_id):
        return self.client.get_album_images(album_id)

    @imgur_retry
    def update_album(self, album_id, fields):
        self.client.update_album(album_id, fields)

    @imgur_retry
    def upload(self, path, albumtitle, title=None):
        album_id = self.get_or_make_album(albumtitle)
        config = {'album': album_id}
        if title:
            config['title'] = title
        ret = self.client.upload_from_path(path, config, anon=False)
        return ret

    @imgur_retry
    def upload_url(self, url, albumtitle, title=None):
        album_id = self.get_or_make_album(albumtitle)
        config = {'album': album_id}
        if title:
            config['title'] = title
        ret = self.client.upload_from_url(url, config, anon=False)
        return ret


    @imgur_retry
    def album_add_images(self, album_id, ids, *args, **kwargs):
        return self.client.album_add_images(album_id, ids, *args, **kwargs)


if __name__ == "__main__":
    import sys
    i = Imgur()
    path = sys.argv[1]
    albumtitle = sys.argv[2]
    i.upload(path, albumtitle)

