angular.module('Soju')

    .factory('Newsfeed', ['$http', 'ENV', function ($http, ENV) {

        return {
            getArticles: function () {

                return $http
                    .get(ENV.baseUrl + 'api/newsfeed')
                    .then(function (response) {

                        return response.data;

                    });

            }
        };

    }]);
