'use strict';

var app = angular.module('Soju', [
    'auth0.lock',
    'angular-jwt',
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'chart.js',
    'ui.knob',
    'ngCordova'
]);


app.constant('ENV', {
    'name': 'development',
    'baseUrl': window.cordova ? '<YOUR_BASE_URL>' : '/'
});

app.config(['$routeProvider', '$locationProvider', '$mdThemingProvider', '$httpProvider', 'lockProvider', 'jwtOptionsProvider',
    
    function ($routeProvider, $locationProvider, $mdThemingProvider, $httpProvider, lockProvider, jwtOptionsProvider) {

        lockProvider.init({
            clientID: '**clientid**',
            domain: '**mydomain**.auth0.com',
            options: {
                auth: {
                    redirect: false
                },
                rememberLastLogin: false,
                theme: {
                    logo: 'images/logo.png',
                    primaryColor: '#b81b1c'
                },
                languageDictionary: {
                    title: 'CodeSoju'
                }
            }
        });

    // Configuration for angular-jwt
        jwtOptionsProvider.config({
            tokenGetter: function () {
                
                return localStorage.getItem('id_token');
            
            },
            whiteListedDomains: ['localhost'],
            unauthenticatedRedirectPath: '/'
        });

    // Add the jwtInterceptor to the array of HTTP interceptors
    // so that JWTs are attached as Authorization headers
        $httpProvider.interceptors.push('jwtInterceptor');

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
                nytFeed: ['Feed', function (Feed) {

                    return Feed.getNews();

                }]
            }
        }).
        when('/cms_content', {
            templateUrl: 'cms_content/cms_content.html',
            controller: 'CmsContentController'
        }).
        when('/stripe', {
            templateUrl: 'stripe/stripe.html',
            controller: 'StripeController'
        }).
        when('/google_map', {
            templateUrl: 'google_map/google_map.html',
            controller: 'GoogleMapController'
        });
        // otherwise({
        //  redirectTo: '/'
        // }),
    // var h5m = (typeof html5Mode !== 'undefined') ? html5Mode : true;
        $locationProvider.html5Mode(false);
        $mdThemingProvider.theme('default');

        var lightGreyMap = $mdThemingProvider.extendPalette('red', {
            '500': '#eee',
            'contrastDefaultColor': 'dark'
        });
        $mdThemingProvider.definePalette('lightGrey', lightGreyMap);
        $mdThemingProvider.theme('default')
            .primaryPalette('lightGrey');

    }]);

