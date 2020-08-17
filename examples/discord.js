/*
This is a basic example on playing tiktok videos over discord.
For this, you need to install FFmpeg, discord.js & @discordjs/opus.
*/

const Discord = require("discord.js");
const client = new Discord.Client();
const TikTok = require("tiktok-search");

client.on("ready", () => {
    console.log("Bot is online!");
});

client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    const prefix = "!";
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        if (!message.member.voice.channel) return message.reply("Join a voice channel!");
        const song = args[0];
        if (!TikTok.validateURL(song)) return message.channel.send("Provide a valid tiktok url.");

        const video = await TikTok.getInfo(song);
        if (!video) return message.channel.send("Invalid url.");

        const stream = await TikTok.download(song);

        message.member.voice.channel.join()
            .then(connection => {
                connection.play(stream)
                    .on("start", () => {
                        message.channel.send(`Started playing **${video.title}**.`);
                    })
                    .on("finish", () => {
                        message.guild.me.voice.channel.leave();
                        message.channel.send("Song ended!");
                    })
            });
    }
});

client.login("SOME_REAL_TOKEN");