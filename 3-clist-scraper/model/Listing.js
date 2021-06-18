const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
  title: String,
  datePosted: Date,
  neighborhood: String,
  url: String,
  jobDescription: String,
  compensation: String
})

// model we can manipulate from w/in our JS
const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing
