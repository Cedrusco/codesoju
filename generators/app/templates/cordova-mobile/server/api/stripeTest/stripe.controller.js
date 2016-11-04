'use strict';
var request = require('request'),
	config = require('../../configuration/environment/development.js'),
	responseBody,
	stripe = require('stripe')('sk_test_3O93Ow9h02E9ZziwYCRK9qaB');

exports.postPayment = function(req, res, next) {
	console.log('WE MADE IS', req.body);
	var transaction = req.body;
	stripe.charges.create({
	  amount: 2000,
	  currency: 'usd',
	  source: {
	    number: transaction.number,
	    cvc: transaction.cvc,
	    exp_month: parseInt(transaction.exp_month),
	    exp_year: parseInt(transaction.exp_year)
	  }
	}, function(err, charge) {
		console.log('response', err, charge)
		res.json(charge);
	});
};

exports.createCustomer = function(req, res, next) {
	console.log('WE MADE IS', req.body);
	var transaction = req.body;
	stripe.customers.create({
	  description: transaction.name,
	  source: {
	  	object: 'card',
	    number: transaction.number,
	    cvc: transaction.cvc,
	    exp_month: parseInt(transaction.exp_month),
	    exp_year: parseInt(transaction.exp_year)
	  }
	}, function(err, charge) {
		console.log('response', err, charge)
		res.json(charge);
	});
};