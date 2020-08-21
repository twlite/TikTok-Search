# TikTok Search
Simple module to fetch data from TikTok.

# Installing

```sh
npm install tiktok-search
```

# Getting Started
- Fetch song data

```js
const TikTok = require("tiktok-search");

TikTok.getInfo("https://www.tiktok.com/@scout2015/video/6718335390845095173")
.then(console.log);

```

# API
## getInfo(video_url)
Returns video info.

## getUser(username)
Returns User info.

## getEmbed(embedURL)
Returns embed data.

## validateURL(url)
Validates TikTok url.

# Example
## Downloading TikTok Video

```js
const TikTok = require("tiktok-search");
const fs = require("fs");

TikTok.download("https://vm.tiktok.com/ZMJrea3bs/")
    .then(res => {
        res.pipe(fs.createWriteStream(`./song.mp4`));
    });

```

# Responses
## Song Info

```js
{
  id: '6718335390845095173',
  title: 'Scout and Suki on TikTok',
  description: 'Scramble up ur name & I’ll try to guess it�❤️ #foryoupage #petsoftiktok #aesthetic',
  url: 'https://www.tiktok.com/@scout2015/video/6718335390845095173',
  embedURL: 'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173',
  thumbnail: {
    url: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/06kv6rfcesljdjr45ukb0000d844090v0200000a05?x-expires=1597762800&x-signature=7tCHAFoBKVNGGQ6nUtVIar8LVcM%3D',
    size: { width: 720, height: 1280 }
  },
  country: 'NP',
  streamURL: 'https://v16m.tiktokcdn.com/6faf787cbfcd5c681717b08adf975e5e/5f3bfa67/video/tos/useast2a/tos-useast2a-ve-0068/15fbafb086324317bf77a649580b1f95/?a=1233&br=4778&bt=2389&cr=0&cs=0&dr=0&ds=3&er=&l=2020081615572701011511924012B98AD5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M245aWhvZ3U4bjMzZzczM0ApOTtmOzdoaDtnNzM5aTo1ZGczc29gcGdnMXJfLS01MTZzczI2L2FiLWFeLzI0MmJhYV86Yw%3D%3D&vl=&vr=',   
  streams: [
    'https://v16m.tiktokcdn.com/6faf787cbfcd5c681717b08adf975e5e/5f3bfa67/video/tos/useast2a/tos-useast2a-ve-0068/15fbafb086324317bf77a649580b1f95/?a=1233&br=4778&bt=2389&cr=0&cs=0&dr=0&ds=3&er=&l=2020081615572701011511924012B98AD5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M245aWhvZ3U4bjMzZzczM0ApOTtmOzdoaDtnNzM5aTo1ZGczc29gcGdnMXJfLS01MTZzczI2L2FiLWFeLzI0MmJhYV86Yw%3D%3D&vl=&vr='
  ],
  videoDetails: { width: 720, height: 1280, ratio: 10, duration: 10 },
  duration: 10000,
  covers: [
    'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/06kv6rfcesljdjr45ukb0000d844090v0200000a05?x-expires=1597762800&x-signature=7tCHAFoBKVNGGQ6nUtVIar8LVcM%3D'
  ],
  comments: 8996,
  views: 144200,
  createTime: '1564234358',
  digg: 33700,
  shares: 796,
  author: {
    verified: true,
    secUid: 'MS4wLjABAAAAPZWNdkF_cmVSPCvV0Y6MCsH29mlAOlMOX3ikzGvlfMm3K6OMZv-JrRImpEHxdIMI',
    username: 'scout2015',
    id: '53279706535428096',
    displayName: 'Scout and Suki',
    covers: [
      'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/3c3deb8e39fe38fd856147bc5c598ba9~c5_100x100.jpeg',
      'https://p16-tiktok-va-h2.ibyteimg.com/img/musically-maliva-obj/3c3deb8e39fe38fd856147bc5c598ba9~c5_100x100.jpeg'
    ],
    profile: 'https://www.tiktok.com/@scout2015',
    followers: 3700000,
    hearts: '54800000'
  },
  challenge: { id: null, name: null },
  music: {
    id: '6689804660171082501',
    name: 'original sound',
    author: '�������',
    covers: [
      'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/adf0c5e7b9ee237c29c4350fa892167a~c5_100x100.jpeg',
      'https://p16-tiktok-va-h2.ibyteimg.com/img/musically-maliva-obj/adf0c5e7b9ee237c29c4350fa892167a~c5_100x100.jpeg'
    ]
  },
  keywords: [
    'Scout and Suki', 'scout2015',
    'foryoupage',     'PetsOfTikTok',
    'aesthetic',      'bonevoyage',
    'TikTok',         'ティックトック',
    'tik tok',        'tick tock',
    'tic tok',        'tic toc',
    'tictok',         'тик ток',
    'ticktock'
  ]
}

```

## Embed

```js
{
  version: '1.0',
  type: 'video',
  title: 'Scramble up ur name & I’ll try to guess it�❤️ #foryoupage #petsoftiktok #aesthetic',
  author: {
    username: 'Scout and Suki',
    profile: 'https://www.tiktok.com/@scout2015'
  },
  scale: { width: '100%', height: '100%' },
  html: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@scout2015/video/6718335390845095173" data-video-id="6718335390845095173" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@scout2015" href="https://www.tiktok.com/@scout2015">@scout2015</a> <p>Scramble up ur name & I’ll try to guess it�❤️ <a title="foryoupage" target="_blank" href="https://www.tiktok.com/tag/foryoupage">#foryoupage</a> <a title="PetsOfTikTok" target="_blank" href="https://www.tiktok.com/tag/PetsOfTikTok">#petsoftiktok</a> <a title="aesthetic" target="_blank" href="https://www.tiktok.com/tag/aesthetic">#aesthetic</a></p> <a target="_blank" title="♬ original sound - �������" href="https://www.tiktok.com/music/original-sound-6689804660171082501">♬ original sound - �������</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
  thumbnail: {
    url: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/06kv6rfcesljdjr45ukb0000d844090v0200000a05?x-expires=1597762800&x-signature=7tCHAFoBKVNGGQ6nUtVIar8LVcM%3D',
    height: 1280,
    width: 720
  },
  provider: { name: 'TikTok', url: 'https://www.tiktok.com' }
}

```

# User Profile

```js
{
  id: '53279706535428096',
  username: 'scout2015',
  displayName: 'Scout and Suki',
  title: 'Scout and Suki on TikTok',
  description: '@scout2015 3.0m Followers, 1168 Following, 54.0m Likes - Watch awesome short videos created by Scout and Suki',
  profile: 'https://www.tiktok.com/@scout2015?lang=en',
  avatars: {
    thumbnail: 'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/3c3deb8e39fe38fd856147bc5c598ba9~c5_100x100.jpeg',
    medium: 'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/3c3deb8e39fe38fd856147bc5c598ba9~c5_720x720.jpeg'
  },
  signature: '�3.0M Pawsitive Pack Memebers�\n' +
    '� @julyjackplayz �\n' +
    '��50% off pet plate��',
  verified: true,
  private: false,
  secUid: 'MS4wLjABAAAAPZWNdkF_cmVSPCvV0Y6MCsH29mlAOlMOX3ikzGvlfMm3K6OMZv-JrRImpEHxdIMI',
  following: 1168,
  followers: 3700000,
  hearts: '54800000',
  videos: 1644,
  digg: 0
}

```

# Join my discord
**[https://discord.gg/2SUybzb](https://discord.gg/2SUybzb)**