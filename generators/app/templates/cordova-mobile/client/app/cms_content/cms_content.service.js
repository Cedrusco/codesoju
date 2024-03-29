angular.module('Soju')

.factory('CmsContentService', ['$http', 'ENV', function ($http, ENV) {

    return {
        getContent: function () {
            
            return $http

                .get(ENV.baseUrl + 'api/content')

                .then(function (response) {

                    return response.data;

                });

        }

    };

}]);
