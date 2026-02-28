// 奥斯卡金像奖 ForwardWidget
// 数据来源: TMDB Award API
WidgetMetadata = {
  id: "academy_awards",
  title: "🏆 奥斯卡金像奖",
  description: "获取历届奥斯卡金像奖入围与获奖影片",
  author: "ForwardWidget",
  site: "https://www.themoviedb.org/award/1-academy-awards",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 86400,
  modules: [
    {
      title: "奥斯卡最佳影片",
      description: "历届奥斯卡最佳影片获奖作品",
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
      title: "奥斯卡最佳影片(提名)",
      description: "历届奥斯卡最佳影片获奖作品",
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
  // 第97届 ~ 第77届（每届最佳影片，按届次倒序）
  { id: "1064213", year: 2025, title: "Anora", ceremony: 97 },
  { id: "872585", year: 2024, title: "Oppenheimer", ceremony: 96 },
  { id: "545611", year: 2023, title: "Everything Everywhere All at Once", ceremony: 95 },
  { id: "776503", year: 2022, title: "CODA", ceremony: 94 },
  { id: "581734", year: 2021, title: "Nomadland", ceremony: 93 },
  { id: "496243", year: 2020, title: "Parasite", ceremony: 92 },
  { id: "490132", year: 2019, title: "Green Book", ceremony: 91 },
  { id: "399055", year: 2018, title: "The Shape of Water", ceremony: 90 },
  { id: "376867", year: 2017, title: "Moonlight", ceremony: 89 },
  { id: "314365", year: 2016, title: "Spotlight", ceremony: 88 },
  { id: "194662", year: 2015, title: "Birdman", ceremony: 87 },
  { id: "76203", year: 2014, title: "12 Years a Slave", ceremony: 86 },
  { id: "68734", year: 2013, title: "Argo", ceremony: 85 },
  { id: "74643", year: 2012, title: "The Artist", ceremony: 84 },
  { id: "45269", year: 2011, title: "The King's Speech", ceremony: 83 },
  { id: "12162", year: 2010, title: "The Hurt Locker", ceremony: 82 },
  { id: "12405", year: 2009, title: "Slumdog Millionaire", ceremony: 81 },
  { id: "6977", year: 2008, title: "No Country for Old Men", ceremony: 80 },
  { id: "1422", year: 2007, title: "The Departed", ceremony: 79 },
  { id: "1640", year: 2006, title: "Crash", ceremony: 78 },
  { id: "70", year: 2005, title: "Million Dollar Baby", ceremony: 77 },
  { id: "122", year: 2004, title: "The Lord of the Rings: The Return of the King", ceremony: 76 },  
  { id: "1574", year: 2003, title: "Chicago", ceremony: 75 },
  { id: "453", year: 2002, title: "A Beautiful Mind", ceremony: 74 },
  { id: "98", year: 2001, title: "Gladiator", ceremony: 73 },
];

// 历届最佳影片提名 TMDB ID（movie）
const BEST_PICTURES_NOMINEE = [
  // 第97届 ~ 第77届（每届最佳影片，按届次倒序）
  { id: "1064213", year: 2025, title: "Anora", ceremony: 97 },
  
  { id: "872585", year: 2024, title: "Oppenheimer", ceremony: 96 },
  
  { id: "545611", year: 2023, title: "Everything Everywhere All at Once", ceremony: 95 },
  
  { id: "776503", year: 2022, title: "CODA", ceremony: 94 },
  
  { id: "581734", year: 2021, title: "Nomadland", ceremony: 93 },
  
  { id: "496243", year: 2020, title: "Parasite", ceremony: 92 },    
  
  { id: "490132", year: 2019, title: "Green Book", ceremony: 91 },
  
  { id: "399055", year: 2018, title: "The Shape of Water", ceremony: 90 },
  
  { id: "376867", year: 2017, title: "Moonlight", ceremony: 89 },
  
  { id: "314365", year: 2016, title: "Spotlight", ceremony: 88 },  
  
  { id: "194662", year: 2015, title: "Birdman", ceremony: 87 },
  
  { id: "76203", year: 2014, title: "12 Years a Slave", ceremony: 86 },
  
  { id: "68734", year: 2013, title: "Argo", ceremony: 85 },  
  
  { id: "74643", year: 2012, title: "The Artist", ceremony: 84 },
  
  { id: "45269", year: 2011, title: "The King's Speech", ceremony: 83 },
  
  { id: "12162", year: 2010, title: "The Hurt Locker", ceremony: 82 },
  
  { id: "12405", year: 2009, title: "Slumdog Millionaire", ceremony: 81 },
  
  { id: "6977", year: 2008, title: "No Country for Old Men", ceremony: 80 },
  
  { id: "1422", year: 2007, title: "The Departed", ceremony: 79 },
  
  { id: "", year: 2006, title: "", ceremony: 78 },
  { id: "", year: 2006, title: "", ceremony: 78 },
  { id: "", year: 2006, title: "", ceremony: 78 },
  { id: "", year: 2006, title: "", ceremony: 78 },
  
  { id: "2567", year: 2005, title: "The Aviator", ceremony: 77 },
  { id: "866", year: 2005, title: "Finding Neverland", ceremony: 77 },
  { id: "1677", year: 2005, title: "Ray", ceremony: 77 },
  { id: "9675", year: 2005, title: "Sideways", ceremony: 77 },
  
  { id: "153", year: 2004, title: "Lost in Translation", ceremony: 76 },  
  { id: "8619", year: 2004, title: "Master and Commander: The Far Side of the World", ceremony: 76 },  
  { id: "322", year: 2004, title: "Mystic River", ceremony: 76 },  
  { id: "4464", year: 2004, title: "Seabiscuit", ceremony: 76 },  
  
  { id: "3131", year: 2003, title: "Gangs of New York", ceremony: 75 },
  { id: "590", year: 2003, title: "The Hours", ceremony: 75 },
  { id: "121", year: 2003, title: "The Lord of the Rings: The Two Towers", ceremony: 75 },
  { id: "423", year: 2003, title: "The Pianist", ceremony: 75 },
  
  { id: "5279", year: 2002, title: "Gosford Park", ceremony: 74 },
  { id: "1999", year: 2002, title: "In the Bedroom", ceremony: 74 },
  { id: "120", year: 2002, title: "The Lord of the Rings: The Fellowship of the Ring", ceremony: 74 },
  { id: "824", year: 2002, title: "Moulin Rouge!", ceremony: 74 },
  
  { id: "392", year: 2001, title: "Chocolat", ceremony: 73 },
  { id: "146", year: 2001, title: "Crouching Tiger, Hidden Dragon", ceremony: 73 },
  { id: "462", year: 2001, title: "Erin Brockovich", ceremony: 73 },
  { id: "1900", year: 2001, title: "Traffic", ceremony: 73 },
];// ─── 工具函数 ────────────────────────────────────────────────────────────────

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
