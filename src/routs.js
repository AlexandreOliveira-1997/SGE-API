const express = require('express');
const sellerController = require('./controllers/SellerControllers')


const routes = express.Router();

routes.use('/seller', sellerController)



module.exports = routes;