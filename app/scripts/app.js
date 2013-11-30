'use strict';

angular.module('123CompletedWebsiteApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/content/:page', {
                templateUrl: function (params) {
                    return 'views/content/' + params['page'];
                },
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .run(['$route', function ($route) {
        $route.reload();
    }]);
