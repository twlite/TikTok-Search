const TikTok = require("../index.js");
const fs = require("fs");

TikTok.download("https://www.tiktok.com/@twinny__girls/video/6861609989497277697")
.then(stream => stream.pipe(fs.createWriteStream("./TikTok.mp4")));