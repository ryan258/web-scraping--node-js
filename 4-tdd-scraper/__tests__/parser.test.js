const parser = require('../parser')
const fs = require('fs')

let html
let listings

// what you want to run before all the tests, like setting variables
beforeAll(() => {
  html = fs.readFileSync('./test.html')
  listings = parser.listings(html)
})

it('should give the correct number of listings', () => {
  expect(listings.length).toBe(120)
})

it('should get correct title', () => {
  expect(listings[0].title).toBe('Sale in Bella Vista')
})

it('should get correct hood from listing', () => {
  expect(listings[0].hood).toBe('(Bella Vista)')
})

it('should get correct date from listing', () => {
  expect(listings[0].datePosted).toStrictEqual(new Date('2021-06-19 09:26'))
})

it('should get correct url', () => {
  expect(listings[0].url).toBe('https://fayar.craigslist.org/gms/d/bella-vista-sale-in-bella-vista/7338963841.html')
})
