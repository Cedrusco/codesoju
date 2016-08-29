(function() {

	'use strict';

	angular
		.module('<%= appName %>')
		.run(['authService', '$rootScope', function(authService, $rootScope) {

			$rootScope.authService = authService;

			// Put the authService on $rootScope so its methods
			// can be accessed from the nav bar
			authService.registerAuthenticationListener();

		}]);

})();
