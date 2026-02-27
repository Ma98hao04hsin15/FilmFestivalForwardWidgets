// =============UserScript=============
// @name         Letterboxd 片单组件
// @version      1.0.0
// @description  解析 Letterboxd 片单与热门电影，通过 IMDB ID 匹配影视数据
// @author       Claude (参考 huangxd letterboxd.js)
// =============UserScript=============

WidgetMetadata = {
    id: "letterboxd_widget",
    title: "Letterboxd 片单",
    description: "解析 Letterboxd 片单，通过 IMDB ID 匹配影视数据",
    author: "Claude",
    site: "https://letterboxd.com",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    detailCacheDuration: 60,
    modules: [
        {
            title: "Letterboxd 自定义片单",
            description: "输入任意 Letterboxd 片单链接",
            requiresWebView: false,
            functionName: "loadListItems",
            cacheDuration: 86400,
            params: [
                {
                    name: "input_type",
                    title: "输入类型",
                    type: "enumeration",
                    value: "select",
                    enumOptions: [
                        { title: "筛选", value: "select" },
                        { title: "自定义", value: "customize" },
                    ],
                },
                {
                    name: "list_select",
                    title: "精选片单",
                    type: "enumeration",
                    description: "选择内置精选片单",
                    belongTo: {
                        paramName: "input_type",
                        value: ["select"],
                    },
                    enumOptions: [
                        { title: "Letterboxd Top 500", value: "https://letterboxd.com/official/list/letterboxds-top-500-films/" },
                        { title: "250部最佳叙事长片", value: "https://letterboxd.com/dave/list/official-top-250-narrative-feature-films/" },
                        { title: "Letterboxd粉丝最多的电影", value: "https://letterboxd.com/jack/list/official-top-250-films-with-the-most-fans/" },
                        { title: "女性导演250部最佳电影", value: "https://letterboxd.com/jack/list/women-directors-the-official-top-250-narrative/" },
                        { title: "100部最佳动画长片", value: "https://letterboxd.com/lifeasfiction/list/letterboxd-100-animation/" },
                        { title: "250部最佳恐怖片", value: "https://letterboxd.com/darrencb/list/letterboxds-top-250-horror-films/" },
                        { title: "250部最佳科幻片", value: "https://letterboxd.com/chris_coke/list/letterboxds-top-250-science-fiction-films/" },
                        { title: "250部最佳国际电影", value: "https://letterboxd.com/brsan/list/letterboxds-top-250-international-films/" },
                        { title: "奥斯卡最佳影片", value: "https://letterboxd.com/oscars/list/oscar-winning-films-best-picture/" },
                        { title: "戛纳金棕榈奖", value: "https://letterboxd.com/festival_cannes/list/70-years-of-the-palme-dor-70-ans-de-la-palme/" },
                        { title: "英国电影学院奖最佳影片", value: "https://letterboxd.com/bafta/list/all-bafta-best-film-award-winners/" },
                        { title: "柏林电影节金熊奖", value: "https://letterboxd.com/socas/list/golden-bear-goldener-bar/" },
                        { title: "威尼斯电影节金狮奖", value: "https://letterboxd.com/hieusmile/list/golden-lion-venice-films-festival/" },
                        { title: "A24 电影列表", value: "https://letterboxd.com/a24/list/every-a24-film/" },
                        { title: "MUBI 电影列表", value: "https://letterboxd.com/mubi/list/mubi-releases/" },
                        { title: "标准收藏", value: "https://letterboxd.com/jbutts15/list/the-complete-criterion-collection/" },
                        { title: "罗杰·伊伯特的伟大电影", value: "https://letterboxd.com/dvideostor/list/roger-eberts-great-movies/" },
                        { title: "视与听伟大电影（影评人榜）", value: "https://letterboxd.com/bfi/list/sight-and-sounds-greatest-films-of-all-time/" },
                        { title: "视与听伟大电影（导演榜）", value: "https://letterboxd.com/bfi/list/sight-and-sounds-directors-100-greatest-films/" },
                        { title: "IMDb前250名", value: "https://letterboxd.com/dave/list/imdb-top-250/" },
                        { title: "死前必看的1001部电影（2024版）", value: "https://letterboxd.com/gubarenko/list/1001-movies-you-must-see-before-you-die-2024/" },
                        { title: "AFI前100名（2007版）", value: "https://letterboxd.com/afi/list/afis-100-years100-movies-10th-anniversary/" },
                        { title: "2024年最高评分电影", value: "https://letterboxd.com/crew/list/2024-highest-rated-films/" },
                        { title: "2023年最高评分电影", value: "https://letterboxd.com/crew/list/2023-highest-rated-films/" },
                        { title: "2022年最高评分电影", value: "https://letterboxd.com/crew/list/2022-highest-rated-films/" },
                        { title: "2021年最高评分电影", value: "https://letterboxd.com/crew/list/2021-highest-rated-films/" },
                        { title: "2020年最高评分电影", value: "https://letterboxd.com/crew/list/2020-highest-rated-films/" },
                        { title: "2010年代最高评分电影", value: "https://letterboxd.com/crew/list/the-2010s-top-250-narrative-features/" },
                        { title: "昆汀·塔伦蒂诺最爱", value: "https://letterboxd.com/zachaigley/list/quentin-tarantinos-199-favorite-films/" },
                        { title: "黑泽明最爱", value: "https://letterboxd.com/michaelj/list/akira-kurosawas-100-favorite-movies/" },
                        { title: "斯坦利·库布里克最爱", value: "https://letterboxd.com/jeffroskull/list/stanley-kubricks-100-favorite-filmsthat-we/" },
                        { title: "埃德加·赖特1000部最爱", value: "https://letterboxd.com/crew/list/edgar-wrights-1000-favorite-movies/" },
                        { title: "奉俊昊最爱", value: "https://letterboxd.com/gpu/list/bong-joon-hos-favorites/" },
                        { title: "大卫·芬奇最爱", value: "https://letterboxd.com/abdurrhmknkl/list/david-finchers-favorite-films/" },
                    ],
                },
                {
                    name: "url_customize",
                    title: "自定义片单 URL",
                    type: "input",
                    belongTo: {
                        paramName: "input_type",
                        value: ["customize"],
                    },
                    description: "输入 Letterboxd 片单完整链接，如：https://letterboxd.com/dave/list/imdb-top-250/",
                },
                {
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    value: "default",
                    enumOptions: [
                        { title: "默认排序", value: "default" },
                        { title: "反序", value: "reverse" },
                        { title: "名称", value: "name" },
                        { title: "流行度", value: "popular" },
                        { title: "随机", value: "shuffle" },
                        { title: "最新发行", value: "release" },
                        { title: "最早发行", value: "release-earliest" },
                        { title: "最高评分", value: "rating" },
                        { title: "最低评分", value: "rating-lowest" },
                    ],
                },
                {
                    name: "genre",
                    title: "类型筛选",
                    type: "enumeration",
                    value: "default",
                    enumOptions: [
                        { title: "所有类型", value: "default" },
                        { title: "动作", value: "action" },
                        { title: "冒险", value: "adventure" },
                        { title: "动画", value: "animation" },
                        { title: "喜剧", value: "comedy" },
                        { title: "犯罪", value: "crime" },
                        { title: "纪录片", value: "documentary" },
                        { title: "剧情", value: "drama" },
                        { title: "家庭", value: "family" },
                        { title: "奇幻", value: "fantasy" },
                        { title: "历史", value: "history" },
                        { title: "恐怖", value: "horror" },
                        { title: "音乐", value: "music" },
                        { title: "悬疑", value: "mystery" },
                        { title: "爱情", value: "romance" },
                        { title: "科幻", value: "science-fiction" },
                        { title: "惊悚", value: "thriller" },
                        { title: "战争", value: "war" },
                        { title: "西部", value: "western" },
                    ],
                },
                {
                    name: "decade",
                    title: "年代筛选",
                    type: "enumeration",
                    value: "default",
                    enumOptions: [
                        { title: "所有年代", value: "default" },
                        { title: "2020年代", value: "2020s" },
                        { title: "2010年代", value: "2010s" },
                        { title: "2000年代", value: "2000s" },
                        { title: "1990年代", value: "1990s" },
                        { title: "1980年代", value: "1980s" },
                        { title: "1970年代", value: "1970s" },
                        { title: "1960年代", value: "1960s" },
                        { title: "1950年代", value: "1950s" },
                    ],
                },
                { name: "page", title: "页码", type: "page" },
            ],
        },
    ],
};

// ─── 通用 Headers ──────────────────────────────────────────────────────────────
const LB_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
};

// ─── 加载 Letterboxd → IMDb ID 本地缓存 ───────────────────────────────────────
async function loadLetterboxdToImdbCache() {
    try {
        const response = await Widget.http.get(
            "https://gist.githubusercontent.com/huangxd-/60712812d3d8b3c4422d46c6bc07046c/raw/letterboxd_url2imdb.json"
        );
        console.log("已加载 Letterboxd → IMDb 缓存");
        return response.data || {};
    } catch (e) {
        console.error("加载缓存失败:", e.message);
        return {};
    }
}

// ─── 从 Letterboxd 页面提取电影相对路径 ──────────────────────────────────────
// 选择器：li.posteritem div.react-component[data-target-link]
// 每个 Letterboxd 页最多 100 部（片单）或 72 部（热门）
// minNum/maxNum 用来在页内做 slice（1-based）
function extractFilmUrlsFromHtml(html, minNum, maxNum) {
    const $ = Widget.html.load(html);
    const filmContainers = $("li.posteritem div.react-component[data-target-link]");

    if (!filmContainers.length) {
        console.warn("未找到电影容器，尝试备用选择器");
        // 备用选择器
        const altContainers = $("div[data-target-link^='/film/']");
        if (!altContainers.length) {
            throw new Error("未找到电影列表，页面结构可能已变更");
        }
    }

    const urls = [];
    const seen = new Set();

    filmContainers.each((_, el) => {
        const targetLink = $(el).attr("data-target-link") || "";
        if (!targetLink.startsWith("/film/")) return;
        const fullUrl = `https://letterboxd.com${targetLink}`;
        if (!seen.has(fullUrl)) {
            seen.add(fullUrl);
            urls.push(fullUrl);
        }
    });

    // 备用：data-target-link 在外层 li 或其他容器
    if (urls.length === 0) {
        $("[data-target-link^='/film/']").each((_, el) => {
            const targetLink = $(el).attr("data-target-link") || "";
            const fullUrl = `https://letterboxd.com${targetLink}`;
            if (!seen.has(fullUrl)) {
                seen.add(fullUrl);
                urls.push(fullUrl);
            }
        });
    }

    const start = Math.max(0, minNum - 1);
    const end = Math.min(maxNum, urls.length);
    console.log(`页面共 ${urls.length} 部，取 [${start+1}~${end}]`);
    return urls.slice(start, end);
}

// ─── 从单部电影的 Letterboxd 页面抓取 IMDb ID ─────────────────────────────────
async function fetchImdbIdFromFilmPage(filmUrl) {
    try {
        const response = await Widget.http.get(filmUrl, { headers: LB_HEADERS });
        const $ = Widget.html.load(response.data);
        const imdbLink = $('a[data-track-action="IMDb"]').first().attr("href") || "";
        const match = imdbLink.match(/title\/(tt\d+)/);
        return match ? match[1] : null;
    } catch (e) {
        console.error("抓取 IMDb ID 失败:", filmUrl, e.message);
        return null;
    }
}

// ─── 批量将 Letterboxd URL 转为 IMDb ID ──────────────────────────────────────
async function fetchImdbIds(filmUrls) {
    const cache = await loadLetterboxdToImdbCache();

    const results = await Promise.all(
        filmUrls.map(async (url) => {
            // 优先查本地缓存
            if (cache[url]) {
                console.log(`缓存命中: ${cache[url]} (${url})`);
                return cache[url];
            }
            // 缓存未命中则请求电影页
            return fetchImdbIdFromFilmPage(url);
        })
    );

    const imdbIds = [...new Set(results.filter(Boolean))].map((id) => ({
        id,
        type: "imdb",
    }));

    console.log(`共获取 ${imdbIds.length} 个 IMDb ID`);
    return imdbIds;
}

// ─── 构建 URL 并抓取数据（通用核心逻辑）─────────────────────────────────────
// Letterboxd 每页 100 部（片单）/ 72 部（热门）
// Forward 每页 20 部 → 每 5 个 Forward 页对应 1 个 Letterboxd 页
// minNum/maxNum 定位在 Letterboxd 页内的偏移
async function fetchFromLetterboxd(baseUrl, params) {
    const page = parseInt(params.page) || 1;
    const count = 20;
    const minNum = ((page - 1) % 5) * count + 1;
    const maxNum = minNum + count - 1;
    const lbPage = Math.floor((page - 1) / 5) + 1;

    const sortBy = params.sort_by || "default";
    const genre = params.genre || "default";
    const decade = params.decade || "default";

    let url = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    url += `page/${lbPage}/`;
    if (decade !== "default") url += `decade/${decade}/`;
    if (genre !== "default") url += `genre/${genre}/`;
    if (sortBy !== "default") url += `by/${sortBy}/`;

    console.log("请求 URL:", url, `minNum=${minNum} maxNum=${maxNum}`);

    const response = await Widget.http.get(url, { headers: LB_HEADERS });
    if (!response || !response.data) {
        throw new Error("获取页面失败：" + url);
    }

    const filmUrls = extractFilmUrlsFromHtml(response.data, minNum, maxNum);
    return fetchImdbIds(filmUrls);
}

// ─── 模块函数 ─────────────────────────────────────────────────────────────────

async function loadListItems(params = {}) {
    const inputType = params.input_type || "select";
    const listUrl = inputType === "select"
        ? (params.list_select || "")
        : (params.url_customize || "");

    if (!listUrl) {
        throw new Error("请选择或输入 Letterboxd 片单链接");
    }

    return fetchFromLetterboxd(listUrl, params);
}
