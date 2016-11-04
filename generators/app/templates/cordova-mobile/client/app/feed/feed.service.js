'use strict';

angular.module('Soju')

.factory('Feed', ['$http', function($http) {

	return {
		getNews: function() {

			return $http.get('https://soju-app.mybluemix.net/api/feed').then(function(res) {
				
				return res.data;
				
			});

		}

	};

}]);
