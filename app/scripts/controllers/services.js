'use strict';

angular.module('123CompletedWebsiteApp')
    .controller('ServicesCtrl', ['$scope', '$resource', function ($scope, $resource) {

        var data = $resource('data/services.json').get();

        angular.extend($scope, {
            model: data
        });
    }]);
