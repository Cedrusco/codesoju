/*
	all routes definitions for a specific controller
*/ 

var express = require('express');
var controller = require('./login.controller');
var router = express.Router();


//define route and point an a specific action in this controller
router.get('/', controller.someAction);

// router.get('/:someParam', controller.getSomethingSpecific);

//	router.post('/signupMe', controller.signMeUp);
//	router.put('/updateMe', controller.updateSomething);
//	router.delete('/deleteMe', controller.deleteSomething);

module.exports = router;
