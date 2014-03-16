'use strict';

angular.module('123CompletedWebsiteApp')
    .controller('MainCtrl', function ($scope, $location, $anchorScroll, $timeout, $animate/*, $routeParams*/) {

//        $scope.param = $routeParams.param;

        $scope.scroll = function () {
            $timeout(function () {
                $anchorScroll();
            }, 0);
        };

    });
