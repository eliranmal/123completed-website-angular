'use strict';

angular.module('123CompletedWebsiteApp', ['ngRoute', 'ngAnimate', 'ngResource', 'angular-carousel', 'wu.masonry'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/home.html'
            })
            .when('/:page', {
                templateUrl: function (params) {
                    console.log('page: ' + params.page);
                    if (params.page) {
                        return '/views/partials/' + params.page;
                    }
                    return '';
                }
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }])

    .run(['$route', angular.noop]);