const fetch = require("node-fetch");
const cheerio = require("cheerio");
const USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3738.0 Safari/537.36";
const REGEX = /^https?:\/\/(www\.|vm\.)?(tiktok\.com)\/?(.*)$/;

class Util {

    /**
     * Parses plain html of a given url
     * @param {string} url Input url
     * @returns {Promise<string>}
     */
    static async html(url) {
        try {
            let res = await fetch(url, {
                headers: {
                    "User-Agent": USER_AGENT
                }
            });
            let plainText = await res.text();
            return plainText;
        } catch(e) {
            return "";
        }
    }

    /**
     * JQuery
     * @param {string} html Input html
     */
    static getDocument(html) {
        return cheerio.load(html);
    }

    /**
     * Parses tiktok video details
     * @param {string} raw raw data
     */
    static parseVideoData(raw) {
        if (!raw) return null;
        try {
            const data = JSON.parse(raw);
            const BASE = data.props.initialProps;
            const author = data.props.pageProps.videoData.authorInfos;
            const authorStats = data.props.pageProps.videoData.authorStats;
            const music = data.props.pageProps.videoData.musicInfos;

            const obj = {
                id: data.props.pageProps.videoData.itemInfos.id,
                title: data.props.pageProps.shareMeta.title,
                description: data.props.pageProps.shareMeta.desc,
                url: `https://${BASE["$host"]}${BASE["$pageUrl"]}`,
                embedURL: `https://www.tiktok.com/oembed?url=https://${BASE["$host"]}${BASE["$pageUrl"]}`,
                thumbnail: {
                    url: data.props.pageProps.shareMeta.image.url,
                    size: {
                        width: data.props.pageProps.shareMeta.image.width,
                        height: data.props.pageProps.shareMeta.image.height
                    }
                },
                country: BASE["$region"],
                streamURL: data.props.pageProps.videoData.itemInfos.video.urls[0] || null,
                streams: data.props.pageProps.videoData.itemInfos.video.urls,
                videoDetails: data.props.pageProps.videoData.itemInfos.video.videoMeta,
                duration: data.props.pageProps.videoData.itemInfos.video.videoMeta.duration * 1000,
                covers: data.props.pageProps.videoData.itemInfos.covers,
                comments: data.props.pageProps.videoData.itemInfos.commentCount,
                views: data.props.pageProps.videoData.itemInfos.playCount,
                createTime: data.props.pageProps.videoData.itemInfos.createTime,
                digg: data.props.pageProps.videoData.itemInfos.diggCount,
                shares: data.props.pageProps.videoData.itemInfos.shareCount,
                author: {
                    verified: author.verified,
                    secUid: author.secUid,
                    username: author.uniqueId,
                    id: author.userId,
                    displayName: author.nickName,
                    covers: author.covers,
                    profile: `https://${BASE["$host"]}/@${author.uniqueId}`,
                    followers: authorStats.followerCount,
                    hearts: authorStats.heartCount
                },
                challenge: {
                    id: data.props.pageProps.videoData.challengeInfoList.challengeId || null,
                    name: data.props.pageProps.videoData.challengeInfoList.challengeName || null
                },
                music: {
                    id: music.musicId,
                    name: music.musicName,
                    author: music.authorName,
                    covers: music.covers
                },
                keywords: data.props.pageProps.metaParams.keywords.split(",").map(m => m.trim())
            };

            return obj;

        } catch(e) {
            return null;
        }
    }

    static parseUserData(raw) {
        if (!raw) return null;
        try {
            const data = JSON.parse(raw);
            const BASE = data.props.pageProps;

            const obj = {
                id: BASE.userInfo.user.id,
                username: BASE.uniqueId,
                displayName: BASE.userInfo.user.nickname,
                title: BASE.shareMeta.title,
                description: BASE.shareMeta.desc,
                profile: BASE.metaParams.canonicalHref,
                avatars: {
                    thumbnail: BASE.userInfo.user.avatarThumb,
                    medium: BASE.userInfo.user.avatarMedium
                },
                signature: BASE.userInfo.user.signature,
                verified: BASE.userInfo.user.verified,
                private: BASE.userInfo.user.secret,
                secUid: BASE.userInfo.user.secUid,
                following: BASE.userInfo.stats.followingCount,
                followers: BASE.userInfo.stats.followerCount,
                hearts: BASE.userInfo.stats.heartCount,
                videos: BASE.userInfo.stats.videoCount,
                digg: BASE.userInfo.stats.diggCount,
            };

            return obj;

        } catch (e) {
            return null;
        }
    }

    /**
     * Parses embed
     * @param {string} url Embed url to parse
     */
    static async parseEmbed(url) {
        try {
            let data = await fetch(url);
            let res = await data.json();

            let obj = {
                version: res.version,
                type: res.type,
                title: res.title,
                author: {
                    username: res.author_name,
                    profile: res.author_url
                },
                scale: {
                    width: res.width,
                    height: res.height
                },
                html: res.html,
                thumbnail: {
                    url: res.thumbnail_url,
                    height: res.thumbnail_height,
                    width: res.thumbnail_width
                },
                provider: {
                    name: res.provider_name,
                    url: res.provider_url
                }
            };

            return obj;
        } catch(e) {
            return null;
        }
    }

    /**
     * Validates TikTok URL
     * @param {string} url url to validate
     */
    static validate(url) {
        if (!url || typeof url !== "string") return false;
        return REGEX.test(url);
    }

}

module.exports = Util;