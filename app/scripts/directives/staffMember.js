'use strict';

angular.module('123CompletedWebsiteApp')
    .directive('staffMember', function () {
        return {
            templateUrl: 'views/staff-member-template.html',
            restrict: 'E',
            scope: true,
            controller: function ($scope, $resource) {
                $scope.Members = $resource('data/staff.json');
            },
            link: function postLink(scope, element, attrs) {
                scope.Members.get(function (result) {
                    scope.model = result[attrs.key];
                });
            }
        };
    });
