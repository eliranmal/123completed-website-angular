'use strict';

angular.module('123CompletedWebsiteApp', ['ngRoute', 'ngAnimate', 'ngResource', 'angular-carousel', 'wu.masonry'])
    .config(['$routeProvider', '$locationProvider', '$provide', '$injector', function ($routeProvider, $locationProvider, $provide, $injector) {

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

        $provide.decorator('ngViewDirective', function ($delegate) {

            var directive = $delegate[0],
                link = directive.link;

            directive.scope = {
                fn: '&'
            };

            directive.compile = function () {
                return function () {

                    link.apply(this, arguments);

                    var scope = arguments[0];
                    scope.$on('ngRepeatCompleted', function (s) {
                        console.log('caught "ngRepeatCompleted" event. event data is [', s, ']');

                        console.log('before fn(), fn is: ', scope.fn);
                        scope.fn();
                    });
                };
            };

            return $delegate;
        });

        $provide.decorator('ngRepeatDirective', function ($delegate) {

            var directive = $delegate[0],
                link = directive.link;

            directive.compile = function () {
                return function () {

                    link.apply(this, arguments);

                    var scope = arguments[0];
                    scope.$watch('$$childTail.$last', function (n, o, s) {
                        console.log('emitting "ngRepeatCompleted" event for ngRepeat [', directive, ']');
                        n &&
//                            directive.targetScope &&
//                            directive.targetScope.model &&
//                            directive.targetScope.model.members &&
                            s.$emit('ngRepeatCompleted', s);
                    });
                };
            };

            return $delegate;
        });
    }])

    .run(['$route', angular.noop]);

/*
.run(['$route', '$rootScope', '$location', '$anchorScroll', '$routeParams', function($route, $rootScope, $location, $anchorScroll, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash($routeParams.scrollTo);
        $anchorScroll();
    });
}]);
*/
