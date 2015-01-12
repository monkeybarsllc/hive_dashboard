'use strict';

/**
 * @ngdoc service
 * @name hiveDashboardApp.login
 * @description
 * # login
 * Service in the hiveDashboardApp.
 */
angular.module('hiveDashboardApp')
  .factory('loginService', function login($firebaseAuth, $q) {
    
  	var ref = new Firebase('https://hive-dashboard.firebaseio.com/');
  	var authObj = $firebaseAuth(ref); 
  	var loggedIn = false; 

  	authObj.$onAuth(function(authData) {
  		loggedIn = authData ? true : false; 
    });

  	var service = {}; 

  	service.isLoggedIn = function() { 
  		return loggedIn; 
  	}; 

  	service.login = function(email, password) {
  		var deferred = $q.defer(); 
  		authObj.$authWithPassword({
  			email: email, 
  			password: password
  		}).then(function() {
  			loggedIn = true; 
        deferred.resolve(); 
  		}); 
  		return deferred.promise; 
  	}; 

  	service.logout = function() {
  		authObj.$unauth(); 
  	}; 

  	return service; 

  });
