'use strict';
var stripe = require('stripe')('sk_test_3O93Ow9h02E9ZziwYCRK9qaB');

exports.postPayment = function (req, res) {

    console.log('WE MADE IS', req.body);
    var transaction = req.body;
    stripe.charges.create({
        amount: 2000,
        currency: 'usd',
        source: {
            number: transaction.number,
            cvc: transaction.cvc,
            exp_month: parseInt(transaction.exp_month, 0),
            exp_year: parseInt(transaction.exp_year, 0)
        }
    }, function (err, charge) {

        console.log('response', err, charge);
        res.json(charge);
    
    });

};

exports.createCustomer = function (req, res) {

    console.log('WE MADE IS', req.body);
    var transaction = req.body;
    stripe.customers.create({
        description: transaction.name,
        source: {
            object: 'card',
            number: transaction.number,
            cvc: transaction.cvc,
            exp_month: parseInt(transaction.exp_month, 0),
            exp_year: parseInt(transaction.exp_year, 0)
        }
    }, function (err, charge) {

        console.log('response', err, charge);
        res.json(charge);
    
    });

};
