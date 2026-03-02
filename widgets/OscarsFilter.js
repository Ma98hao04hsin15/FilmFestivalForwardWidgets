// 奥斯卡金像奖 ForwardWidget
// 数据来源: TMDB Award API
const WidgetMetadata = {
  id: "OscarsFilter",
  title: "🏆 历届奥斯卡金像奖入围与获奖影片",
  description: "获取历届奥斯卡金像奖入围与获奖影片",
  author: "ForwardWidget",
  site: "https://www.themoviedb.org/award/1-academy-awards",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 86400,
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
          value: "all",
          enumOptions: [
            { title: "🎭 歷屆全部作品", value: "Oscar" },
            { title: "🎭 第98屆", value: "98" },
            { title: "🎭 第97屆", value: "97" },
          ]
        },
        { 
          name: "page", 
          title: "页码", 
          type: "page" 
        }
      ]
    }
  ],
};

// ─── 数据集 ──────────────────────────────────────────────────────────────────

const Oscars_98 = [
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
  { id: "803796",  year: 2026, title: "KPop Demon Hunters",                     ceremony: 98 },
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

const Oscars_97 = [
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

// ─── 辅助函数 ────────────────────────────────────────────────────────────────

/**
 * 合并多个数组并根据 ID 去重
 */
function mergeUnique(...arrays) {
  const allMovies = arrays.flat();
  const seen = new Set();
  return allMovies.filter(movie => {
    const duplicate = seen.has(movie.id);
    seen.add(movie.id);
    return !duplicate;
  });
}

// ─── 统一入口 ────────────────────────────────────────────────────────────────

async function getOscars(params = {}) {
  const category = params.category || "Oscar";

  switch (category) {
    case "98":
      return Oscars_98;

    case "97":
      return Oscars_97;

  case "Oscar":
    case "all": // Added as a fallback
    default:
      return mergeUnique(Oscars_98, Oscars_97);
  }
}
