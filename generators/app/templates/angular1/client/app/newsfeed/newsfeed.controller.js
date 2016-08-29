'use strict';

angular.module('<%= appName %>')

	.controller('NewsfeedController', ['$scope', 'Newsfeed', '$mdSidenav', function($scope, Newsfeed, $mdSidenav) {

		$scope.toggleList = function() {

			$mdSidenav('left').toggle();

		};

		function init() {

			Newsfeed
				.getArticles()
				.then(function(cnnArticles) {

					$scope.articles = cnnArticles;

				});

		}

		init();

	}]);

