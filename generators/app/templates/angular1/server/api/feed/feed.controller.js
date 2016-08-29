'use strict';
var request = require('request'),
	config = require('../../configuration/environment/development.js');

exports.getNews = function(req, res){
	request.get({
	  url: "https://api.nytimes.com/svc/topstories/v2/technology.json",
	  qs: {
	    'api-key': config.NYTAPI
	  },
	}, function(err, response, body) {
	  body = JSON.parse(body);
	  res.send(body);
	})
};