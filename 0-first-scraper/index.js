const request = require('request-promise')
const fs = require('fs')
const cheerio = require('cheerio')

// main fn that runs when the script runs
async function main() {
  // get the html off the site
  const html = await request.get('https://reactnativetutorial.net/css-selectors')
  fs.writeFileSync('./test.html', html)
  // time for cheerio!
  const $ = await cheerio.load(html)
  // now we can select target elements
  const theText = $('h1').text()
  console.log(theText)
}

main()
