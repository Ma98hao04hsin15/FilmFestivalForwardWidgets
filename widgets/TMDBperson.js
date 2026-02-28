WidgetMetadata = {
  id: "person.movie.tmdb",
  title: "TMDB人物影视作品",
  version: "1.0.5",
  requiredVersion: "0.0.1",
  description: "获取 TMDB 个人相关作品数据（支持地区筛选）",
  author: "Evan",
  site: "https://github.com/EmrysChoo/ForwardWidgets",
  cacheDuration: 172800,
  modules: [
    {
      id: "allWorks",
      title: "全部作品",
      functionName: "getAllWorks",
      cacheDuration: 172800,
      params: [
        {
          name: "personId",
          title: "个人ID",
          type: "input",
          description: "在 TMDB 网站获取的数字 ID",
          placeholders: [
            { title: "张艺谋", value: "607" },
            { title: "李安", value: "1614" },
            { title: "周星驰", value: "57607" },
            { title: "成龙", value: "18897" },
            { title: "吴京", value: "78871" },
            { title: "莱昂纳多·迪卡普里奥", value: "6193" },
            { title: "汤姆·汉克斯", value: "31" }
          ]
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
        {
          name: "region",
          title: "地区",
          type: "enumeration",
          enumOptions: [
            { title: "全部地区", value: "all" },
            { title: "中国大陆", value: "CN" },
            { title: "中国香港", value: "HK" },
            { title: "中国台湾", value: "TW" },
            { title: "美国", value: "US" },
            { title: "日本", value: "JP" },
            { title: "韩国", value: "KR" },
            { title: "英国", value: "GB" },
            { title: "法国", value: "FR" },
            { title: "德国", value: "DE" },
            { title: "印度", value: "IN" },
            { title: "其他", value: "other" }
          ],
          value: "all",
          description: "筛选作品的出品地区"
        },
        {
          name: "type",
          title: "类型",
          type: "enumeration",
          enumOptions: [
            { title: "全部", value: "all" },
            { title: "电影", value: "movie" },
            { title: "电视剧", value: "tv" }
          ],
          value: "all"
        },
        {
          name: "sort_by",
          title: "排序方式",
          type: "enumeration",
          enumOptions: [
            { title: "发行日期降序", value: "release_date.desc" },
            { title: "评分降序", value: "vote_average.desc" },
            { title: "热门降序", value: "popularity.desc" }
          ],
          value: "popularity.desc"
        }
      ]
    },
    {
      id: "actorWorks",
      title: "演员作品",
      functionName: "getActorWorks",
      cacheDuration: 172800,
      params: []
    },
    {
      id: "directorWorks",
      title: "导演作品",
      functionName: "getDirectorWorks",
      cacheDuration: 172800,
      params: []
    },
    {
      id: "otherWorks",
      title: "其他作品",
      functionName: "getOtherWorks",
      cacheDuration: 172800,
      params: []
    }
  ]
};

// 复用 allWorks 参数到其他模块
["actorWorks", "directorWorks", "otherWorks"].forEach(id => {
  var module = WidgetMetadata.modules.find(m => m.id === id);
  module.params = JSON.parse(JSON.stringify(WidgetMetadata.modules[0].params));
});

// 获取作品详情（用于获取地区信息）
async function fetchItemDetails(item, language) {
  var api = `${item.mediaType}/${item.id}`;
  try {
    var response = await Widget.tmdb.get(api, { 
      params: { language: language || "zh-CN" } 
    });
    return response;
  } catch (error) {
    console.log(`获取作品 ${item.id} 详情失败:`, error);
    return null;
  }
}

// 获取作品的出品国家/地区
function getItemRegions(item) {
  var regions = [];
  
  // 电影：production_countries
  if (item.production_countries && Array.isArray(item.production_countries)) {
    regions = regions.concat(item.production_countries.map(c => c.iso_3166_1));
  }
  
  // 电视剧：origin_country
  if (item.origin_country && Array.isArray(item.origin_country)) {
    regions = regions.concat(item.origin_country);
  }
  
  return [...new Set(regions)]; // 去重
}

// 检查作品是否符合地区筛选
function isItemInRegion(item, targetRegion, itemDetails = null) {
  if (targetRegion === "all") return true;
  
  var regions = [];
  
  if (itemDetails) {
    // 如果有详情数据，优先使用
    regions = getItemRegions(itemDetails);
  } else if (item.production_countries) {
    // 如果当前 item 已有 production_countries 字段
    regions = getItemRegions(item);
  }
  
  if (targetRegion === "other") {
    // "其他" 表示不在主要地区列表中的作品
    var mainRegions = ["CN", "HK", "TW", "US", "JP", "KR", "GB", "FR", "DE", "IN"];
    return regions.length === 0 || !regions.some(r => mainRegions.includes(r));
  }
  
  return regions.includes(targetRegion);
}

// 基础获取TMDB人员作品方法
async function fetchCredits(personId, language) {
  var api = `person/${personId}/combined_credits`;
  var response = await Widget.tmdb.get(api, { params: { language: language || "zh-CN" } });
  if (!response || (!response.cast && !response.crew)) {
    throw new Error("获取作品数据失败");
  }

  var normalize = function(item) {
    return Object.assign({}, item, {
      mediaType: item.media_type,
      releaseDate: item.release_date || item.first_air_date
    });
  };

  return {
    cast: (response.cast || []).map(normalize),
    crew: (response.crew || []).map(normalize)
  };
}

// 过滤函数：按 mediaType 筛选
function filterByType(items, targetType) {
  return targetType === "all" ? items : items.filter(item => item.mediaType === targetType);
}

// 新增：按地区筛选（需要获取详情）
async function filterByRegion(items, targetRegion, language) {
  if (targetRegion === "all") return items;
  
  var filtered = [];
  var batchSize = 5; // 批量请求大小，避免请求过快
  
  for (var i = 0; i < items.length; i += batchSize) {
    var batch = items.slice(i, i + batchSize);
    var promises = batch.map(item => fetchItemDetails(item, language));
    var detailsList = await Promise.all(promises);
    
    for (var j = 0; j < batch.length; j++) {
      if (isItemInRegion(batch[j], targetRegion, detailsList[j])) {
        filtered.push(batch[j]);
      }
    }
  }
  
  return filtered;
}

// 排序函数
function applySorting(items, sortBy) {
  var sorted = items.slice();
  switch (sortBy) {
    case "vote_average.desc":
      sorted.sort(function(a, b) {
        return (b.vote_average || 0) - (a.vote_average || 0);
      });
      break;
    case "release_date.desc":
      sorted.sort(function(a, b) {
        return new Date(b.release_date || b.first_air_date) - new Date(a.release_date || a.first_air_date);
      });
      break;
  }
  return sorted;
}

// 格式化输出（新增地区信息）
function formatResults(items) {
  var seen = {};
  var result = [];
  
  // 先收集所有需要获取详情的项目
  var itemsNeedingDetails = items.filter(item => !item.production_countries && !item.origin_country);
  
  items.forEach(function(item) {
    if (!seen[item.id]) {
      seen[item.id] = true;
      
      // 获取地区信息（如果已有则直接使用）
      var regions = [];
      if (item.production_countries) {
        regions = getItemRegions(item);
      }
      
      result.push({
        id: item.id,
        type: "tmdb",
        title: item.title || item.name,
        description: item.overview,
        releaseDate: item.releaseDate,
        posterPath: item.poster_path,
        backdropPath: item.backdrop_path,
        rating: item.vote_average,
        mediaType: item.mediaType,
        regions: regions // 新增地区字段
      });
    }
  });
  
  return result;
}

// 各模块函数（异步过滤）
async function getAllWorks(params) {
  var p = params || {};
  var credits = await fetchCredits(p.personId, p.language);
  var list = credits.cast.concat(credits.crew);
  list = filterByType(list, p.type);
  list = await filterByRegion(list, p.region, p.language);
  list = applySorting(list, p.sort_by);
  return formatResults(list);
}

async function getActorWorks(params) {
  var p = params || {};
  var credits = await fetchCredits(p.personId, p.language);
  var list = credits.cast;
  list = filterByType(list, p.type);
  list = await filterByRegion(list, p.region, p.language);
  list = applySorting(list, p.sort_by);
  return formatResults(list);
}

async function getDirectorWorks(params) {
  var p = params || {};
  var credits = await fetchCredits(p.personId, p.language);
  var list = credits.crew.filter(function(item) {
    return item.job && item.job.toLowerCase().indexOf("director") !== -1;
  });
  list = filterByType(list, p.type);
  list = await filterByRegion(list, p.region, p.language);
  list = applySorting(list, p.sort_by);
  return formatResults(list);
}

async function getOtherWorks(params) {
  var p = params || {};
  var credits = await fetchCredits(p.personId, p.language);
  var list = credits.crew.filter(function(item) {
    var job = item.job && item.job.toLowerCase();
    return job && job.indexOf("director") === -1 && job.indexOf("actor") === -1;
  });
  list = filterByType(list, p.type);
  list = await filterByRegion(list, p.region, p.language);
  list = applySorting(list, p.sort_by);
  return formatResults(list);
}
