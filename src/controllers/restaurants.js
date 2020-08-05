const Restaurant = require('../models/restaurants');

exports.create = (req, res) => {
  const {
    name,
    type,
    description,
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
    description: description,
    onDeliveroo: onDeliveroo,
    onJustEat: onJustEat,
    onUberEats: onUberEats,
    isOpen: isOpen,
    openingTimes: openingTimes,
    eatOutToHelpOut: eatOutToHelpOut,
    outdoorSeating: outsideSeating,
    website: website,
    instagram: instagram,
    phoneNumber: phoneNumber,
  });

  restaurant.save().then(() => {
    res.status(201).json(restaurant);
  });
};

exports.list = (req, res) => {
  const query = Restaurant.find();

  if (req.query.name) {
    query.where('name', new RegExp(req.query.name, 'i'));
  } else if (req.query.type) {
    query.where('type').equals(req.query.type);
  } else if (req.query.onDeliveroo) {
    query.where('onDeliveroo').equals(req.query.onDeliveroo);
  } else if (req.query.onJustEat) {
    query.where('onJustEat').equals(req.query.onJustEat);
  } else if (req.query.onUberEats) {
    query.where('onUberEats').equals(req.query.onUberEats);
  } else if (req.query.isOpen) {
    query.where('isOpen').equals(req.query.isOpen);
  } else if (req.query.eatOutToHelpOut) {
    query.where('eatOutToHelpOut').equals(req.query.eatOutToHelpOut);
  } else if (req.query.outsideSeating) {
    query.where('outsideSeating').equals(req.query.outsideSeating);
  }

  query
    .exec()
    .then(restaurants => {
      res.status(200).json(restaurants);
    })
    .catch(error => {
      res.sendStatus(500);
    });
};
