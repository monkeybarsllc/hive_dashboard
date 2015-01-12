'use strict';

/**
 * @ngdoc function
 * @name hiveDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hiveDashboardApp
 */
angular.module('hiveDashboardApp')
  .controller('MainCtrl', function ($firebase, $scope) {
    
    var ref = new Firebase('https://hive-dashboard.firebaseio.com/moonshots'); 
    $scope.moonshots = $firebase(ref).$asArray(); 
    
  });
