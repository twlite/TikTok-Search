const TikTok = require("../index.js");
const https = require("https");
const fs = require("fs");

TikTok.getInfo("https://vm.tiktok.com/ZMJrea3bs/")
    .then(i => {
        https.get(i.streamURL, res => {
            res.pipe(fs.createWriteStream("./TikTok.mp4"));
        });
    });