const request = require('request-promise')
const cheerio = require('cheerio')
const fs = require('fs')

async function main() {
  const result = await request.get('https://codingwithstefan.com/table-example')

  // make an array for our scraped rows
  const scrapedRows = []

  const $ = await cheerio.load(result)
  // devtools > copy > copy selector
  // - body > table > tbody > tr:nth-child(2) > td:nth-child(1)
  //$('body > table > tbody > tr > td').each((index, element) => {
  // console.log($(element).text())
  //})
  //! Get each row
  $('body > table > tbody > tr').each((index, element) => {
    // skip first row to skip over the thead
    if (index === 0) return true
    // console.log($($(element).find('td')[0]).text())
    //! Get each column in that row (wrap another $() to get dom elements)
    // - find() gives us an array back
    //! 1.) find tds of each row
    const tds = $(element).find('td')
    const company = $(tds[0]).text()
    const contact = $(tds[1]).text()
    const country = $(tds[2]).text()
    // console.log(company, contact, country)
    //! 2.) take data for each row and turn it into an object
    const scrapedRow = { company, contact, country }
    // console.log(scrapedRow)
    scrapedRows.push(scrapedRow)
  })

  console.log(scrapedRows)

  fs.writeFileSync('./test.html', result)
  // fs.writeFileSync('./test.js', scrapedRows)
}

main()
