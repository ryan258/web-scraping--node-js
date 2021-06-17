const request = require('request-promise')
const cheerio = require('cheerio')
const fs = require('fs')

async function main() {
  const result = await request.get('https://codingwithstefan.com/table-example')

  const scrapedRows = []
  const tableHeaders = []

  const $ = await cheerio.load(result)

  $('body > table > tbody > tr').each((index, element) => {
    if (index === 0) {
      const ths = $(element).find('th')
      ths.each((index, element) => {
        tableHeaders.push($(element).text().toLowerCase())
      })
      return true
    }

    const tds = $(element).find('td')
    const tableRow = {}
    tds.each((index, element) => {
      tableRow[tableHeaders[index]] = $(element).text()
    })
    // const company = $(tds[0]).text()
    // const contact = $(tds[1]).text()
    // const country = $(tds[2]).text()

    // const scrapedRow = { company, contact, country }

    // scrapedRows.push(scrapedRow)
    scrapedRows.push(tableRow)
  })

  console.log(scrapedRows)

  fs.writeFileSync('./test.html', result)
}

main()
