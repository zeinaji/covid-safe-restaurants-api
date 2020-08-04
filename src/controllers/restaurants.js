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

  const restaurant = new Restaurant({
    name: name,
    type: type,
    onDeliveroo: onDeliveroo,
    onJustEat: onJustEat,
    onUberEats: onUberEats,
    isOpen: isOpen,
    openingTimes: openingTimes,
    eatOutToHelpOut: eatOutToHelpOut,
    outsideSeating: outsideSeating,
    website: website,
    instagram: instagram,
    phoneNumber: phoneNumber,
  });

  restaurant.save().then(() => {
    res.status(201).json(restaurant);
  });
};