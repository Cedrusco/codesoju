'use strict';

angular.module('<%= appName %>')

.controller('FeedController', ['$scope', 'nytFeed', function($scope, nytFeed) {
	
	$scope.techNews = nytFeed.results;
	
}]);
