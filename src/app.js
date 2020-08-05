const express = require('express');
const restaurantsController = require('./controllers/restaurants');

const app = express();
app.use(express.json());
app.post('/restaurants', restaurantsController.create);
app.get('/restaurants', restaurantsController.list);

module.exports = app;
