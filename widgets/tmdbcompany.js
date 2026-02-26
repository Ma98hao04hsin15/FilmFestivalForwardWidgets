WidgetMetadata = {
  id: "tmdbcompany",
  title: "TMDB出品公司",
  version: "1.0.3",
  requiredVersion: "0.0.1",
  description: "获取 TMDB 的出品公司数据",
  author: "Forward",
  site: "https://github.com/Ma98hao04hsin/ForwardWidgets",
  modules: [
    {
      id: "companies",
      title: "出品公司",
      functionName: "companies",
      params: [
        {
          name: "with_companies",
          title: "出品公司",
          type: "enumeration",
          enumOptions: [
            {
              title: "迪士尼",
              value: "2",
            },  
            {
              title: "华纳兄弟",
              value: "174",
            },
            {
              title: "哥伦比亚影业",
              value: "5",
            },
            {
              title: "索尼影业",
              value: "34",
            },
            {
              title: "环球影业",
              value: "33",
            },
            {
              title: "派拉蒙影业",
              value: "4",
            },
            {
              title: "二十世纪影业",
              value: "25",
            },
            {
              title: "Marvel",
              value: "420",
            },
            {
              title: "Pixar",
              value: "3",
            },            
            {
              title: "DreamWorks Animation",
              value: "521",
            },            
            {
              title: "DreamWorks Pictures",
              value: "7",
            },               
            {
              title: "Lucasfilm Ltd",
              value: "1",
            },
          ]
        },
        {
          name: "page",
          title: "页码",
          type: "page"
        },
        {
          name: "language",
          title: "语言",
          type: "language",
          value: "zh-CN",
        },
      ]
    },
  ],
};

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

async function companies(params) {
  let api = `discover/movie`;
  delete params.type;
  return await fetchData(api, params, "movie");
}
