'use strict';

angular.module('Soju')

.factory('Stripe', ['$http', 'ENV', function($http, ENV) {

	return {
		createTransaction: function(data) {

			return $http.post(ENV.baseUrl + 'api/stripeTest', data).then(function(res) {
				console.log('res', res);
				return res.data;
				
			});

		},
		createCustomer: function(data) {

			return $http.post(ENV.baseUrl + 'api/stripeTest/customer', data).then(function(res) {
				console.log('res', res);
				return res.data;
				
			});

		}

	};

}]);
