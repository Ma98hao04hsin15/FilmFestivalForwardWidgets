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
                        { title: "🎭 98th全部作品", value: "98" },
                        { title: "🎭 97th全部作品", value: "97" },
                        { title: "🎭 96th全部作品", value: "96" }, 
                        { title: "🎭 95th全部作品", value: "95" },
                        { title: "🎭 94th全部作品", value: "94" }, 
                        { title: "🎭 93th全部作品", value: "93" },
                        { title: "🎭 92th全部作品", value: "92" },
                        { title: "🎭 91th全部作品", value: "91" },
                        { title: "🎭 90th全部作品", value: "90" }, 
                        { title: "🎭 89th全部作品", value: "89" }, 
                        { title: "🎭 88th全部作品", value: "88" }, 
                        { title: "🎭 87th全部作品", value: "87" },  
                        { title: "🎭 86th全部作品", value: "86" }, 
                        { title: "🎭 85th全部作品", value: "85" },
                        { title: "🎭 84th全部作品", value: "84" },
                        { title: "🎭 83th全部作品", value: "83" },  
                        { title: "🎭 82th全部作品", value: "82" },  
                        { title: "🎭 81th全部作品", value: "81" },
                        { title: "🎭 80th全部作品", value: "80" },  
                        { title: "🎭 79th全部作品", value: "79" },    
                        { title: "🎭 78th全部作品", value: "78" },      
                        { title: "🎭 77th全部作品", value: "77" },      
                        { title: "🎭 76th全部作品", value: "76" },    
                        { title: "🎭 75th全部作品", value: "75" },       
                        { title: "🎭 74th全部作品", value: "74" },       
                        { title: "🎭 73th全部作品", value: "73" },       
                    ],
                },
                {
                  title: "🏆歷屆奧斯卡獲獎作品",
                  description: "历届奥斯卡最佳影片获奖作品",
                  requiresWebView: false,
                  functionName: "loadOscars",
                  cacheDuration: 604800,
                  params: [
                    {
                      name: "page",
                      title: "页码",
                      type: "page",
                    },
                  ],
                },
                {
                  title: "🎨歷屆奧斯卡提名作品",
                  description: "历届奥斯卡最佳影片获奖作品",
                  requiresWebView: false,
                  functionName: "loadOscarsnominee",
                  cacheDuration: 604800,
                  params: [
                    {
                      name: "page",
                      title: "页码",
                      type: "page",
                    },
                  ],
                },
            ]
        }
    ],
};

// ─────────────────────────────────────────────
// 98th全部作品
// ─────────────────────────────────────────────
const Oscars98 = [
{ id: "701387", year: 2026, title: "Bugonia", ceremony: 98 },
{ id: "911430", year: 2026, title: "F1", ceremony: 98 },
{ id: "1062722", year: 2026, title: "Frankenstein", ceremony: 98 },
{ id: "858024", year: 2026, title: "Hamnet", ceremony: 98 },
{ id: "1317288", year: 2026, title: "Marty Supreme", ceremony: 98 },
{ id: "1054867", year: 2026, title: "One Battle After Another", ceremony: 98 },
{ id: "1220564", year: 2026, title: "The Secret Agent", ceremony: 98 },
{ id: "1124566", year: 2026, title: "Sentimental Value", ceremony: 98 },
{ id: "1233413", year: 2026, title: "Sinners", ceremony: 98 },
{ id: "1241983", year: 2026, title: "Train Dreams", ceremony: 98 },
{ id: "1299655", year: 2026, title: "Blue Moon", ceremony: 98 },
{ id: "1456349", year: 2026, title: "It Was Just an Accident", ceremony: 98 },
{ id: "804370", year: 2026, title: "Arco", ceremony: 98 },
{ id: "1022787", year: 2026, title: "Elio", ceremony: 98 },
{ id: "803796", year: 2026, title: "KPop Demon Hunters", ceremony: 98 },
{ id: "682012", year: 2026, title: "Little Amélie or the Character of Rain", ceremony: 98 },
{ id: "1084242", year: 2026, title: "Zootopia 2", ceremony: 98 },
{ id: "1151272", year: 2026, title: "Sirât", ceremony: 98 },
{ id: "1480382", year: 2026, title: "The Voice of Hind Rajab", ceremony: 98 },
{ id: "826338", year: 2026, title: "Diane Warren: Relentless", ceremony: 98 },
{ id: "803796", year: 2026, title: "KPop Demon Hunters", ceremony: 98 },
{ id: "1358554", year: 2026, title: "Viva Verdi!", ceremony: 98 },
{ id: "1379266", year: 2026, title: "Kokuho", ceremony: 98 },
{ id: "760329", year: 2026, title: "The Smashing Machine", ceremony: 98 },
{ id: "1284120", year: 2026, title: "The Ugly Stepsister", ceremony: 98 },
{ id: "83533", year: 2026, title: "Avatar: Fire and Ash", ceremony: 98 },
{ id: "1234821", year: 2026, title: "Jurassic World Rebirth", ceremony: 98 },
{ id: "1236470", year: 2026, title: "The Lost Bus", ceremony: 98 },
];

// ─────────────────────────────────────────────
// 97全部作品
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
    {
        id: 1061699,
        type: "tmdb",
        title: "六三八营",
        description: "「The Journey」由黛安·華倫作詞、H.E.R.演唱，出現在片尾字幕。這是黛安·華倫連續第十七年獲奧斯卡提名，卻從未在競爭類別勝出的傳奇紀錄。Netflix出品，Kerry Washington主演。",
        releaseDate: "2024-12-20",
        backdropPath: "/4FnbeuCnsN3MT6omPrivl2ttJ8o.jpg",
        posterPath: "/uYjkhgiwbQn2vC1l9aWgQkkYyns.jpg",
        rating: 6.7,
        mediaType: "movie"
    },
    {
        id: 977326,
        type: "tmdb",
        title: "埃尔顿·约翰：永远不迟",
        description: "「Never Too Late」由艾爾頓·強與布蘭蒂·卡萊爾共同創作演唱，是艾爾頓強的告別之作，也是他在奧斯卡的第五次提名。Disney+紀錄片，隨最終巡演畫下50年音樂生涯句點。",
        releaseDate: "2024-12-13",
        backdropPath: "/wenh8IgtsRd8RsmIwOoe1djlKyK.jpg",
        posterPath: "/8pGiM7vXKKuLA2f34evEgIcBwcO.jpg",
        rating: 7.1,
        mediaType: "movie"
    },
    {
        id: 426063,
        type: "tmdb",
        title: "诺斯费拉图",
        description: "美術設計師Craig Lathrop與羅伯特·艾格斯重建19世紀德國與東歐哥特式場景，以冷峻燭光美學與精密歷史細節打造令人窒息的壓迫氛圍。同時獲最佳攝影、最佳化妝與最佳服裝設計提名。",
        releaseDate: "2024-12-25",
        backdropPath: "/fYnEbgoNCxW9kL0IgOgtJb9JTBU.jpg",
        posterPath: "/c7asXTLraHO6gZJd7uo7QvNpKqa.jpg",
        rating: 7.2,
        mediaType: "movie"
    },
    {
        id: 1038263,
        type: "tmdb",
        title: "玛丽亚·卡拉斯",
        description: "攝影師Ed Lachman以Super 16mm菲林拍攝瑪利亞·卡拉斯生命末章的巴黎，刻意保留顆粒感與柔焦邊緣，營造介於記憶與現實之間的朦朧質感，每個鏡頭都像一張珍貴的老照片。安潔莉娜·裘莉主演。",
        releaseDate: "2024-11-27",
        backdropPath: "/9iw4a6AQkxUO3EuRn59Vgrqf0zO.jpg",
        posterPath: "/sRvLqPHxIyVB7HZ18iIR54br2aM.jpg",
        rating: 6.7,
        mediaType: "movie"
    },
    {
        id: 989662,
        type: "tmdb",
        title: "另一个男人",
        description: "塞巴斯蒂安·斯坦在A24這部心理驚悚片中飾演患有嚴重神經纖維瘤的演員，化妝團隊以矽膠義肢覆蓋全臉打造逼真病變效果，斯坦每天需坐妝4小時，表演時幾乎無法面部表情。",
        releaseDate: "2024-09-27",
        backdropPath: "/xSqaVqkbeSaPmeEyurWBaTSkgL9.jpg",
        posterPath: "/xjBGF9YgdBOb6IGN7EiDu0JXaVg.jpg",
        rating: 6.9,
        mediaType: "movie"
    },
    {
        id: 558449,
        type: "tmdb",
        title: "角斗士2",
        description: "故事延续前作，路奇乌斯（保罗·麦斯卡 Paul Mescal 饰）童年时亲眼目击受万人景仰的英雄马克西蒙斯死于舅舅之手，多年后已长大成人的他，在暴君的铁腕统治下，被迫进入竞技场为生存而战。心中充满怒火的路奇乌斯，眼见罗马帝国的未来岌岌可危，决心讨回本属于他的权力和荣誉 ，还罗马人民一个辉煌的罗马。",
        releaseDate: "2024-09-27",
        backdropPath: "/4hvK1uenpT7VVClzoNqXanvgdjX.jpg",
        posterPath: "/PulIVB3W999oXG6fzrwkzaX6Ze.jpg",
        rating: 6.9,
        mediaType: "movie"
    },
    {
        id: 945961,
        type: "tmdb",
        title: "异形：罗穆卢斯",
        description: "費德·阿爾瓦雷斯執導的系列新章，視效團隊以現代技術重現異形系列的生物質感，廢棄太空站的零重力場景以實體搭配CG拍攝，片中驚人的「異種結合」生物更是結合了義肢、機械裝置與CG的複合成果。",
        releaseDate: "2024-08-16",
        backdropPath: "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
        posterPath: "/cDJwZ4lSZiUnHtixdyhaPPwsjyo.jpg",
        rating: 7.2,
        mediaType: "movie"
    },
    {
        id: 799766,
        type: "tmdb",
        title: "更好的人",
        description: "羅比·威廉斯傳記片最驚人之處：主角全程以CG猴子呈現，由Jonno Davies穿上動作捕捉套裝演出，視效公司Weta FX負責製作。這是影史首部以CG動物為主角演出完整傳記片的作品，演員臉部情感精準轉化令人嘆服。",
        releaseDate: "2024-12-25",
        backdropPath: "/wP0NGOGf2PG4lHXHWEqFW0kBOye.jpg",
        posterPath: "/vd2H9yGGXefbXXSs1mLIeNzd7S9.jpg",
        rating: 7.3,
        mediaType: "movie"
    },
    {
        id: 653346,
        type: "tmdb",
        title: "猩球崛起：新世界",
        description: "Wes Ball執導，Weta FX繼承前三部曲的動作捕捉傳統，以新一代運算技術呈現數百隻猩猩在廢墟城市中的群體動態。片中猩猩的毛髮模擬達到前所未有的精細程度，每個鏡頭平均需渲染2200萬根毛髮。",
        releaseDate: "2024-05-10",
        backdropPath: "/iHYh4cdO8ylA3W0dUxTDVdyJ5G9.jpg",
        posterPath: "/tE10WMV3SK2kq79aLHztJhz0EM5.jpg",
        rating: 6.8,
        mediaType: "movie"
    },
];

// ─────────────────────────────────────────────
// 獲獎作品
// ─────────────────────────────────────────────
const Oscars_winner = [
    //97th
    { id: "1064213", year: 2025, title: "Anora", ceremony: 97 },
    { id: "974576", year: 2025, title: "Conclave", ceremony: 97 },
    { id: "823219", year: 2025, title: "Flow", ceremony: 97 },
    { id: "1000837", year: 2025, title: "I'm Still Here", ceremony: 97 },
    { id: "549509", year: 2025, title: "The Brutalist", ceremony: 97 },
    { id: "974950", year: 2025, title: "Emilia Pérez", ceremony: 97 },
    { id: "693134", year: 2025, title: "Dune: Part Two", ceremony: 97 },
    { id: "402431", year: 2025, title: "Wicked", ceremony: 97 },
    { id: "933260", year: 2025, title: "The Substance", ceremony: 97 },

    //96th
];

// ─────────────────────────────────────────────
// 提名作品
// ─────────────────────────────────────────────
const Oscars_nominee = [
    { id: "701387", year: 2026, title: "Bugonia", ceremony: 98 },
    { id: "911430", year: 2026, title: "F1", ceremony: 98 },
    { id: "1062722", year: 2026, title: "Frankenstein", ceremony: 98 },
    { id: "858024", year: 2026, title: "Hamnet", ceremony: 98 },
    { id: "1317288", year: 2026, title: "Marty Supreme", ceremony: 98 },
    { id: "1054867", year: 2026, title: "One Battle After Another", ceremony: 98 },
    { id: "1220564", year: 2026, title: "The Secret Agent", ceremony: 98 },
    { id: "1124566", year: 2026, title: "Sentimental Value", ceremony: 98 },
    { id: "1233413", year: 2026, title: "Sinners", ceremony: 98 },
    { id: "1241983", year: 2026, title: "Train Dreams", ceremony: 98 },
    { id: "1299655", year: 2026, title: "Blue Moon", ceremony: 98 },
    { id: "1456349", year: 2026, title: "It Was Just an Accident", ceremony: 98 },
    { id: "804370", year: 2026, title: "Arco", ceremony: 98 },
    { id: "1022787", year: 2026, title: "Elio", ceremony: 98 },
    { id: "803796", year: 2026, title: "KPop Demon Hunters", ceremony: 98 },
    { id: "682012", year: 2026, title: "Little Amélie or the Character of Rain", ceremony: 98 },
    { id: "1084242", year: 2026, title: "Zootopia 2", ceremony: 98 },
    { id: "1151272", year: 2026, title: "Sirât", ceremony: 98 },
    { id: "1480382", year: 2026, title: "The Voice of Hind Rajab", ceremony: 98 },
    { id: "826338", year: 2026, title: "Diane Warren: Relentless", ceremony: 98 },
    { id: "803796", year: 2026, title: "KPop Demon Hunters", ceremony: 98 },
    { id: "1358554", year: 2026, title: "Viva Verdi!", ceremony: 98 },
    { id: "1379266", year: 2026, title: "Kokuho", ceremony: 98 },
    { id: "760329", year: 2026, title: "The Smashing Machine", ceremony: 98 },
    { id: "1284120", year: 2026, title: "The Ugly Stepsister", ceremony: 98 },
    { id: "83533", year: 2026, title: "Avatar: Fire and Ash", ceremony: 98 },
    { id: "1234821", year: 2026, title: "Jurassic World Rebirth", ceremony: 98 },
    { id: "1236470", year: 2026, title: "The Lost Bus", ceremony: 98 },
    
    //97th
    { id: "549509", year: 2025, title: "The Brutalist", ceremony: 97 },
    { id: "661539", year: 2025, title: "A Complete Unknown", ceremony: 97 },
    { id: "974576", year: 2025, title: "Conclave", ceremony: 97 },
    { id: "693134", year: 2025, title: "Dune: Part Two", ceremony: 97 },
    { id: "974950", year: 2025, title: "Emilia Pérez", ceremony: 97 },
    { id: "1000837", year: 2025, title: "I'm Still Here", ceremony: 97 },
    { id: "1028196", year: 2025, title: "Nickel Boys", ceremony: 97 },
    { id: "933260", year: 2025, title: "The Substance", ceremony: 97 },
    { id: "1013850", year: 2025, title: "A Real Pain", ceremony: 97 },
    { id: "1211472", year: 2025, title: "September 5", ceremony: 97 },
];

// ─────────────────────────────────────────────
// 統一入口
// ─────────────────────────────────────────────
async function getOscars(params = {}) {
    const category = params.category || "all";

    switch (category) {
        case "97":
            return Oscars97;
        case "96":
            return Oscars96;
        case "95":
            return Oscars95;
        case "94":
            return Oscars94;
        default:
            return Oscars98;
    }
}                                               // ✅ Fix 2: 補上函數結尾的 }

// ─── 工具函数 ────────────────────────────────────────────────────────────────
/**
 * 爬取 TMDB 奖项页面，返回该届所有入围/获奖影片
 */
async function fetchAwardPage(ceremony) {
  const url = `${BASE_URL}/award/${AWARD_ID}/ceremony/${ceremony}?language=zh-CN`;
  console.log("正在请求:", url);

  const response = await Widget.http.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    },
  });

  if (!response || !response.data) {
    throw new Error("请求失败，无法获取奥斯卡数据");
  }

  return response.data;
}

/**
 * 解析 HTML，提取奖项条目
 * 返回 [{ tmdbId, mediaType, title, isWinner, category }]
 */
function parseAwardItems(html) {
  const $ = Widget.html.load(html);
  const items = [];
  const seen = new Set();

  // TMDB 奖项页结构: 每个奖项 section 下有 .winner 和 .nominee
  $(".award_categories .award_category").each((_, section) => {
    const category = $(section).find("h3").text().trim();

    $(section)
      .find(".award_candidates .award_candidate")
      .each((_, el) => {
        const isWinner = $(el).hasClass("winner");
        const link = $(el).find("a").attr("href") || "";

        // 提取 TMDB id 与 mediaType，格式通常为 /movie/12345 或 /tv/12345
        const match = link.match(/\/(movie|tv)\/(\d+)/);
        if (!match) return;

        const mediaType = match[1];
        const tmdbId = match[2];
        const key = `${mediaType}-${tmdbId}`;

        // 避免重复（同一部影片可能在多个奖项中出现）
        if (!seen.has(key)) {
          seen.add(key);
          const title =
            $(el).find(".title").text().trim() ||
            $(el).find("h2").text().trim() ||
            $(el).find("p").first().text().trim();

          items.push({ tmdbId, mediaType, title, isWinner, category });
        }
      });
  });

  // 兼容备选结构：.card_list .card 内含 data-id 属性
  if (items.length === 0) {
    $(".card").each((_, el) => {
      const link = $(el).find("a").first().attr("href") || "";
      const match = link.match(/\/(movie|tv)\/(\d+)/);
      if (!match) return;

      const mediaType = match[1];
      const tmdbId = match[2];
      const key = `${mediaType}-${tmdbId}`;
      if (seen.has(key)) return;
      seen.add(key);

      const isWinner = $(el).hasClass("winner") || $(el).closest(".winner").length > 0;
      const title =
        $(el).find("h2").text().trim() ||
        $(el).find(".title").text().trim() ||
        $(el).find("p").first().text().trim();

      items.push({ tmdbId, mediaType, title, isWinner, category: "" });
    });
  }

  console.log(`解析到 ${items.length} 条记录`);
  return items;
}

/**
 * 将解析结果转为 ForwardWidget 数据模型
 */
function toWidgetItems(items) {
  return items.map(({ tmdbId, mediaType, title, isWinner, category }) => {
    // tmdb type: movie → id 直接用数字；tv → "tv.{id}"
    const fwId = mediaType === "tv" ? `tv.${tmdbId}` : tmdbId;
    return {
      id: fwId,
      type: "tmdb",
      mediaType: mediaType === "tv" ? "tv" : "movie",
      title: isWinner ? `🏆 ${title}` : title,
      genreTitle: category || undefined,
    };
  });
}

// ─── 模块函数 ────────────────────────────────────────────────────────────────

/**
 * 历届奥斯卡獲獎作品
 */
async function loadOscars(params = {}) {
  const page = parseInt(params.page) || 1;
  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const pageItems = Oscars_winner.slice(start, start + pageSize);

  if (pageItems.length === 0) return [];

  const results = [];

  for (const bp of pageItems) {
    try {
      const data = await Widget.tmdb.get(`/movie/${bp.id}`, {
        params: { language: "zh-CN" },
      });
      if (!data) continue;

      results.push({
        id: bp.id,
        type: "tmdb",
        mediaType: "movie",
        title: `🏆 第${bp.ceremony}届 · ${data.title || bp.title}`,
        description: data.overview || "",
        rating: data.vote_average
          ? String(data.vote_average.toFixed(1))
          : undefined,
        releaseDate: data.release_date,
        posterPath: data.poster_path
          ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
          : undefined,
        backdropPath: data.backdrop_path
          ? `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`
          : undefined,
      });
    } catch (e) {
      console.error(`获取影片 ${bp.id} 失败:`, e);
      // 降级：只返回基础信息
      results.push({
        id: bp.id,
        type: "tmdb",
        mediaType: "movie",
        title: `🏆 第${bp.ceremony}届 · ${bp.title}`,
      });
    }
  }

  return results;
}

/**
 * 历届奥斯卡提名作品
 */
async function loadOscarsnominee(params = {}) {
  const page = parseInt(params.page) || 1;
  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const pageItems = Oscars_nominee.slice(start, start + pageSize);

  if (pageItems.length === 0) return [];

  const results = [];

  for (const bp of pageItems) {
    try {
      const data = await Widget.tmdb.get(`/movie/${bp.id}`, {
        params: { language: "zh-CN" },
      });
      if (!data) continue;

      results.push({
        id: bp.id,
        type: "tmdb",
        mediaType: "movie",
        title: `🎨 第${bp.ceremony}届 · ${data.title || bp.title}`,
        description: data.overview || "",
        rating: data.vote_average
          ? String(data.vote_average.toFixed(1))
          : undefined,
        releaseDate: data.release_date,
        posterPath: data.poster_path
          ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
          : undefined,
        backdropPath: data.backdrop_path
          ? `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`
          : undefined,
      });
    } catch (e) {
      console.error(`获取影片 ${bp.id} 失败:`, e);
      // 降级：只返回基础信息
      results.push({
        id: bp.id,
        type: "tmdb",
        mediaType: "movie",
        title: `🎨 第${bp.ceremony}届 · ${bp.title}`,
      });
    }
  }

  return results;
}
