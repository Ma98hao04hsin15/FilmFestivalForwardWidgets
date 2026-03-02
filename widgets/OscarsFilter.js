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
                    title: "歷屆全部作品",
                    type: "enumeration",
                    value: "allmovie",                          
                    enumOptions: [
						{ title: "第97届 (2025)", value: "97" },
						{ title: "第96届 (2024)", value: "96" },
						{ title: "第95届 (2023)", value: "95" },
						{ title: "第94届 (2022)", value: "94" },
						{ title: "第93届 (2021)", value: "93" },
						{ title: "第92届 (2020)", value: "92" },
						{ title: "第91届 (2019)", value: "91" },
						{ title: "第90届 (2018)", value: "90" },
						{ title: "第89届 (2017)", value: "89" },
						{ title: "第88届 (2016)", value: "88" },
						{ title: "第87届 (2015)", value: "87" },
						{ title: "第86届 (2014)", value: "86" },
						{ title: "第85届 (2013)", value: "85" },
						{ title: "第84届 (2012)", value: "84" },
						{ title: "第83届 (2011)", value: "83" },
						{ title: "第82届 (2010)", value: "82" },
						{ title: "第81届 (2009)", value: "81" },
						{ title: "第80届 (2008)", value: "80" },
						{ title: "第79届 (2007)", value: "79" },
						{ title: "第78届 (2006)", value: "78" },
						{ title: "第77届 (2005)", value: "77" },
						{ title: "第76届 (2004)", value: "76" },
						{ title: "第75届 (2003)", value: "75" },
 						{ title: "第74届 (2002)", value: "74" },
						{ title: "第73届 (2001)", value: "73" },
                   ]
                }
            ]
        },
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
  { id: "1064213", year: 2025, title: "Anora",                                  ceremony: 97 },
  { id: "549509",  year: 2025, title: "The Brutalist",                          ceremony: 97 },
  { id: "661539",  year: 2025, title: "A Complete Unknown",                     ceremony: 97 },
  { id: "974576",  year: 2025, title: "Conclave",                               ceremony: 97 },
  { id: "693134",  year: 2025, title: "Dune: Part Two",                         ceremony: 97 },
  { id: "974950",  year: 2025, title: "Emilia Pérez",                           ceremony: 97 },
  { id: "1000837", year: 2025, title: "I'm Still Here",                         ceremony: 97 },
  { id: "1028196", year: 2025, title: "Nickel Boys",                            ceremony: 97 },
  { id: "933260",  year: 2025, title: "The Substance",                          ceremony: 97 },
  { id: "402431",  year: 2025, title: "Wicked",                                 ceremony: 97 },
  { id: "1013850", year: 2025, title: "A Real Pain",                            ceremony: 97 },
  { id: "1211472", year: 2025, title: "September 5",                            ceremony: 97 },
  { id: "1155828", year: 2025, title: "Sing Sing",                              ceremony: 97 },
  { id: "823219",  year: 2025, title: "Flow",                                   ceremony: 97 },
  { id: "1022789", year: 2025, title: "Inside Out 2",                           ceremony: 97 },
  { id: "1064486", year: 2025, title: "Memoir of a Snail",                      ceremony: 97 },
  { id: "929204",  year: 2025, title: "Wallace & Gromit: Vengeance Most Fowl",  ceremony: 97 },
  { id: "1184918", year: 2025, title: "The Wild Robot",                         ceremony: 97 },
  { id: "1278263", year: 2025, title: "The Seed of the Sacred Fig",             ceremony: 97 },
  { id: "1232827", year: 2025, title: "The Girl with the Needle",               ceremony: 97 },
  { id: "1061699", year: 2025, title: "The Six Triple Eight",                   ceremony: 97 },
  { id: "977326",  year: 2025, title: "Elton John: Never Too Late",             ceremony: 97 },
  { id: "426063",  year: 2025, title: "Nosferatu",                              ceremony: 97 },
  { id: "1038263", year: 2025, title: "Maria",                                  ceremony: 97 },
  { id: "989662",  year: 2025, title: "A Different Man",                        ceremony: 97 },
  { id: "558449",  year: 2025, title: "Gladiator II",                           ceremony: 97 },
  { id: "945961",  year: 2025, title: "Alien: Romulus",                         ceremony: 97 },
  { id: "799766",  year: 2025, title: "Better Man",                             ceremony: 97 },
  { id: "653346",  year: 2025, title: "Kingdom of the Planet of the Apes",      ceremony: 97 },
];

// ─────────────────────────────────────────────
// 獲獎作品
// ─────────────────────────────────────────────
const Oscars97_winner = [
  { id: "1064213", year: 2025, title: "Anora",                                  ceremony: 97 },
];

// ─────────────────────────────────────────────
// 提名作品
// ─────────────────────────────────────────────
const Oscars97_nominee = [
  { id: "549509",  year: 2025, title: "The Brutalist",                          ceremony: 97 },
  { id: "661539",  year: 2025, title: "A Complete Unknown",                     ceremony: 97 },
  { id: "974576",  year: 2025, title: "Conclave",                               ceremony: 97 },
  { id: "693134",  year: 2025, title: "Dune: Part Two",                         ceremony: 97 },
  { id: "974950",  year: 2025, title: "Emilia Pérez",                           ceremony: 97 },
  { id: "1000837", year: 2025, title: "I'm Still Here",                         ceremony: 97 },
  { id: "1028196", year: 2025, title: "Nickel Boys",                            ceremony: 97 },
  { id: "933260",  year: 2025, title: "The Substance",                          ceremony: 97 },
  { id: "402431",  year: 2025, title: "Wicked",                                 ceremony: 97 },
];

// ─────────────────────────────────────────────
// 統一入口
// ─────────────────────────────────────────────
async function getOscars(params = {}) {
    const category = params.category || "all";

    switch (category) {
        case "all":
            return Oscars97;

        case "winner":
            return Oscars97_winner;

        case "nominee":
            return Oscars97_nominee;

        default:
            return Oscars97;
    }
}                                               // ✅ Fix 2: 補上函數結尾的 }
