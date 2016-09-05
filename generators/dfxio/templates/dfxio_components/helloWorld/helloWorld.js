// this line should not be removed
var helloWorld = angular.module("helloWorld",['dfxAppServices']);

helloWorld.controller( "helloWorldController", ['$scope', 'dfxDialog', function ( $scope, dfxDialog ) {
	dfxDialog.showMessage( 'Hello World!' );
}]);
