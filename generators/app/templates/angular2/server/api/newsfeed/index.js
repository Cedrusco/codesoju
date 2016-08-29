'use strict';
var express = require('express');
var controller = require('./newsfeed.controller');
var router = express.Router();

// define route and point an a specific action in this controller
router.get('/', controller.getArticles);

module.exports = router;
