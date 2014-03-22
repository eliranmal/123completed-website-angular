'use strict';

angular.module('123CompletedWebsiteApp')
    .controller('TrainingCtrl', ['$scope', '$resource', function ($scope, $resource) {

        var trainingsData = $resource('data/trainings.json').query();

        angular.extend($scope, {

            model: {
                trainings: trainingsData
            }
        });

    }]);
