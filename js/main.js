require.config({
	paths: {
		angular: '../lib/js/angular/angular/angular',
		angularAnimate: '../lib/js/angular/angular/angular-animate',
		angularSanitize: '../lib/js/angular/angular/angular-sanitize',
		uiRouter: '../lib/js/angular/angular-ui/angular-ui-router',
		text: '../lib/js/requirejs/text'
	},
	shim: {
		'angular': {exports: 'angular'},
		'angularAnimate': ['angular'],
		'angularSanitize': ['angular'],
		'uiRouter': ['angular'],
	},
	priority: ["angular"]
});

require([
         'angular',
         'starter',
         ], function(angular, starter){
	
	'use strict';

	var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, [starter['name']]);
		});

});