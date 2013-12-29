'use strict';

angular.module('123CompletedWebsiteApp', [
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/layout.html',
                controller: 'MainCtrl'
            })
            .when('/:page', {
                redirectTo: '/'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
