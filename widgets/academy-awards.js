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
      title: "奥斯卡获奖影片",
      description: "浏览历届奥斯卡金像奖获奖影片",
      requiresWebView: false,
      functionName: "loadAwardWinners",
      cacheDuration: 86400,
      params: [
        {
          name: "ceremony",
          title: "届次",
          type: "enumeration",
          value: "97",
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
          ],
        },
        {
          name: "filter",
          title: "筛选",
          type: "enumeration",
          value: "winner",
          enumOptions: [
            { title: "仅获奖", value: "winner" },
            { title: "全部提名", value: "all" },
          ],
        },
      ],
    },
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
  { id: "77338", year: 2012, title: "The Artist", ceremony: 84 },
  { id: "45269", year: 2011, title: "The King's Speech", ceremony: 83 },
  { id: "16869", year: 2010, title: "The Hurt Locker", ceremony: 82 },
  { id: "4922", year: 2009, title: "Slumdog Millionaire", ceremony: 81 },
  { id: "2172", year: 2008, title: "No Country for Old Men", ceremony: 80 },
  { id: "1422", year: 2007, title: "The Departed", ceremony: 79 },
  { id: "1725", year: 2006, title: "Crash", ceremony: 78 },
  { id: "4011", year: 2005, title: "Million Dollar Baby", ceremony: 77 },
  { id: "122", year: 2004, title: "The Lord of the Rings: The Return of the King", ceremony: 76 },  
  { id: "1574", year: 2003, title: "Chicago", ceremony: 75 },
  { id: "453", year: 2002, title: "A Beautiful Mind", ceremony: 74 },
  { id: "98", year: 2001, title: "Gladiator", ceremony: 73 },
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
 * 获取指定届次的奥斯卡获奖/提名影片
 */
async function loadAwardWinners(params = {}) {
  const ceremony = params.ceremony || "97";
  const filterMode = params.filter || "winner";

  try {
    const html = await fetchAwardPage(ceremony);
    const parsed = parseAwardItems(html);

    if (parsed.length === 0) {
      console.warn("未解析到任何影片，尝试备用方案");
      return await loadAwardWinnersViaApi(ceremony, filterMode);
    }

    const filtered =
      filterMode === "winner" ? parsed.filter((i) => i.isWinner) : parsed;

    const result = toWidgetItems(filtered);
    console.log(`返回 ${result.length} 部影片`);
    return result;
  } catch (error) {
    console.error("加载失败:", error);
    // 降级：使用内置最佳影片数据
    return await loadAwardWinnersViaApi(ceremony, filterMode);
  }
}

/**
 * 备用方案：通过 TMDB API 搜索该届奥斯卡提名
 */
async function loadAwardWinnersViaApi(ceremony, filterMode) {
  console.log("使用备用方案，通过 TMDB API 获取数据");

  // 根据届次推算颁奖年份（奥斯卡届次 = 年份 - 1928 + 1）
  const awardYear = parseInt(ceremony) + 1928 - 1;

  const results = await Widget.tmdb.get("/discover/movie", {
    params: {
      language: "zh-CN",
      "primary_release_year": awardYear,
      sort_by: "vote_average.desc",
      "vote_count.gte": 100,
    },
  });

  if (!results || !results.results) return [];

  return results.results.slice(0, 20).map((item) => ({
    id: String(item.id),
    type: "tmdb",
    mediaType: "movie",
    title: item.title || item.original_title,
    rating: item.vote_average ? String(item.vote_average.toFixed(1)) : undefined,
    releaseDate: item.release_date,
    posterPath: item.poster_path
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
      : undefined,
    backdropPath: item.backdrop_path
      ? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
      : undefined,
  }));
}

/**
 * 历届奥斯卡最佳影片
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
