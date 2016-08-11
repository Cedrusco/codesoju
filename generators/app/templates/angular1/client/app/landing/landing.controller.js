'use strict';

angular.module('<%= appName %>')

.controller('LandingController', ['$scope', '$anchorScroll', '$location', '$mdSidenav', function($scope, $anchorScroll, $location, $mdSidenav) {
		
	$scope.gotoAnchor = function(eID) {

		var old = $location.hash();
		$location.hash(eID);
		$anchorScroll();
		$mdSidenav('left').close();
		$location.hash(old);

	};

	$scope.toggleList = function() {

		$mdSidenav('left').toggle();

	};

}]);
