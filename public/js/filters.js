'use strict';

/* Filters */

angular.module('panicboardPanelNest.filters', []).
  filter('C2F', function() {
    return function(val) {
      return Math.round(val * (9 / 5.0) + 32.0);
    }
  });
