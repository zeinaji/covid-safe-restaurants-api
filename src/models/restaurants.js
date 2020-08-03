const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  type: String,
  onDeliveroo: Boolean,
  onJustEat: Boolean,
  onUberEats: Boolean,
  isOpen: Boolean,
  openingTimes: String,
  eatOutToHelpOut: Boolean,
  outsideSeating: Boolean,
  website: String,
  instagram: String,
  phoneNumber: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
