'use strict';

angular.module('Soju')

.controller('MainController', ['$location', '$scope', 'featureToggle', function ($location, $scope, featureToggle) {

    featureToggle.init();

    $scope.selectedMenu = function (route) {

        return route === $location.path();

    };

    $scope.navigateHome = function () {

        $location.path('/');

    };
    $scope.checkNodeBaseUrl = function() {

        if (ENV.baseUrl === '<YOUR_BASE_URL>') {

            alert('To reach Node you have to deploy your app first and configure your base url. Please check ReadMe')
        }

    };

    $scope.reportAppLaunched = function (url) {

        url = url.substring(url.indexOf("/") + 1);

        $location.path('/home');
        $scope.$apply();

    };

}]);
