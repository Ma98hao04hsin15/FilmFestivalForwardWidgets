/**
 * @file oscars-97.js
 * @description Forward widget for the 97th Academy Awards (2025).
 * Static data, no API key required. All IDs verified against TMDB.
 * @version 2.0.0
 */

WidgetMetadata = {
    id: "OscarsFilter",
    title: "歷屆奥斯卡金像奖",
    version: "2.0.0",
    requiredVersion: "0.0.1",
    description: "奥斯卡是由美國電影藝術與科學學院（AMPAS）主辦的年度電影盛事，自1929年起表彰優秀電影創作，是全球影壇最受矚目的榮譽之一。",
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
                    value: "all",                          // ✅ Fix 3: 改為 "all" 與 enumOptions 對應
                    enumOptions: [
                        { title: "🎭 全部作品", value: "all" },
                        { title: "🏆 獲獎作品", value: "winner" },
                        { title: "🎨 提名作品", value: "nominee" },
                        { title: "✍️ 最佳原創劇本", value: "screenplay" },
                        { title: "📖 最佳改編劇本", value: "adapted_screenplay" },
                        { title: "🎨 最佳動畫長片", value: "animated" },
                        { title: "🌍 最佳國際影片", value: "international" },
                        { title: "🎥 最佳紀錄長片", value: "documentary" },
                        { title: "📽️ 最佳紀錄短片", value: "documentary_short" },
                        { title: "🎬 最佳真人短片", value: "live_action_short" },
                        { title: "🎵 最佳原創歌曲", value: "original_song" },
                        { title: "🏛️ 最佳美術設計", value: "production_design" },
                        { title: "📷 最佳攝影", value: "cinematography" },
                        { title: "💄 最佳化妝與髮型", value: "makeup" },
                        { title: "🎆 最佳視覺效果", value: "visual_effects" }
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
async function getOscars97(params = {}) {
    const category = params.category || "all";

    switch (category) {
        case "all":
            return Oscars97;

        case "winner":
            return Oscars97_winner;

        case "nominee":
            return Oscars97_nominee;

        case "screenplay":
            return Oscars97_screenplay;

        case "adapted_screenplay":
            return Oscars97_adapted_screenplay;

        case "animated":
            return Oscars97_animated;

        case "international":
            return Oscars97_international;

        case "documentary":
            return Oscars97_documentary;

        case "documentary_short":
            return Oscars97_documentary_short;

        case "live_action_short":
            return Oscars97_live_action_short;

        case "original_song":
            return Oscars97_original_song;

        case "production_design":
            return Oscars97_production_design;

        case "cinematography":
            return Oscars97_cinematography;

        case "makeup":
            return Oscars97_makeup;

        case "visual_effects":
            return Oscars97_visual_effects;

        default:
            return Oscars97;
    }
}                                               // ✅ Fix 2: 補上函數結尾的 }

// ─────────────────────────────────────────────
// 最佳原創劇本（5部提名）
// 🏆 得獎：Anora（Sean Baker）
// ─────────────────────────────────────────────
const Oscars97_screenplay = [
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
        id: 1143214,
        type: "tmdb",
        title: "真实的痛苦",
        description: "性格迥异的表兄弟结伴前往波兰，探访已故祖母的故土，旅途中各自直面内心的伤痛与和解。",
        releaseDate: "2024-10-18",
        backdropPath: "/tjgW6qMaVi5WBqxXkMVmJuDNGgz.jpg",
        posterPath: "/8Ri7qLhwegVnFuTj3VCdHy3lSzA.jpg",
        rating: 7.6,
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
        id: 1211472,
        type: "tmdb",
        title: "九月五日",
        description: "1972年慕尼黑奥运会，ABC体育转播团队在直播中突然面对以色列运动员遭巴勒斯坦武装组织劫持的危机，镜头背后的道德抉择与现场压力迫在眉睫。",
        releaseDate: "2024-11-29",
        backdropPath: "/pkFRtd9VFo3gMN0GDi3SdYtQ2wF.jpg",
        posterPath: "/4QSAOM3kHBIJBOlMcCpjIABanYa.jpg",
        rating: 7.1,
        mediaType: "movie"
    }
];

// ─────────────────────────────────────────────
// 最佳改編劇本（5部提名）
// 🏆 得獎：Conclave（Peter Straughan）
// ─────────────────────────────────────────────
const Oscars97_adapted_screenplay = [
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
        id: 1028196,
        type: "tmdb",
        title: "尼克男孩",
        description: "1960年代佛罗里达，两名黑人少年在严酷感化院中结下深厚友谊，共同面对种族歧视与制度暴力。",
        releaseDate: "2024-12-13",
        backdropPath: "/kmLssINCNdXnIDjWkBsk6LUNSbe.jpg",
        posterPath: "/gnkMWAJRwEI4D8akYjrqEtnelM7.jpg",
        rating: 6.8,
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
        id: 1155828,
        type: "tmdb",
        title: "新生之歌",
        description: "冤狱中的Divine G在纽约辛辛监狱参与戏剧团体，与同伴在表演中找到人性尊严与生命意义。",
        releaseDate: "2024-07-12",
        backdropPath: "/5BBFo5GGVpfEbm4hHrL0X0hJpkN.jpg",
        posterPath: "/qHbzpCpfpEpJbxLTkrAfAkHXPCT.jpg",
        rating: 7.5,
        mediaType: "movie"
    }
];

// ─────────────────────────────────────────────
// 最佳動畫長片（5部提名）
// 🏆 得獎：Flow（Gints Zilbalodis）
// ─────────────────────────────────────────────
const Oscars97_animated = [
    {
        id: 823219,
        type: "tmdb",
        title: "流浪者",
        description: "大洪水後，一隻小貓在無人的世界中醒來，與鵜鶘、拉布拉多犬、水豚和環尾狐猴同乘一艘木船求生。無對白，以Blender製作，預算僅360萬美元。",
        releaseDate: "2024-08-30",
        backdropPath: "/ynZnCxaZfpvKnQp2w3O0BGXM27j.jpg",
        posterPath: "/qhLp4p8UVj8K3wW9l1LnHMt2Bq8.jpg",
        rating: 8.3,
        mediaType: "movie"
    },
    {
        id: 1022789,
        type: "tmdb",
        title: "头脑特工队2",
        description: "茵茵升上高中，腦中控制台迎來全新情緒：焦焦、羨慕、無聊和懷舊，舊情緒們的地位岌岌可危。",
        releaseDate: "2024-06-14",
        backdropPath: "/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
        posterPath: "/oxxqiyaOwBzZXImH5ZBmtVJvFCE.jpg",
        rating: 7.6,
        mediaType: "movie"
    },
    {
        id: 1194180,
        type: "tmdb",
        title: "蜗牛回忆录",
        description: "澳洲動畫師Adam Elliot的定格動畫作品。一隻蝸牛在人生旅途中收集奇異物件，以幽默荒誕的視角探索失去、孤獨與成長。",
        releaseDate: "2024-10-18",
        backdropPath: "/wTIAJRqiymGZyFYpS2FibPOo2AE.jpg",
        posterPath: "/pDAdlgSELKlnfhUMUXJoI3R0iB4.jpg",
        rating: 7.3,
        mediaType: "movie"
    },
    {
        id: 1366344,
        type: "tmdb",
        title: "超级无敌奇侠：陈年积怨",
        description: "華萊士與格羅米特再度攜手，面對宿敵企鵝費瑟·麥格勞捲土重來的陰謀。Aardman定格動畫，在爛番茄獲得滿分好評。",
        releaseDate: "2024-12-20",
        backdropPath: "/hWpEe0baMNFvxWqkfxqFjGDFMCU.jpg",
        posterPath: "/ofMaIwb4frCBLmguJtbwF9TjnZg.jpg",
        rating: 7.7,
        mediaType: "movie"
    },
    {
        id: 1184918,
        type: "tmdb",
        title: "野性机器人",
        description: "機器人ROZZUM 7134在荒島上擱淺，被迫適應自然環境，意外成為一隻孤雁雛鳥的養母。夢工廠年度佳作，同時獲提名最佳原創配樂與最佳視覺效果。",
        releaseDate: "2024-09-27",
        backdropPath: "/oSHMqXnRCBRNuCMKNKRu5dvFBDw.jpg",
        posterPath: "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
        rating: 8.1,
        mediaType: "movie"
    }
];

// ─────────────────────────────────────────────
// 最佳國際影片（5部提名）
// 🏆 得獎：I'm Still Here（巴西）
// ─────────────────────────────────────────────
const Oscars97_international = [
    {
        id: 1000837,
        type: "tmdb",
        title: "我仍在此",
        description: "1971年巴西軍政府時期，尤妮斯的丈夫被當局帶走後失蹤，她獨撐家庭並投身人權事業。巴西史上首次奧斯卡國際電影獎得主。",
        releaseDate: "2025-04-02",
        backdropPath: "/x0pkoGlwWdkzRxgQioD3cUG0awu.jpg",
        posterPath: "/lnWJqTA4gha5sZGJaD15oxOUyVm.jpg",
        rating: 8.1,
        mediaType: "movie"
    },
    {
        id: 974950,
        type: "tmdb",
        title: "艾米莉亚·佩雷斯",
        description: "法國導演雅克·歐迪亞執導的西班牙語音樂片，創下史上非英語片最多提名紀錄（13項）。代表法國出賽。",
        releaseDate: "2024-08-21",
        backdropPath: "/9tIgF5Ht9ndLJEwv2e6TZrExMKw.jpg",
        posterPath: "/uwPaMUnffh8JXCXA3ALJsFM4CAW.jpg",
        rating: 7.0,
        mediaType: "movie"
    },
    {
        id: 823219,
        type: "tmdb",
        title: "流浪者",
        description: "無對白拉脫維亞動畫，小貓在大洪水後與其他動物同乘木船求生。同時獲最佳動畫長片並勝出。代表拉脫維亞出賽。",
        releaseDate: "2024-08-30",
        backdropPath: "/ynZnCxaZfpvKnQp2w3O0BGXM27j.jpg",
        posterPath: "/qhLp4p8UVj8K3wW9l1LnHMt2Bq8.jpg",
        rating: 8.3,
        mediaType: "movie"
    },
    {
        id: 1232827,
        type: "tmdb",
        title: "持针少女",
        description: "一戰後的哥本哈根，一名身陷困境的孕婦被一位魅力老婦收留，協助經營地下收養機構，直到一個驚人發現改變了一切。黑白攝影，丹麥代表作。",
        releaseDate: "2024-12-06",
        backdropPath: "/9D8GhMGHmHLdoE8MSzxzxG6q8GD.jpg",
        posterPath: "/bXsAeKFN3TkENfHiCMboaVNqLos.jpg",
        rating: 7.1,
        mediaType: "movie"
    },
    {
        id: 1278263,
        type: "tmdb",
        title: "圣无花果的种子",
        description: "德黑蘭一名革命法院調查法官在政局動盪中對妻女萌生猜疑，當槍枝神秘失蹤，家庭矛盾迅速激化。導演穆罕默德·拉素罗夫在伊朗被判刑後出逃歐洲，代表德國出賽。",
        releaseDate: "2024-11-27",
        backdropPath: "/pXmZyFAosqQUiPg8Rf3cAFHjCuD.jpg",
        posterPath: "/mQGUAGntnZOHKhLmpHfONJZH08y.jpg",
        rating: 7.4,
        mediaType: "movie"
    }
];

// ─────────────────────────────────────────────
// 最佳紀錄長片（5部提名）
// 🏆 得獎：No Other Land（巴勒斯坦/以色列）
// ─────────────────────────────────────────────
const Oscars97_documentary = [
    {
        id: 1232493,
        type: "tmdb",
        title: "无他家园",
        description: "巴勒斯坦/以色列共同創作。巴勒斯坦活動人士巴塞爾記錄以色列軍隊摧毀西岸馬薩費爾亞塔社區的過程，並與以色列記者尤瓦爾結下跨越衝突的友誼。獲獎後仍未能在美國取得發行合約。",
        releaseDate: "2024-02-16",
        backdropPath: "/mLBpNFqzHnFCOZp6EEqBIHbJEkd.jpg",
        posterPath: "/wpYDDIMfJOBNvFUlYwuvlPJRmMW.jpg",
        rating: 8.2,
        mediaType: "movie"
    },
    {
        id: 1214499,
        type: "tmdb",
        title: "黑盒子日记",
        description: "日本記者伊藤詩織親自調查自身遭受性侵的案件，在重重阻礙下將此案打造成日本#MeToo運動的里程碑，揭露日本司法制度的深層性別偏見。",
        releaseDate: "2024-01-20",
        backdropPath: "/iFlGpgQDfzqMu4HVBOvnBM9pBFl.jpg",
        posterPath: "/vT7s5FXNK2SqXJDNYgHqQoERHE.jpg",
        rating: 7.5,
        mediaType: "movie"
    },
    {
        id: 1214527,
        type: "tmdb",
        title: "瓷器战争",
        description: "俄軍炮火下，烏克蘭藝術家斯拉瓦、安雅與安德烈拒絕撤離，白天訓練民兵、夜晚仍繼續創作精緻瓷器。日舞影展大評審獎得主。",
        releaseDate: "2024-01-20",
        backdropPath: "/2bGBUPKFOVW3HsFzSbJMfHbKkR5.jpg",
        posterPath: "/kdAnYJlsNQKMSqGhWNMRhuvXaAl.jpg",
        rating: 7.1,
        mediaType: "movie"
    },
    {
        id: 1214539,
        type: "tmdb",
        title: "政变配乐",
        description: "1960年，爵士樂手艾比·林肯與麥克斯·羅奇衝進聯合國安理會抗議，背後是CIA策動謀殺剛果首位民選領袖帕特里斯·盧蒙巴的冷戰密謀。比利時導演約翰·格里蒙普雷以爵士節奏重組這段被掩埋的歷史。",
        releaseDate: "2024-01-22",
        backdropPath: "/bA3bpbxNYiqIEGw6FJMX9KeWWz5.jpg",
        posterPath: "/1pnIzoMqKMHp5cMIAyJqJuE5XFg.jpg",
        rating: 7.8,
        mediaType: "movie"
    },
    {
        id: 1158874,
        type: "tmdb",
        title: "甘蔗",
        description: "加拿大卑詩省甘蔗保護區，原住民社群在一所天主教寄宿學校地下發現無名兒童墓地，引發對幾代人性侵與文化滅絕的深刻清算。導演茱利安·勇敢·噪貓在調查中發現了父親的秘密。",
        releaseDate: "2024-01-20",
        backdropPath: "/gAJKXUHBqVLNdEVIBniGEGauvkj.jpg",
        posterPath: "/rDpj1KK6P3LtZjXBpMFhwg8x8PN.jpg",
        rating: 7.0,
        mediaType: "movie"
    }
];

// ─────────────────────────────────────────────
// 最佳紀錄短片（5部提名）
// 🏆 得獎：The Only Girl in the Orchestra（Molly O'Brien）
// ─────────────────────────────────────────────
const Oscars97_documentary_short = [
    {
        id: 1195310,
        type: "tmdb",
        title: "乐团里唯一的女孩",
        description: "1966年，奧林·歐布萊恩成為紐約愛樂樂團首位女性全職樂手，由指揮家伯恩斯坦親自任命。這部由她姪女莫莉執導的短片，記錄她87歲退休後的人生哲學：人生樂趣在於甘願「拉二提琴」。Netflix出品。",
        releaseDate: "2024-12-04",
        backdropPath: "/cKMVSXBwAFz69DpbXXSqrQFGRkc.jpg",
        posterPath: "/lA3WYOGLaXsegNYJnEAJGbKdGQ3.jpg",
        rating: 7.5,
        mediaType: "movie"
    },
    {
        id: 1300245,
        type: "tmdb",
        title: "准备好了，典狱长",
        description: "德克薩斯州死刑犯約翰·亨利·拉米雷斯在執行死刑前的最後時光，試圖向被害者之子尋求諒解與救贖。導演Smriti Mundhra深入德州監獄系統，探討死刑制度的道德複雜性。Paramount+出品。",
        releaseDate: "2024-02-23",
        backdropPath: "/pNFl0wuDhUBQ8cqUDUP8mGWiIRV.jpg",
        posterPath: "/qvlh0bqliVxmRXlyKqMnvZKPuBO.jpg",
        rating: 6.7,
        mediaType: "movie"
    },
    {
        id: 1356881,
        type: "tmdb",
        title: "死亡数字",
        description: "2018年佛羅里達帕克蘭校園槍擊案倖存者薩曼莎·富恩特斯，在槍手量刑聆訊前記錄自己如何透過詩歌與日記走出創傷、在法庭上直面兇手的心路歷程。",
        releaseDate: "2024-10-05",
        backdropPath: "/9eWCXLxUgbBSABZtxJhm4OcLN1d.jpg",
        posterPath: "/bEflrWNDACZWTKq0jLNjfORb7i8.jpg",
        rating: 6.6,
        mediaType: "movie"
    },
    {
        id: 1108462,
        type: "tmdb",
        title: "事件",
        description: "2018年芝加哥，警察在街頭射殺一名黑人男子。導演比爾·莫里森利用監視器與警察隨身攝影機畫面，以分割螢幕重建整起事件始末，以及警方試圖塑造敘事的過程。《紐約客》雜誌出品，在YouTube免費觀看。",
        releaseDate: "2023-09-01",
        backdropPath: "/vTALBLnHbvY7LfDpVqcjBrMT6Ue.jpg",
        posterPath: "/5TZuL5bfC8XBkEXlthJ1OOPD4Nw.jpg",
        rating: 7.6,
        mediaType: "movie"
    },
    {
        id: 1284874,
        type: "tmdb",
        title: "心跳的乐器",
        description: "東京一所公立小學的一年級學生面臨期末挑戰：在新生入學典禮上演奏《歡樂頌》。不擅與群體同步的綾芽決心擔當大鼓手，記錄她與同學一起為音樂演出全力準備的日本紀錄短片。",
        releaseDate: "2024-01-20",
        backdropPath: "/8iQvHBqoEkCENFVnhzRHqODmCiQ.jpg",
        posterPath: "/eWPnrFfqDIGNbC3m9plXHuZr2rY.jpg",
        rating: 7.4,
        mediaType: "movie"
    }
];

// ─────────────────────────────────────────────
// 最佳真人短片（5部提名）
// 🏆 得獎：I'm Not a Robot（荷蘭，Victoria Warmerdam）
// ─────────────────────────────────────────────
const Oscars97_live_action_short = [
    {
        id: 1178556,
        type: "tmdb",
        title: "我不是机器人",
        description: "音樂製作人拉拉在電腦更新後反覆無法通過驗證碼測試，在IT人員提出她「可能是機器人」後，開始陷入關於自身存在的深層恐慌。首部獲奧斯卡真人短片的荷蘭影片，可在《紐約客》YouTube頻道免費觀看。",
        releaseDate: "2023-09-23",
        backdropPath: "/9tIgF5Ht9ndLJEwv2e6TZrExMKw.jpg",
        posterPath: "/2c0zFiMBCACCYBOdupvNjQEMWKl.jpg",
        rating: 7.1,
        mediaType: "movie"
    },
    {
        id: 1118941,
        type: "tmdb",
        title: "外星人",
        description: "綠卡面試當天，一對移民夫婦面臨危險的移民審查程序，美國移民制度的嚴酷現實在緊張的訪談中一一揭開。由薩姆與大衛·卡特勒-克魯茲兄弟執導。",
        releaseDate: "2023-01-01",
        backdropPath: "/hWpEe0baMNFvxWqkfxqFjGDFMCU.jpg",
        posterPath: "/4tEDMwgbWJQi7bXANr3GWzFXSai.jpg",
        rating: 7.2,
        mediaType: "movie"
    },
    {
        id: 1337997,
        type: "tmdb",
        title: "阿努佳",
        description: "新德里，天資聰穎的九歲女孩阿努佳在成衣廠與姊姊並肩工作，一個千載難逢的就學機會到來，她必須在自己的未來與姊姊的命運之間做出抉擇。Netflix出品，普里揚卡·喬普拉、明迪·卡靈擔任監製。",
        releaseDate: "2024-01-01",
        backdropPath: "/kmLssINCNdXnIDjWkBsk6LUNSbe.jpg",
        posterPath: "/qhLp4p8UVj8K3wW9l1LnHMt2Bq8.jpg",
        rating: 7.4,
        mediaType: "movie"
    },
    {
        id: 1316292,
        type: "tmdb",
        title: "最后的护林员",
        description: "南非東開普省，疫情期間旅遊業崩潰令自然保護區資金告急，最後一位護林員庫塞爾瓦帶著少女莉薩守護白犀牛，直到偷獵者突然現身。以科薩語拍攝，首部以南非語言問鼎奧斯卡的短片。",
        releaseDate: "2024-01-07",
        backdropPath: "/nGioFGFqAXdSzqNxjB5nWg5ZKlJ.jpg",
        posterPath: "/kdAnYJlsNQKMSqGhWNMRhuvXaAl.jpg",
        rating: 6.9,
        mediaType: "movie"
    },
    {
        id: 1279229,
        type: "tmdb",
        title: "无法沉默的人",
        description: "1993年波斯尼亞，一列貝爾格勒開往巴爾的客車被塞族準軍事部隊攔截，500名乘客中只有一人敢於站出來阻止種族清洗。克羅埃西亞史上首次獲奧斯卡提名，並榮獲坎城最佳短片金棕櫚獎。",
        releaseDate: "2024-05-18",
        backdropPath: "/pXmZyFAosqQUiPg8Rf3cAFHjCuD.jpg",
        posterPath: "/mQGUAGntnZOHKhLmpHfONJZH08y.jpg",
        rating: 7.3,
        mediaType: "movie"
    }
];

// ─────────────────────────────────────────────
// 最佳原創歌曲（5首提名，來自4部影片）
// 🏆 得獎："El Mal"（Emilia Pérez）
// ─────────────────────────────────────────────
const Oscars97_original_song = [
    {
        id: 974950,
        type: "tmdb",
        title: "艾米莉亚·佩雷斯",
        description: "本屆最佳原創歌曲大贏家，一次入圍兩首：🏆「El Mal」由左伊·薩爾達納演唱，以歌舞諷刺墨西哥社會腐敗；「Mi Camino」抒情展現主角身分轉變的內心旅程。13項提名中的兩首歌打破非英語片紀錄。",
        releaseDate: "2024-08-21",
        backdropPath: "/9tIgF5Ht9ndLJEwv2e6TZrExMKw.jpg",
        posterPath: "/uwPaMUnffh8JXCXA3ALJsFM4CAW.jpg",
        rating: 7.0,
        mediaType: "movie"
    },
    {
        id: 1155828,
        type: "tmdb",
        title: "新生之歌",
        description: "「Like a Bird」由亞伯拉罕·亞歷山大與亞德里安·奎薩達共同創作，靈魂藍調曲風，在電影結尾點題，道出囚中人渴望自由的深情。A24出品，同時獲最佳改編劇本提名。",
        releaseDate: "2024-07-12",
        backdropPath: "/5BBFo5GGVpfEbm4hHrL0X0hJpkN.jpg",
        posterPath: "/qHbzpCpfpEpJbxLTkrAfAkHXPCT.jpg",
        rating: 7.5,
        mediaType: "movie"
    },
    {
        id: 1061699,
        type: "tmdb",
        title: "六三八营",
        description: "「The Journey」由黛安·華倫作詞、H.E.R.演唱，出現在片尾字幕。這是黛安·華倫連續第十七年獲奧斯卡提名，卻從未在競爭類別勝出的傳奇紀錄。Netflix出品，Kerry Washington主演。",
        releaseDate: "2024-12-20",
        backdropPath: "/5UiB9XYWQZbnbFv0gEgGF3YOLXB.jpg",
        posterPath: "/qdkFSRxLDBnhLCyBsIRCbPHSMCq.jpg",
        rating: 6.7,
        mediaType: "movie"
    },
    {
        id: 977326,
        type: "tmdb",
        title: "永不言遲",
        description: "「Never Too Late」由艾爾頓·強與布蘭蒂·卡萊爾共同創作演唱，是艾爾頓強的告別之作，也是他在奧斯卡的第五次提名。Disney+紀錄片，隨最終巡演畫下50年音樂生涯句點。",
        releaseDate: "2024-12-13",
        backdropPath: "/lziPKMDGLKCijqFYHMjvGiOINqR.jpg",
        posterPath: "/4m6SJyLFAMV2K4xIxq9oRPzQ2VF.jpg",
        rating: 7.1,
        mediaType: "movie"
    }
];

// ─────────────────────────────────────────────
// 最佳美術設計（5部提名）
// 🏆 得獎：Wicked（Nathan Crowley & Lee Sandales）
// ─────────────────────────────────────────────
const Oscars97_production_design = [
    {
        id: 402431,
        type: "tmdb",
        title: "魔法坏女巫",
        description: "🏆 美術設計師Nathan Crowley第七次提名首次獲獎。以實景搭建翡翠城，9百萬朵鬱金香填滿芒奇金蘭，配合LED舞台技術打造壯觀奇境。與最佳服裝設計同獲大獎，成為本屆最大技術獎贏家。",
        releaseDate: "2024-11-22",
        backdropPath: "/fyZ6SDUS4o9jp2EHxfZa3qS9ean.jpg",
        posterPath: "/rufGJNaU6zY0CeCnxYlRe8qYMA4.jpg",
        rating: 7.2,
        mediaType: "movie"
    },
    {
        id: 549509,
        type: "tmdb",
        title: "粗野派",
        description: "美術設計師Judy Becker以粗野主義建築風格重現戰後美國的宏大夢想與精神廢墟，賓州礦工俱樂部的巨型文化中心建築將建築本身化為電影的主角之一。",
        releaseDate: "2025-02-28",
        backdropPath: "/hmZnqijPaaACjenDkrbWcCmcADI.jpg",
        posterPath: "/AqjVTSKCxY0zBAQbJ60Ns8o0nMo.jpg",
        rating: 7.6,
        mediaType: "movie"
    },
    {
        id: 974576,
        type: "tmdb",
        title: "秘密会议",
        description: "美術設計師Suzie Davies以驚人細節重建梵蒂岡西斯汀禮拜堂與教廷走廊，精緻磨損痕跡讓觀眾忘記置身攝影棚。導演Edward Berger事後坦言自己一度以為是實景拍攝。",
        releaseDate: "2025-03-07",
        backdropPath: "/e7Y8bMkPfJFHNMaUn6TrXCHqHAX.jpg",
        posterPath: "/1BWhKsbUTiBD0WQhrOfQlU6zrc5.jpg",
        rating: 7.3,
        mediaType: "movie"
    },
    {
        id: 693134,
        type: "tmdb",
        title: "沙丘：第二部",
        description: "美術設計師Patrice Vermette再度締造沙漠星球阿拉基斯的宏觀世界觀，哈肯能堡壘以黑色火山地景打造，弗雷曼人地下城與競技場場景均以超大規模實景建造。",
        releaseDate: "2024-02-28",
        backdropPath: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        posterPath: "/1p25wDEdFRRTtwtPFbtPHISefzG.jpg",
        rating: 8.0,
        mediaType: "movie"
    },
    {
        id: 426063,
        type: "tmdb",
        title: "诺斯费拉图",
        description: "美術設計師Craig Lathrop與羅伯特·艾格斯重建19世紀德國與東歐哥特式場景，以冷峻燭光美學與精密歷史細節打造令人窒息的壓迫氛圍。同時獲最佳攝影、最佳化妝與最佳服裝設計提名。",
        releaseDate: "2024-12-25",
        backdropPath: "/nbKdRivGpIDFAaQ6MNb1EkDiSkK.jpg",
        posterPath: "/5qGIxdEO841C0tdY8vKuYkD0ULl.jpg",
        rating: 7.2,
        mediaType: "movie"
    }
];

// ─────────────────────────────────────────────
// 最佳攝影（5部提名）
// 🏆 得獎：The Brutalist（Lol Crawley）
// ─────────────────────────────────────────────
const Oscars97_cinematography = [
    {
        id: 549509,
        type: "tmdb",
        title: "粗野派",
        description: "🏆 攝影師Lol Crawley以VistaVision寬銀幕格式拍攝，在後製轉換為1.33:1縱橫比，配合垂直構圖強化建築的壓迫感。黑白影像刻意在歐洲段落加入粗粒感，彩色的美國段落則呈現冰冷的銳利質感。",
        releaseDate: "2025-02-28",
        backdropPath: "/hmZnqijPaaACjenDkrbWcCmcADI.jpg",
        posterPath: "/AqjVTSKCxY0zBAQbJ60Ns8o0nMo.jpg",
        rating: 7.6,
        mediaType: "movie"
    },
    {
        id: 693134,
        type: "tmdb",
        title: "沙丘：第二部",
        description: "攝影師Greig Fraser二度為沙丘掌鏡，在約旦瓦地倫沙漠以IMAX攝影機捕捉砂礫質感，哈肯能星球場景以黑白紅外線攝影呈現詭異冷峻，實地拍攝鉅型沙蟲讓視覺效果更具說服力。",
        releaseDate: "2024-02-28",
        backdropPath: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        posterPath: "/1p25wDEdFRRTtwtPFbtPHISefzG.jpg",
        rating: 8.0,
        mediaType: "movie"
    },
    {
        id: 974950,
        type: "tmdb",
        title: "艾米莉亚·佩雷斯",
        description: "攝影師Paul Guilhaume以高對比度的霓虹色調勾勒墨西哥地下世界，手持攝影貼近角色身體的不安與解放，歌舞場景則轉為精心設計的廣角構圖，讓視覺語言跟隨情緒自由切換。",
        releaseDate: "2024-08-21",
        backdropPath: "/9tIgF5Ht9ndLJEwv2e6TZrExMKw.jpg",
        posterPath: "/uwPaMUnffh8JXCXA3ALJsFM4CAW.jpg",
        rating: 7.0,
        mediaType: "movie"
    },
    {
        id: 1115623,
        type: "tmdb",
        title: "玛利亚",
        description: "攝影師Ed Lachman以Super 16mm菲林拍攝瑪利亞·卡拉斯生命末章的巴黎，刻意保留顆粒感與柔焦邊緣，營造介於記憶與現實之間的朦朧質感，每個鏡頭都像一張珍貴的老照片。安潔莉娜·裘莉主演。",
        releaseDate: "2024-11-27",
        backdropPath: "/4FDBmjnHN5f7jzJMIi56qJDfErE.jpg",
        posterPath: "/an6AiKJbTLrKPKI7oeE8zFQQ3Gq.jpg",
        rating: 6.7,
        mediaType: "movie"
    },
    {
        id: 426063,
        type: "tmdb",
        title: "诺斯费拉图",
        description: "攝影師Jarin Blaschke與羅伯特·艾格斯第四度合作，以燭光和油燈作為幾乎所有場景的唯一光源，用低曝光的陰影構圖逼出中世紀繪畫般的壓迫美感，讓黑暗本身成為吸血鬼存在的象徵。",
        releaseDate: "2024-12-25",
        backdropPath: "/nbKdRivGpIDFAaQ6MNb1EkDiSkK.jpg",
        posterPath: "/5qGIxdEO841C0tdY8vKuYkD0ULl.jpg",
        rating: 7.2,
        mediaType: "movie"
    }
];

// ─────────────────────────────────────────────
// 最佳化妝與髮型設計（5部提名）
// 🏆 得獎：The Substance（Pierre-Olivier Persin、Stéphanie Guillon、Marilyne Scarselli）
// ─────────────────────────────────────────────
const Oscars97_makeup = [
    {
        id: 933260,
        type: "tmdb",
        title: "某种物质",
        description: "🏆 本屆最震撼的化妝成就。化妝師以義肢與義體技術打造主角身體逐漸崩解的過程，片尾高潮戲份動用超過200個義肢部件，整個製作耗費數個月手工打造，效果令人瞠目結舌。",
        releaseDate: "2024-10-18",
        backdropPath: "/9Whl7RAzes0oMaFAeSqD8ttN3fl.jpg",
        posterPath: "/oDDYHINnemOisgswvLU0EZuHLFH.jpg",
        rating: 7.3,
        mediaType: "movie"
    },
    {
        id: 989662,
        type: "tmdb",
        title: "另一个男人",
        description: "塞巴斯蒂安·斯坦在A24這部心理驚悚片中飾演患有嚴重神經纖維瘤的演員，化妝團隊以矽膠義肢覆蓋全臉打造逼真病變效果，斯坦每天需坐妝4小時，表演時幾乎無法面部表情。",
        releaseDate: "2024-09-27",
        backdropPath: "/iFlGpgQDfzqMu4HVBOvnBM9pBFl.jpg",
        posterPath: "/iRCgqpdVf6J9jItONBCLg2AJnBx.jpg",
        rating: 6.9,
        mediaType: "movie"
    },
    {
        id: 974950,
        type: "tmdb",
        title: "艾米莉亚·佩雷斯",
        description: "化妝團隊為主角的性別轉換過程設計了精密的階段性造型，從毒梟到女性的蛻變以化妝而非視覺特效呈現。法國化妝師負責讓多位演員在整部電影中呈現跨越時間的年齡變化。",
        releaseDate: "2024-08-21",
        backdropPath: "/9tIgF5Ht9ndLJEwv2e6TZrExMKw.jpg",
        posterPath: "/uwPaMUnffh8JXCXA3ALJsFM4CAW.jpg",
        rating: 7.0,
        mediaType: "movie"
    },
    {
        id: 426063,
        type: "tmdb",
        title: "诺斯费拉图",
        description: "化妝師為比爾·史柯斯嘉量身打造奧洛克伯爵的標誌性造型：枯槁的長指甲、蠟黃的肌膚、詭異的鼠鬚，每次拍攝坐妝需時3至4小時，大量參考19世紀疾病攝影與屍體研究。",
        releaseDate: "2024-12-25",
        backdropPath: "/nbKdRivGpIDFAaQ6MNb1EkDiSkK.jpg",
        posterPath: "/5qGIxdEO841C0tdY8vKuYkD0ULl.jpg",
        rating: 7.2,
        mediaType: "movie"
    },
    {
        id: 402431,
        type: "tmdb",
        title: "魔法坏女巫",
        description: "辛西婭·艾莉沃在片中全程以綠色皮膚示人，化妝團隊研發了一套可在高強度舞蹈和歌唱時維持效果的特製配方，讓綠色妝容在長達數月的拍攝中保持一致。芭樂妝容則突顯社交形象的精緻與操控性。",
        releaseDate: "2024-11-22",
        backdropPath: "/fyZ6SDUS4o9jp2EHxfZa3qS9ean.jpg",
        posterPath: "/rufGJNaU6zY0CeCnxYlRe8qYMA4.jpg",
        rating: 7.2,
        mediaType: "movie"
    }
];

// ─────────────────────────────────────────────
// 最佳視覺效果（5部提名）
// 🏆 得獎：Dune: Part Two（Paul Lambert等）
// ─────────────────────────────────────────────
const Oscars97_visual_effects = [
    {
        id: 693134,
        type: "tmdb",
        title: "沙丘：第二部",
        description: "🏆 視效總監Paul Lambert帶領團隊以實體模型結合CG打造沙蟲，哈肯能場景的黑沙、熔岩地景均以真實環境拍攝後在後製強化。製作方刻意減少純CG場景，大量採用實景融合，呈現有別於一般科幻片的扎實質感。",
        releaseDate: "2024-02-28",
        backdropPath: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        posterPath: "/1p25wDEdFRRTtwtPFbtPHISefzG.jpg",
        rating: 8.0,
        mediaType: "movie"
    },
    {
        id: 945961,
        type: "tmdb",
        title: "异形：罗穆卢斯",
        description: "費德·阿爾瓦雷斯執導的系列新章，視效團隊以現代技術重現異形系列的生物質感，廢棄太空站的零重力場景以實體搭配CG拍攝，片中驚人的「異種結合」生物更是結合了義肢、機械裝置與CG的複合成果。",
        releaseDate: "2024-08-16",
        backdropPath: "/9oYdz5gDoIl8h0EvGFEKEq7INYO.jpg",
        posterPath: "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
        rating: 7.2,
        mediaType: "movie"
    },
    {
        id: 799766,
        type: "tmdb",
        title: "更好的人",
        description: "羅比·威廉斯傳記片最驚人之處：主角全程以CG猴子呈現，由Jonno Davies穿上動作捕捉套裝演出，視效公司Weta FX負責製作。這是影史首部以CG動物為主角演出完整傳記片的作品，演員臉部情感精準轉化令人嘆服。",
        releaseDate: "2024-12-25",
        backdropPath: "/vIeu8WysZrTSFb2PJCBtCYQBMnb.jpg",
        posterPath: "/SnAcQCaJnNjQaVAtqIqvumfKJLr.jpg",
        rating: 7.3,
        mediaType: "movie"
    },
    {
        id: 653346,
        type: "tmdb",
        title: "猩球崛起：新世界",
        description: "Wes Ball執導，Weta FX繼承前三部曲的動作捕捉傳統，以新一代運算技術呈現數百隻猩猩在廢墟城市中的群體動態。片中猩猩的毛髮模擬達到前所未有的精細程度，每個鏡頭平均需渲染2200萬根毛髮。",
        releaseDate: "2024-05-10",
        backdropPath: "/fqv8JTjEsoiEAiTzFriFRLiZdvt.jpg",
        posterPath: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        rating: 6.8,
        mediaType: "movie"
    },
    {
        id: 402431,
        type: "tmdb",
        title: "魔法坏女巫",
        description: "視效團隊以大量CG延伸實景搭建的翡翠城，芒奇金蘭的百萬朵花卉、奧茲巫師的幻象、加琳達泡泡出場等均為視效重頭戲。整部電影的視效鏡頭超過1700個，是歌舞片史上規模最大的視效製作之一。",
        releaseDate: "2024-11-22",
        backdropPath: "/fyZ6SDUS4o9jp2EHxfZa3qS9ean.jpg",
        posterPath: "/rufGJNaU6zY0CeCnxYlRe8qYMA4.jpg",
        rating: 7.2,
        mediaType: "movie"
    }
];
