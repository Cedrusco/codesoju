'use strict';
var express = require('express'),
	controller = require('./newsfeed.controller'),
	router = express.Router();

// define route and point an a specific action in this controller
router.get('/', controller.getArticles);

module.exports = router;
