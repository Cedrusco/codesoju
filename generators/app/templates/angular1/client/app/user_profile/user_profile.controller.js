'use strict';

angular.module('<%= appName %>')

.controller('UserProfileController', ['$scope', '$location', '$mdSidenav', '$log', function($scope, $location, $mdSidenav, $log) {
	
	$scope.close = function() {

		$mdSidenav('left').close()
			.then(function() {

				$log.debug('close LEFT is done');

			});

	};

	$scope.toggleList = function() {
		
		$mdSidenav('left').toggle();

	};

}]);
