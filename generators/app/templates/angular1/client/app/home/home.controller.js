'use strict';

angular.module('<%= appName %>')

.controller('HomeController', ['$scope', '$location', '$mdSidenav', '$log', '$rootScope', function($scope, $location, $mdSidenav, $log, $rootScope) {
	
	$scope.close = function() {

		$mdSidenav('left').close()
			.then(function() {

				$log.debug('close LEFT is done');
				
			});

	};
	$scope.toggleList = function() {

		$mdSidenav('left').toggle();

	};
	$rootScope.appSettings.isAuthenticated = true;

}]);
