'use strict';

angular.module('<%= appName %>')

.controller('MainController', ['$location', '$scope', function($location, $scope) {

	$scope.selectedMenu = function(route) {

		return route === $location.path();

	};

	$scope.navigateHome = function() {

		$location.url('/');

	};

}]);
