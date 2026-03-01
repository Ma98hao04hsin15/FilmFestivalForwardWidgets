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
            title: "歷屆奥斯卡金像奖奥斯卡全部作品",
            functionName: "getOscars97",
            cacheDuration: 86400,
            params: [
                {
                    name: "category",
                    title: "屆數",
                    type: "enumeration",
                    value: "all",                          // ✅ Fix 3: 改為 "all" 與 enumOptions 對應
                    enumOptions: [
                        { title: "🎭 98th 全部作品", value: "98" },
                        { title: "🎭 97th 全部作品", value: "97" },
                        { title: "🎭 96th 全部作品", value: "96" },
                        { title: "🎭 95th 全部作品", value: "95" },
                        { title: "🎭 94th 全部作品", value: "94" },
                        { title: "🎭 93th 全部作品", value: "93" },
                        { title: "🎭 92th 全部作品", value: "92" },
                        { title: "🎭 91th 全部作品", value: "91" },
                        { title: "🎭 90th 全部作品", value: "90" },
                        { title: "🎭 89th 全部作品", value: "89" },
                        { title: "🎭 88th 全部作品", value: "88" },
                        { title: "🎭 87th 全部作品", value: "87" },
                        { title: "🎭 86th 全部作品", value: "86" },
                        { title: "🎭 85th 全部作品", value: "85" },
                        { title: "🎭 84th 全部作品", value: "84" },
                        { title: "🎭 83th 全部作品", value: "83" },
                        { title: "🎭 82th 全部作品", value: "82" },
                        { title: "🎭 81th 全部作品", value: "81" },
                        { title: "🎭 80th 全部作品", value: "80" },
                        { title: "🎭 79th 全部作品", value: "79" },
                        { title: "🎭 78th 全部作品", value: "78" },
                        { title: "🎭 77th 全部作品", value: "77" },
                        { title: "🎭 76th 全部作品", value: "76" },
                        { title: "🎭 75th 全部作品", value: "75" },
                        { title: "🎭 74th 全部作品", value: "74" },
                        { title: "🎭 73th 全部作品", value: "73" },                    ]
                }
            ]
        }
    ]
};
// ─────────────────────────────────────────────
// 98th全部作品
// ─────────────────────────────────────────────
    const Oscars97 = [
    { id: "701387",  year: 2026, title: "Bugonia",                                ceremony: 98 },
    { id: "911430",  year: 2026, title: "F1",                                     ceremony: 98 },
    { id: "1062722", year: 2026, title: "Frankenstein",                           ceremony: 98 },
    { id: "858024",  year: 2026, title: "Hamnet",                                 ceremony: 98 },
    { id: "1317288", year: 2026, title: "Marty Supreme",                          ceremony: 98 },
    { id: "1054867", year: 2026, title: "One Battle After Another",               ceremony: 98 },
    { id: "1220564", year: 2026, title: "The Secret Agent",                       ceremony: 98 },
    { id: "1124566", year: 2026, title: "Sentimental Value",                      ceremony: 98 },
    { id: "1233413", year: 2026, title: "Sinners",                                ceremony: 98 },
    { id: "1241983", year: 2026, title: "Train Dreams",                           ceremony: 98 },
    { id: "1299655", year: 2026, title: "Blue Moon",                              ceremony: 98 },
    { id: "1456349", year: 2026, title: "It Was Just an Accident",                ceremony: 98 },
    { id: "804370",  year: 2026, title: "Arco",                                   ceremony: 98 },
    { id: "1022787", year: 2026, title: "Elio",                                   ceremony: 98 },
    { id: "803796",  year: 2026, title: "KPop Demon Hunters",                     ceremony: 98 }, // 重複項已移除
    { id: "682012",  year: 2026, title: "Little Amélie or the Character of Rain", ceremony: 98 },
    { id: "1084242", year: 2026, title: "Zootopia 2",                             ceremony: 98 },
    { id: "1151272", year: 2026, title: "Sirât",                                  ceremony: 98 },
    { id: "1480382", year: 2026, title: "The Voice of Hind Rajab",                ceremony: 98 },
    { id: "826338",  year: 2026, title: "Diane Warren: Relentless",               ceremony: 98 },
    { id: "1358554", year: 2026, title: "Viva Verdi!",                            ceremony: 98 },
    { id: "1379266", year: 2026, title: "Kokuho",                                 ceremony: 98 },
    { id: "760329",  year: 2026, title: "The Smashing Machine",                   ceremony: 98 },
    { id: "1284120", year: 2026, title: "The Ugly Stepsister",                    ceremony: 98 },
    { id: "83533",   year: 2026, title: "Avatar: Fire and Ash",                   ceremony: 98 },
    { id: "1234821", year: 2026, title: "Jurassic World Rebirth",                 ceremony: 98 },
    { id: "1236470", year: 2026, title: "The Lost Bus",                           ceremony: 98 },
];

// ─────────────────────────────────────────────
// 97th全部作品
// ─────────────────────────────────────────────
const Oscars97 = [
	{ id: "1064213", year: 2025, title: "Anora", ceremony: 97 },
	{ id: "549509", year: 2025, title: "The Brutalist", ceremony: 97 },
	{ id: "661539", year: 2025, title: "A Complete Unknown", ceremony: 97 },
	{ id: "974576", year: 2025, title: "Conclave", ceremony: 97 },
	{ id: "693134", year: 2025, title: "Dune: Part Two", ceremony: 97 },
	{ id: "974950", year: 2025, title: "Emilia Pérez", ceremony: 97 },
	{ id: "1000837", year: 2025, title: "I'm Still Here", ceremony: 97 },
	{ id: "1028196", year: 2025, title: "Nickel Boys", ceremony: 97 },
	{ id: "933260", year: 2025, title: "The Substance", ceremony: 97 },
	{ id: "402431", year: 2025, title: "Wicked", ceremony: 97 },
];

// ─────────────────────────────────────────────
// 統一入口
// ─────────────────────────────────────────────
async function getOscars97(params = {}) {
    const category = params.category || "all";

    switch (category) {
        case "98":
            return Oscars98;

        case "97":
            return Oscars97;
            
        default:
            return Oscars98;
    }
}                                               // ✅ Fix 2: 補上函數結尾的 }
