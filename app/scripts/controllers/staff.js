'use strict';

angular.module('123CompletedWebsiteApp')
    .controller('StaffCtrl', function ($scope, $resource) {

        $scope.membersData = $resource('data/staff.json').query();
    });
