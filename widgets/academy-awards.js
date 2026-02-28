var WidgetMetadata = {
  id: "academy_awards_tmdb",
  title: "奧斯卡金像獎",
  description: "從 TMDB 獲取第 83～97 屆奧斯卡入圍及獲獎電影列表",
  author: "ForwardWidget",
  site: "https://www.themoviedb.org",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 86400,
  modules: [
    {
      title: "獲獎 / 提名電影",
      description: "選擇屆次與篩選條件，返回 TMDB 格式電影列表",
      requiresWebView: true,
      functionName: "getAwardMovies",
      cacheDuration: 86400,
      params: [
        {
          name: "ceremony",
          title: "屆次",
          type: "enumeration",
          description: "選擇奧斯卡屆次",
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
            { title: "第 83 屆（2011）", value: "83" }
          ]
        },
        {
          name: "filter",
          title: "篩選",
          type: "enumeration",
          description: "顯示全部提名或僅獲獎電影",
          value: "winners",
          enumOptions: [
            { title: "僅獲獎", value: "winners" },
            { title: "全部（含提名）", value: "all" }
          ]
        }
      ]
    }
  ]
};

async function getAwardMovies(params = {}) {
  const ceremony = params.ceremony || "97";
  const filter = params.filter || "winners";

  const url = `https://www.themoviedb.org/award/1-academy-awards/ceremony/${ceremony}?language=zh-TW`;

  let response;
  try {
    response = await Widget.http.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "zh-TW,zh;q=0.9,en;q=0.8",
        "Accept": "text/html,application/xhtml+xml,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
      }
    });
  } catch (error) {
    console.error("請求失敗:", error);
    throw new Error("無法載入 TMDB 頁面，請稍後再試");
  }

  const $ = Widget.html.load(response.data);

  // 用來去重：movieId -> item
  const movieMap = {};

  // TMDB award 頁面結構：
  // 每個 award category 為 .award_category
  // 每個提名項目為 .award_item
  // 獲獎項目帶有 .winner class
  // 電影連結為 a[href*="/movie/"]，帶有 data-id 或從 href 提取 id

  // 解析每個獎項分類
  $(".award_category").each((i, category) => {
    $(category).find(".award_item").each((j, item) => {
      const isWinner = $(item).hasClass("winner");

      // 篩選邏輯
      if (filter === "winners" && !isWinner) return;

      // 找到電影連結
      const movieLink = $(item).find("a[href*='/movie/']").first();
      if (!movieLink.length) return;

      const href = movieLink.attr("href") || "";
      // href 格式: /movie/12345-movie-title 或 /movie/12345
      const movieIdMatch = href.match(/\/movie\/(\d+)/);
      if (!movieIdMatch) return;

      const movieId = movieIdMatch[1];

      // 避免重複加入相同電影（多個獎項提名同一部片）
      if (movieMap[movieId]) {
        // 若之前是提名、現在是獲獎，升級為獲獎
        if (isWinner) {
          movieMap[movieId]._isWinner = true;
        }
        return;
      }

      // 解析電影資訊
      const title =
        $(item).find(".title").first().text().trim() ||
        $(item).find("h2").first().text().trim() ||
        movieLink.attr("title") ||
        movieLink.text().trim();

      const posterImg = $(item).find("img").first();
      let posterPath = posterImg.attr("src") || posterImg.attr("data-src") || "";
      // 從 TMDB 縮略圖 URL 提取 poster path
      // 例如 https://www.themoviedb.org/t/p/w94_and_h141_bestv2/abc123.jpg
      const posterMatch = posterPath.match(/\/t\/p\/[^/]+(\/.+)$/);
      if (posterMatch) {
        posterPath = posterMatch[1];
      }

      const releaseYear = $(item).find(".release_date, .year").first().text().trim();

      movieMap[movieId] = {
        id: `movie.${movieId}`,
        type: "tmdb",
        mediaType: "movie",
        title: title,
        posterPath: posterPath || undefined,
        releaseDate: releaseYear || undefined,
        _isWinner: isWinner,
        _href: href
      };
    });
  });

  // 若用 .award_category 沒取到，嘗試備用 selector
  if (Object.keys(movieMap).length === 0) {
    // 備用方案：直接找所有帶 /movie/ 的卡片連結
    $("a[href*='/movie/']").each((i, el) => {
      const href = $(el).attr("href") || "";
      const movieIdMatch = href.match(/\/movie\/(\d+)/);
      if (!movieIdMatch) return;

      const movieId = movieIdMatch[1];
      if (movieMap[movieId]) return;

      // 找最近的容器確認是否為獲獎
      const container = $(el).closest("li, .item, .card, article");
      const isWinner = container.hasClass("winner") || container.find(".winner_icon, .award_winner").length > 0;

      if (filter === "winners" && !isWinner) return;

      const title =
        $(el).attr("title") ||
        container.find("h2, h3, .title").first().text().trim() ||
        $(el).text().trim();

      if (!title) return;

      const posterImg = container.find("img").first();
      let posterPath = posterImg.attr("src") || posterImg.attr("data-src") || "";
      const posterMatch = posterPath.match(/\/t\/p\/[^/]+(\/.+)$/);
      if (posterMatch) posterPath = posterMatch[1];

      movieMap[movieId] = {
        id: `movie.${movieId}`,
        type: "tmdb",
        mediaType: "movie",
        title: title,
        posterPath: posterPath || undefined,
        _isWinner: isWinner
      };
    });
  }

  const results = Object.values(movieMap);

  if (results.length === 0) {
    throw new Error("未能解析到電影資料，頁面結構可能已更新");
  }

  // 排序：獲獎在前，提名在後
  results.sort((a, b) => {
    if (a._isWinner && !b._isWinner) return -1;
    if (!a._isWinner && b._isWinner) return 1;
    return 0;
  });

  // 清理內部欄位後返回
  return results.map(({ _isWinner, _href, ...item }) => ({
    ...item,
    description: _isWinner ? "🏆 獲獎" : "提名"
  }));
}
// 基础获取TMDB数据方法
async function fetchData(api, params, forceMediaType) {
  try {
    const response = await Widget.tmdb.get(api, { params: params });

    if (!response) {
      throw new Error("获取数据失败");
    }

    console.log(response);
    let data = response.results;
    
    // 如果没有 forceMediaType，先过滤只保留 movie 和 tv 的数据
    if (!forceMediaType) {
      data = data.filter((item) => {
        let mediaType = item.media_type;
        if (mediaType == null) {
          if (item.title) {
            mediaType = "movie";
          } else {
            mediaType = "tv";
          }
        }
        return mediaType === "movie" || mediaType === "tv";
      });
    }
    
    const result = data.map((item) => {
      let mediaType = item.media_type;
      if (forceMediaType) {
        mediaType = forceMediaType;
      } else if (mediaType == null) {
        if (item.title) {
          mediaType = "movie";
        } else {
          mediaType = "tv";
        }
      } 
      return {
        id: item.id,
        type: "tmdb",
        title: item.title ?? item.name,
        description: item.overview,
        releaseDate: item.release_date ?? item.first_air_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average,
        mediaType: mediaType,
        genreTitle: genreTitleWith(item.genre_ids),
      };
    });
    
    return result;
  } catch (error) {
    console.error("调用 TMDB API 失败:", error);
    throw error;
  }
}

async function nowPlaying(params) {
  const type = params.type;
  let api = "tv/on_the_air";
  if (type === "movie") {
    api = "movie/now_playing";
  }
  return await fetchData(api, params, type);
}

async function trending(params) {
  const timeWindow = params.time_window;
  const api = `trending/all/${timeWindow}`;
  delete params.time_window;
  return await fetchData(api, params);
}

async function popular(params) {
  const type = params.type;
  let api = `movie/popular`;
  if (type === "tv") {
    api = `tv/popular`;
  }
  delete params.type;
  return await fetchData(api, params, type);
}

async function topRated(params) {
  const type = params.type;
  let api = `movie/top_rated`;
  if (type === "tv") {
    api = `tv/top_rated`;
  }
  delete params.type;
  return await fetchData(api, params, type);
}

async function categories(params) {
  let genreId = params.with_genres;
  let type = params.type;
  const onlyMovieGenreIds = ["28", "53"];//动作，惊悚
  const onlyTvGenreIds = ["10762", "10764", "10766"];//儿童，真人秀，肥皂剧
  if (genreId == "878" && type == "tv") {
    genreId = "10765";
  }
  if (onlyMovieGenreIds.includes(genreId)) {
    type = "movie";
  }
  if (onlyTvGenreIds.includes(genreId)) {
    type = "tv";
  }
  const api = `discover/${type}`;
  params.with_genres = genreId;
  delete params.type;
  return await fetchData(api, params, type);
}

async function networks(params) {
  let api = `discover/tv`;
  delete params.type;
  return await fetchData(api, params);
}

async function companies(params) {
  let api = `discover/movie`;
  delete params.type;
  return await fetchData(api, params, "movie");
}

async function list(params = {}) {
  let url = params.url;

  // append ?view=grid
  if (!url.includes("view=grid")) {
    if (url.includes("?")) {
      url = url + "&view=grid";
    } else {
      url = url + "?view=grid";
    }
  }

  console.log("请求片单页面:", url);
  // 发送请求获取片单页面
  const response = await Widget.http.get(url, {
    headers: {
      Referer: `https://www.themoviedb.org/`,
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  });

  if (!response || !response.data) {
    throw new Error("获取片单数据失败");
  }


  console.log("片单页面数据长度:", response.data.length);
  console.log("开始解析");

  // 解析 HTML 得到文档 ID
  const $ = Widget.html.load(response.data);
  if (!$ || $ === null) {
    throw new Error("解析 HTML 失败");
  }

  //        // 获取所有视频项，得到元素ID数组
  const coverElements = $(".block.aspect-poster");

  console.log("items:", coverElements);

  let tmdbIds = [];
  for (const itemId of coverElements) {
    const $item = $(itemId);
    const link = $item.attr("href");
    if (!link) {
      continue;
    }
    const match = link.match(/^\/(movie|tv)\/([^\/-]+)-/)
    const type = match?.[1];
    const id = match?.[2];
    if (id && type) {
      tmdbIds.push({ id: `${type}.${id}`, type: 'tmdb' });
    }
  }

  return tmdbIds;
}

function genreTitleWith(genre_ids) {
  if (!genre_ids) {
    return "";
  }
  const genreDict = [
    {"id": 10759, "name": "动作冒险"},
    {"id": 16, "name": "动画"},
    {"id": 35, "name": "喜剧"},
    {"id": 80, "name": "犯罪"},
    {"id": 99, "name": "纪录"},
    {"id": 18, "name": "剧情"},
    {"id": 10751, "name": "家庭"},
    {"id": 10762, "name": "儿童"},
    {"id": 9648, "name": "悬疑"},
    {"id": 10763, "name": "新闻"},
    {"id": 10764, "name": "真人秀"},
    {"id": 10765, "name": "Sci-Fi & Fantasy"},
    {"id": 10766, "name": "肥皂剧"},
    {"id": 10767, "name": "脱口秀"},
    {"id": 10768, "name": "War & Politics"},
    {"id": 37, "name": "西部"},
    {"id": 28, "name": "动作"},
    {"id": 12, "name": "冒险"},
    {"id": 16, "name": "动画"},
    {"id": 35, "name": "喜剧"},
    {"id": 80, "name": "犯罪"},
    {"id": 99, "name": "纪录"},
    {"id": 18, "name": "剧情"},
    {"id": 10751, "name": "家庭"},
    {"id": 14, "name": "奇幻"},
    {"id": 36, "name": "历史"},
    {"id": 27, "name": "恐怖"},
    {"id": 10402, "name": "音乐"},
    {"id": 9648, "name": "悬疑"},
    {"id": 10749, "name": "爱情"},
    {"id": 878, "name": "科幻"},
    {"id": 10770, "name": "电视电影"},
    {"id": 53, "name": "惊悚"},
    {"id": 10752, "name": "战争"},
    {"id": 37, "name": "西部"},
  ]
  if (genre_ids.length > 2) {
    genre_ids = genre_ids.slice(0, 2);
  }
  const result = genre_ids.map(id => {
    const genre = genreDict.find(genre => genre.id == id);
    if (genre) {
      return genre.name;
    }
    return null;
  }).filter(genre => genre !== null).join(", ");
  return result;
}
