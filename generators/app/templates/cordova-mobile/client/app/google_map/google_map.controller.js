'use strict';

angular.module('Soju')

.controller('GoogleMapController', ['$scope', '$location', '$mdSidenav', '$log', function ($scope, $location, $mdSidenav, $log) {

    $scope.close = function () {

        $mdSidenav('left').close()
            .then(function () {

                $log.debug('close LEFT is done');

            });

    };

    $scope.toggleList = function () {

        $mdSidenav('left').toggle();

    };

    $scope.searchPlaces = function () {

        if (angular.element(document.querySelector('#mapExecute')).length) {

            $scope.showMap = true;
            var Map,
                Infowindow,
                Latitude,
                Longitude;

            // Success callback for get geo coordinates

            var onPlacesSuccess = function (position) {

                Latitude = position.coords.latitude;
                Longitude = position.coords.longitude;

                getPlaces(Latitude, Longitude);

            };

            // Get places by using coordinates

            function getPlaces(latitude, longitude) {

                var latLong = new google.maps.LatLng(latitude, longitude),

                    mapOptions = {

                        center: new google.maps.LatLng(latitude, longitude),
                        zoom: 15,
                        mapTypeId: google.maps.MapTypeId.ROADMAP

                    };
                Map = new google.maps.Map(document.getElementById('places'), mapOptions);

                Infowindow = new google.maps.InfoWindow();

                var service = new google.maps.places.PlacesService(Map);
                service.nearbySearch({

                    location: latLong,
                    radius: 500,
                    type: ['restaurant']
                }, foundStoresCallback);

            }

            // Success callback for watching your changing position

            var onPlacesWatchSuccess = function (position) {

                var updatedLatitude = position.coords.latitude,
                    updatedLongitude = position.coords.longitude;

                if (updatedLatitude !== Latitude && updatedLongitude !== Longitude) {

                    Latitude = updatedLatitude;
                    Longitude = updatedLongitude;

                    getPlaces(updatedLatitude, updatedLongitude);

                }

            };

            // Success callback for locating stores in the area

            function foundStoresCallback(results, status) {

                if (status === google.maps.places.PlacesServiceStatus.OK) {

                    for (var i = 0; i < results.length; i++) {

                        createMarker(results[i]);

                    }

                }

            }

            // Place a pin for each store on the map

            function createMarker(place) {

                var marker = new google.maps.Marker({
                    map: Map,
                    position: place.geometry.location
                });

                google.maps.event.addListener(marker, 'click', function () {

                    Infowindow.setContent(place.name);
                    Infowindow.open(Map, this);

                });

            }

            // Error callback

            function onPlacesError(error) {

                console.log('code: ' + error.code + '\n' +
                    'message: ' + error.message + '\n');

            }

            navigator.geolocation.getCurrentPosition(onPlacesSuccess, onPlacesError, { enableHighAccuracy: true });

        } else {

            alert('We do not have your Google Map developer key. Please run a helper operator\n yo soju:geolocation_google_map\n to enable this feature');

        }

    };

}]);
