declare module "TikTok-Search" {
    namespace TikTok {
        import { Readable } from "stream";

        interface VideoData {
            id: string;
            title: string;
            description:string;
            url: string;
            embedURL: string;
            thumbnail: {
                url: string;
                size: {
                    width: string;
                    height: string;
                }
            };
            country: string;
            streamURL: string | null;
            streams: string[]
            videoDetails: { 
                width: number;
                height: number;
                ratio: number;
                duration: number;
            };
            duration: number;
            covers: string[];
            comments: number;
            views: number;
            createTime: string;
            digg: number;
            shares: number;
            author: {
                verified: boolean;
                secUid: string;
                username: string;
                id: string;
                displayName: string;
                covers: string[];
                profile: string;
                followers: number;
                hearts: string;
            };
            challenge: {
                id: string | null;
                name: string | null;
            };
            music: {
                id: string;
                name: string;
                author: string;
                covers: string[]
            };
            keywords: string[]
        }

        interface UserData {
            id: string;
            username: string;
            displayName: string;
            title: string;
            description: string;
            profile: string;
            avatars: {
                thumbnail: string;
                medium: string;
            };
            signature: string;
            verified: boolean;
            private: boolean;
            secUid: string;
            following: number;
            followers: number;
            hearts: string;
            videos: number;
            digg: number;
        }

        interface EmbedData {
            version: string;
            type: string;
            title: string;
            author: {
                username: string;
                profile: string;
            },
            scale: { 
                width: string; 
                height: string;
            },
            html: string;
            thumbnail: {
                url: string;
                height: number;
                width: number;
            },
            provider: { 
                name: string; 
                url: string;
            }
        }

        /**
         * Validates TikTok url
         * @param url TikTok url to validate
         */
        function validateURL(url: string): boolean;

        /**
         * Returns TikTok video info.
         * @param url TikTok video url
         */
        function getInfo(url: string): Promise<VideoData> | null;

        /**
         * Returns TikTok user data
         * @param username TikTok Username
         */
        function getUser(username: string): Promise<UserData> | null;

        /**
         * Parses embed data of a TikTok video
         * @param url TikTok Video Embed URL
         */
        function getEmbed(url: string): Promise<EmbedData> | null;

        /**
         * Returns Readable Stream of a TikTok Video.
         * @param url TikTok video url
         */
        function download(url: string): Promise<Readable>;

    }

    export = TikTok;
}