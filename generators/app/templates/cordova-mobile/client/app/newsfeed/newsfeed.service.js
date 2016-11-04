angular.module('Soju')

	.factory('Newsfeed', ['$http', function($http) {

		return {
			getArticles: function() {

				return $http
					.get('https://soju-app.mybluemix.net/api/newsfeed')
					.then(function(response) {

						return response.data;

					});

			}
		};

	}]);
