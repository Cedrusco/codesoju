'use strict';

angular.module('Soju')

.controller('GoogleMapController', ['$scope', '$location', '$mdSidenav', '$log', function($scope, $location, $mdSidenav, $log) {
	$scope.close = function() {

		$mdSidenav('left').close()
			.then(function() {

				$log.debug('close LEFT is done');

			});

	};
	$scope.toggleList = function() {
		
		$mdSidenav('left').toggle();

	};
	$scope.showPlaces = function(){
        var Map;
        var Infowindow;
        var Latitude = undefined;
        var Longitude = undefined;

        // Success callback for get geo coordinates

        var onPlacesSuccess = function (position) {
            Latitude = position.coords.latitude;
            Longitude = position.coords.longitude;

            getPlaces(Latitude, Longitude);

        }

        // Get places by using coordinates

        function getPlaces(latitude, longitude) {
            var latLong = new google.maps.LatLng(latitude, longitude);

            var mapOptions = {

                center: new google.maps.LatLng(latitude, longitude),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP

            };
            Map = new google.maps.Map(document.getElementById("places"), mapOptions);

            Infowindow = new google.maps.InfoWindow();

            var service = new google.maps.places.PlacesService(Map);
            service.nearbySearch({

                location: latLong,
                radius: 500,
                type: ['pharmacy']
            }, foundStoresCallback);

        }

        // Success callback for watching your changing position

        var onPlacesWatchSuccess = function (position) {

            var updatedLatitude = position.coords.latitude;
            var updatedLongitude = position.coords.longitude;

            if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

                Latitude = updatedLatitude;
                Longitude = updatedLongitude;

                getPlaces(updatedLatitude, updatedLongitude);
            }
        }

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
            var placeLoc = place.geometry.location;

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

        // Watch your changing position

        function watchPlacesPosition() {

            return navigator.geolocation.watchPosition
            (onPlacesWatchSuccess, onPlacesError, { enableHighAccuracy: true });
        }

        navigator.geolocation.getCurrentPosition
            (onPlacesSuccess, onPlacesError, { enableHighAccuracy: true });
	}

}]);