define([
        'angular',
		'app/js/services/TestService'
        
        ], function(
			angular,
			testService
	){
	var services = angular.module('app.services', []);
	
	//add services here
	services.factory('TestService', testService);
	
	return services;
});