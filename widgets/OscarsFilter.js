// 奥斯卡金像奖 ForwardWidget
// 数据来源: TMDB Award API
WidgetMetadata = {
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
      title: "🎬 全部屆次",
      description: "歷屆奧斯卡全部作品",
      requiresWebView: false,
      functionName: "getAll",
      cacheDuration: 604800,
      params: [
      {
      name: "ceremony",
      title: "篩選屆次",
      type: "select",
      options: [
        { label: "全部", value: "" },
        { label: "第98屆", value: "98" },
        { label: "第97屆", value: "97" },
        { label: "第96屆", value: "96" },
        { label: "第95屆", value: "95" },
        { label: "第73屆", value: "73" },
      ],
    },
      { name: "page", title: "页码", type: "page" }],
    },
    {
      title: "🎬 第98屆",
      description: "第98屆作品",
      requiresWebView: false,
      functionName: "load98Oscars",
      cacheDuration: 604800,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      title: "🎬 第97屆",
      description: "第97屆作品",
      requiresWebView: false,
      functionName: "load97Oscars",
      cacheDuration: 604800,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      title: "🎬 第96屆",
      description: "第96屆作品",
      requiresWebView: false,
      functionName: "load96Oscars",
      cacheDuration: 604800,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      title: "🎬 第95屆",
      description: "第95屆作品",
      requiresWebView: false,
      functionName: "load95Oscars",
      cacheDuration: 604800,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      title: "🎬 第73屆",
      description: "第73屆作品",
      requiresWebView: false,
      functionName: "load73Oscars",
      cacheDuration: 604800,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
  ],
};

// ─── 常量 ───────────────────────────────────────────────────────────────────

const AWARD_ID = "1-academy-awards";
const BASE_URL = "https://www.themoviedb.org";

const Oscars98 = [
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

const Oscars96 = [
  { id: "872585",  year: 2024, title: "Oppenheimer",                                   ceremony: 96 },
  { id: "1056360", year: 2024, title: "American Fiction",                              ceremony: 96 },
  { id: "915935",  year: 2024, title: "Anatomy of a Fall",                             ceremony: 96 },
  { id: "346698",  year: 2024, title: "芭比",                                           ceremony: 96 },
  { id: "840430",  year: 2024, title: "The Holdovers",                                 ceremony: 96 },
  { id: "466420",  year: 2024, title: "Killers of the Flower Moon",                    ceremony: 96 },
  { id: "523607",  year: 2024, title: "Maestro",                                       ceremony: 96 },
  { id: "666277",  year: 2024, title: "Past Lives",                                    ceremony: 96 },
  { id: "792307",  year: 2024, title: "Poor Things",                                   ceremony: 96 },
  { id: "467244",  year: 2024, title: "The Zone of Interest",                          ceremony: 96 },
  { id: "839369",  year: 2024, title: "May December",                                  ceremony: 96 },
  { id: "508883",  year: 2024, title: "The Boy and the Heron",                         ceremony: 96 },
  { id: "976573",  year: 2024, title: "Elemental",                                     ceremony: 96 },
  { id: "961323",  year: 2024, title: "Nimona",                                        ceremony: 96 },
  { id: "838240",  year: 2024, title: "Robot Dreams",                                  ceremony: 96 },
  { id: "569094",  year: 2024, title: "Spider-Man: Across the Spider-Verse",           ceremony: 96 },
  { id: "937746",  year: 2024, title: "Io Capitano",                                   ceremony: 96 },
  { id: "976893",  year: 2024, title: "Perfect Days",                                  ceremony: 96 },
  { id: "906126",  year: 2024, title: "Society of the Snow",                           ceremony: 96 },
  { id: "998022",  year: 2024, title: "The Teachers' Lounge",                          ceremony: 96 },
  { id: "335977",  year: 2024, title: "Indiana Jones and the Dial of Destiny",         ceremony: 96 },
  { id: "626332",  year: 2024, title: "Flamin' Hot",                                   ceremony: 96 },
  { id: "1171816", year: 2024, title: "American Symphony",                             ceremony: 96 },
  { id: "670292",  year: 2024, title: "The Creator",                                   ceremony: 96 },
  { id: "575264",  year: 2024, title: "Mission: Impossible - Dead Reckoning Part One", ceremony: 96 },
  { id: "753342",  year: 2024, title: "Napoleon",                                      ceremony: 96 },
  { id: "991708",  year: 2024, title: "El Conde",                                      ceremony: 96 },
  { id: "899524",  year: 2024, title: "Golda",                                         ceremony: 96 },
  { id: "940721",  year: 2024, title: "Godzilla Minus One",                            ceremony: 96 },
  { id: "447365",  year: 2024, title: "Guardians of the Galaxy Vol. 3",                ceremony: 96 },
];

const Oscars95 = [
  { id: "545611", year: 2023, title: "Everything Everywhere All at Once",             ceremony: 95 },
  { id: "49046",  year: 2023, title: "All Quiet on the Western Front",                ceremony: 95 },
  { id: "76600",  year: 2023, title: "Avatar: The Way of Water",                      ceremony: 95 },
  { id: "674324", year: 2023, title: "The Banshees of Inisherin",                     ceremony: 95 },
  { id: "614934", year: 2023, title: "Elvis",                                         ceremony: 95 },
  { id: "804095", year: 2023, title: "The Fabelmans",                                 ceremony: 95 },
  { id: "817758", year: 2023, title: "Tár",                                           ceremony: 95 },
  { id: "361743", year: 2023, title: "Top Gun: Maverick",                             ceremony: 95 },
  { id: "497828", year: 2023, title: "Triangle of Sadness",                           ceremony: 95 },
  { id: "777245", year: 2023, title: "Women Talking",                                 ceremony: 95 },
  { id: "661374", year: 2023, title: "Glass Onion: A Knives Out Mystery",             ceremony: 95 },
  { id: "760099", year: 2023, title: "Living",                                        ceremony: 95 },
  { id: "555604", year: 2023, title: "Guillermo del Toro's Pinocchio",                ceremony: 95 },
  { id: "869626", year: 2023, title: "Marcel the Shell with Shoes On",                ceremony: 95 },
  { id: "315162", year: 2023, title: "Puss in Boots: The Last Wish",                  ceremony: 95 },
  { id: "560057", year: 2023, title: "The Sea Beast",                                 ceremony: 95 },
  { id: "508947", year: 2023, title: "Turning Red",                                   ceremony: 95 },
  { id: "714888", year: 2023, title: "Argentina, 1985",                               ceremony: 95 },
  { id: "901563", year: 2023, title: "Close",                                         ceremony: 95 },
  { id: "785398", year: 2023, title: "EO",                                            ceremony: 95 },
  { id: "916405", year: 2023, title: "The Quiet Girl",                                ceremony: 95 },
  { id: "615777", year: 2023, title: "Babylon",                                       ceremony: 95 },
  { id: "579974", year: 2023, title: "RRR",                                           ceremony: 95 },
  { id: "822124", year: 2023, title: "Tell It Like a Woman",                          ceremony: 95 },
  { id: "505642", year: 2023, title: "Black Panther: Wakanda Forever",                ceremony: 95 },
  { id: "414906", year: 2023, title: "The Batman",                                    ceremony: 95 },
  { id: "685691", year: 2023, title: "Bardo, False Chronicle of a Handful of Truths", ceremony: 95 },
  { id: "814757", year: 2023, title: "Empire of Light",                               ceremony: 95 },
  { id: "785084", year: 2023, title: "The Whale",                                     ceremony: 95 },
  { id: "754609", year: 2023, title: "Mrs. Harris Goes to Paris",                     ceremony: 95 },
];

const Oscars73 = [
  { id: "392",   year: 2001, title: "Chocolat",                          ceremony: 73 },
  { id: "146",   year: 2001, title: "Crouching Tiger, Hidden Dragon",    ceremony: 73 },
  { id: "462",   year: 2001, title: "Erin Brockovich",                   ceremony: 73 },
  { id: "98",    year: 2001, title: "Gladiator",                         ceremony: 73 },
  { id: "1900",  year: 2001, title: "Traffic",                           ceremony: 73 },
  { id: "786",   year: 2001, title: "Almost Famous",                     ceremony: 73 },
  { id: "71",    year: 2001, title: "Billy Elliot",                      ceremony: 73 },
  { id: "14295", year: 2001, title: "You Can Count on Me",               ceremony: 73 },
  { id: "134",   year: 2001, title: "O Brother, Where Art Thou?",        ceremony: 73 },
  { id: "11004", year: 2001, title: "Wonder Boys",                       ceremony: 73 },
  { id: "55",    year: 2001, title: "Amores Perros",                     ceremony: 73 },
  { id: "29937", year: 2001, title: "Divided We Fall",                   ceremony: 73 },
  { id: "58886", year: 2001, title: "Everybody's Famous!",               ceremony: 73 },
  { id: "10697", year: 2001, title: "The Taste of Others",               ceremony: 73 },
  { id: "10867", year: 2001, title: "Malèna",                            ceremony: 73 },
  { id: "2024",  year: 2001, title: "The Patriot",                       ceremony: 73 },
  { id: "1597",  year: 2001, title: "Meet the Parents",                  ceremony: 73 },
  { id: "16",    year: 2001, title: "Dancer in the Dark",                ceremony: 73 },
  { id: "11688", year: 2001, title: "The Emperor's New Groove",          ceremony: 73 },
  { id: "3536",  year: 2001, title: "U-571",                             ceremony: 73 },
  { id: "5551",  year: 2001, title: "Space Cowboys",                     ceremony: 73 },
  { id: "8358",  year: 2001, title: "Cast Away",                         ceremony: 73 },
  { id: "2133",  year: 2001, title: "The Perfect Storm",                 ceremony: 73 },
  { id: "8871",  year: 2001, title: "How the Grinch Stole Christmas",    ceremony: 73 },
  { id: "10876", year: 2001, title: "Quills",                            ceremony: 73 },
  { id: "7093",  year: 2001, title: "Vatel",                             ceremony: 73 },
];

const CEREMONIES = {
  98: Oscars98,
  97: Oscars97,
  96: Oscars96,
  95: Oscars95,
  73: Oscars73,
};

// ─── 核心分頁函數 ─────────────────────────────────────────────────────────────

// ✅ 修復 BUG2：移除從未被呼叫的 fetchAwardPage / parseAwardItems / toWidgetItems（Dead code）
// 統一改用 fetchStaticCeremonyPage，各屆函數共用同一邏輯

async function fetchStaticCeremonyPage(list, ceremony, page, pageSize = 10) {
  const start = (page - 1) * pageSize;
  const pageItems = list.slice(start, start + pageSize);
  if (pageItems.length === 0) return [];

  return Promise.all(
    pageItems.map(async (bp) => {
      const label = ceremony !== null ? ceremony : bp.ceremony;
      try {
        const data = await Widget.tmdb.get(`/movie/${bp.id}`, {
          params: { language: "zh-CN" },
        });
        if (!data) throw new Error("no data");
        return {
          id: bp.id,
          type: "tmdb",
          mediaType: "movie",
          title: `🏆 第${label}届 · ${data.title || bp.title}`,
          description: data.overview || "",
          rating: data.vote_average ? String(data.vote_average.toFixed(1)) : undefined,
          releaseDate: data.release_date,
          posterPath: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : undefined,
          backdropPath: data.backdrop_path ? `https://image.tmdb.org/t/p/w1280${data.backdrop_path}` : undefined,
        };
      } catch (e) {
        console.error(`获取影片 ${bp.id} 失败:`, e);
        return { id: bp.id, type: "tmdb", mediaType: "movie", title: `第${label}届 · ${bp.title}` };
      }
    })
  );
}

// ─── 模块函数 ────────────────────────────────────────────────────────────────

async function getAll(params = {}) {
  const page = parseInt(params.page) || 1;
  const ceremony = parseInt(params.ceremony) || null;

  // 若有指定屆次，只取該屆；否則取全部
  const sourceList = ceremony
    ? (CEREMONIES[ceremony] ?? [])
    : [98, 97, 96, 95, 73].flatMap((c) => CEREMONIES[c]);

  return fetchStaticCeremonyPage(sourceList, ceremony, page);
}

// 各屆 loader 統一用工廠函數產生
function createOscarsLoader(ceremony) {
  return async function (params = {}) {
    return fetchStaticCeremonyPage(CEREMONIES[ceremony], ceremony, parseInt(params.page) || 1);
  };
}

const load98Oscars = createOscarsLoader(98);
const load97Oscars = createOscarsLoader(97);
const load96Oscars = createOscarsLoader(96);
const load95Oscars = createOscarsLoader(95);
const load73Oscars = createOscarsLoader(73);
