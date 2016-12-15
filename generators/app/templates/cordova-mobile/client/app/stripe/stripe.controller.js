'use strict';

angular.module('Soju')

.controller('StripeController', ['$scope', '$location', '$mdSidenav', '$log', 'Stripe', function ($scope, $location, $mdSidenav, $log, Stripe) {
    
    $scope.close = function () {

        $mdSidenav('left').close()
            .then(function () {

                $log.debug('close LEFT is done');

            });

    };

    $scope.toggleList = function () {
        
        $mdSidenav('left').toggle();

    };

    // Barcode scanner POC
    $scope.barcodeScan = function () {

        cordova.plugins.barcodeScanner.scan(
            function (result) {

                alert('We got a barcode\n' +
                    'Result: ' + result.text + '\n' +
                    'Format: ' + result.format + '\n' +
                    'Cancelled: ' + result.cancelled);
            
            },
            function (error) {
                
                alert('Scanning failed: ' + error);
            
            },
            {
                'preferFrontCamera': false, // iOS and Android
                'showFlipCameraButton': true, // iOS and Android
                'prompt': 'Place a barcode inside the scan area', // supported on Android only
                'orientation': 'landscape' // Android only (portrait|landscape), default unset so it rotates wh the device
            }
        );
    
    };

    $scope.card = {
        name: 'Mike Brown',
        number: '5555555555554444',
        exp_month: '11',
        exp_year: '2020',
        cvc: '123'
    };

    $scope.cardPlaceholders = {
        name: 'Your Full Name',
        number: 'xxxx xxxx xxxx xxxx',
        expiry: 'MM/YY',
        cvc: 'xxx'
    };

    $scope.cardMessages = {
        validDate: 'valid\nthru',
        monthYear: 'MM/YYYY'
    };

    $scope.cardOptions = {
        debug: false,
        formatting: true
    };

    $scope.chargeCard = function () {

        Stripe.createTransaction($scope.card).then(function (data) {

            console.log('data', data);
        
        });
    
    };
    
    $scope.createCustomer = function () {

        Stripe.createCustomer($scope.card).then(function (data) {

            console.log('data', data);
        
        });

    };

    $scope.clear = function () {

        $scope.card = {
            name: '',
            number: '',
            exp_month: '',
            exp_year: '',
            cvc: ''
        };
    
    };

}]);
