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
        title: "艾諾拉",
        description: "来自布鲁克林的年轻性工作者安妮在一次偶然中与俄罗斯寡头之子相爱并仓促结婚，美梦刚刚开始，便遭到男方父母强行介入，誓要撤销这段婚姻。",
        releaseDate: "2024-11-08",
        backdropPath: "/tG8QWDASd8rw0JxkDN2MDDWLEse.jpg",
        posterPath: "/zt3iRbwMklKGDGx13nHt8b5Y0uT.jpg",
        rating: 7.4,
        mediaType: "movie",
        genreTitle: "🏆 最佳影片得主 · 🏆 最佳导演 · 🏆 最佳原创剧本 · 🏆 最佳剪辑 · 🏆 最佳女主角 · 提名最佳男配角"
    },
    {
        id: 549509,
        type: "tmdb",
        title: "粗獷派建築師",
        description: "二战后，匈牙利裔犹太建筑师拉斯洛·托特逃离欧洲来到美国，在一位富有的赞助人的支持下重建自己的声誉，却付出了沉重代价。",
        releaseDate: "2024-12-20",
        backdropPath: "/hmZnqijPaaACjenDkrbWcCmcADI.jpg",
        posterPath: "/3WQrtiehbZhIpHl9nWBTB4FTNQ8.jpg",
        rating: 7.6,
        mediaType: "movie",
        genreTitle: "🏆 最佳男主角 · 🏆 最佳原創音樂獎 · 🏆 最佳攝影 · 提名最佳影片 · 提名最佳導演 · 提名最佳男配角 · 提名最佳女配角 · 提名最佳原创剧本 · 提名最佳製作設計 · 提名最佳電影剪輯"
    },
    {
        id: 661539,
        type: "tmdb",
        title: "巴布狄倫：搖滾詩人",
        description: "1960年代初，19岁的鲍勃·迪伦带着吉他闯荡纽约西村，在民谣音乐浪潮中以惊人天赋改写美国音乐史。",
        releaseDate: "2024-12-25",
        backdropPath: "/kcCy5tKTe6WepVQ6SQaSewpmoCj.jpg",
        posterPath: "/cxh4GcerxbMMPcouD8RPn6xB3Ue.jpg",
        rating: 7.3,
        mediaType: "movie",
        genreTitle: "提名最佳影片 · 提名最佳男主角 · 提名最佳導演 · 提名最佳男配角· 提名最佳女配角 · 提名最佳改編劇本 · 提名最佳音效 · 提名最佳服裝設計"
    },
    {
        id: 974576,
        type: "tmdb",
        title: "秘密會議",
        description: "教宗突然驾崩，枢机主教劳伦斯受命主持秘密选举会议。在梵蒂冈封闭的高墙内，他发现自己身陷一场足以颠覆教会的阴谋。",
        releaseDate: "2024-10-25",
        backdropPath: "/nmJUojmm9ltxvz9jQagYFdfQIde.jpg",
        posterPath: "/1BWhKsbUTiBD0WQhrOfQlU6zrc5.jpg",
        rating: 7.3,
        mediaType: "movie",
        genreTitle: "🏆 最佳改编剧本 · 提名最佳影片 · 提名最佳男主角 · 提名最佳女配角 · 提名最佳原創配樂 · 提名最佳製作設計 · 提名最佳服裝設計 · 提名最佳電影剪輯"
    },
    {
        id: 974950,
        type: "tmdb",
        title: "璀璨女人夢",
        description: "一名才华横溢却默默无闻的律师，被一个墨西哥毒枭雇佣，协助其悄然改变身份，展开一段充满危险与救赎的旅程。",
        releaseDate: "2024-08-07",
        backdropPath: "/u2eA9pqi1q3DvevT7RuDuJHxxBT.jpg",
        posterPath: "/3xdTTo6YbRjw0uXBKx3j8k50WF2.jpg",
        rating: 7.0,
        mediaType: "movie",
        genreTitle: "🏆 最佳女配角 · 🏆 最佳原創歌曲 · 提名最佳影片 · 提名最佳導演 · 提名最佳女主角 · 提名最佳改編劇本 · 提名最佳國際影片 · 提名最佳原創配樂 · 提名最佳原創歌曲 · 提名最佳音效 · 提名最佳攝影 · 提名最佳化妝和髮型設計 · 提名最佳電影剪輯"
    },
    {
        id: 1000837,
        type: "tmdb",
        title: "我依然在此",
        description: "1971年巴西军事独裁时期，尤妮斯·帕依瓦的丈夫被当局带走后神秘失踪，她凭借坚定意志独自撑起家庭，并投身人权事业。",
        releaseDate: "2024-11-07",
        backdropPath: "/x0pkoGlwWdkzRxgQioD3cUG0awu.jpg",
        posterPath: "/xudy9TKevYOFVJYIwOtkRKC4ZJb.jpg",
        rating: 8.1,
        mediaType: "movie",
        genreTitle: "🏆 最佳国际电影 · 提名最佳影片 · 提名最佳女主角"
    },
    {
        id: 1028196,
        type: "tmdb",
        title: "尼克男孩",
        description: "1960年代佛罗里达，两名黑人少年在严酷的感化院中结下深厚友谊，共同面对种族歧视与制度暴力。",
        releaseDate: "2024-10-25",
        backdropPath: "/kmLssINCNdXnIDjWkBsk6LUNSbe.jpg",
        posterPath: "/gnkMWAJRwEI4D8akYjrqEtnelM7.jpg",
        rating: 6.8,
        mediaType: "movie",
        genreTitle: "提名最佳影片 · 提名最佳改編劇本"
    },
    {
        id: 933260,
        type: "tmdb",
        title: "懼裂",
        description: "一位渐渐淡出的女明星使用黑市药物，创造出一个更年轻的自我，但两个身份之间的角力将走向失控。",
        releaseDate: "2024-09-20",
        backdropPath: "/9Whl7RAzes0oMaFAeSqD8ttN3fl.jpg",
        posterPath: "/oDDYHINnemOisgswvLU0EZuHLFH.jpg",
        rating: 7.3,
        mediaType: "movie",
        genreTitle: "🏆 最佳化妆与发型设计 · 提名最佳影片 · 提名最佳導演 · 提名最佳女主角 · 提名最佳原创剧本"
    },
    {
        id: 402431,
        type: "tmdb",
        title: "魔法壞女巫",
        description: "在翡翠城，天生绿皮肤的艾菲与人气十足的白富美葛琳达意外成为室友，命运将她们推向截然不同的道路。",
        releaseDate: "2024-11-22",
        backdropPath: "/uVlUu174iiKhsUGqnOSy46eIIMU.jpg",
        posterPath: "/rufGJNaU6zY0CeCnxYlRe8qYMA4.jpg",
        rating: 7.2,
        mediaType: "movie",
        genreTitle: "🏆 最佳服装设计 · 🏆 最佳布景设计 · 提名最佳影片"
    },
    {
        id: 693134,
        type: "tmdb",
        title: "沙丘：第二部",
        description: "保罗·厄崔迪与恰尼及弗雷曼人并肩作战，踏上复仇之路，却不得不在爱情与整个宇宙的命运之间做出抉择。",
        releaseDate: "2024-03-01",
        backdropPath: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        posterPath: "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
        rating: 8.0,
        mediaType: "movie",
        genreTitle: "🏆 最佳音效 · 🏆 最佳視覺效果 · 提名最佳影片 · 最佳製作設計 · 最佳最佳攝影"
    },
    {
        id: 823219,
        type: "tmdb",
        title: "喵的奇幻漂流",
        description: "水灾后一只小猫独自求生，在被遗弃的世界中与卷尾猴、狗、苍鹭结伴，踏上求生之旅。拉脱维亚独立动画，Blender 制作。",
        releaseDate: "2024-08-30",
        backdropPath: "/4XPNNt0zfZKBqxxVWaQALd57UHl.jpg",
        posterPath: "/tn89woD33WgLgT7ZMUr1r47hnql.jpg",
        rating: 8.3,
        mediaType: "movie",
        genreTitle: "🏆 最佳动画长片 · 提名最佳国际电影"
    },
    {
        id: 1184918,
        type: "tmdb",
        title: "荒野機器人",
        description: "机器人 ROZZUM-7134 搁浅荒岛，被迫适应自然，意外成为孤雁雏鸟的养母。梦工厂年度最佳。",
        releaseDate: "2024-09-27",
        backdropPath: "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
        posterPath: "/gzq36QVwlXpkHWTQ4ob0Kb1C50i.jpg",
        rating: 8.1,
        mediaType: "movie",
        genreTitle: "提名最佳动画长片 · 提名最佳原创配乐 · 最佳音效"
    },
    {
        id: 1064486,
        type: "tmdb",
        title: "蝸牛少女回憶錄",
        description: "一只澳大利亚蜗牛在生命旅途中收集各种奇异物件，以幽默荒诞的视角探索失去与成长。",
        releaseDate: "2024-10-18",
        backdropPath: "/jl2YIADk391yc6Qjy9JhgCRkHJk.jpg",
        posterPath: "/zdT6W5XupFEiK1CQR1KVGjprJ57.jpg",
        rating: 7.3,
        mediaType: "movie",
        genreTitle: "提名最佳动画长片"
    },
    {
        id: 1022789,
        type: "tmdb",
        title: "腦筋急轉彎2",
        description: "茵茵升入高中，控制台迎来全新情绪：焦焦、羡慕、无聊、怀旧……旧情绪们的位置岌岌可危。",
        releaseDate: "2024-06-14",
        backdropPath: "/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
        posterPath: "/gK3jUOpCRlL6uGPhN8PcARt8MZn.jpg",
        rating: 7.6,
        mediaType: "movie",
        genreTitle: "提名最佳动画长片"
    },
    {
        id: 929204,
        type: "tmdb",
        title: "酷狗寶貝之復仇企鵝",
        description: "华莱士与格罗米特再度携手，面对发明家陈年积怨引发的奇幻危机。",
        releaseDate: "2024-12-20",
        backdropPath: "/kO8auxMzNXrs4YqHdD08lefXIUV.jpg",
        posterPath: "/hk6ErVnVyixOYv5WyzvTZP1ckCP.jpg",
        rating: 7.7,
        mediaType: "movie",
        genreTitle: "提名最佳动画长片"
    },
    {
        id: 1278263,
        type: "tmdb",
        title: "一念菩提",
        description: "孟买两名护士与年迈同事返回家乡，各自直面内心孤独与渴望。印度首部入围戛纳主竞赛单元的影片。",
        releaseDate: "2025-06-26",
        backdropPath: "/zqZzYVE4DWv92xrYSCEELPcLnUP.jpg",
        posterPath: "/kLr6gSHkQYAj1RKhiaNkMBp4Dy5.jpg",
        rating: 7.7,
        mediaType: "movie",
        genreTitle: "提名最佳动画长片"
    },
    {
        id: 1232827,
        type: "tmdb",
        title: "帶針的女孩",
        description: "德黑兰一名法官在2022年伊朗抗议浪潮中，与家人之间的裂缝逐渐扩大。伊朗导演穆罕默德·拉素罗夫作品。",
        releaseDate: "2025-01-23",
        backdropPath: "/uwACVNL5OpiI3oT72DVGxnU4SRV.jpg",
        posterPath: "/lSpGVC00eSWKrnAXUQqyQlcSDxC.jpg",
        rating: 7.7,
        mediaType: "movie",
        genreTitle: "提名最佳动画长片"
    }
];

// -------------------------------------------------------
// 模块1：最佳影片（10部）
// -------------------------------------------------------
async function 97th OSCARS(params = {}) {
    return 97th OSCARS;
}
