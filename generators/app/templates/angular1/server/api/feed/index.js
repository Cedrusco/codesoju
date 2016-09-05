/*
	all routes definitions for a specific controller
*/ 

'use strict'

var express = require('express');
var controller = require('./feed.controller');
var router = express.Router();


//define route and point an a specific action in this controller
router.get('/', controller.getNews);

module.exports = router;