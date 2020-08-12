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
    outdoorSeating,
    website,
    instagram,
    phoneNumber,
    picture,
    address,
    postcode,
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
    outdoorSeating: outdoorSeating,
    website: website,
    instagram: instagram,
    phoneNumber: phoneNumber,
    picture: picture,
    address: address,
    postcode: postcode,
  });

  restaurant.save().then(() => {
    res.status(201).json(restaurant);
  });
};

exports.listAll = (req, res) => {
  const queryObj = {};

  const query = Restaurant.find();

  if (req.query.name) { queryObj['name'] = new RegExp(req.query.name, 'i'); } 
  if (req.query.type) { queryObj['type'] = req.query.type; } 
  if (req.query.onDeliveroo) { queryObj['onDeliveroo'] = req.query.onDeliveroo; } 
  if (req.query.onJustEat) { queryObj['onJustEat'] = req.query.onJustEat; } 
  if (req.query.onUberEats) { queryObj['onUberEats'] = req.query.onUberEats; } 
  if (req.query.isOpen) { queryObj['isOpen'] = req.query.isOpen; }
  if (req.query.eatOutToHelpOut) { queryObj['eatOutToHelpOut'] = req.query.eatOutToHelpOut; }
  if (req.query.outdoorSeating) { queryObj['outdoorSeating'] = req.query.outdoorSeating; }
  if (req.query.city) { queryObj['city'] = req.query.city; }
  if (req.query.postcode) { queryObj['postcode'] = req.query.postcode; }

  query
    .where(queryObj)
    .exec()
    .then((restaurants) => {
      res.status(200).json(restaurants);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
};
