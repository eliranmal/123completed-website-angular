'use strict';

angular.module('123CompletedWebsiteApp')
    .directive('acknowledgments', function ($resource) {
        return {
            templateUrl: 'views/acknowledgments-template.html',
            replace: true,
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {
                scope.data = $resource('data/acknowledgments.json').query();
            }
        };
    });
