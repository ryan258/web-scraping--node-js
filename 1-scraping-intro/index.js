const request = require('request-promise')
const fs = require('fs')
const cheerio = require('cheerio')

async function main() {
  const html = await request.get('https://reactnativetutorial.net/css-selectors/lesson6.html')
  fs.writeFileSync('./test.html', html)
  // now we have the page html in a file
  // time to extract from it
  const $ = await cheerio.load(html)
  console.log($('[data-customer="22293"]').text())
  // or you can just look for the attribute
  console.log($('[data-customer]').text())
}

main()
