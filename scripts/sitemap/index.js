/*
 * https://medium.com/spemer/creating-a-sitemap-generator-for-next-js-3102fb5a297e
 */

const fs = require('fs')
const { SitemapStream } = require('sitemap')
const zlib = require("zlib")

const POSTS_DIRECTORY = './src/posts'
const SITEMAP_OUTPUT_DIRECTORY = './public'
const SITEMAP_NAME = 'sitemap.xml'
const PAGES = ['/']

try {
  const sitemap = new SitemapStream({
    hostname: 'https://cmontalvo.com',
    xmlns: {
      news: false,
      xhtml: false,
      image: false,
      video: false
    }
  })

  const posts = fs.readdirSync(POSTS_DIRECTORY).map((post) => post.replace('.md', ''))

  if (!fs.existsSync(SITEMAP_OUTPUT_DIRECTORY)) {
    fs.mkdirSync(SITEMAP_OUTPUT_DIRECTORY)
  }

  const stream = fs.createWriteStream(`${SITEMAP_OUTPUT_DIRECTORY}/${SITEMAP_NAME}`)

  sitemap.pipe(stream)

  PAGES.map((page) => {
    sitemap.write({ changefreq: 'daily', priority: 0.8, url: page })
  })

  posts.map((post) => {
    sitemap.write({ changefreq: 'daily', priority: 1, url: `/blog/${post}` })
  })

  sitemap.end()


  const fileContents = fs.createReadStream(`${SITEMAP_OUTPUT_DIRECTORY}/${SITEMAP_NAME}`);
  const writeStream = fs.createWriteStream(`${SITEMAP_OUTPUT_DIRECTORY}/${SITEMAP_NAME}` + ".gz");
  const zip = zlib.createGzip();

  fileContents
    .pipe(zip)
    .on("error", (err) => console.error(err))
    .pipe(writeStream)
    .on("error", (err) => console.error(err));


  console.log('> ✅ [Sitemap]: Generated successfully')
} catch (err) {
  console.log('> ❌ [Sitemap]: Error', err)
}