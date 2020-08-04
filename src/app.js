const express = require('express');
const restaurantsController = require('./controllers/restaurants');

const app = express();
app.use(express.json());
app.post('/restaurants', restaurantsController.create);

module.exports = app;
