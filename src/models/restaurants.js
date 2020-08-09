const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  onDeliveroo: Boolean,
  onJustEat: Boolean,
  onUberEats: Boolean,
  isOpen: Boolean,
  openingTimes: String,
  eatOutToHelpOut: String,
  outdoorSeating: Boolean,
  website: String,
  instagram: String,
  phoneNumber: String,
  picture: String,
  streetAddress: String,
  city: String,
  postcode: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
