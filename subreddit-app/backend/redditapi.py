CLIENT_ID = 'WuGZuo8Ri5BhDfFWM-KNVw'
SECRET_KEY = 'Lpn063Fjuhx71jYE9ouVFTzUEMVA4A'

import requests
import pandas as pd
from datetime import datetime

# build a dataframe containing basic info about the post
def df_from_response(res):
    df = pd.DataFrame()

    for post in res.json()['data']['children']:
        df = df.append({
            'title': post['data']['title'],
            'author': post['data']['author'],
            'selftext': post['data']['selftext'],
            'upvote_ratio': post['data']['upvote_ratio'],
            'ups': post['data']['ups'],
            'downs': post['data']['downs'],
            'score': post['data']['score'],
            'created_utc': datetime.fromtimestamp(post['data']['created_utc']).strftime('%Y-%m-%dT%H:%M:%S'),
            'id': post['data']['id']
        }, ignore_index=True)

    return df

# authenticate API
auth = requests.auth.HTTPBasicAuth(CLIENT_ID, SECRET_KEY)

#with open('pw.txt', 'r') as file:
#    pw = file.read()

data = {
    'grant_type': 'password',
    'username': 'ApprehensiveOne4579',
    'password': 'RedditCOMP523'
}

headers = {'User-Agent': 'cReddit Hours'}

res = requests.post('https://www.reddit.com/api/v1/access_token',
                                        auth=auth, data=data, headers=headers)

TOKEN = res.json()['access_token']

headers = {**headers, **{'Authorization': f'bearer {TOKEN}'}}

requests.get('https://oauth.reddit.com/api/v1/me', headers=headers)
res = requests.get("https://oauth.reddit.com/r/unc/",
                   headers=headers,
                   params={'limit': '5'})

df = df_from_response(res)
json_str = df.to_json(orient="records")
print(json_str)