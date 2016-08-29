'use strict';

angular.module('<%= appName %>')

.factory('Feed', ['$http', function($http) {

	return {
		getNews: function() {

			return $http.get('/api/feed').then(function(res) {
				
				return res.data;
				
			});

		}

	};

}]);
