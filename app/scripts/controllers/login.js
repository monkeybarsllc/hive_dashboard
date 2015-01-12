'use strict';

/**
 * @ngdoc function
 * @name hiveDashboardApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the hiveDashboardApp
 */
angular.module('hiveDashboardApp')
  .controller('LoginCtrl', function ($location, $scope, loginService) {
    
  	$scope.login = function() { 
  		loginService.login($scope.email, $scope.password).then(function() {
  			$scope.email = null; 
  			$scope.password = null; 
  			$location.path('/admin');
  		}); 
  	}; 

  });
