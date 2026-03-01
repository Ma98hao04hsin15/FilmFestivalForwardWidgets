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
      title: "🎭第98屆",
      description: "第98屆作品",
      requiresWebView: false,
      functionName: "loadBestPictures",
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
      title: "🎭第97屆",
      description: "第97屆作品",
      requiresWebView: false,
      functionName: "loadBestPicturesnominee",
      cacheDuration: 604800,
      params: [
        {
          name: "page",
          title: "页码",
          type: "page",
        },
      ],
    },
  ],
};

// ─── 常量 ───────────────────────────────────────────────────────────────────

const AWARD_ID = "1-academy-awards";
const BASE_URL = "https://www.themoviedb.org";

// 历届最佳影片获奖 TMDB ID（movie）
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

// 历届最佳影片提名 TMDB ID（movie）
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
    { id: "929204", year: 2025, title: "Wallace & Gromit: Vengeance Most Fowl",  ceremony: 97 }, 
    { id: "1184918", year: 2025, title: "The Wild Robot",                         ceremony: 97 }, 
    { id: "1278263", year: 2025, title: "The Seed of the Sacred Fig",             ceremony: 97 }, 
    { id: "1232827", year: 2025, title: "The Girl with the Needle",               ceremony: 97 },
    { id: "1061699", year: 2025, title: "The Six Triple Eight",                   ceremony: 97 },
    { id: "977326",  year: 2025, title: "Elton John: Never Too Late",             ceremony: 97 },
    { id: "426063",  year: 2025, title: "Nosferatu",                              ceremony: 97 },
    { id: "1038263", year: 2025, title: "Maria",                                  ceremony: 97 },
    { id: "989662", year: 2025, title: "A Different Man",                         ceremony: 97 },
    { id: "558449",  year: 2025, title: "Gladiator II",                           ceremony: 97 },
    { id: "945961",  year: 2025, title: "Alien: Romulus",                         ceremony: 97 },
    { id: "799766",  year: 2025, title: "Better Man",                             ceremony: 97 },
    { id: "653346",  year: 2025, title: "Kingdom of the Planet of the Apes",      ceremony: 97 },
];

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
 * 历届奥斯卡最佳影片獲獎作品
 */
async function loadBestPictures(params = {}) {
  const page = parseInt(params.page) || 1;
  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const pageItems = BEST_PICTURES.slice(start, start + pageSize);

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
 * 历届奥斯卡最佳影片提名作品
 */
async function loadBestPicturesnominee(params = {}) {
  const page = parseInt(params.page) || 1;
  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const pageItems = BEST_PICTURES_NOMINEE.slice(start, start + pageSize);

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
