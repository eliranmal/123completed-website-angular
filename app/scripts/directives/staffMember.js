'use strict';

angular.module('123CompletedWebsiteApp')
    .directive('staffMember', function () {
        return {
            templateUrl: 'views/staff-member-template.html',
            restrict: 'E',
            scope: {
                'data': '=memberData'
            },
            replace: true,
            link: function postLink(scope, element, attrs) {
            }
        };
    });
