/**
 * @file oscars-97.js
 * @description Forward widget for browsing the 97th Academy Awards (2025) nominees and winners.
 * Data is statically compiled from TMDB. No API key required.
 * @version 1.0.0
 */

WidgetMetadata = {
    id: "oscars",
    title: "第97届奥斯卡金像奖",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    description: "第97届奥斯卡金像奖（2025）提名及获奖影片，数据来源：TMDB",
    author: "ForwardWidget",
    modules: [
        {
            id: "best_picture",
            title: "🏆 最佳影片",
            functionName: "getBestPicture",
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
// 最佳影片提名（共10部）
// 🏆 = 获奖
// -------------------------------------------------------
const BEST_PICTURE = [
    {
        id: 1064213,
        type: "tmdb",
        title: "阿诺拉",
        description: "来自布鲁克林的年轻性工作者安妮在一次偶然中与俄罗斯寡头之子相爱并仓促结婚，美梦刚刚开始，便遭到男方父母强行介入，誓要撤销这段婚姻。",
        releaseDate: "2024-11-08",
        backdropPath: "/nNmRkaRXqyDiSEE7Y8BWKU7XTBL.jpg",
        posterPath: "/gL8myjGc2qrmKMDIsBBqBCozOFB.jpg",
        rating: 7.4,
        mediaType: "movie",
        genreTitle: "🏆 最佳影片得主 · 最佳导演 · 最佳原创剧本 · 最佳剪辑 · 最佳女主角"
    },
    {
        id: 549509,
        type: "tmdb",
        title: "粗野派",
        description: "二战后，匈牙利裔犹太建筑师拉斯洛·托特逃离欧洲来到美国，在一位富有的赞助人的支持下重建自己的声誉，却付出了沉重代价。",
        releaseDate: "2024-12-20",
        backdropPath: "/rnnibLy2Dq4noopzxiamCytAX4n.jpg",
        posterPath: "/4vDQpRniXiKh0a6VY5nYbLmLGnW.jpg",
        rating: 7.6,
        mediaType: "movie",
        genreTitle: "提名最佳影片 · 🏆 最佳男主角 · 🏆 最佳男配角 · 🏆 最佳摄影"
    },
    {
        id: 661539,
        type: "tmdb",
        title: "无名小卒",
        description: "1960年代初，19岁的鲍勃·迪伦带着吉他闯荡纽约西村，在民谣音乐浪潮中以惊人天赋改写美国音乐史。",
        releaseDate: "2024-12-25",
        backdropPath: "/xDqBNXMzFl5zJqSJBOBSAXKelrm.jpg",
        posterPath: "/rtBGNgJKGEbFoKBrRFhlWTiXblc.jpg",
        rating: 7.3,
        mediaType: "movie",
        genreTitle: "提名最佳影片 · 提名最佳男主角"
    },
    {
        id: 974576,
        type: "tmdb",
        title: "秘密会议",
        description: "教宗突然驾崩，枢机主教劳伦斯受命主持秘密选举会议。在梵蒂冈封闭的高墙内，他发现自己身陷一场足以颠覆教会的阴谋。",
        releaseDate: "2024-10-25",
        backdropPath: "/f2sXlKCwdgBHdXmWRGWPh6kPCDZ.jpg",
        posterPath: "/m9YhOZ0UcMnQLJRvEuYg8Ew2bUD.jpg",
        rating: 7.3,
        mediaType: "movie",
        genreTitle: "提名最佳影片 · 🏆 最佳改编剧本"
    },
    {
        id: 974950,
        type: "tmdb",
        title: "璀璨女人梦",
        description: "一名才华横溢却默默无闻的律师，被一个墨西哥毒枭雇佣，协助其悄然改变身份，展开一段充满危险与救赎的旅程。",
        releaseDate: "2024-08-07",
        backdropPath: "/e7Y8bMkPfJFHNMaUn6TrXCHqHAX.jpg",
        posterPath: "/m5bCbRjcEFD7x4IURHN1OqBYm2k.jpg",
        rating: 7.0,
        mediaType: "movie",
        genreTitle: "提名最佳影片 · 🏆 最佳女配角 · 🏆 最佳国际电影（未获奖） · 领跑13项提名"
    },
    {
        id: 1000837,
        type: "tmdb",
        title: "我仍在此",
        description: "1971年巴西军事独裁时期，尤妮斯·帕依瓦的丈夫被当局带走后神秘失踪，她凭借坚定意志独自撑起家庭，并投身人权事业。",
        releaseDate: "2024-11-07",
        backdropPath: "/5UiB9XYWQZbnbFv0gEgGF3YOLXB.jpg",
        posterPath: "/qdkFSRxLDBnhLCyBsIRCbPHSMCq.jpg",
        rating: 8.1,
        mediaType: "movie",
        genreTitle: "提名最佳影片 · 提名最佳女主角 · 🏆 最佳国际电影（巴西首次获奖）"
    },
    {
        id: 1028196,
        type: "tmdb",
        title: "镍币男孩",
        description: "1960年代佛罗里达，两名黑人少年在严酷的感化院中结下深厚友谊，共同面对种族歧视与制度暴力。",
        releaseDate: "2024-10-25",
        backdropPath: "/x5yEz7TYoB8e1mE3hUhkfqZnFm0.jpg",
        posterPath: "/snfXMCeUz9gkUMeHCG0bDdZqDUT.jpg",
        rating: 6.8,
        mediaType: "movie",
        genreTitle: "提名最佳影片"
    },
    {
        id: 933260,
        type: "tmdb",
        title: "惧裂",
        description: "一位渐渐淡出的女明星使用黑市药物，创造出一个更年轻的自我，但两个身份之间的角力将走向失控。",
        releaseDate: "2024-09-20",
        backdropPath: "/2RlmdvdIMILKNk4a6FCEoNvFLf0.jpg",
        posterPath: "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
        rating: 7.3,
        mediaType: "movie",
        genreTitle: "提名最佳影片 · 🏆 最佳化妆与发型设计"
    },
    {
        id: 402431,
        type: "tmdb",
        title: "魔法坏女巫",
        description: "在翡翠城，天生绿皮肤的艾菲与人气十足的白富美葛琳达意外成为室友，命运将她们推向截然不同的道路。",
        releaseDate: "2024-11-22",
        backdropPath: "/s0HO29gy5VzRNJBHmPm6LYeYz5A.jpg",
        posterPath: "/xAKMj134XHQVNHLC6rWsccLMenG.jpg",
        rating: 7.2,
        mediaType: "movie",
        genreTitle: "提名最佳影片 · 🏆 最佳服装设计 · 🏆 最佳布景设计"
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
        genreTitle: "提名最佳影片 · 🏆 最佳音效 · 🏆 最佳音响"
    }
];

// -------------------------------------------------------
// 其他主要奖项提名影片（非最佳影片）
// -------------------------------------------------------
const OTHER_NOMINEES = [
    // 最佳男主角提名
    {
        id: 1134623,
        type: "tmdb",
        title: "歌唱歌唱",
        description: "一名在出狱后试图重建生活的男子，在一家社区剧院中发现了自我救赎的可能。",
        releaseDate: "2024-09-13",
        backdropPath: "/vfKbFLTJV0ZbGkBJ2mJXaKRcE5l.jpg",
        posterPath: "/tGqNW5kMO7yvXcpB8JGjgcxvJEt.jpg",
        rating: 7.5,
        mediaType: "movie",
        genreTitle: "提名最佳男主角（科尔曼·多明戈）"
    },
    {
        id: 840430,
        type: "tmdb",
        title: "学徒",
        description: "年轻的唐纳德·特朗普在导师罗伊·科恩的引导下，逐渐磨砺成为商界霸主的野心崛起故事。",
        releaseDate: "2024-10-11",
        backdropPath: "/mHXPFkbqVrRhJFjBe2JJCdBFfWt.jpg",
        posterPath: "/3HBqBWekRiIkAtCNfpOVYBbA2JM.jpg",
        rating: 6.8,
        mediaType: "movie",
        genreTitle: "提名最佳男主角（塞巴斯蒂安·斯坦）"
    },
    // 最佳女主角提名
    {
        id: 787699,
        type: "tmdb",
        title: "野兽之女",
        description: "一名女性在发现自己变成了一头雌性冰熊后，被迫在荒野中重新认识自我与怒火。",
        releaseDate: "2024-11-22",
        backdropPath: "/mh2tSMkMnKoYDHAbDR2pTiTDfSn.jpg",
        posterPath: "/bpFSGr3WKLtU5gMsHJ5G56S8t7S.jpg",
        rating: 6.0,
        mediaType: "movie",
        genreTitle: "提名最佳女主角（艾米·亚当斯）"
    },
    // 最佳男配角提名
    {
        id: 1143214,
        type: "tmdb",
        title: "真实的痛苦",
        description: "两个截然不同的表兄弟结伴前往波兰，探访已故祖母的故土，这场旅程将揭开各自内心的痛苦与治愈。",
        releaseDate: "2024-10-18",
        backdropPath: "/tjgW6qMaVi5WBqxXkMVmJuDNGgz.jpg",
        posterPath: "/8Ri7qLhwegVnFuTj3VCdHy3lSzA.jpg",
        rating: 7.6,
        mediaType: "movie",
        genreTitle: "🏆 最佳男配角（基兰·卡尔金）"
    },
    // 最佳动画片
    {
        id: 823219,
        type: "tmdb",
        title: "流浪者",
        description: "一只小猫在水灾后独自在被遗弃的拉脱维亚城市中求生，与其他动物结伴踏上旅程。",
        releaseDate: "2024-08-30",
        backdropPath: "/ynZnCxaZfpvKnQp2w3O0BGXM27j.jpg",
        posterPath: "/qhLp4p8UVj8K3wW9l1LnHMt2Bq8.jpg",
        rating: 8.3,
        mediaType: "movie",
        genreTitle: "🏆 最佳动画长片"
    },
    {
        id: 1194180,
        type: "tmdb",
        title: "蜗牛回忆录",
        description: "一只小蜗牛在生命旅途中经历失去与成长，以独特的视角探索世界的奇异与美好。",
        releaseDate: "2024-10-18",
        backdropPath: "/wTIAJRqiymGZyFYpS2FibPOo2AE.jpg",
        posterPath: "/pDAdlgSELKlnfhUMUXJoI3R0iB4.jpg",
        rating: 7.3,
        mediaType: "movie",
        genreTitle: "提名最佳动画长片"
    },
    {
        id: 762441,
        type: "tmdb",
        title: "野性机器人",
        description: "一台机器人ROZZUM-7134在一座无人荒岛上醒来，被迫适应自然环境，并意外成为一只孤雁雏鸟的养母。",
        releaseDate: "2024-09-27",
        backdropPath: "/oSHMqXnRCBRNuCMKNKRu5dvFBDw.jpg",
        posterPath: "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
        rating: 8.1,
        mediaType: "movie",
        genreTitle: "提名最佳动画长片 · 提名最佳影片配乐"
    },
    // 最佳国际影片其他提名
    {
        id: 1197027,
        type: "tmdb",
        title: "所有我们想象的光",
        description: "两名在孟买工作的护士与一位年迈同事回到家乡，在旅途中各自直面内心的孤独与渴望。",
        releaseDate: "2024-05-23",
        backdropPath: "/cByWbJEFexEdZ0s9CAmzSmyflpz.jpg",
        posterPath: "/k74PBMqH8HRmFVKXbT6YNdixqls.jpg",
        rating: 7.2,
        mediaType: "movie",
        genreTitle: "提名最佳国际电影（印度）"
    },
    // 最佳纪录长片
    {
        id: 1085271,
        type: "tmdb",
        title: "喵的奇幻漂流",
        description: "一只流浪猫从拉脱维亚的街头出发，踏上一段跨越欧洲的奇幻旅程。",
        releaseDate: "2024-03-28",
        backdropPath: "/5zrXMJy7kqUJKfMnThfkHHoZnhG.jpg",
        posterPath: "/bPMjqmJu6SHAqKVRHlgYKHAMrWe.jpg",
        rating: 7.7,
        mediaType: "movie",
        genreTitle: "🏆 最佳纪录短片"
    },
    // 最佳原创配乐
    {
        id: 693134,
        type: "tmdb",
        title: "挑战者",
        description: "前网球神童如今转型为教练，丈夫在力争翻盘时与昔日挚友兼前男友狭路相逢，三角关系暗潮汹涌。",
        releaseDate: "2024-04-26",
        backdropPath: "/nGioFGFqAXdSzqNxjB5nWg5ZKlJ.jpg",
        posterPath: "/TkHeBO4rUx5Hkdof2FKDM7eWmS.jpg",
        rating: 7.2,
        mediaType: "movie",
        genreTitle: "提名最佳原创配乐（Trent Reznor & Atticus Ross）"
    }
];

// -------------------------------------------------------
// 模块1：最佳影片（10部）
// -------------------------------------------------------
async function getBestPicture(params = {}) {
    return BEST_PICTURE;
}

// -------------------------------------------------------
// 模块2：全部提名影片（最佳影片 + 其他主要奖项）
// -------------------------------------------------------
async function getAllNominees(params = {}) {
    // 合并并去重（最佳影片中有沙丘，其他提名中避免重复）
    const bestPictureIds = new Set(BEST_PICTURE.map(m => m.id));
    const others = OTHER_NOMINEES.filter(m => !bestPictureIds.has(m.id));
    return [...BEST_PICTURE, ...others];
}
