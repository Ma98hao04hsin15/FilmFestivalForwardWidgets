// 奥斯卡金像獎 Widget
WidgetMetadata = {
  id: "academy_awards",
  title: "奧斯卡金像獎",
  modules: [
    {
      title: "獲獎 / 提名電影",
      requiresWebView: false,
      functionName: "loadAwardMovies",
      cacheDuration: 86400,
      params: [
        {
          name: "ceremony",
          title: "屆次",
          type: "enumeration",
          value: "97",
          enumOptions: [
            { title: "第 97 屆（2025）", value: "97" },
            { title: "第 96 屆（2024）", value: "96" },
            { title: "第 95 屆（2023）", value: "95" },
            { title: "第 94 屆（2022）", value: "94" },
            { title: "第 93 屆（2021）", value: "93" },
            { title: "第 92 屆（2020）", value: "92" },
            { title: "第 91 屆（2019）", value: "91" },
            { title: "第 90 屆（2018）", value: "90" },
            { title: "第 89 屆（2017）", value: "89" },
            { title: "第 88 屆（2016）", value: "88" },
            { title: "第 87 屆（2015）", value: "87" },
            { title: "第 86 屆（2014）", value: "86" },
            { title: "第 85 屆（2013）", value: "85" },
            { title: "第 84 屆（2012）", value: "84" },
            { title: "第 83 屆（2011）", value: "83" },
            { title: "第 82 屆（2010）", value: "82" },
            { title: "第 81 屆（2009）", value: "81" },
            { title: "第 80 屆（2008）", value: "80" },
            { title: "第 79 屆（2007）", value: "79" },
            { title: "第 78 屆（2006）", value: "78" },
            { title: "第 77 屆（2005）", value: "77" },
            { title: "第 76 屆（2004）", value: "76" },
            { title: "第 75 屆（2003）", value: "75" },
            { title: "第 74 屆（2002）", value: "74" },
            { title: "第 73 屆（2001）", value: "73" },
          ],
        },
        {
          name: "filter",
          title: "篩選",
          type: "enumeration",
          value: "winners",
          enumOptions: [
            { title: "僅獲獎", value: "winners" },
            { title: "全部（含提名）", value: "all" },
          ],
        },
      ],
    },
  ],
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "從 TMDB 獲取第 83～97 屆奧斯卡獲獎及提名電影列表",
  author: "ForwardWidget",
  site: "https://www.themoviedb.org",
};

async function loadAwardMovies(params = {}) {
  try {
    const ceremony = params.ceremony || "97";
    const filter = params.filter || "winners";

    const url = `https://www.themoviedb.org/award/1-academy-awards/ceremony/${ceremony}`;

    const response = await Widget.http.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "zh-TW,zh;q=0.9,en;q=0.8",
      },
    });

    console.log("請求成功，開始解析 DOM");

    let docId = Widget.dom.parse(response.data);

    // TMDB award 頁面中，每個 .award_item 包含電影資訊
    // 獲獎項目帶有 .winner class
    let allItems = Widget.dom.select(docId, ".award_item");

    if (!allItems || allItems.length === 0) {
      // 備用：嘗試其他 selector
      allItems = Widget.dom.select(docId, "li.award_item, div.award_item");
    }

    if (!allItems || allItems.length === 0) {
      throw new Error("未找到任何獎項條目，頁面結構可能已更新");
    }

    console.log(`找到 ${allItems.length} 個條目`);

    // movieId -> { id, type, isWinner }
    const movieMap = {};

    for (const item of allItems) {
      const isWinner =
        (Widget.dom.attr(item, "class") || "").includes("winner");

      if (filter === "winners" && !isWinner) continue;

      // 找電影連結（href 含 /movie/）
      const movieLinks = Widget.dom.select(item, "a[href*='/movie/']");
      if (!movieLinks || movieLinks.length === 0) continue;

      const href = Widget.dom.attr(movieLinks[0], "href") || "";
      const match = href.match(/\/movie\/(\d+)/);
      if (!match) continue;

      const movieId = match[1];

      if (movieMap[movieId]) {
        // 若同一部電影在多個獎項出現，有獲獎即標記為 winner
        if (isWinner) movieMap[movieId].isWinner = true;
        continue;
      }

      movieMap[movieId] = {
        id: `movie.${movieId}`,
        type: "tmdb",
        isWinner,
      };
    }

    let results = Object.values(movieMap);

    if (results.length === 0) {
      throw new Error("未能解析到電影資料，請檢查頁面結構或換個屆次重試");
    }

    // 獲獎排前面
    results.sort((a, b) => {
      if (a.isWinner && !b.isWinner) return -1;
      if (!a.isWinner && b.isWinner) return 1;
      return 0;
    });

    console.log(`返回 ${results.length} 部電影`);

    // 只返回 id 和 type，讓 Forward App 自動匹配 TMDB 資料
    return results.map(({ id, type }) => ({ id, type }));
  } catch (error) {
    console.error("處理失敗:", error);
    throw error;
  }
}
