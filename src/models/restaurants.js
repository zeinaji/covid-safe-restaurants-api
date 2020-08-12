const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  onDeliveroo: { type: Boolean, required: true },
  onJustEat: { type: Boolean, required: true },
  onUberEats: { type: Boolean, required: true },
  isOpen: { type: Boolean, required: true },
  openingTimes: { type: String, required: true },
  eatOutToHelpOut: { type: String, required: true},
  outdoorSeating: { type: Boolean, required: true },
  website: { type: String, required: true },
  instagram: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  picture: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
