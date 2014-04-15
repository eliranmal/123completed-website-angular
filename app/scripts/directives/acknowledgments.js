'use strict';

angular.module('123CompletedWebsiteApp')
    .directive('acknowledgments', ['$resource', '$interval', function ($resource, $interval) {
        return {
            templateUrl: 'views/acknowledgments-template.html',
            replace: true,
            restrict: 'EA',
            scope: true,
            controller: function ($scope) {

                $scope.slideIndex = 0;
                $scope.data = $resource('data/acknowledgments.json').query();

                $scope.slideNext = function () {
                    if (angular.isDefined($scope.slideIndex)) {
                        $scope.slideIndex++;
                    } else {
                        $scope.slideIndex = 0;
                    }
                }

                var stop;
                $scope.start = function () {

                    if (angular.isDefined(stop)) return;

                    stop = $interval(function () {
                        if ($scope.slideIndex < $scope.data.length - 1) {
                            $scope.slideIndex++;
                        } else {
                            $scope.slideIndex = 0;
                        }
                    }, 6500);
                }

                $scope.$on('$destroy', function () {
                    $interval.cancel(stop);
                });
            },
            link: function (scope, element, attrs) {

                scope.start();
            }
        };
    }]);

