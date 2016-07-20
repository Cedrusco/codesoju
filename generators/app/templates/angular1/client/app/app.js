var app = angular.module('Soju', ['ngRoute', 'ngMaterial','ngMessages']);

app.config(['$routeProvider', '$locationProvider', '$mdThemingProvider', function ($routeProvider, $locationProvider, $mdThemingProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'landing/landing.html',
				controller: 'LandingController'
			}).
			when('/home', {
				templateUrl: 'home/home.html',
				controller: 'HomeController'
			}).
			when('/about_us', {
				templateUrl: 'about_us/about_us.html',
				controller: 'AboutUsController'
			}).
			when('/user_profile', {
				templateUrl: 'user_profile/user_profile.html',
				controller: 'UserProfileController'
			})
			// otherwise({
			// 	redirectTo: '/'
			// }),
		$locationProvider.html5Mode(true);
		$mdThemingProvider.theme('default');

		var lightGreyMap = $mdThemingProvider.extendPalette('red', {
		    '500': '#eee',
		    'contrastDefaultColor': 'dark'
		  });
		$mdThemingProvider.definePalette('lightGrey', lightGreyMap);
		$mdThemingProvider.theme('default')
			.primaryPalette('lightGrey');
}]);

app.controller('MainController', ['$rootScope', '$location', '$scope', function ($rootScope, $location, $scope) {
	$rootScope.appSettings = {
		selectedMenu: 'home',
		isAuthenticated: null
	};

	$scope.navigateTo = function(route){
		$rootScope.appSettings.selectedMenu = route;
		$location.url(route);
	};
}]);
