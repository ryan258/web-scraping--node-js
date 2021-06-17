const request = require('request-promise')
const fs = require('fs')
const cheerio = require('cheerio')

async function main() {
  const html = await request.get('https://reactnativetutorial.net/css-selectors/lesson2.html')
  fs.writeFileSync('./test.html', html)
  // now we have the page html in a file
  // time to extract from it
  const $ = await cheerio.load(html)
  $('h2').each((index, element) => {
    console.log($(element).text())
  })
}

main()
