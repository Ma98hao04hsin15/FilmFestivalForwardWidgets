// IMDB 片单组件
var WidgetMetadata = {
  id: "imdb_list",
  title: "IMDB 片单",
  description: "抓取 IMDB 片单数据，支持自定义片单 URL",
  author: "Claude",
  site: "https://www.imdb.com",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 3600,
  modules: [
    {
      title: "IMDB 片单",
      description: "输入 IMDB 片单链接，抓取片单中的影片信息",
      requiresWebView: false,
      functionName: "loadImdbList",
      cacheDuration: 3600,
      params: [
        {
          name: "list_url",
          title: "片单链接",
          type: "input",
          description: "IMDB 片单的完整链接，例如：https://www.imdb.com/list/ls591141212/",
          placeholders: [
            {
              title: "IMDB Top 250 电影",
              value: "https://www.imdb.com/chart/top/",
            },
            {
              title: "IMDB Top 250 电视",
              value: "https://www.imdb.com/chart/toptv/",
            },
            {
              title: "IMDB 票房冠军",
              value: "https://www.imdb.com/chart/boxoffice/",
            },
            {
              title: "IMDB 最受期待",
              value: "https://www.imdb.com/chart/moviemeter/",
            },
          ],
        },
        {
          name: "page",
          title: "页码",
          type: "page",
        },
      ],
    },
    {
      title: "IMDB 搜索",
      description: "搜索 IMDB 上的影片或剧集",
      requiresWebView: false,
      functionName: "searchImdb",
      cacheDuration: 3600,
      params: [
        {
          name: "query",
          title: "搜索关键词",
          type: "input",
          description: "输入影片或剧集名称",
        },
        {
          name: "type",
          title: "类型",
          type: "enumeration",
          enumOptions: [
            { title: "全部", value: "all" },
            { title: "电影", value: "movie" },
            { title: "剧集", value: "tv series" },
          ],
        },
        {
          name: "page",
          title: "页码",
          type: "page",
        },
      ],
    },
  ],
  search: {
    title: "搜索 IMDB",
    functionName: "searchImdb",
    params: [
      {
        name: "type",
        title: "类型",
        type: "enumeration",
        value: "all",
        enumOptions: [
          { title: "全部", value: "all" },
          { title: "电影", value: "movie" },
          { title: "剧集", value: "tv series" },
        ],
      },
    ],
  },
};

// ─── 通用 headers ───────────────────────────────────────────────────────────────
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
};

// ─── 从 IMDB id 解析 TMDB 数据 ──────────────────────────────────────────────────
async function fetchTmdbByImdbId(imdbId) {
  try {
    const res = await Widget.tmdb.get(`/find/${imdbId}`, {
      params: {
        external_source: "imdb_id",
        language: "zh-CN",
      },
    });
    if (!res) return null;

    const movie = res.movie_results && res.movie_results[0];
    const tv = res.tv_results && res.tv_results[0];
    const item = movie || tv;
    if (!item) return null;

    const mediaType = movie ? "movie" : "tv";
    return {
      id: `${mediaType}.${item.id}`,
      type: "tmdb",
      mediaType,
      title: item.title || item.name,
      posterPath: item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : null,
      backdropPath: item.backdrop_path
        ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}`
        : null,
      releaseDate: item.release_date || item.first_air_date,
      rating: item.vote_average ? String(item.vote_average.toFixed(1)) : null,
      description: item.overview,
    };
  } catch (e) {
    console.error("fetchTmdbByImdbId 失败:", imdbId, e);
    return null;
  }
}

// ─── 从 HTML 中提取单个列表项 ────────────────────────────────────────────────────
function parseListItems($) {
  const items = [];

  // IMDB 片单页面结构（/list/ls...）
  $(".lister-item").each((i, el) => {
    const $el = $(el);
    const link = $el.find("h3.lister-item-header a").attr("href") || "";
    const imdbId = (link.match(/\/title\/(tt\d+)/) || [])[1];
    const title = $el.find("h3.lister-item-header a").text().trim();
    const year = $el.find("h3.lister-item-header .lister-item-year").text().replace(/[()]/g, "").trim();
    const rating = $el.find(".ipl-rating-star__rating").first().text().trim();
    const description = $el.find(".lister-item-content p").last().text().trim();
    const posterUrl = $el.find(".lister-item-image img").attr("loadlate") ||
      $el.find(".lister-item-image img").attr("src") || "";

    if (imdbId && title) {
      items.push({ imdbId, title, year, rating, description, posterUrl });
    }
  });

  // IMDB chart 页面结构（/chart/top/ 等）
  if (items.length === 0) {
    $(".ipc-metadata-list-summary-item, .cli-children").each((i, el) => {
      const $el = $(el);
      const link = $el.find("a.ipc-title-link-wrapper, a[href*='/title/tt']").first().attr("href") || "";
      const imdbId = (link.match(/\/title\/(tt\d+)/) || [])[1];
      const title =
        $el.find(".ipc-title__text").text().replace(/^\d+\.\s*/, "").trim() ||
        $el.find("h3.ipc-title__text").text().replace(/^\d+\.\s*/, "").trim();
      const year = $el.find(".cli-title-metadata-item, .sc-f30335b4-4").first().text().trim();
      const rating = $el.find(".ipc-rating-star--rating, .ratingGroup--imdb-rating").first().text().trim();
      const posterUrl = $el.find("img.ipc-image").attr("src") || "";

      if (imdbId && title) {
        items.push({ imdbId, title, year, rating, description: "", posterUrl });
      }
    });
  }

  return items;
}

// ─── 加载 IMDB 片单 ──────────────────────────────────────────────────────────────
async function loadImdbList(params = {}) {
  const page = parseInt(params.page) || 1;
  let listUrl = (params.list_url || "").trim();

  if (!listUrl) {
    throw new Error("请填写 IMDB 片单链接");
  }

  // 规范化 URL
  if (!listUrl.startsWith("http")) {
    listUrl = "https://www.imdb.com" + (listUrl.startsWith("/") ? "" : "/") + listUrl;
  }

  // 移除末尾已有的 start 参数（避免重复）
  listUrl = listUrl.replace(/[?&]start=\d+/, "");

  // IMDB 片单（/list/ls...）：每页 100 筆，start 从 1 开始
  // IMDB chart（/chart/top/ 等）：一次性全部，无分页
  const isChart = listUrl.includes("/chart/");
  let pageUrl = listUrl;
  if (!isChart) {
    // page=1 → start=1，page=2 → start=101，page=3 → start=201 ...
    const start = (page - 1) * 100 + 1;
    const separator = listUrl.includes("?") ? "&" : "?";
    pageUrl = `${listUrl}${separator}start=${start}`;
  }

  console.log("请求 URL:", pageUrl);

  const response = await Widget.http.get(pageUrl, { headers: HEADERS });
  if (!response || !response.data) {
    throw new Error("获取页面数据失败");
  }

  const $ = Widget.html.load(response.data);
  const rawItems = parseListItems($);

  console.log("解析到条目数:", rawItems.length);

  if (rawItems.length === 0) {
    return [];
  }

  // 并发请求 TMDB 数据（最多 10 个并发）
  const CONCURRENCY = 10;
  const results = [];

  for (let i = 0; i < rawItems.length; i += CONCURRENCY) {
    const chunk = rawItems.slice(i, i + CONCURRENCY);
    const chunkResults = await Promise.all(
      chunk.map(async (item) => {
        const tmdb = await fetchTmdbByImdbId(item.imdbId);
        if (tmdb) {
          return {
            ...tmdb,
            // 若 TMDB 没有海报，回退到 IMDB 海报
            posterPath: tmdb.posterPath || item.posterUrl || null,
            rating: tmdb.rating || item.rating || null,
            description: tmdb.description || item.description || null,
          };
        }

        // TMDB 查不到时，直接用 IMDB id 回退
        return {
          id: item.imdbId,
          type: "imdb",
          title: item.title,
          posterPath: item.posterUrl || null,
          releaseDate: item.year || null,
          rating: item.rating || null,
          description: item.description || null,
        };
      })
    );
    results.push(...chunkResults);
  }

  return results.filter(Boolean);
}

// ─── 搜索 IMDB ───────────────────────────────────────────────────────────────────
async function searchImdb(params = {}) {
  const query = (params.query || "").trim();
  const type = params.type || "all";
  const page = parseInt(params.page) || 1;

  if (!query) {
    throw new Error("请输入搜索关键词");
  }

  const start = (page - 1) * 50 + 1;
  let searchUrl = `https://www.imdb.com/search/title/?title=${encodeURIComponent(query)}&start=${start}`;
  if (type !== "all") {
    searchUrl += `&title_type=${encodeURIComponent(type)}`;
  }

  console.log("搜索 URL:", searchUrl);

  const response = await Widget.http.get(searchUrl, { headers: HEADERS });
  if (!response || !response.data) {
    throw new Error("搜索失败");
  }

  const $ = Widget.html.load(response.data);
  const rawItems = parseListItems($);

  console.log("搜索结果数:", rawItems.length);

  if (rawItems.length === 0) return [];

  const CONCURRENCY = 10;
  const results = [];

  for (let i = 0; i < rawItems.length; i += CONCURRENCY) {
    const chunk = rawItems.slice(i, i + CONCURRENCY);
    const chunkResults = await Promise.all(
      chunk.map(async (item) => {
        const tmdb = await fetchTmdbByImdbId(item.imdbId);
        if (tmdb) {
          return {
            ...tmdb,
            posterPath: tmdb.posterPath || item.posterUrl || null,
            rating: tmdb.rating || item.rating || null,
            description: tmdb.description || item.description || null,
          };
        }
        return {
          id: item.imdbId,
          type: "imdb",
          title: item.title,
          posterPath: item.posterUrl || null,
          releaseDate: item.year || null,
          rating: item.rating || null,
          description: item.description || null,
        };
      })
    );
    results.push(...chunkResults);
  }

  return results.filter(Boolean);
}
