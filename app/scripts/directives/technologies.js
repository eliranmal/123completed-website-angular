'use strict';

angular.module('123CompletedWebsiteApp')
    .directive('technologies', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/technologies-template.html',
            link: function (scope, element, attrs) {
            },
            controller: function ($scope, $resource) {
                $resource('data/technologies.json').query(function (data) {
                    $scope.technologies = data;
                });
            }
        };
    });