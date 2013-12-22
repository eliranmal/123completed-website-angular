'use strict';

angular.module('123CompletedWebsiteApp')
    .controller('MainCtrl', function ($scope, $location, $route) {

        $scope.data = {
            url: $location.url(),
            route: $route
        };

    });
