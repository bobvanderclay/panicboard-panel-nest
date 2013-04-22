'use strict';

/* Controllers */

function StructuresController($scope, $http) {

    var update = function() {
        $http.get('/api/structures').
        success(function(data, status, headers, config) {
            $scope.structures = data;
        });
    };

    update();
    setInterval(update, 10*60*1000); 

}

function StructureController($scope, $http) {
    $scope.structure.class = function() {
        if ($scope.structure.away) {
            return "away";
        }
        return "";
    }
}

function NestController($scope, $http) {

    var nestId = $scope.nest.split('.')[1];

    console.log('NC: '+nestId);

    $http.get('/api/nests/'+nestId).
        success(function(data, status, headers, config) {
            $scope.nest = data;

            console.log('Nest: '+$scope.nest.name);

            $scope.nest.awayState = function() {
                if ($scope.nest.auto_away == 1) {
                    return "away";
                }
                return "";
            }

            $scope.nest.runningState = function() {
                if ($scope.nest.hvac_heater_state) {
                    return "heating";
                }
                if ($scope.nest.hvac_ac_state) {
                    return "cooling";
                }
                return "off";
            }

        });

   

}