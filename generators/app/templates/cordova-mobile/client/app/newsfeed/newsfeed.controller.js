'use strict';

angular.module('Soju')

    .controller('NewsfeedController', ['$scope', 'Newsfeed', '$mdSidenav', '$cordovaSocialSharing', function ($scope, Newsfeed, $mdSidenav, $cordovaSocialSharing) {

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
                        // Success!
                    
                    }, function (err) {
                        
                        console.log('err', err);
                        // An error occured. Show a message to the user
                    
                    });
        
        };

        function init() {

            Newsfeed
                .getArticles()
                .then(function (cnnArticles) {

                    $scope.articles = cnnArticles;

                });

        }

        init();

    }]);

