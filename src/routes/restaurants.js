const express = require('express');
const restaurantController = require('../controllers/restaurants');

const router = express.Router();

router
    .route('/')
    .post(restaurantController.create)
    .get(restaurantController.listAll);

//router
//    .route('/:restaurantId')
//    .get(restaurantController.listAll);

module.exports = router;
