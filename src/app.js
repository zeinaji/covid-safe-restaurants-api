const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const restify = require('express-restify-mongoose');
const restaurantModel = require('./models/restaurants');
const favouritesModel = require('./models/favourites');
const restaurantRoutes = require('./routes/restaurants');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(methodOverride());
app.use(router);

//endpoint === /api/v1/restaurant for GET, POST, PUT and DELETE
restify.serve(router, restaurantModel);

//endpoint === /api/v1/favourite for GET, POST, PUT and DELETE
restify.serve(router, favouritesModel);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v2/restaurant', restaurantRoutes);

module.exports = app;
