// 奥斯卡金像奖 ForwardWidget
// 数据来源: TMDB Award API
WidgetMetadata = {
  id: "OscarsAllMovie",
  title: "🏆 历届奥斯卡金像奖入围与获奖影片",
  description: "获取历届奥斯卡金像奖入围与获奖影片",
  author: "ForwardWidget",
  site: "https://www.themoviedb.org/award/1-academy-awards",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 86400,
  modules: [
    {
      title: "🎭第98屆",
      description: "第98屆作品",
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
    {
      title: "🎭第97屆",
      description: "第97屆作品",
      requiresWebView: false,
      functionName: "loadBestPicturesnominee",
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
  { id: "74643", year: 2012, title: "The Artist", ceremony: 84 },
  { id: "45269", year: 2011, title: "The King's Speech", ceremony: 83 },
  { id: "12162", year: 2010, title: "The Hurt Locker", ceremony: 82 },
  { id: "12405", year: 2009, title: "Slumdog Millionaire", ceremony: 81 },
  { id: "6977", year: 2008, title: "No Country for Old Men", ceremony: 80 },
  { id: "1422", year: 2007, title: "The Departed", ceremony: 79 },
  { id: "1640", year: 2006, title: "Crash", ceremony: 78 },
  { id: "70", year: 2005, title: "Million Dollar Baby", ceremony: 77 },
  { id: "122", year: 2004, title: "The Lord of the Rings: The Return of the King", ceremony: 76 },  
  { id: "1574", year: 2003, title: "Chicago", ceremony: 75 },
  { id: "453", year: 2002, title: "A Beautiful Mind", ceremony: 74 },
  { id: "98", year: 2001, title: "Gladiator", ceremony: 73 },
];

// 历届最佳影片提名 TMDB ID（movie）
const BEST_PICTURES_NOMINEE = [
  // 第97届 ~ 第77届（每届最佳影片，按届次倒序）
  { id: "549509", year: 2025, title: "The Brutalist", ceremony: 97 },
  { id: "661539", year: 2025, title: "A Complete Unknown", ceremony: 97 },
  { id: "974576", year: 2025, title: "Conclave", ceremony: 97 },
  { id: "693134", year: 2025, title: "Dune: Part Two", ceremony: 97 },
  { id: "974950", year: 2025, title: "Emilia Pérez", ceremony: 97 },
  { id: "1000837", year: 2025, title: "I'm Still Here", ceremony: 97 },
  { id: "1028196", year: 2025, title: "Nickel Boys", ceremony: 97 },
  { id: "933260", year: 2025, title: "The Substance", ceremony: 97 },
  { id: "402431", year: 2025, title: "Wicked", ceremony: 97 },
  
  { id: "1056360", year: 2024, title: "American Fiction", ceremony: 96 },
  { id: "915935", year: 2024, title: "Anatomy of a Fall", ceremony: 96 },
  { id: "346698", year: 2024, title: "Barbie", ceremony: 96 },
  { id: "840430", year: 2024, title: "The Holdovers", ceremony: 96 },
  { id: "466420", year: 2024, title: "Killers of the Flower Moon", ceremony: 96 },
  { id: "523607", year: 2024, title: "Maestro", ceremony: 96 },
  { id: "666277", year: 2024, title: "Past Lives", ceremony: 96 },
  { id: "792307", year: 2024, title: "Poor Things", ceremony: 96 },
  { id: "467244", year: 2024, title: "The Zone of Interest", ceremony: 96 },
  
  { id: "49046", year: 2023, title: "All Quiet on the Western Front", ceremony: 95 },
  { id: "76600", year: 2023, title: "Avatar: The Way of Water", ceremony: 95 },
  { id: "674324", year: 2023, title: "The Banshees of Inisherin", ceremony: 95 },
  { id: "614934", year: 2023, title: "Elvis", ceremony: 95 },
  { id: "804095", year: 2023, title: "The Fabelmans", ceremony: 95 },
  { id: "817758", year: 2023, title: "Tár", ceremony: 95 },
  { id: "361743", year: 2023, title: "Top Gun: Maverick", ceremony: 95 },
  { id: "497828", year: 2023, title: "Triangle of Sadness", ceremony: 95 },
  { id: "777245", year: 2023, title: "Women Talking", ceremony: 95 },
  
  { id: "777270", year: 2022, title: "Belfast", ceremony: 94 },
  { id: "646380", year: 2022, title: "Don't Look Up", ceremony: 94 },
  { id: "758866", year: 2022, title: "Drive My Car", ceremony: 94 },
  { id: "438631", year: 2022, title: "Dune", ceremony: 94 },
  { id: "614917", year: 2022, title: "King Richard", ceremony: 94 },
  { id: "718032", year: 2022, title: "Licorice Pizza", ceremony: 94 },
  { id: "597208", year: 2022, title: "Nightmare Alley", ceremony: 94 },
  { id: "600583", year: 2022, title: "The Power of the Dog", ceremony: 94 },
  { id: "511809", year: 2022, title: "West Side Story", ceremony: 94 },
  
  { id: "600354", year: 2021, title: "The Father", ceremony: 93 },
  { id: "583406", year: 2021, title: "Judas and the Black Messiah", ceremony: 93 },
  { id: "614560", year: 2021, title: "Mank", ceremony: 93 },
  { id: "615643", year: 2021, title: "Minari", ceremony: 93 },
  { id: "582014", year: 2021, title: "Promising Young Woman", ceremony: 93 },
  { id: "502033", year: 2021, title: "Sound of Metal", ceremony: 93 },
  { id: "556984", year: 2021, title: "The Trial of the Chicago 7", ceremony: 93 },
  
  { id: "530915", year: 2020, title: "1917", ceremony: 92 },
  { id: "359724", year: 2020, title: "Ford v Ferrari", ceremony: 92 },
  { id: "515001", year: 2020, title: "Jojo Rabbit", ceremony: 92 },
  { id: "475557", year: 2020, title: "Joker", ceremony: 92 },
  { id: "331482", year: 2020, title: "Little Women", ceremony: 92 },
  { id: "398978", year: 2020, title: "The Irishman", ceremony: 92 },
  { id: "492188", year: 2020, title: "Marriage Story", ceremony: 92 },
  { id: "466272", year: 2020, title: "Once Upon a Time in Hollywood", ceremony: 92 },   
  
  { id: "284054", year: 2019, title: "Black Panther", ceremony: 91 },
  { id: "487558", year: 2019, title: "BlacKkKlansman", ceremony: 91 },
  { id: "424694", year: 2019, title: "Bohemian Rhapsody", ceremony: 91 },
  { id: "375262", year: 2019, title: "The Favourite", ceremony: 91 },
  { id: "426426", year: 2019, title: "Roma", ceremony: 91 },
  { id: "332562", year: 2019, title: "A Star Is Born", ceremony: 91 },
  { id: "429197", year: 2019, title: "Vice", ceremony: 91 },
  
  { id: "398818", year: 2018, title: "Call Me by Your Name", ceremony: 90 },
  { id: "399404", year: 2018, title: "Darkest Hour", ceremony: 90 },
  { id: "374720", year: 2018, title: "Dunkirk", ceremony: 90 },
  { id: "419430", year: 2018, title: "Get Out", ceremony: 90 },
  { id: "391713", year: 2018, title: "Lady Bird", ceremony: 90 },
  { id: "400617", year: 2018, title: "Phantom Thread", ceremony: 90 },
  { id: "446354", year: 2018, title: "The Post", ceremony: 90 },
  { id: "359940", year: 2018, title: "Three Billboards Outside Ebbing, Missouri", ceremony: 90 },
  
  { id: "329865", year: 2017, title: "Arrival", ceremony: 89 },
  { id: "393457", year: 2017, title: "Fences", ceremony: 89 },
  { id: "324786", year: 2017, title: "Hacksaw Ridge", ceremony: 89 },
  { id: "338766", year: 2017, title: "Hell or High Water", ceremony: 89 },
  { id: "381284", year: 2017, title: "Hidden Figures", ceremony: 89 },
  { id: "313369", year: 2017, title: "La La Land", ceremony: 89 },
  { id: "334543", year: 2017, title: "Lion", ceremony: 89 },
  { id: "334541", year: 2017, title: "Manchester by the Sea", ceremony: 89 },
  
  { id: "318846", year: 2016, title: "The Big Short", ceremony: 88 },  
  { id: "296098", year: 2016, title: "Bridge of Spies", ceremony: 88 },  
  { id: "167073", year: 2016, title: "Brooklyn", ceremony: 88 },  
  { id: "76341", year: 2016, title: "Mad Max: Fury Road", ceremony: 88 },  
  { id: "286217", year: 2016, title: "The Martian", ceremony: 88 },  
  { id: "281957", year: 2016, title: "The Revenant", ceremony: 88 },  
  { id: "264644", year: 2016, title: "Room", ceremony: 88 },  
  
  { id: "190859", year: 2015, title: "American Sniper", ceremony: 87 },
  { id: "85350", year: 2015, title: "Boyhood", ceremony: 87 },
  { id: "120467", year: 2015, title: "The Grand Budapest Hotel", ceremony: 87 },
  { id: "205596", year: 2015, title: "The Imitation Game", ceremony: 87 },
  { id: "273895", year: 2015, title: "Selma", ceremony: 87 },
  { id: "266856", year: 2015, title: "The Theory of Everything", ceremony: 87 },
  { id: "244786", year: 2015, title: "Whiplash", ceremony: 87 },
  
  { id: "168672", year: 2014, title: "American Hustle", ceremony: 86 },
  { id: "109424", year: 2014, title: "Captain Phillips", ceremony: 86 },
  { id: "152532", year: 2014, title: "Dallas Buyers Club", ceremony: 86 },
  { id: "49047", year: 2014, title: "Gravity", ceremony: 86 },
  { id: "152601", year: 2014, title: "Her", ceremony: 86 },
  { id: "129670", year: 2014, title: "Nebraska", ceremony: 86 },
  { id: "202220", year: 2014, title: "Philomena", ceremony: 86 },
  { id: "106646", year: 2014, title: "The Wolf of Wall Street", ceremony: 86 },
  
  { id: "86837", year: 2013, title: "Amour", ceremony: 85 },  
  { id: "84175", year: 2013, title: "Beasts of the Southern Wild", ceremony: 85 }, 
  { id: "68718", year: 2013, title: "Django Unchained", ceremony: 85 }, 
  { id: "82695", year: 2013, title: "Les Misérables", ceremony: 85 }, 
  { id: "87827", year: 2013, title: "Life of Pi", ceremony: 85 }, 
  { id: "72976", year: 2013, title: "Lincoln", ceremony: 85 }, 
  { id: "82693", year: 2013, title: "Silver Linings Playbook", ceremony: 85 }, 
  { id: "97630", year: 2013, title: "Zero Dark Thirty", ceremony: 85 }, 
  
  { id: "65057", year: 2012, title: "The Descendants", ceremony: 84 },
  { id: "64685", year: 2012, title: "Extremely Loud & Incredibly Close", ceremony: 84 },
  { id: "50014", year: 2012, title: "The Help", ceremony: 84 },
  { id: "44826", year: 2012, title: "Hugo", ceremony: 84 },
  { id: "59436", year: 2012, title: "Midnight in Paris", ceremony: 84 },
  { id: "60308", year: 2012, title: "Moneyball", ceremony: 84 },
  { id: "8967", year: 2012, title: "The Tree of Life", ceremony: 84 },
  { id: "57212", year: 2012, title: "War Horse", ceremony: 84 },
  
  { id: "44214", year: 2011, title: "Black Swan", ceremony: 83 },
  { id: "45317", year: 2011, title: "The Fighter", ceremony: 83 },
  { id: "27205", year: 2011, title: "Inception", ceremony: 83 },
  { id: "39781", year: 2011, title: "The Kids Are All Right", ceremony: 83 },
  { id: "44115", year: 2011, title: "127 Hours", ceremony: 83 },
  { id: "37799", year: 2011, title: "The Social Network", ceremony: 83 },
  { id: "10193", year: 2011, title: "Toy Story 3", ceremony: 83 },
  { id: "44264", year: 2011, title: "True Grit", ceremony: 83 },
  { id: "39013", year: 2011, title: "Winter's Bone", ceremony: 83 },
  
  { id: "19995", year: 2010, title: "Avatar", ceremony: 82 },
  { id: "22881", year: 2010, title: "The Blind Side", ceremony: 82 },
  { id: "17654", year: 2010, title: "District 9", ceremony: 82 },
  { id: "24684", year: 2010, title: "An Education", ceremony: 82 },
  { id: "16869", year: 2010, title: "Inglourious Basterds", ceremony: 82 },
  { id: "25793", year: 2010, title: "Precious", ceremony: 82 },
  { id: "12573", year: 2010, title: "A Serious Man", ceremony: 82 },
  { id: "14160", year: 2010, title: "Up", ceremony: 82 },
  { id: "22947", year: 2010, title: "Up in the Air", ceremony: 82 },
  
  { id: "4922", year: 2009, title: "The Curious Case of Benjamin Button", ceremony: 81 },
  { id: "11499", year: 2009, title: "Frost/Nixon", ceremony: 81 },
  { id: "10139", year: 2009, title: "Milk", ceremony: 81 },
  { id: "8055", year: 2009, title: "The Reader", ceremony: 81 },
  
  { id: "4347", year: 2008, title: "Atonement", ceremony: 80 },
  { id: "7326", year: 2008, title: "Juno", ceremony: 80 },
  { id: "4566", year: 2008, title: "Michael Clayton", ceremony: 80 },
  { id: "7345", year: 2008, title: "There Will Be Blood", ceremony: 80 },
  
  { id: "1164", year: 2007, title: "Babel", ceremony: 79 },
  { id: "1251", year: 2007, title: "Letters from Iwo Jima", ceremony: 79 },
  { id: "773", year: 2007, title: "Little Miss Sunshine", ceremony: 79 },
  { id: "1165", year: 2007, title: "The Queen", ceremony: 79 },
  
  { id: "142", year: 2006, title: "Brokeback Mountain", ceremony: 78 },
  { id: "398", year: 2006, title: "Capote", ceremony: 78 },
  { id: "3291", year: 2006, title: "Good Night, and Good Luck.", ceremony: 78 },
  { id: "612", year: 2006, title: "Munich", ceremony: 78 },
  
  { id: "2567", year: 2005, title: "The Aviator", ceremony: 77 },
  { id: "866", year: 2005, title: "Finding Neverland", ceremony: 77 },
  { id: "1677", year: 2005, title: "Ray", ceremony: 77 },
  { id: "9675", year: 2005, title: "Sideways", ceremony: 77 },
  
  { id: "153", year: 2004, title: "Lost in Translation", ceremony: 76 },  
  { id: "8619", year: 2004, title: "Master and Commander: The Far Side of the World", ceremony: 76 },  
  { id: "322", year: 2004, title: "Mystic River", ceremony: 76 },  
  { id: "4464", year: 2004, title: "Seabiscuit", ceremony: 76 },  
  
  { id: "3131", year: 2003, title: "Gangs of New York", ceremony: 75 },
  { id: "590", year: 2003, title: "The Hours", ceremony: 75 },
  { id: "121", year: 2003, title: "The Lord of the Rings: The Two Towers", ceremony: 75 },
  { id: "423", year: 2003, title: "The Pianist", ceremony: 75 },
  
  { id: "5279", year: 2002, title: "Gosford Park", ceremony: 74 },
  { id: "1999", year: 2002, title: "In the Bedroom", ceremony: 74 },
  { id: "120", year: 2002, title: "The Lord of the Rings: The Fellowship of the Ring", ceremony: 74 },
  { id: "824", year: 2002, title: "Moulin Rouge!", ceremony: 74 },
  
  { id: "392", year: 2001, title: "Chocolat", ceremony: 73 },
  { id: "146", year: 2001, title: "Crouching Tiger, Hidden Dragon", ceremony: 73 },
  { id: "462", year: 2001, title: "Erin Brockovich", ceremony: 73 },
  { id: "1900", year: 2001, title: "Traffic", ceremony: 73 },
];// ─── 工具函数 ────────────────────────────────────────────────────────────────

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
 * 历届奥斯卡最佳影片獲獎作品
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

/**
 * 历届奥斯卡最佳影片提名作品
 */
async function loadBestPicturesnominee(params = {}) {
  const page = parseInt(params.page) || 1;
  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const pageItems = BEST_PICTURES_NOMINEE.slice(start, start + pageSize);

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
        title: `🎨 第${bp.ceremony}届 · ${data.title || bp.title}`,
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
        title: `🎨 第${bp.ceremony}届 · ${bp.title}`,
      });
    }
  }

  return results;
}
