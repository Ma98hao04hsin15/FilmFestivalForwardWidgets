WidgetMetadata = {
  id: "tmdbAwards",
  title: "TMDB獎項",
  description: "TMDB獎項",
  author: "Ma",
  site: "https://github.com/quantumultxx/ForwardWidgets",
  version: "1.3.1",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    // =============TMDB模块=============
    // --- 当前与趋势模块 ---
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
	},
  ]
};

// ===============辅助函数===============
let tmdbGenresCache = null;

async function fetchTmdbGenres() {
    if (tmdbGenresCache) return tmdbGenresCache;

    const [movieGenres, tvGenres] = await Promise.all([
        Widget.tmdb.get('/genre/movie/list', { params: { language: 'zh-CN' } }),
        Widget.tmdb.get('/genre/tv/list', { params: { language: 'zh-CN' } })
    ]);

    tmdbGenresCache = {
        movie: movieGenres.genres.reduce((acc, g) => ({ ...acc, [g.id]: g.name }), {}),
        tv: tvGenres.genres.reduce((acc, g) => ({ ...acc, [g.id]: g.name }), {})
    };
    return tmdbGenresCache;
}

function getTmdbGenreTitles(genreIds, mediaType) {
    const genres = tmdbGenresCache?.[mediaType] || {};
    const topThreeIds = genreIds.slice(0, 3);
    return topThreeIds
        .map(id => genres[id]?.trim() || `未知类型(${id})`)
        .filter(Boolean)
        .join('•');
}

function getBeijingDate() {
    const now = new Date();
    const beijingTime = now.getTime() + (8 * 60 * 60 * 1000);
    const beijingDate = new Date(beijingTime);
    return `${beijingDate.getUTCFullYear()}-${String(beijingDate.getUTCMonth() + 1).padStart(2, '0')}-${String(beijingDate.getUTCDate()).padStart(2, '0')}`;
}

// ===============TMDB功能函数===============
async function fetchTmdbData(api, params) {
    const [data, genres] = await Promise.all([
        Widget.tmdb.get(api, { params: params }),
        fetchTmdbGenres()
    ]);

    return data.results
        .filter((item) => {
            return item.poster_path &&
                   item.id &&
                   (item.title || item.name) &&
                   (item.title || item.name).trim().length > 0;
        })
        .map((item) => {
            const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
            const genreIds = item.genre_ids || [];
            const genreTitle = getTmdbGenreTitles(genreIds, mediaType);

            return {
                id: item.id,
                type: "tmdb",
                title: item.title || item.name,
                description: item.overview,
                releaseDate: item.release_date || item.first_air_date,
                backdropPath: item.backdrop_path,
                posterPath: item.poster_path,
                rating: item.vote_average,
                mediaType: mediaType,
                genreTitle: genreTitle
            };
        });
}

async function loadTmdbTrendingData() {
    const response = await Widget.http.get("https://raw.githubusercontent.com/pack1r/ForwardWidgets/refs/heads/main/data/TMDB_Trending.json");
    return response.data;
}

async function loadTodayGlobalMedia() {
    const data = await loadTmdbTrendingData();
    return data.today_global.map(item => ({
        id: item.id.toString(),
        type: "tmdb",
        title: item.title,
        genreTitle: item.genreTitle,
        rating: item.rating,
        description: item.overview,
        releaseDate: item.release_date,
        posterPath: item.poster_url,
        backdropPath: item.title_backdrop,
        mediaType: item.type,
    }));
}

async function loadWeekGlobalMovies(params) {
    const data = await loadTmdbTrendingData();
    return data.week_global_all.map(item => ({
        id: item.id.toString(),
        type: "tmdb",
        title: item.title,
        genreTitle: item.genreTitle,
        rating: item.rating,
        description: item.overview,
        releaseDate: item.release_date,
        posterPath: item.poster_url,
        backdropPath: item.title_backdrop,
        mediaType: item.type,
    }));
}

async function tmdbPopularMovies(params) {
    if ((parseInt(params.page) || 1) === 1) {
        const data = await loadTmdbTrendingData();
        return data.popular_movies
            .slice(0, 15)
            .map(item => ({
                id: item.id.toString(),
                type: "tmdb",
                title: item.title,
                genreTitle: item.genreTitle,
                rating: item.rating,
                description: item.overview,
                releaseDate: item.release_date,
                posterPath: item.poster_url,
                backdropPath: item.title_backdrop,
                mediaType: item.type
            }));
    }

    const [data, genres] = await Promise.all([
        Widget.tmdb.get(`/movie/popular`, {
            params: {
                language: params.language || 'zh-CN',
                page: parseInt(params.page) || 1,
                region: 'CN'
            }
        }),
        fetchTmdbGenres()
    ]);

    return data.results.map(item => ({
        id: String(item.id),
        type: "tmdb",
        title: item.title,
        description: item.overview,
        releaseDate: item.release_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average,
        mediaType: "movie",
        genreTitle: getTmdbGenreTitles(item.genre_ids, "movie")
    }));
}

async function tmdbTopRated(params) {
    const type = params.type || 'movie';
    const api = type === 'movie' ? `movie/top_rated` : `tv/top_rated`;
    return await fetchTmdbData(api, params);
}

async function tmdbUpcomingMovies(params) {
    const api = "discover/movie";
    const beijingDate = getBeijingDate();
    const discoverParams = {
        language: params.language || 'zh-CN',
        page: params.page || 1,
        sort_by: 'primary_release_date.asc',
        'primary_release_date.gte': params['primary_release_date.gte'] || beijingDate,
        with_release_type: params.with_release_type || '2,3'
    };

    if (params['primary_release_date.lte']) {
        discoverParams['primary_release_date.lte'] = params['primary_release_date.lte'];
    }
    if (params.with_genres) {
        discoverParams.with_genres = params.with_genres;
    }
    if (params['vote_average.gte']) {
        discoverParams['vote_average.gte'] = params['vote_average.gte'];
    }
    if (params['vote_count.gte']) {
        discoverParams['vote_count.gte'] = params['vote_count.gte'];
    }
    if (params.with_keywords) {
        discoverParams.with_keywords = params.with_keywords;
    }

    return await fetchTmdbData(api, discoverParams);
}

async function tmdbDiscoverByNetwork(params = {}) {
    const api = "discover/tv";
    const beijingDate = getBeijingDate();
    const discoverParams = {
        language: params.language || 'zh-CN',
        page: params.page || 1,
        with_networks: params.with_networks,
        sort_by: params.sort_by || "first_air_date.desc",
    };

    if (params.air_status === 'released') {
        discoverParams['first_air_date.lte'] = beijingDate;
    } else if (params.air_status === 'upcoming') {
        discoverParams['first_air_date.gte'] = beijingDate;
    }

    if (params.with_genres) {
        discoverParams.with_genres = params.with_genres;
    }

    return await fetchTmdbData(api, discoverParams);
}

async function tmdbCompanies(params = {}) {
    const api = "discover/movie";
    const beijingDate = getBeijingDate();
    const withCompanies = String(params.with_companies || '').trim();

    const cleanParams = {
        page: params.page || 1,
        language: params.language || "zh-CN",
        sort_by: params.sort_by || "primary_release_date.desc",
        include_adult: false,
        include_video: false
    };

    if (withCompanies) {
        cleanParams.with_companies = withCompanies;
    }

    if (params.air_status === 'released') {
        cleanParams['primary_release_date.lte'] = beijingDate;
    } else if (params.air_status === 'upcoming') {
        cleanParams['primary_release_date.gte'] = beijingDate;
    }

    if (params.with_genres) {
        cleanParams.with_genres = String(params.with_genres).trim();
    }

    return await fetchTmdbData(api, cleanParams);
}
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
