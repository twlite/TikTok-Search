const TikTok = require("../index.js");
const fs = require("fs");

TikTok.download("TIKTOK_VIDEO_URL")
    .then(stream => stream.pipe(fs.createWriteStream("./TikTok.mp4")));