'use strict';

/**
 * @ngdoc function
 * @name hiveDashboardApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the hiveDashboardApp
 */
angular.module('hiveDashboardApp')
  .controller('InfoCtrl', function ($scope) {
    
  	$scope.schedule = [
  		{
  			time: '8:00am',
  			title: 'Doors Open & Registration', 
  			description: 'coffee, light breakfast, mix and mingle'
  		}, 
  		{
  			time: '9:00am',
  			title: 'Welcome & Keynote', 
  			description: 'get fired up and ready to activate our community'
  		}, 
  		{
  			time: '9:30am',
  			title: 'Orientation', 
  			description: 'staff, partners and activators provide direction and context'
  		}, 
  		{
  			time: '10:30am',
  			title: 'Working Groups in Session', 
  			description: 'establish goals, make decisions, plan for outcomes and co-create programs'
  		}, 
  		{
  			time: '12:30pm',
  			title: 'Working Lunch', 
  			description: 'keep the momentum going or take a moment yourself'
  		}, 
  		{
  			time: '2:00pm',
  			title: 'Working Groups in Session', 
  			description: 'all attendees return to working groups'
  		}, 
  		{
  			time: '4:00pm',
  			title: 'Closing Ceremony', 
  			description: 'working groups share out commitments for 2015'
  		}
  	]; 

  });
