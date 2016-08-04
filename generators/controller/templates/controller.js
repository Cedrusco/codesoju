angular.module('Soju')
	.controller('<%= controllerName %>Controller', ['$scope', function ($scope) {
		$scope.title = 'Welcome to the <%= controllerName %> Page!';
}]);