// ============================================================
// 奥斯卡金像奖 ForwardWidget v2.0
// 数据来源：TMDB Official API
// 需要自备 TMDB API Read Access Token
// 获取地址：https://www.themoviedb.org/settings/api
// ============================================================

var WidgetMetadata = {
  id: "tmdb_academy_awards",
  title: "奥斯卡金像奖",
  description: "通过 TMDB API 浏览奥斯卡各届提名及获奖影片",
  author: "ForwardWidget",
  site: "https://www.themoviedb.org",
  version: "2.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 3600,
  modules: [
    {
      title: "奥斯卡年度影片",
      description: "按届数浏览奥斯卡年度优质影片",
      requiresWebView: false,
      functionName: "getOscarMovies",
      cacheDuration: 3600,
      params: [
        {
          name: "api_token",
          title: "TMDB API Token",
          type: "input",
          description: "填入你的 TMDB API Read Access Token（themoviedb.org/settings/api）",
          value: "7d6f70d5503a84d6a3d3db3e6c4a3afe",
        },
        {
          name: "ceremony",
          title: "届数",
          type: "enumeration",
          description: "选择奥斯卡颁奖典礼届数",
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
          ],
        },
        {
          name: "sort",
          title: "排序",
          type: "enumeration",
          value: "vote_average.desc",
          enumOptions: [
            { title: "评分最高", value: "vote_average.desc" },
            { title: "最受欢迎", value: "popularity.desc" },
            { title: "最新上映", value: "primary_release_date.desc" },
          ],
        },
        {
          name: "page",
          title: "页码",
          type: "page",
          value: "1",
        },
      ],
    },
    {
      title: "历届最佳影片",
      description: "浏览所有奥斯卡历史最佳影片得主",
      requiresWebView: false,
      functionName: "getBestPictureWinners",
      cacheDuration: 86400,
      params: [
        {
          name: "api_token",
          title: "TMDB API Token",
          type: "input",
          description: "填入你的 TMDB API Read Access Token",
          value: "",
        },
        {
          name: "page",
          title: "页码",
          type: "page",
          value: "1",
        },
      ],
    },
    {
      title: "搜索影片",
      description: "搜索电影并查看详情",
      requiresWebView: false,
      functionName: "searchMovies",
      cacheDuration: 300,
      params: [
        {
          name: "api_token",
          title: "TMDB API Token",
          type: "input",
          description: "填入你的 TMDB API Read Access Token",
          value: "",
        },
        {
          name: "query",
          title: "关键词",
          type: "input",
          value: "",
          placeholders: [
            { title: "Anora", value: "Anora" },
            { title: "Oppenheimer", value: "Oppenheimer" },
            { title: "Everything Everywhere", value: "Everything Everywhere All at Once" },
          ],
        },
      ],
    },
  ],
};

// -------------------------------------------------------
// 工具：构建 TMDB API 请求头
// -------------------------------------------------------
function buildHeaders(token) {
  if (!token || token.trim() === "") {
    throw new Error(
      "请先填写 TMDB API Token\n获取地址：https://www.themoviedb.org/settings/api"
    );
  }
  return {
    Authorization: `Bearer ${token.trim()}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

// -------------------------------------------------------
// 工具：届数 → 候选影片的上映年份区间
// 奥斯卡通常于每年 1-3 月举行，评选上一年度影片
// 第97届(2025年举行) → 评选 2024 年影片
// -------------------------------------------------------
function getCeremonyYearRange(ceremony) {
  const num = parseInt(ceremony, 10);
  // 第1届=1929年举行，评选1927-1928年影片
  // 简化：第N届 ≈ 评选 (1928 + N - 2) 年的影片
  const filmYear = 1926 + num;
  return {
    from: `${filmYear}-01-01`,
    to: `${filmYear}-12-31`,
  };
}

// -------------------------------------------------------
// 工具：TMDB movie 对象 → ForwardWidget 格式
// -------------------------------------------------------
function formatMovie(movie, label) {
  const title = movie.title || movie.name || "";
  const releaseDate = movie.release_date || movie.first_air_date || "";
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "";
  const backdropPath = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    : "";
  const rating = movie.vote_average
    ? String(Number(movie.vote_average).toFixed(1))
    : "";

  return {
    id: `movie.${movie.id}`,
    type: "tmdb",
    title: title,
    posterPath: posterPath,
    backdropPath: backdropPath,
    releaseDate: releaseDate,
    mediaType: "movie",
    rating: rating,
    genreTitle: label || "",
    description: movie.overview || "",
    link: `https://www.themoviedb.org/movie/${movie.id}`,
  };
}

// -------------------------------------------------------
// 模块1：按届数获取年度优质影片
// -------------------------------------------------------
async function getOscarMovies(params = {}) {
  const token = params.api_token || "";
  const ceremony = params.ceremony || "97";
  const sort = params.sort || "vote_average.desc";
  const page = params.page || "1";

  const headers = buildHeaders(token);
  const { from, to } = getCeremonyYearRange(ceremony);

  const url =
    `https://api.themoviedb.org/3/discover/movie` +
    `?language=zh-CN` +
    `&sort_by=${sort}` +
    `&vote_count.gte=200` +
    `&vote_average.gte=7.0` +
    `&primary_release_date.gte=${from}` +
    `&primary_release_date.lte=${to}` +
    `&page=${page}`;

  const response = await Widget.http.get(url, { headers });

  if (!response || !response.data || !response.data.results) {
    throw new Error("TMDB API 请求失败，请检查 Token 是否正确");
  }

  const results = response.data.results;
  if (!results.length) {
    throw new Error(`第 ${ceremony} 届奥斯卡年度暂无数据`);
  }

  const label = `第${ceremony}届奥斯卡年度`;
  return results.map((m) => formatMovie(m, label));
}

// -------------------------------------------------------
// 模块2：历届最佳影片得主
// 使用 TMDB 公开 List ID=28（Best Picture Winners）
// -------------------------------------------------------
async function getBestPictureWinners(params = {}) {
  const token = params.api_token || "";
  const page = params.page || "1";

  const headers = buildHeaders(token);

  // TMDB List API
  const url = `https://api.themoviedb.org/3/list/28?language=zh-CN&page=${page}`;
  const response = await Widget.http.get(url, { headers });

  if (!response || !response.data) {
    throw new Error("无法获取最佳影片列表");
  }

  const items = response.data.items || [];
  if (!items.length) {
    throw new Error("列表为空或 Token 无效");
  }

  return items.map((m) => formatMovie(m, "🏆 最佳影片"));
}

// -------------------------------------------------------
// 模块3：搜索
// -------------------------------------------------------
async function searchMovies(params = {}) {
  const token = params.api_token || "";
  const query = (params.query || "").trim();

  if (!query) throw new Error("请输入搜索关键词");

  const headers = buildHeaders(token);

  const url =
    `https://api.themoviedb.org/3/search/movie` +
    `?query=${encodeURIComponent(query)}` +
    `&language=zh-CN` +
    `&include_adult=false` +
    `&page=1`;

  const response = await Widget.http.get(url, { headers });

  if (!response || !response.data || !response.data.results) {
    throw new Error("搜索失败，请检查 Token");
  }

  const results = response.data.results;
  if (!results.length) {
    throw new Error(`未找到"${query}"相关影片`);
  }

  return results.map((m) => formatMovie(m, m.vote_average >= 7 ? "⭐ 高分" : "电影"));
}
