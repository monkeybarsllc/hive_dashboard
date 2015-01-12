'use strict';

/**
 * @ngdoc function
 * @name hiveDashboardApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the hiveDashboardApp
 */
angular.module('hiveDashboardApp')
  .controller('AdminCtrl', function ($scope, $location, $firebase, loginService) {
    
    var ref = new Firebase('https://hive-dashboard.firebaseio.com/moonshots'); 
  	$scope.moonshots = $firebase(ref).$asArray(); 

    $scope.$watch(loginService.isLoggedIn, function() {
      if (!loginService.isLoggedIn()) {
        $location.path('/');
      }
    });

    $scope.addMoonshot = function() {
    	$scope.moonshots.$add({title: $scope.newMoonshot, checkpoint: '1'}).then(function() {
    		$scope.newMoonshot = null; 
    	});  
    }; 

  });