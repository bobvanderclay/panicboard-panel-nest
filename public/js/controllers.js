'use strict';

/* Controllers */

function NestsController($scope, $http) {
    $http.get('/api/nests').
        success(function(data, status, headers, config) {
            $scope.nests = data;
        });
}

function NestController($scope) {

    $scope.nest.runningState = function() {
        if ($scope.nest.hvac_heater_state) {
            return "heating";
        }
        if ($scope.nest.hvac_ac_state) {
            return "cooling";
        }
        return "off";
    }

}