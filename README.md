# Web Scraping Course

- https://reactnativetutorial.net/css-selectors

- [table](https:/codingwithstefan.com/table-example)

## Reasons why we want to scrape into node

we can...

- make an API people can request from
- do things in an automated way
- save results into CSV files or a DB

## Finding details through dev tools

- F12 - shortkey for chrome dev tools
- find the identifiers and test out some initial script
  - then paste that simple script over to the IDE to flesh things out
- do the writes in the IDE, then paste over in browser to see how it works, it's faster than using chromium each time

## Puppeteer

- .forEach() does not work well in puppeteer bc it does things kinda concurrently and in parallel
  - use a good ol for loop
- a generic sleep function will allow request to slow down and not get the ip banned
  - the sleep function can be used anywhere as long as you use async/await
