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
  /*$('.result-title').each((index, element) => console.log($(element).text()))
  // grab the url
  $('.result-title').each((index, element) => console.log($(element).attr('href')))
  */
  // do the writes in the IDE, then paste over in browser to see how it works, it's faster than using chromium each time
  //! mash the two queries above into 1 and loop
  //! get an array of our objects
  /*const results = $('.result-title')
    .map((index, element) => {
      const title = $(element).text()
      const url = $(element).attr('href')
      return { title, url }
    })
    .get()
  */
  // we'll base this off the parent so we can capture siblings to title
  const results = $('.result-info')
    .map((index, element) => {
      const titleElement = $(element).find('.result-title')
      const title = $(titleElement).text()
      const url = $(titleElement).attr('href')

      const timeElement = $(element).find('.result-date')
      const datePosted = new Date($(timeElement).attr('datetime'))

      const hoodElement = $(element).find('.result-hood')
      const hood = $(hoodElement).text().trim().replace('(', '').replace(')', '')

      return { title, url, datePosted, hood }
    })
    .get()
  //!^^^ make sure to use a .get() when you map over a cheerio w/ nodeJS --- then you'll get the actual values of the array!
  console.log(results)
  // quick way to test is to copy and paste into the dev console
}

main()
