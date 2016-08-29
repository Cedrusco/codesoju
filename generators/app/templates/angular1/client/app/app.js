'use strict';

var app = angular.module('<%= appName %>', ['auth0.lock', 'angular-jwt', 'ngRoute', 'ngMaterial', 'ngMessages', 'chart.js', 'ui.knob']);

app.config(['lockProvider', '$routeProvider', '$locationProvider', '$mdThemingProvider', function(lockProvider, $routeProvider, $locationProvider, $mdThemingProvider) {

	lockProvider.init({
		clientID: 'FJd8Y00TDVf8HEdQl6FRsclXAdw2rj0I',
		domain: 'cedrus.auth0.com'
	});

	$routeProvider.
		when('/', {
			templateUrl: 'landing/landing.html',
			controller: 'LandingController'
		}).
		when('/home', {
			templateUrl: 'home/home.html',
			controller: 'HomeController'
		}).
		when('/newsfeed', {
			templateUrl: 'newsfeed/newsfeed.html',
			controller: 'NewsfeedController'
		}).
		when('/user_profile', {
			templateUrl: 'user_profile/user_profile.html',
			controller: 'UserProfileController'
		}).
		when('/feed', {
			templateUrl: 'feed/feed.html',
			controller: 'FeedController',
			resolve: {
				nytFeed: ['Feed', function(Feed) {

					return Feed.getNews();

				}]
			}
		});
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
