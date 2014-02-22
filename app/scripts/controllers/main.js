'use strict';

angular.module('123CompletedWebsiteApp')
    .controller('MainCtrl', function ($scope, $location, $anchorScroll, $timeout) {

        $scope.scroll = function () {
            $timeout(function () {
                $anchorScroll();
            }, 0);
        };

    });