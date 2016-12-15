'use strict';

angular.module('Soju')

.factory('Feed', ['$http', 'ENV', function ($http, ENV) {

    return {
        getNews: function () {

            return $http.get(ENV.baseUrl + 'api/feed').then(function (res) {
                
                return res.data;
                
            });

        }

    };

}]);
