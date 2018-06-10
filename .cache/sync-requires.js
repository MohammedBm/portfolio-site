// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/src/pages/404.js")),
  "component---src-pages-crowd-scores-js": preferDefault(require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/src/pages/CrowdScores.js")),
  "component---src-pages-gradient-js": preferDefault(require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/src/pages/Gradient.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/src/pages/index.js")),
  "component---src-pages-numilli-js": preferDefault(require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/src/pages/Numilli.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/src/pages/page-2.js")),
  "component---src-pages-quidco-js": preferDefault(require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/src/pages/Quidco.js")),
  "component---src-pages-suggestv-js": preferDefault(require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/src/pages/Suggestv.js")),
  "component---src-pages-thanks-js": preferDefault(require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/src/pages/Thanks.js")),
  "component---src-pages-yunojuno-js": preferDefault(require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/src/pages/Yunojuno.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/layout-index.json"),
  "404.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/404.json"),
  "crowd-scores.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/crowd-scores.json"),
  "gradient.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/gradient.json"),
  "index.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/index.json"),
  "numilli.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/numilli.json"),
  "page-2.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/page-2.json"),
  "quidco.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/quidco.json"),
  "suggestv.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/suggestv.json"),
  "thanks.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/thanks.json"),
  "yunojuno.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/yunojuno.json"),
  "404-html.json": require("/Users/Jimmy/Documents/jciclitira.com/portfolio-site/.cache/json/404-html.json")
}