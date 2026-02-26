WidgetMetadata = {
  id: "awards",
  title: "awards",
  version: "1.1.0",
  requiredVersion: "0.0.1",
  description: "获取 TMDB 的奖项数据",
  author: "Forward",
  site: "https://github.com/InchStudio/ForwardWidgets",
  modules: [
    {
      id: "awards",
      title: "经典奖项",
      functionName: "awards",
      params: [
        {
          name: "award_list",
          title: "选择奖项",
          type: "enumeration",
          enumOptions: [
            { title: "Academy Awards", value: "1" },
            { title: "BAFTA Film Awards", value: "5" },
          ],
        },
      ],
    },
  ],
};

// --- 基础获取TMDB数据方法 ---
async function fetchData(api, params, forceMediaType) {
  try {
    const response = await Widget.tmdb.get(api, { params: params });
    if (!response) throw new Error("获取数据失败");

    let data = response.results || [];
    
    // 过滤并映射数据
    return data.filter(item => {
      let mediaType = item.media_type || (item.title ? "movie" : "tv");
      return mediaType === "movie" || mediaType === "tv";
    }).map((item) => {
      const mediaType = forceMediaType || item.media_type || (item.title ? "movie" : "tv");
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
  } catch (error) {
    console.error("调用 TMDB API 失败:", error);
    throw error;
  }
}

// --- 模块功能实现 ---

async function awards(params) {
  const listId = params.award_list;
  const url = `https://www.themoviedb.org/list/${listId}`;
  return await list({ url: url });
}

async function list(params = {}) {
  let url = params.url;
  if (!url.includes("view=grid")) {
    url += url.includes("?") ? "&view=grid" : "?view=grid";
  }

  const response = await Widget.http.get(url, {
    headers: {
      Referer: `https://www.themoviedb.org/`,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  });

  if (!response?.data) throw new Error("获取页面失败");

  const $ = Widget.html.load(response.data);
  const coverElements = $(".block.aspect-poster");
  
  let tmdbIds = [];
  for (const item of coverElements) {
    const link = $(item).attr("href");
    if (!link) continue;
    
    // 增强正则：支持 /movie/123-title 或 /tv/123-title
    const match = link.match(/\/(movie|tv)\/(\d+)/);
    if (match) {
      tmdbIds.push({ id: `${match[1]}.${match[2]}`, type: 'tmdb' });
    }
  }
  return tmdbIds;
}
