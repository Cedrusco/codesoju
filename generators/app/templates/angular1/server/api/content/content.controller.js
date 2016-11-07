'use strict';

var request = require('request');

// assemble your request url:
// var contentfulUrl = 'https://cdn.contentful.com/spaces/<YOUR_QUERY_PARAMS>';

exports.getContent = function(req, res, next) {
	// make a request to your contentfulURL and process the data:
	// request(contentfulUrl, function(error, response, data){
		
	// })

	res.send('Your CMS feature flag is on! Please configure your CMS.')
};