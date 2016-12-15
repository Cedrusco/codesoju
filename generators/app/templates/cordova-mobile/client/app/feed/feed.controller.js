'use strict';

angular.module('Soju')

.controller('FeedController', ['$scope', 'nytFeed', '$mdSidenav', '$cordovaSocialSharing', function ($scope, nytFeed, $mdSidenav, $cordovaSocialSharing) {
    
    $scope.techNews = nytFeed.results;

    $scope.toggleList = function () {

        $mdSidenav('left').toggle();

    };

    // TESTING SOCIAL SHARING
    $scope.share = function (link) {

        var options = {
            message: 'Check out this great link!', // not supported on some apps (Facebook, Instagram)
            subject: 'Soju Recommendations', // fi. for email
            url: link
        };
        $cordovaSocialSharing.
            shareWithOptions(options)// Share via native share sheet
                .then(function (result) {

                    console.log('result', result);
                
                }, function (err) {

                    console.log('err', err);
            // An error occured. Show a message to the user
        
                });
    
    };
    
}]);
