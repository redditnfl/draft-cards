#!/usr/bin/env python

import json
import os

import twitter

CREDENTIAL_FILE = "twitter_client_secret.json"


class Tweeter:

    def __init__(self, client_secret_file=None, credentials_file=None):
        if client_secret_file is None:
            client_secret_file = CREDENTIAL_FILE
        client_secret = json.load(open(client_secret_file))
        if credentials_file is None:
            credentials_file = os.path.expanduser('~/.credentials/twitter_credentials')
        if not os.path.exists(credentials_file):
            twitter.oauth_dance("/r/nfl draft cards", client_secret['consumer_key'], client_secret['consumer_secret'],
                                credentials_file)
        oauth_token, oauth_secret = twitter.read_token_file(credentials_file)
        self.auth = twitter.OAuth(oauth_token, oauth_secret, client_secret['consumer_key'],
                                  client_secret['consumer_secret'])
        self.api = twitter.Twitter(auth=self.auth, retry=True)
        self.upload = twitter.Twitter(domain='upload.twitter.com', auth=self.auth, retry=True)

    def tweet(self, status: str, imagedata: bytes = None) -> None:
        image_ids = []
        if imagedata is not None:
            image = self.upload.media.upload(media=imagedata)
            image_ids.append(image["media_id_string"])
        self.api.statuses.update(status=status, media_ids=",".join(image_ids))


if __name__ == '__main__':
    import sys
    t = Tweeter()
    imagedata = None
    if len(sys.argv) > 2:
        with open(sys.argv[2], 'rb') as fp:
            imagedata = fp.read()

    t.tweet(sys.argv[1], imagedata)
