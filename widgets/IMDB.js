// =============UserScript=============
// @name         IMDB 片单组件
// @version      2.0.0
// @description  抓取 IMDB 自定义片单、排行榜，支持分页
// @author       Claude (参考 阿米诺斯 combined.js)
// =============UserScript=============

var WidgetMetadata = {
  id: "imdb_list_widget",
  title: "IMDB 片单",
  description: "抓取 IMDB 片单、榜单数据，支持翻页。使用 LD+JSON 解析，每次全量加载后本地分页。",
  author: "Claude",
  site: "https://www.imdb.com",
  version: "2.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "IMDB 自定义片单",
      description: "输入任意 IMDB 片单或榜单链接，如 https://www.imdb.com/list/ls591141212/",
      requiresWebView: false,
      functionName: "loadImdbCustomList",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "🔗 片单链接",
          type: "input",
          description: "输入 IMDB 片单完整链接，或 ls 开头的片单 ID",
          placeholders: [
            { title: "时下热门电影", value: "https://www.imdb.com/chart/moviemeter/" },
            { title: "时下热门剧集", value: "https://www.imdb.com/chart/tvmeter/" },
            { title: "2月串流平台上新預告", value: "https://www.imdb.com/list/ls4154318555/?ref_=uspf_t_28" },
            { title: "2月Netflix上新預告", value: "https://www.imdb.com/list/ls4159048857/?ref_=watch_wchgd_1_1_c_wtw_netflix_feb26_cta" },
            { title: "2月PrimeVideo上新預告", value: "https://www.imdb.com/list/ls4159784385/?ref_=watch_wchgd_1_2_wtw_prime_feb26_i" },
            { title: "2月HBOMax上新預告", value: "https://www.imdb.com/list/ls4159792578/?ref_=watch_wchgd_1_3_wtw_max_feb26_i" },
            { title: "2月Hulu上新預告", value: "https://www.imdb.com/list/ls4159071027/?ref_=watch_wchgd_1_4_wtw_hulu_feb2026_i" },
            { title: "2月Netflix上新預告", value: "https://www.imdb.com/list/ls4159048857/?ref_=watch_wchgd_1_1_c_wtw_netflix_feb26_cta" },            
          ],
        },
        {
          name: "page",
          title: "页码",
          type: "page",
        },
        {
          name: "limit",
          title: "每页数量",
          type: "constant",
          value: "20",
        },
      ],
    },
    {
      title: "IMDB Top 250 电影",
      description: "IMDB 用户评分最高的 250 部电影",
      requiresWebView: false,
      functionName: "loadImdbTop250Movies",
      cacheDuration: 86400,
      params: [
        {
          name: "url",
          title: "🔗 列表地址",
          type: "constant",
          value: "https://www.imdb.com/chart/top/",
        },
        {
          name: "page",
          title: "页码",
          type: "page",
        },
        {
          name: "limit",
          title: "每页数量",
          type: "constant",
          value: "20",
        },
      ],
    },
    {
      title: "IMDB Top 250 剧集",
      description: "IMDB 用户评分最高的 250 部剧集",
      requiresWebView: false,
      functionName: "loadImdbTop250TV",
      cacheDuration: 86400,
      params: [
        {
          name: "url",
          title: "🔗 列表地址",
          type: "constant",
          value: "https://www.imdb.com/chart/toptv/",
        },
        {
          name: "page",
          title: "页码",
          type: "page",
        },
        {
          name: "limit",
          title: "每页数量",
          type: "constant",
          value: "20",
        },
      ],
    },
  ],
};

// ─── 通用 Headers ──────────────────────────────────────────────────────────────
const IMDB_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
  Referer: "https://www.imdb.com/",
};

// ─── 分页辅助 ──────────────────────────────────────────────────────────────────
function calcPagination(params) {
  const page = parseInt(params.page) || 1;
  const limit = parseInt(params.limit) || 20;
  const start = (page - 1) * limit;
  return { page, limit, start };
}

// ─── 规范化 URL ────────────────────────────────────────────────────────────────
function normalizeImdbUrl(input) {
  input = (input || "").trim();
  // 纯 ls 片单 ID
  if (/^ls\d+$/.test(input)) {
    return `https://www.imdb.com/list/${input}/`;
  }
  // 已是完整 URL
  if (input.startsWith("http")) {
    return input;
  }
  // 相对路径
  return "https://www.imdb.com" + (input.startsWith("/") ? "" : "/") + input;
}

// ─── 核心：从 IMDB 页面解析所有条目 ──────────────────────────────────────────
// 策略1：解析 LD+JSON（结构化数据，最可靠）
// 策略2：解析 __NEXT_DATA__ JSON（新版 IMDB 页面）
// 策略3：CSS 选择器兜底
async function fetchAllImdbItems(url) {
  const response = await Widget.http.get(url, { headers: IMDB_HEADERS });
  if (!response || !response.data) {
    throw new Error("获取 IMDB 页面失败：" + url);
  }

  const html = response.data;
  const items = [];

  // ── 策略 1：LD+JSON ──────────────────────────────────────────────────────────
  const ldJsonMatch = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
  );
  if (ldJsonMatch && ldJsonMatch[1]) {
    try {
      const json = JSON.parse(ldJsonMatch[1]);
      if (json && json.itemListElement && Array.isArray(json.itemListElement)) {
        for (const entry of json.itemListElement) {
          const item = entry.item || entry;
          const urlStr = item.url || "";
          const idMatch = urlStr.match(/(tt\d+)/);
          if (idMatch) {
            items.push({
              id: idMatch[1],
              type: "imdb",
              title: item.name || "Unknown Title",
              coverUrl: item.image || undefined,
            });
          }
        }
        if (items.length > 0) {
          console.log(`LD+JSON 解析到 ${items.length} 条`);
          return items;
        }
      }
    } catch (e) {
      console.warn("LD+JSON 解析失败:", e.message);
    }
  }

  // ── 策略 2：__NEXT_DATA__ JSON ───────────────────────────────────────────────
  const nextDataMatch = html.match(
    /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/
  );
  if (nextDataMatch && nextDataMatch[1]) {
    try {
      const nextData = JSON.parse(nextDataMatch[1]);
      // 尝试从 pageProps 中找列表数据
      const props = nextData?.props?.pageProps;
      const listItems =
        props?.listData?.items ||
        props?.chartData?.data?.rankings ||
        props?.mainColumnData?.listPage?.items?.edges ||
        [];

      for (const entry of listItems) {
        // 不同字段名兼容
        const node = entry.node || entry.item || entry;
        const id =
          node.id ||
          (node.const && node.const.match?.(/tt\d+/)?.[0]) ||
          "";
        const title =
          node.titleText?.text ||
          node.title ||
          node.primaryText?.text ||
          "Unknown";
        const posterUrl =
          node.primaryImage?.url || node.image?.url || undefined;

        if (id && /^tt\d+$/.test(id)) {
          items.push({ id, type: "imdb", title, coverUrl: posterUrl });
        }
      }

      if (items.length > 0) {
        console.log(`__NEXT_DATA__ 解析到 ${items.length} 条`);
        return items;
      }
    } catch (e) {
      console.warn("__NEXT_DATA__ 解析失败:", e.message);
    }
  }

  // ── 策略 3：CSS 选择器兜底 ───────────────────────────────────────────────────
  const $ = Widget.html.load(html);

  $("ul.ipc-metadata-list > li, .lister-list > tr, .ipc-metadata-list-summary-item").each((_, el) => {
    const $el = $(el);

    // 提取链接 → tt ID
    const link =
      $el.find("a.ipc-title-link-wrapper").first().attr("href") ||
      $el.find("a[href*='/title/tt']").first().attr("href") ||
      "";
    const idMatch = link.match(/(tt\d+)/);
    if (!idMatch) return;

    const id = idMatch[1];

    // 提取标题
    const rawTitle =
      $el.find(".ipc-title__text, .titleColumn a, h3.ipc-title__text").first().text().trim() ||
      "Unknown";
    const title = rawTitle.replace(/^\d+\.\s*/, ""); // 去序号

    // 提取封面
    const coverUrl =
      $el.find("img.ipc-image, .ipc-poster img, .posterColumn img").attr("src") ||
      $el.find("img").first().attr("src") ||
      undefined;

    items.push({ id, type: "imdb", title, coverUrl });
  });

  console.log(`CSS 选择器兜底解析到 ${items.length} 条`);
  return items;
}

// ─── 通用加载函数 ──────────────────────────────────────────────────────────────
async function loadImdbItems(params) {
  const rawUrl = params.url || "";
  const url = normalizeImdbUrl(rawUrl);
  const { start, limit } = calcPagination(params);

  const allItems = await fetchAllImdbItems(url);
  const paged = allItems.slice(start, start + limit);

  console.log(
    `总条目 ${allItems.length}，第 ${params.page || 1} 页，返回 ${paged.length} 条`
  );
  return paged;
}

// ─── 对外暴露的模块函数 ────────────────────────────────────────────────────────
async function loadImdbCustomList(params = {}) {
  if (!params.url || params.url.trim() === "") {
    throw new Error("请填写 IMDB 片单链接或片单 ID（如 ls591141212）");
  }
  return loadImdbItems(params);
}

async function loadImdbTop250Movies(params = {}) {
  return loadImdbItems(params);
}

async function loadImdbTop250TV(params = {}) {
  return loadImdbItems(params);
}
