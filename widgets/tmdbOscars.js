/**
 * @file oscars-97.js
 * @description Forward widget for the 97th Academy Awards (2025).
 * Static data, no API key required. All IDs verified against TMDB.
 * @version 2.0.0
 */

WidgetMetadata = {
    id: "tmdboscars",
    title: "歷屆奥斯卡金像奖",
    version: "2.0.0",
    requiredVersion: "0.0.1",
    description: "奥斯卡是由美國電影藝術與科學學院（AMPAS）主辦的年度電影盛事，自1929年起表彰優秀電影創作，是全球影壇最受矚目的榮譽之一。",
    author: "ForwardWidget",
    modules: [
        {
            id: "oscars",
            title: "歷届奥斯卡",
            functionName: "getOscars",
            cacheDuration: 86400,
            params: [
                {
                    name: "category",
                    title: "奖项分类",
                    type: "enumeration",
                    value: "all",                          // ✅ Fix 3: 改為 "all" 與 enumOptions 對應
                    enumOptions: [
                        { title: "97th", value: "97" },
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
        posterPath: "/gnkMWAJRwEI4D8akYjrqEtnelM7.jpg",  // ✅ Fix 1: 移除錯誤的完整 URL
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
    },
    {
        id: 1143214,
        type: "tmdb",
        title: "真实的痛苦",
        description: "性格迥异的表兄弟结伴前往波兰，探访已故祖母的故土，旅途中各自直面内心的伤痛与和解。",
        releaseDate: "2024-11-12",
        backdropPath: "/fViElUGfdoZjtnVxvSpJX8TwxY6.jpg",
        posterPath: "/n189wRa9O7JsHZv9bewFxdHg4j2.jpg",
        rating: 7.6,
        mediaType: "movie"
    },    
    {
        id: 1211472,
        type: "tmdb",
        title: "九月五日",
        description: "1972年慕尼黑奥运会，ABC体育转播团队在直播中突然面对以色列运动员遭巴勒斯坦武装组织劫持的危机，镜头背后的道德抉择与现场压力迫在眉睫。",
        releaseDate: "2024-12-13",
        backdropPath: "/nEH7XUCeWsEuJtGgWUVUl6MEQW0.jpg",
        posterPath: "/6lc1H3yPQlFB9VO9yu0sUda2Ll8.jpg",
        rating: 7.1,
        mediaType: "movie"
    },
    {
        id: 1155828,
        type: "tmdb",
        title: "新生之歌",
        description: "冤狱中的Divine G在纽约辛辛监狱参与戏剧团体，与同伴在表演中找到人性尊严与生命意义。",
        releaseDate: "2025-02-21",
        backdropPath: "/CZyMhVVpraYDptLpYXxXjgAuCH.jpg",
        posterPath: "/8T5WL3zh7dYUwNHoXuYE9MLuUlX.jpg",
        rating: 7.5,
        mediaType: "movie"
    },    
    {
        id: 823219,
        type: "tmdb",
        title: "流浪者",
        description: "大洪水後，一隻小貓在無人的世界中醒來，與鵜鶘、拉布拉多犬、水豚和環尾狐猴同乘一艘木船求生。無對白，以Blender製作，預算僅360萬美元。",
        releaseDate: "2025-02-21",
        backdropPath: "/4XPNNt0zfZKBqxxVWaQALd57UHl.jpg",
        posterPath: "/tn89woD33WgLgT7ZMUr1r47hnql.jpg",
        rating: 8.3,
        mediaType: "movie"
    },
    {
        id: 1022789,
        type: "tmdb",
        title: "头脑特工队2",
        description: "茵茵升上高中，腦中控制台迎來全新情緒：焦焦、羨慕、無聊和懷舊，舊情緒們的地位岌岌可危。",
        releaseDate: "2024-06-13",
        backdropPath: "/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg",
        posterPath: "/gK3jUOpCRlL6uGPhN8PcARt8MZn.jpg",
        rating: 7.6,
        mediaType: "movie"
    },
    {
        id: 1194180,
        type: "tmdb",
        title: "蜗牛回忆录",
        description: "澳洲動畫師Adam Elliot的定格動畫作品。一隻蝸牛在人生旅途中收集奇異物件，以幽默荒誕的視角探索失去、孤獨與成長。",
        releaseDate: "2024-10-17",
        backdropPath: "/jl2YIADk391yc6Qjy9JhgCRkHJk.jpg",
        posterPath: "/u5oGfhNJ7lWYeswWI54mc72jEjv.jpg",
        rating: 7.3,
        mediaType: "movie"
    },
    {
        id: 1366344,
        type: "tmdb",
        title: "超级无敌奇侠：陈年积怨",
        description: "華萊士與格羅米特再度攜手，面對宿敵企鵝費瑟·麥格勞捲土重來的陰謀。Aardman定格動畫，在爛番茄獲得滿分好評。",
        releaseDate: "2025-01-03",
        backdropPath: "/kO8auxMzNXrs4YqHdD08lefXIUV.jpg",
        posterPath: "/hk6ErVnVyixOYv5WyzvTZP1ckCP.jpg",
        rating: 7.7,
        mediaType: "movie"
    },
    {
        id: 1184918,
        type: "tmdb",
        title: "野性机器人",
        description: "機器人ROZZUM 7134在荒島上擱淺，被迫適應自然環境，意外成為一隻孤雁雛鳥的養母。夢工廠年度佳作，同時獲提名最佳原創配樂與最佳視覺效果。",
        releaseDate: "2024-09-27",
        backdropPath: "/1pmXyN3sKeYoUhu5VBZiDU4BX21.jpg",
        posterPath: "/gzq36QVwlXpkHWTQ4ob0Kb1C50i.jpg",
        rating: 8.1,
        mediaType: "movie"
    },
    {
        id: 1278263,
        type: "tmdb",
        title: "圣无花果的种子",
        description: "德黑蘭一名革命法院調查法官在政局動盪中對妻女萌生猜疑，當槍枝神秘失蹤，家庭矛盾迅速激化。導演穆罕默德·拉素罗夫在伊朗被判刑後出逃歐洲，代表德國出賽。",
        releaseDate: "2025-06-26",
        backdropPath: "/zqZzYVE4DWv92xrYSCEELPcLnUP.jpg",
        posterPath: "/kLr6gSHkQYAj1RKhiaNkMBp4Dy5.jpg",
        rating: 7.4,
        mediaType: "movie"
    },
    {
        id: 1232827,
        type: "tmdb",
        title: "持针少女",
        description: "一戰後的哥本哈根，一名身陷困境的孕婦被一位魅力老婦收留，協助經營地下收養機構，直到一個驚人發現改變了一切。黑白攝影，丹麥代表作。",
        releaseDate: "2025-01-23",
        backdropPath: "/uwACVNL5OpiI3oT72DVGxnU4SRV.jpg",
        posterPath: "/lSpGVC00eSWKrnAXUQqyQlcSDxC.jpg",
        rating: 7.1,
        mediaType: "movie"
    },  

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
    }
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
        posterPath: "/gnkMWAJRwEI4D8akYjrqEtnelM7.jpg",  // ✅ Fix 1: 移除錯誤的完整 URL
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
        backdropPath: "/fyZ6SDUS4o9jp2EHxfZa3qZ9ean.jpg",
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
// 統一入口
// ─────────────────────────────────────────────
async function getOscars(params = {}) {
    const category = params.category || "all";

    switch (category) {
        case "97":
            return Oscars97;

        case "winner":
            return Oscars97_winner;

        case "nominee":
            return Oscars97_nominee;

        default:
            return Oscars97;
    }
}                                               // ✅ Fix 2: 補上函數結尾的 }
