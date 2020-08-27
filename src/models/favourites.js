const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
  fbUserId: { type: String, require: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', require: true },
  rating: Number,
});

const favouritesModel = mongoose.model('Favourite', favouriteSchema);

module.exports = favouritesModel;
