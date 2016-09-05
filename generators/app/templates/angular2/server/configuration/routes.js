/*
	middleware pointing on each sub-directory of the api folder for route definitions
*/

'use strict';
var router = require('express').Router();
var fs = require('fs');
var path = require('path');

var sourcePath = path.join(__dirname + '/../api');

var routes = fs.readdirSync(sourcePath);

routes.forEach(function(route) {
	if(fs.statSync(path.join(sourcePath,route)).isDirectory()){
		router.use('/' + route, require('../api/' + route))
	}
});

//error handler 
router.use(function (req, res) {
    res.status(404).end();
});

module.exports = function(app) {
	app.use('/api', router);
};