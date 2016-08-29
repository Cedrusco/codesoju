'use strict';

angular.module('<%= appName %>')
.filter('trusted', ['$sce', function($sce) {

	return function(url) {
		
		return $sce.trustAsResourceUrl(url);
    
	};

}]);
