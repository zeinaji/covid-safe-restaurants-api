const Restaurant = require('../models/restaurants');

exports.create = (req, res) => {
  const {
    name,
    type,
    onDeliveroo,
    onJustEat,
    onUberEats,
    isOpen,
    openingTimes,
    eatOutToHelpOut,
    outsideSeating,
    website,
    instagram,
    phoneNumber,
  } = req.body;
  const artist = new Artist({
    name: name,
    type: type,
    onDeliveroo: onDeliveroo,
    onJustEat: onJustEat,
    onUberEats: onUberEats,
    isOpen: isOpen,
    openingTimes: ,
    eatOutToHelpOut: Boolean,
    outsideSeating: Boolean,
    website: String,
    instagram: String,
    phoneNumber: Number,
  });

  artist.save().then(() => {
    res.status(201).json(artist);
  });
};
