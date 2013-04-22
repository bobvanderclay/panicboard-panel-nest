'use strict';

// Declare app level module which depends on filters, and services
angular.module('panicboardPanelNest', ['panicboardPanelNest.filters', 'panicboardPanelNest.services', 'panicboardPanelNest.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/structures',
        controller: StructuresController
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);