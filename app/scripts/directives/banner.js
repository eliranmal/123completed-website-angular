angular.module('123CompletedWebsiteApp').directive('banner', ['$animate', function ($animate) {
    return {
        restrict: 'E',
        templateUrl: 'views/banner-template.html',
        replace: true,
        controller: function ($scope) {

            $scope.interval = 6000;
            $scope.animate = false;
            $scope.animateGlobal = true;

            $scope.$watch('animateGlobal', function(val){
                $animate.enabled(val);
            });

            $scope.slides = [
                { image: 'images/stock-photos/can-stock-photo_csp0167406.jpg', text: 'blah' },
                { image: 'images/stock-photos/can-stock-photo_csp4071433.jpg', text: 'blah' }
            ];

        }
    }
}]);