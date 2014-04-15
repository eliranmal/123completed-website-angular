'use strict';

angular.module('123CompletedWebsiteApp')
    .controller('MainCtrl', function ($scope, $location, $anchorScroll, $timeout, $log/*, $animate, $routeParams*/) {

//        $scope.param = $routeParams.param;

        $scope.scroll = function () {
            $log.debug('before scrolling...');
            $timeout(function () {
                $anchorScroll();
            }, 0);
        };

    });
