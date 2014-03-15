'use strict';

angular.module('123CompletedWebsiteApp', ['ngRoute', 'ngAnimate', 'ngResource', 'ui.bootstrap', 'ui.bootstrap.setNgAnimate', 'wu.masonry'])
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
                    scope.$on('ngRepeatCompleted', function (d) {
//                        console.log('caught "ngRepeatCompleted" event. event data is [', d, ']');
                        scope.fn && scope.fn();
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
                        if (n) {
//                            console.log('emitting "ngRepeatCompleted" event for ngRepeat [', directive, ']');
                            s.$emit('ngRepeatCompleted', directive);
                        }
                    });
                };
            };

            return $delegate;
        });
    }])

    .run(['$route', angular.noop]);


// workaround for angular-bootstrap carousel subsequent slides not working.
// see the issue on github: https://github.com/angular-ui/bootstrap/issues/1350
// and the workaround on plunkr: http://plnkr.co/edit/8HfZCaTOIeAesKVFSFpj?p=preview

angular.module('ui.bootstrap.setNgAnimate', ['ngAnimate'])
    .directive('setNgAnimate', ['$animate', function ($animate) {
        return {
            link: function ($scope, $element, $attrs) {
                $scope.$watch( function() {
                    return $scope.$eval($attrs.setNgAnimate, $scope);
                }, function(valnew, valold){
                    $animate.enabled(!!valnew, $element);
                });
            }
        };
    }]);


/*
 .run(['$route', '$rootScope', '$location', '$anchorScroll', '$routeParams', function($route, $rootScope, $location, $anchorScroll, $routeParams) {
 $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
 $location.hash($routeParams.scrollTo);
 $anchorScroll();
 });
 }]);
 */
