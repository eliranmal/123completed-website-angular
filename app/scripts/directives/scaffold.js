'use strict';

angular.module('123CompletedWebsiteApp')
    .directive('scaffold', function () {
        return {
            templateUrl: 'views/scaffold-template.html',
            restrict: 'EA',
            link: function (scope, element, attrs) {
                // exclude the directive's own element. we use this and not 'replace: true' as
                // the directive will have to handle more than one root node in its template.
                element.replaceWith(element.contents());
            }
        };
    });
