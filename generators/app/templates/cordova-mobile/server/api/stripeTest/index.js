'use strict';

var express = require('express'),
	controller = require('./stripe.controller'),
	router = express.Router(); // eslint-disable-line new-cap

// define route and point an a specific action in this controller
router.post('/', controller.postPayment);
router.post('/customer/', controller.createCustomer);

module.exports = router;