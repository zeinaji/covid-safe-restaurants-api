const express = require('express');
const bodyParser = require('body-parser');
const restify = require('express-restify-mongoose');
const restaurantModel = require('./models/restaurants');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(bodyParser.json());

//endpoint === /api/v1/restaurant for GET, POST, PUT and DELETE
restify.serve(router, restaurantModel);
app.use(router);

module.exports = app;
