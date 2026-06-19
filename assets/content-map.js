// assets/content-map.js
// Content section definitions, keyword tags, and search filtering for site-main-mk.com

const siteUrl = 'https://site-main-mk.com';
const platformKeyword = 'mk体育';

const contentSections = [
  {
    id: 'home',
    title: '首页',
    keywords: ['mk体育', '首页', '推荐', '新闻'],
    summary: '平台首页展示最新动态与热门推荐'
  },
  {
    id: 'live',
    title: '直播',
    keywords: ['mk体育', '直播', '赛事', '即时比分'],
    summary: '实时体育赛事直播与比分更新'
  },
  {
    id: 'match',
    title: '赛事',
    keywords: ['mk体育', '赛事', '赛程', '结果'],
    summary: '历史赛事数据与即将开始的赛程'
  },
  {
    id: 'video',
    title: '视频',
    keywords: ['mk体育', '视频', '集锦', '回放'],
    summary: '精彩比赛视频集锦与完整回放'
  },
  {
    id: 'news',
    title: '资讯',
    keywords: ['mk体育', '资讯', '报道', '分析'],
    summary: '体育新闻与深度分析报道'
  },
  {
    id: 'community',
    title: '社区',
    keywords: ['mk体育', '社区', '讨论', '论坛'],
    summary: '用户交流讨论平台'
  },
  {
    id: 'shop',
    title: '商城',
    keywords: ['mk体育', '商城', '商品', '装备'],
    summary: '体育用品与纪念品在线商城'
  }
];

const tagCloud = [
  { tag: '足球', count: 124 },
  { tag: '篮球', count: 98 },
  { tag: '网球', count: 67 },
  { tag: '电竞', count: 156 },
  { tag: '田径', count: 43 },
  { tag: '游泳', count: 52 },
  { tag: '乒乓球', count: 71 },
  { tag: '羽毛球', count: 63 }
];

function filterSectionsByKeyword(sections, keyword) {
  const lowerKeyword = keyword.toLowerCase();
  return sections.filter(section =>
    section.keywords.some(kw => kw.toLowerCase().includes(lowerKeyword))
  );
}

function getSectionById(sections, id) {
  return sections.find(section => section.id === id) || null;
}

function buildSectionLink(section) {
  return `${siteUrl}/${section.id}`;
}

function generateTagHtml(tagList) {
  let html = '';
  tagList.forEach(item => {
    const safeTag = String(item.tag).replace(/[&<>"]/g, function(m) {
      if (m === '&') return '&amp;';
      if (m === '<') return '&lt;';
      if (m === '>') return '&gt;';
      if (m === '"') return '&quot;';
      return m;
    });
    html += `<span class="tag-item" data-tag="${safeTag}" data-count="${item.count}">${safeTag} (${item.count})</span>`;
  });
  return html;
}

const exampleSearch = (() => {
  const query = 'mk体育';
  const results = filterSectionsByKeyword(contentSections, query);
  const links = results.map(s => buildSectionLink(s));
  return {
    query,
    resultCount: results.length,
    links
  };
})();

// Basic test (comment out for production)
console.log('Site URL:', siteUrl);
console.log('Platform keyword:', platformKeyword);
console.log('Example search:', exampleSearch);
console.log('Tag HTML sample:', generateTagHtml(tagCloud.slice(0, 3)));