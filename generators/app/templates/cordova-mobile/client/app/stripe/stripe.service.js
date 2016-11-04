'use strict';

angular.module('Soju')

.factory('Stripe', ['$http', function($http) {

	return {
		createTransaction: function(data) {

			return $http.post('https://soju-app.mybluemix.net/api/stripeTest', data).then(function(res) {
				console.log('res', res);
				return res.data;
				
			});

		},
		createCustomer: function(data) {

			return $http.post('https://soju-app.mybluemix.net/api/stripeTest/customer', data).then(function(res) {
				console.log('res', res);
				return res.data;
				
			});

		}

	};

}]);
