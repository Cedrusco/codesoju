'use strict';

angular.module('Soju')

.controller('UserProfileController', ['$scope', '$location', '$mdSidenav', '$log', function ($scope, $location, $mdSidenav, $log) {
    
    $scope.close = function () {

        $mdSidenav('left').close()
            .then(function () {

                $log.debug('close LEFT is done');

            });

    };

    $scope.toggleList = function () {
        
        $mdSidenav('left').toggle();

    };

    $scope.user = {
        email: '',
        firstName: '',
        lastName: '',
        company: 'Cedrus',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: ''
    };

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function (state) {

        return {abbrev: state};

    });

    // Camera plugin POC
    function setOptions(srcType) {

        var options = {
        // Some common settings are 20, 50, an 100
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            // In this app, dynamically set the picture source, Camera or photo gallery
            sourceType: srcType,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true  // Corrects Android orientation qirks
        };
        return options;
    
    }

    function displayImage(imgUri) {

        console.log('URI', imgUri);
        var elem = document.getElementById('imageFile');
        elem.src = imgUri;
    
    }

    $scope.takePhoto = function () {

        var srcType = Camera.PictureSourceType.CAMERA,
            options = setOptions(srcType);

        navigator.camera.getPicture(function cameraSuccess(imageUri) {
            
            $scope.dispayProfilePhoto = true;
            displayImage(imageUri);
            // if it is to be uploaded add a function here

        }, function cameraError(error) {

            console.debug('Unable to obtain picture: ' + error, 'app');

        }, options );
    
    };
    
}]);
