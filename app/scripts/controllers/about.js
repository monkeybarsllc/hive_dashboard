'use strict';

/**
 * @ngdoc function
 * @name hiveDashboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hiveDashboardApp
 */
angular.module('hiveDashboardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
