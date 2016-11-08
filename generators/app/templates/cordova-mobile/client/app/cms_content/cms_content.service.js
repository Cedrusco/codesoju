angular.module('Soju')

	.factory('CmsContentService', ['$http', function($http) {
		return {
			getContent: function(key) {
				return $http

					.get('http://code-soju-mobile-cms.mybluemix.net/api/content')
					.then(function(response) {
						return response.data;

					});
				}
			}
	}]);
