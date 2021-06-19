const request = require('request-promise')
const fs = require('fs')

async function getHtml(url) {
  const html = await request.get(url)
  return html
}

function saveHtmlToFile(html) {
  fs.writeFileSync('./test.html', html)
}
async function main() {
  const html = await getHtml('https://fayar.craigslist.org/d/garage-moving-sales/search/gms?sort=date&')
  saveHtmlToFile(html)
}

main()
