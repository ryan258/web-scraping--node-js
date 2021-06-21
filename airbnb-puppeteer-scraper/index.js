const puppeteer = require('puppeteer')
const cheerio = require('cheerio')

const sample = {
  guests: 4,
  bedrooms: 'studio',
  beds: 1,
  baths: 1,
  pricePerMonth: 672
}

async function scrapeHomesInIndexPage(url) {
  try {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto(url)
    const html = await page.evaluate(() => {
      // here is like writing code in the console
      return document.body.innerHTML
    })
    const $ = await cheerio.load(html)

    const homes = $("[itemprop='url']")
      .map((i, el) => $(el).attr('content'))
      .get()
    console.log(homes)
  } catch (error) {
    console.log(error)
  }
}

scrapeHomesInIndexPage(`https://www.airbnb.com/s/Buenos-Aires--Argentina/homes?refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=july&flexible_trip_dates%5B%5D=june&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&checkin=2021-07-01&checkout=2021-07-31&adults=1&source=structured_search_input_header&search_type=section_navigation&click_referer=t%3ASEE_ALL%7Csid%3A1f3e4c5b-1a8f-42dd-a31e-3b6a6cfa9963%7Cst%3AHOME_GROUPING_FLEXIBLE_DATES&flexible_date_search_filter_type=2&title_type=NONE&tab_id=home_tab&place_id=ChIJu39FBT3KvJURF8D35_z0YOE&federated_search_session_id=344d127f-43fd-400b-a7ac-5b49fdd7732f&pagination_search=true`)

// https://www.airbnb.com/s/Buenos-Aires--Argentina/homes?refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=july&flexible_trip_dates%5B%5D=june&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&checkin=2021-07-01&checkout=2021-07-31&adults=1&source=structured_search_input_header&search_type=section_navigation&click_referer=t%3ASEE_ALL%7Csid%3A1f3e4c5b-1a8f-42dd-a31e-3b6a6cfa9963%7Cst%3AHOME_GROUPING_FLEXIBLE_DATES&flexible_date_search_filter_type=2&title_type=NONE&tab_id=home_tab&place_id=ChIJu39FBT3KvJURF8D35_z0YOE&federated_search_session_id=344d127f-43fd-400b-a7ac-5b49fdd7732f&pagination_search=true&items_offset=20&section_offset=3

// https://www.airbnb.com/s/Buenos-Aires--Argentina/homes
// ?refinement_paths%5B%5D=%2Fhomes
//  &flexible_trip_dates%5B%5D=july
//  &flexible_trip_dates%5B%5D=june
//  &flexible_trip_lengths%5B%5D=weekend_trip
//  &date_picker_type=calendar
//  &checkin=2021-07-01
//  &checkout=2021-07-31
//  &adults=1
//  &source=structured_search_input_header
//  &search_type=section_navigation
//  &click_referer=t%3ASEE_ALL%7Csid%3A1f3e4c5b-1a8f-42dd-a31e-3b6a6cfa9963%7Cst%3AHOME_GROUPING_FLEXIBLE_DATES
//  &flexible_date_search_filter_type=2
//  &title_type=NONE
//  &tab_id=home_tab
//  &place_id=ChIJu39FBT3KvJURF8D35_z0YOE
//  &federated_search_session_id=344d127f-43fd-400b-a7ac-5b49fdd7732f
//  &pagination_search=true
//  &items_offset=20
//  &section_offset=3
