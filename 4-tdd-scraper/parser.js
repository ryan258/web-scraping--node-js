const cheerio = require('cheerio')

function getDatePosted($, element) {
  return new Date($(element).find('.result-date').attr('datetime'))
}

function getHood($, element) {
  return $(element).find('.result-hood').text().trim()
}

exports.listings = (html) => {
  const $ = cheerio.load(html)
  return $('.result-info')
    .map((index, element) => {
      const titleElement = $(element).find('.result-title')
      const title = titleElement.text()
      const url = titleElement.attr('href')
      const hood = getHood($, element)
      const datePosted = getDatePosted($, element)

      return { title, url, hood, datePosted }
    })
    .get()
}
