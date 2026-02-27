var WidgetMetadata = {
  id: "tmdb_academy_awards",
  title: "奥斯卡金像奖",
  description: "浏览 TMDB 上的奥斯卡颁奖典礼入围及获奖影片",
  author: "ForwardWidget",
  site: "https://www.themoviedb.org",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 3600,
  modules: [
    {
      title: "获奖影片",
      description: "浏览指定届奥斯卡的获奖与提名影片",
      requiresWebView: false,
      functionName: "getAwardMovies",
      cacheDuration: 3600,
      params: [
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
          description: "只显示获奖影片或全部",
          value: "all",
          enumOptions: [
            { title: "全部（含提名）", value: "all" },
            { title: "仅获奖", value: "winner" },
          ],
        },
      ],
    },
    {
      title: "搜索奖项",
      description: "按关键词搜索 TMDB 奖项",
      requiresWebView: false,
      functionName: "searchAwards",
      cacheDuration: 600,
      params: [
        {
          name: "keyword",
          title: "奖项名称",
          type: "input",
          description: "输入奖项关键词，例如：Golden Globe、BAFTA",
          value: "",
          placeholders: [
            { title: "奥斯卡", value: "Academy Awards" },
            { title: "金球奖", value: "Golden Globe" },
            { title: "BAFTA", value: "BAFTA" },
          ],
        },
      ],
    },
  ],
};

// -------------------------------------------------------
// 模块1：获取指定届奥斯卡的影片列表
// -------------------------------------------------------
async function getAwardMovies(params = {}) {
  const ceremony = params.ceremony || "97";
  const filter = params.filter || "all";

  const url = `https://www.themoviedb.org/award/1-academy-awards/ceremony/${ceremony}?language=zh-CN`;

  const response = await Widget.http.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    },
  });

  const $ = Widget.html.load(response.data);

  const results = [];
  const seen = new Set();

  // 解析得奖者/提名者区块
  // TMDB 页面中每个类别下有 Winner! 和 Nominee 条目，每条含影片链接
  $("li.p-2, li.py-2, .award-nominees li, section li").each((i, el) => {
    const isWinner =
      $(el).text().includes("Winner") ||
      $(el).find(".winner, [class*=winner]").length > 0;

    if (filter === "winner" && !isWinner) return;

    // 寻找 TMDB 影片链接 /movie/xxx 或 /tv/xxx
    const link = $(el).find('a[href*="/movie/"], a[href*="/tv/"]').first();
    if (!link.length) return;

    const href = link.attr("href") || "";
    const titleText = link.text().trim();
    if (!titleText || seen.has(href)) return;
    seen.add(href);

    // 提取 TMDB id
    const movieMatch = href.match(/\/movie\/(\d+)/);
    const tvMatch = href.match(/\/tv\/(\d+)/);
    const tmdbId = movieMatch ? movieMatch[1] : tvMatch ? tvMatch[1] : null;
    const mediaType = movieMatch ? "movie" : "tv";

    if (!tmdbId) return;

    // 封面图
    const img = $(el).find("img").first();
    let posterPath = img.attr("src") || img.attr("data-src") || "";
    // TMDB 缩略图替换为较高分辨率
    posterPath = posterPath.replace(/w\d+/, "w342");

    // 分类标签（父级 section 的标题）
    const sectionTitle = $(el)
      .closest("section, [class*=category]")
      .find("h2, h3, h4")
      .first()
      .text()
      .trim();

    results.push({
      id: `${mediaType}.${tmdbId}`,
      type: "tmdb",
      title: titleText,
      posterPath: posterPath || "",
      mediaType: mediaType,
      genreTitle: isWinner
        ? `🏆 ${sectionTitle || "获奖"}`
        : `提名 ${sectionTitle ? "· " + sectionTitle : ""}`,
      link: `https://www.themoviedb.org${href}`,
      description: isWinner ? "Winner!" : "Nominee",
    });
  });

  // 若 cheerio 选择器未命中（页面结构可能因版本变化），做通用 fallback
  if (results.length === 0) {
    // fallback：直接找所有 /movie/ 和 /tv/ 链接
    $('a[href*="/movie/"], a[href*="/tv/"]').each((i, el) => {
      const href = $(el).attr("href") || "";
      const titleText = $(el).text().trim();
      if (!titleText || seen.has(href) || titleText.length < 2) return;
      seen.add(href);

      const movieMatch = href.match(/\/movie\/(\d+)/);
      const tvMatch = href.match(/\/tv\/(\d+)/);
      const tmdbId = movieMatch ? movieMatch[1] : tvMatch ? tvMatch[1] : null;
      const mediaType = movieMatch ? "movie" : "tv";
      if (!tmdbId) return;

      // 判断是否为获奖（通过父元素包含 Winner 文字）
      const parentText = $(el).closest("li, div").text();
      const isWinner = parentText.includes("Winner");
      if (filter === "winner" && !isWinner) return;

      results.push({
        id: `${mediaType}.${tmdbId}`,
        type: "tmdb",
        title: titleText,
        posterPath: "",
        mediaType: mediaType,
        genreTitle: isWinner ? "🏆 获奖" : "提名",
        link: `https://www.themoviedb.org${href}`,
        description: isWinner ? "Winner!" : "Nominee",
      });
    });
  }

  if (results.length === 0) {
    throw new Error(
      `第 ${ceremony} 届奥斯卡数据暂无法解析，请尝试其他届数`
    );
  }

  return results;
}

// -------------------------------------------------------
// 模块2：搜索 TMDB 奖项列表
// -------------------------------------------------------
async function searchAwards(params = {}) {
  const keyword = (params.keyword || "").trim();
  if (!keyword) throw new Error("请输入搜索关键词");

  const url = `https://www.themoviedb.org/award?query=${encodeURIComponent(keyword)}`;

  const response = await Widget.http.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      Accept: "text/html",
    },
  });

  const $ = Widget.html.load(response.data);
  const results = [];
  const seen = new Set();

  // 奖项卡片：通常为 <a href="/award/xxx"> 包裹标题和日期
  $('a[href*="/award/"]').each((i, el) => {
    const href = $(el).attr("href") || "";
    if (seen.has(href)) return;
    seen.add(href);

    // 过滤掉非奖项路径
    if (!/\/award\/[\w-]+$/.test(href) && !/\/award\/[\w-]+\/ceremony/.test(href)) return;

    const titleText =
      $(el).find("h2, h3, .title, strong").first().text().trim() ||
      $(el).text().trim();
    if (!titleText || titleText.length < 2) return;

    const dateText = $(el).find(".date, time, small, p").first().text().trim();

    results.push({
      id: href,
      type: "url",
      title: titleText,
      description: dateText || "",
      link: `https://www.themoviedb.org${href}`,
      mediaType: "movie",
      genreTitle: "奖项",
    });
  });

  if (results.length === 0) {
    throw new Error(`未找到关键词 "${keyword}" 相关奖项`);
  }

  return results;
}
