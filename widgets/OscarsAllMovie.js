// 奥斯卡金像奖 ForwardWidget
// 数据来源: TMDB Award API
WidgetMetadata = {
  id: "OscarsAllMovie",
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
          name: "page",
          title: "页码",
          type: "page",
        },
      ],
    },
    {
      title: "🎯 第98屆",
      description: "第98屆作品",
      requiresWebView: false,
      functionName: "load98Oscars",
      cacheDuration: 604800,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      title: "🎯 第97屆",
      description: "第97屆作品",
      requiresWebView: false,
      functionName: "load97Oscars",
      cacheDuration: 604800,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      title: "🎯 第96屆",
      description: "第96屆作品",
      requiresWebView: false,
      functionName: "load96Oscars",
      cacheDuration: 604800,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
    {
      // ✅ 修復 BUG5：functionName 原本錯誤指向 "load96Oscars"，改為 "load95Oscars"
      title: "🎯 第95屆",
      description: "第95屆作品",
      requiresWebView: false,
      functionName: "load95Oscars",
      cacheDuration: 604800,
      params: [{ name: "page", title: "页码", type: "page" }],
    },
  ],
};

// ─── 常量 ───────────────────────────────────────────────────────────────────

const AWARD_ID = "1-academy-awards";
const BASE_URL = "https://www.themoviedb.org";

// 98th 全部作品
const BEST_PICTURES = [
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

// 97th 全部作品
const BEST_PICTURES_NOMINEE = [
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

// ✅ 修復 BUG1：96_Oscars → Oscars96（變數名不能以數字開頭）
// ✅ 修復 BUG3：補上陣列末尾遺漏的 ];
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

// ✅ 修復 BUG2：95_Oscars → Oscars95（變數名不能以數字開頭）
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

// ✅ 修復 BUG4：補充定義 CEREMONIES，供 getAll() 使用
const CEREMONIES = {
  98: BEST_PICTURES,
  97: BEST_PICTURES_NOMINEE,
  96: Oscars96,
  95: Oscars95,
};

// ─── 工具函数 ────────────────────────────────────────────────────────────────

async function fetchAwardPage(ceremony) {
  const url = `${BASE_URL}/award/${AWARD_ID}/ceremony/${ceremony}?language=zh-CN`;
  console.log("正在请求:", url);
  const response = await Widget.http.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    },
  });
  if (!response || !response.data) throw new Error("请求失败，无法获取奥斯卡数据");
  return response.data;
}

function parseAwardItems(html) {
  const $ = Widget.html.load(html);
  const items = [];
  const seen = new Set();

  $(".award_categories .award_category").each((_, section) => {
    const category = $(section).find("h3").text().trim();
    $(section).find(".award_candidates .award_candidate").each((_, el) => {
      const isWinner = $(el).hasClass("winner");
      const link = $(el).find("a").attr("href") || "";
      const match = link.match(/\/(movie|tv)\/(\d+)/);
      if (!match) return;
      const mediaType = match[1];
      const tmdbId = match[2];
      const key = `${mediaType}-${tmdbId}`;
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

function toWidgetItems(items) {
  return items.map(({ tmdbId, mediaType, title, isWinner, category }) => {
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

// ─── 核心分頁函數 ─────────────────────────────────────────────────────────────

/**
 * 通用靜態分頁函數，所有屆次模塊統一使用。
 * ceremony 傳 null 時（全部模式），標題用每筆資料自帶的 bp.ceremony。
 * TMDB 失敗時統一 fallback，不靜默丟失影片。
 */
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
          title: `第${label}届 · ${data.title || bp.title}`,
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

/**
 * 全部屆次（第98～95屆合併，由新到舊）
 */
async function getAll(params = {}) {
  const page = parseInt(params.page) || 1;
  const sourceList = [98, 97, 96, 95].flatMap((c) => CEREMONIES[c]);
  return fetchStaticCeremonyPage(sourceList, null, page);
}

// ✅ 修復 BUG6：load96Oscars 原本引用非法變數 96_Oscars，改為 Oscars96
//    同時改用 fetchStaticCeremonyPage，消除重複代碼並統一 fallback 行為
async function load98Oscars(params = {}) {
  return fetchStaticCeremonyPage(BEST_PICTURES, 98, parseInt(params.page) || 1);
}

async function load97Oscars(params = {}) {
  return fetchStaticCeremonyPage(BEST_PICTURES_NOMINEE, 97, parseInt(params.page) || 1);
}

async function load96Oscars(params = {}) {
  return fetchStaticCeremonyPage(Oscars96, 96, parseInt(params.page) || 1);
}

// ✅ 修復 BUG7：load95Oscars 原本引用非法變數 95_Oscars，改為 Oscars95
async function load95Oscars(params = {}) {
  return fetchStaticCeremonyPage(Oscars95, 95, parseInt(params.page) || 1);
}
