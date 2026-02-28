/**
 * @file oscars-97.js
 * @description Forward widget for the 97th Academy Awards (2025).
 * Static data, no API key required. All IDs verified against TMDB.
 * @version 2.0.0
 */

WidgetMetadata = {
    id: "oscars",
    title: "歷屆奥斯卡金像奖",
    version: "2.0.0",
    requiredVersion: "0.0.1",
    description: "奥斯卡金像奖全部提名及获奖影片，数据来源 TMDB，无需 API Key",
    author: "ForwardWidget",
    modules: [
        {
            id: "oscars97",
            title: "第97届奥斯卡",
            functionName: "getOscars97",
            cacheDuration: 86400,
            params: [
                {
                    name: "category",
                    title: "奖项分类",
                    type: "enumeration",
                    value: "oscars",
                    enumOptions: [
                        { title: "🎭 全部作品", value: "all" },
                        { title: "🏆 獲獎作品", value: "winner" },
                        { title: "🎨 提名作品", value: "nominee" }
                    ]
                }
            ]
        }
    ]
};

// ─────────────────────────────────────────────
// 全部作品
// ─────────────────────────────────────────────
const Oscars97 = [
    {
        id: 1064213,
        type: "tmdb",
        title: "阿诺拉",
        description: "布鲁克林年轻性工作者阿诺拉与俄罗斯寡头之子闪婚，美梦开始便遭男方父母介入强行撤销婚姻。",
        releaseDate: "2024-12-06",
        backdropPath: "/tG8QWDASd8rw0JxkDN2MDDWLEse.jpg",
        posterPath: "/zt3iRbwMklKGDGx13nHt8b5Y0uT.jpg",
        rating: 7.4,
        mediaType: "movie"
    },
    {
        id: 549509,
        type: "tmdb",
        title: "粗野派",
        description: "二战后匈牙利裔犹太建筑师拉斯洛逃往美国，在富有赞助人的支持下重建声誉，代价沉重。",
        releaseDate: "2025-02-28",
        backdropPath: "/hmZnqijPaaACjenDkrbWcCmcADI.jpg",
        posterPath: "/AqjVTSKCxY0zBAQbJ60Ns8o0nMo.jpg",
        rating: 7.6,
        mediaType: "movie"        
    },
    {
        id: 661539,
        type: "tmdb",
        title: "摇滚诗人：未知的传奇",
        description: "1961年，19岁的鲍勃·迪伦只身闯入纽约民谣圈，以惊人才华改写美国音乐史。",
        releaseDate: "2025-01-24",
        backdropPath: "/kcCy5tKTe6WepVQ6SQaSewpmoCj.jpg",
        posterPath: "/cxh4GcerxbMMPcouD8RPn6xB3Ue.jpg",
        rating: 7.3,
        mediaType: "movie"        
    },
    {
        id: 974576,
        type: "tmdb",
        title: "秘密会议",
        description: "教宗骤逝，枢机主教劳伦斯奉命主持密室选举，却在梵蒂冈高墙内身陷足以颠覆教会的阴谋。",
        releaseDate: "2025-03-07",
        backdropPath: "/e7Y8bMkPfJFHNMaUn6TrXCHqHAX.jpg",
        posterPath: "/1BWhKsbUTiBD0WQhrOfQlU6zrc5.jpg",
        rating: 7.3,
        mediaType: "movie"
        
    },
    {
        id: 974950,
        type: "tmdb",
        title: "艾米莉亚·佩雷斯",
        description: "一名律师被墨西哥毒枭雇用，协助其悄然变性改头换面，踏上危险与救赎并存的旅程。",
        releaseDate: "2024-08-21",
        backdropPath: "/9tIgF5Ht9ndLJEwv2e6TZrExMKw.jpg",
        posterPath: "/uwPaMUnffh8JXCXA3ALJsFM4CAW.jpg",
        rating: 7.0,
        mediaType: "movie"        
    },
    {
        id: 1000837,
        type: "tmdb",
        title: "我仍在此",
        description: "1971年巴西军政府时期，尤妮斯的丈夫被当局带走后失踪，她独撑家庭并投身人权事业。",
        releaseDate: "2025-04-02",
        backdropPath: "/x0pkoGlwWdkzRxgQioD3cUG0awu.jpg",
        posterPath: "/lnWJqTA4gha5sZGJaD15oxOUyVm.jpg",
        rating: 8.1,
        mediaType: "movie"        
    },
    {
        id: 1028196,
        type: "tmdb",
        title: "尼克男孩",
        description: "1960年代佛罗里达，两名黑人少年在严酷感化院中结下深厚友谊，共同面对种族歧视与制度暴力。",
        releaseDate: "2024-12-13",
        backdropPath: "/kmLssINCNdXnIDjWkBsk6LUNSbe.jpg",
        posterPath: "/https://image.tmdb.org/t/p/original/gnkMWAJRwEI4D8akYjrqEtnelM7.jpg.jpg",
        rating: 6.8,
        mediaType: "movie"
        
    },
    {
        id: 933260,
        type: "tmdb",
        title: "某种物质",
        description: "逐渐淡出的女明星使用黑市药物创造年轻的分身，两个身份的角力走向失控深渊。",
        releaseDate: "2024-10-18",
        backdropPath: "/9Whl7RAzes0oMaFAeSqD8ttN3fl.jpg",
        posterPath: "/oDDYHINnemOisgswvLU0EZuHLFH.jpg",
        rating: 7.3,
        mediaType: "movie"        
    },
    {
        id: 402431,
        type: "tmdb",
        title: "魔法坏女巫",
        description: "在翡翠城，天生绿皮肤的艾菲与人气十足的葛琳达意外成为室友，命运推向截然不同的道路。",
        releaseDate: "2024-11-22",
        backdropPath: "/fyZ6SDUS4o9jp2EHxfZa3qS9ean.jpg",
        posterPath: "/rufGJNaU6zY0CeCnxYlRe8qYMA4.jpg",
        rating: 7.2,
        mediaType: "movie"        
    },
    {
        id: 693134,
        type: "tmdb",
        title: "沙丘：第二部",
        description: "保罗·厄崔迪与弗雷曼人并肩踏上复仇之路，在爱情与宇宙命运之间做出艰难抉择。",
        releaseDate: "2024-02-28",
        backdropPath: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        posterPath: "/1p25wDEdFRRTtwtPFbtPHISefzG.jpg",
        rating: 8.0,
        mediaType: "movie"        
    }
];


// ─────────────────────────────────────────────
// 獲獎作品
// ─────────────────────────────────────────────
const Oscars97_winner = [
    {
        id: 1064213,
        type: "tmdb",
        title: "阿诺拉",
        description: "布鲁克林年轻性工作者阿诺拉与俄罗斯寡头之子闪婚，美梦开始便遭男方父母介入强行撤销婚姻。",
        releaseDate: "2024-12-06",
        backdropPath: "/tG8QWDASd8rw0JxkDN2MDDWLEse.jpg",
        posterPath: "/zt3iRbwMklKGDGx13nHt8b5Y0uT.jpg",
        rating: 7.4,
        mediaType: "movie"
    },
];


// ─────────────────────────────────────────────
// 提名作品
// ─────────────────────────────────────────────
const Oscars97_nominee = [
    {
        id: 549509,
        type: "tmdb",
        title: "粗野派",
        description: "二战后匈牙利裔犹太建筑师拉斯洛逃往美国，在富有赞助人的支持下重建声誉，代价沉重。",
        releaseDate: "2025-02-28",
        backdropPath: "/hmZnqijPaaACjenDkrbWcCmcADI.jpg",
        posterPath: "/AqjVTSKCxY0zBAQbJ60Ns8o0nMo.jpg",
        rating: 7.6,
        mediaType: "movie"
	},
    {
        id: 661539,
        type: "tmdb",
        title: "摇滚诗人：未知的传奇",
        description: "1961年，19岁的鲍勃·迪伦只身闯入纽约民谣圈，以惊人才华改写美国音乐史。",
        releaseDate: "2025-01-24",
        backdropPath: "/kcCy5tKTe6WepVQ6SQaSewpmoCj.jpg",
        posterPath: "/cxh4GcerxbMMPcouD8RPn6xB3Ue.jpg",
        rating: 7.3,
        mediaType: "movie"
	},
    {
        id: 974576,
        type: "tmdb",
        title: "秘密会议",
        description: "教宗骤逝，枢机主教劳伦斯奉命主持密室选举，却在梵蒂冈高墙内身陷足以颠覆教会的阴谋。",
        releaseDate: "2025-03-07",
        backdropPath: "/e7Y8bMkPfJFHNMaUn6TrXCHqHAX.jpg",
        posterPath: "/1BWhKsbUTiBD0WQhrOfQlU6zrc5.jpg",
        rating: 7.3,
        mediaType: "movie"            
	},
    {
        id: 974950,
        type: "tmdb",
        title: "艾米莉亚·佩雷斯",
        description: "一名律师被墨西哥毒枭雇用，协助其悄然变性改头换面，踏上危险与救赎并存的旅程。",
        releaseDate: "2024-08-21",
        backdropPath: "/9tIgF5Ht9ndLJEwv2e6TZrExMKw.jpg",
        posterPath: "/uwPaMUnffh8JXCXA3ALJsFM4CAW.jpg",
        rating: 7.0,
        mediaType: "movie" 
	},
    {
        id: 1000837,
        type: "tmdb",
        title: "我仍在此",
        description: "1971年巴西军政府时期，尤妮斯的丈夫被当局带走后失踪，她独撑家庭并投身人权事业。",
        releaseDate: "2025-04-02",
        backdropPath: "/x0pkoGlwWdkzRxgQioD3cUG0awu.jpg",
        posterPath: "/lnWJqTA4gha5sZGJaD15oxOUyVm.jpg",
        rating: 8.1,
        mediaType: "movie" 
	},
    {
        id: 1028196,
        type: "tmdb",
        title: "尼克男孩",
        description: "1960年代佛罗里达，两名黑人少年在严酷感化院中结下深厚友谊，共同面对种族歧视与制度暴力。",
        releaseDate: "2024-12-13",
        backdropPath: "/kmLssINCNdXnIDjWkBsk6LUNSbe.jpg",
        posterPath: "/https://image.tmdb.org/t/p/original/gnkMWAJRwEI4D8akYjrqEtnelM7.jpg.jpg",
        rating: 6.8,
        mediaType: "movie" 
	},
    {
        id: 933260,
        type: "tmdb",
        title: "某种物质",
        description: "逐渐淡出的女明星使用黑市药物创造年轻的分身，两个身份的角力走向失控深渊。",
        releaseDate: "2024-10-18",
        backdropPath: "/9Whl7RAzes0oMaFAeSqD8ttN3fl.jpg",
        posterPath: "/oDDYHINnemOisgswvLU0EZuHLFH.jpg",
        rating: 7.3,
        mediaType: "movie" 
	},
    {
        id: 402431,
        type: "tmdb",
        title: "魔法坏女巫",
        description: "在翡翠城，天生绿皮肤的艾菲与人气十足的葛琳达意外成为室友，命运推向截然不同的道路。",
        releaseDate: "2024-11-22",
        backdropPath: "/fyZ6SDUS4o9jp2EHxfZa3qS9ean.jpg",
        posterPath: "/rufGJNaU6zY0CeCnxYlRe8qYMA4.jpg",
        rating: 7.2,
        mediaType: "movie"  
	},
    {
        id: 693134,
        type: "tmdb",
        title: "沙丘：第二部",
        description: "保罗·厄崔迪与弗雷曼人并肩踏上复仇之路，在爱情与宇宙命运之间做出艰难抉择。",
        releaseDate: "2024-02-28",
        backdropPath: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        posterPath: "/1p25wDEdFRRTtwtPFbtPHISefzG.jpg",
        rating: 8.0,
        mediaType: "movie"
	}
];

async function getOscars97(params = {}) {
    const category = params.category || "oscars";

    switch (category) {
        case "winner":
            return Oscars97_winner;

        case "nominee": 
			return Oscars97_nominee;
        		
    default:
            return Oscars97;
    }
