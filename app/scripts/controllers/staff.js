'use strict';

angular.module('123CompletedWebsiteApp')
    .controller('StaffCtrl', ['$scope', '$resource', function ($scope, $resource) {

        var membersData = $resource('data/staff.json').query();

        angular.extend($scope, {

            model: {
                columnWidth: 305,
                members: membersData
            }
        });


/*
        $scope.expand = function (member) {
            console.log('before > expanded > ', member.expanded)
            if (member.expanded) {
                return;
            }
            console.log('after > expanded > ', member.expanded)
            member.expanded = !member.expanded;
            $scope.model.members.splice($scope.model.members.indexOf(member), 1);
            $scope.model.members.unshift(member);
            // TODO figure out a way of refreshing without global pollution
            window.scheduleMasonryOnce('reloadItems');
            window.scheduleMasonryOnce('layout');
        };
*/

    }]);
