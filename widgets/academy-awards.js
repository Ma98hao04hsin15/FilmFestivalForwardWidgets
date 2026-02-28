/**
 * @file oscars-97.js
 * @description Forward widget for browsing the 97th Academy Awards (2025) nominees and winners.
 * Data is statically compiled from TMDB. No API key required.
 * @version 1.0.0
 */

WidgetMetadata = {
    id: "oscars",
    title: "oscars靜態模塊",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    description: "TMDB奥斯卡金像奖提名及获奖影片",
    author: "ForwardWidget",
    modules: [
        {
            id: "97th OSCARS",
            title: "第97屆",
            functionName: "97th OSCARS",
            cacheDuration: 86400,
            params: []
        },
        {
            id: "all_nominees",
            title: "全部提名影片",
            functionName: "getAllNominees",
            cacheDuration: 86400,
            params: []
        }
    ]
};

// -------------------------------------------------------
// 97th OSCARS
// 🏆 = 获奖
// -------------------------------------------------------
const 97th OSCARS = [
    {
        id: 1064213,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "🏆 最佳影片得主 · 🏆 最佳导演 · 🏆 最佳原创剧本 · 🏆 最佳剪辑 · 🏆 最佳女主角 · 提名最佳男配角"
    },
    {
        id: 549509,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "🏆 最佳男主角 · 🏆 最佳原創音樂獎 · 🏆 最佳攝影 · 提名最佳影片 · 提名最佳導演 · 提名最佳男配角 · 提名最佳女配角 · 提名最佳原创剧本 · 提名最佳製作設計 · 提名最佳電影剪輯"
    },
    {
        id: 661539,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "提名最佳影片 · 提名最佳男主角 · 提名最佳導演 · 提名最佳男配角· 提名最佳女配角 · 提名最佳改編劇本 · 提名最佳音效 · 提名最佳服裝設計"
    },
    {
        id: 974576,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "🏆 最佳改编剧本 · 提名最佳影片 · 提名最佳男主角 · 提名最佳女配角 · 提名最佳原創配樂 · 提名最佳製作設計 · 提名最佳服裝設計 · 提名最佳電影剪輯"
    },
    {
        id: 974950,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "🏆 最佳女配角 · 🏆 最佳原創歌曲 · 提名最佳影片 · 提名最佳導演 · 提名最佳女主角 · 提名最佳改編劇本 · 提名最佳國際影片 · 提名最佳原創配樂 · 提名最佳原創歌曲 · 提名最佳音效 · 提名最佳攝影 · 提名最佳化妝和髮型設計 · 提名最佳電影剪輯"
    },
    {
        id: 1000837,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "🏆 最佳国际电影 · 提名最佳影片 · 提名最佳女主角"
    },
    {
        id: 1028196,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "提名最佳影片 · 提名最佳改編劇本"
    },
    {
        id: 933260,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "🏆 最佳化妆与发型设计 · 提名最佳影片 · 提名最佳導演 · 提名最佳女主角 · 提名最佳原创剧本"
    },
    {
        id: 402431,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "🏆 最佳服装设计 · 🏆 最佳布景设计 · 提名最佳影片"
    },
    {
        id: 693134,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "🏆 最佳音效 · 🏆 最佳視覺效果 · 提名最佳影片 · 最佳製作設計 · 最佳最佳攝影"
    },
    {
        id: 823219,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "🏆 最佳动画长片 · 提名最佳国际电影"
    },
    {
        id: 1184918,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "提名最佳动画长片 · 提名最佳原创配乐 · 最佳音效"
    },
    {
        id: 1064486,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "提名最佳动画长片"
    },
    {
        id: 1022789,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "提名最佳动画长片"
    },
    {
        id: 929204,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "提名最佳动画长片"
    },
    {
        id: 1278263,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "提名最佳动画长片"
    },
    {
        id: 1232827,
        type: "tmdb",
        mediaType: "movie",
        genreTitle: "提名最佳动画长片"
    }
];

// -------------------------------------------------------
// 模块1：最佳影片（10部）
// -------------------------------------------------------
async function OSCARS(params = {}) {
    return OSCARS;
}
