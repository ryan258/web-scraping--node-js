const puppeteer = require('puppeteer')
const cheerio = require('cheerio')

async function main() {
  const browser = await puppeteer.launch({
    headless: false
  })
  // open a new page/tab
  const page = await browser.newPage()
  await page.goto('https://fayar.craigslist.org/d/gigs/search/ggg')
  // get the page html
  const html = await page.content()
  // pass in site html to cheerio for parsing
  const $ = cheerio.load(html)
  // grab the query we made in the browser
  $('.result-title').each((index, element) => console.log($(element).text()))
  // grab the url
  $('.result-title').each((index, element) => console.log($(element).attr('href')))
}

main()
