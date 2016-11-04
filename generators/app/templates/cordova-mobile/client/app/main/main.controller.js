'use strict';

angular.module('Soju')

.controller('MainController', ['$location', '$scope', 'featureToggle', function($location, $scope, featureToggle) {

	featureToggle.init();

	$scope.selectedMenu = function(route) {

		return route === $location.path();

	};

	$scope.navigateHome = function() {

		$location.path('/');

	};

	$scope.reportAppLaunched = function(url) {
		console.log('WE made it here', url);
		url = url.substring(url.indexOf("/") + 1);

		$location.path('/home');
		$scope.$apply();
	}

}]);
