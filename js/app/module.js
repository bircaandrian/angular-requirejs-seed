define([
        'angular',
        'app/js/services/services',
        'app/js/filters/filters',
        'app/js/directives/directives',
        'app/js/controllers/controllers'
        
        ], function(angular){
	
		return angular.module('app', ['app.services','app.filters','app.directives','app.controllers']);
	
});