define(['angular','uiRouter','app/module'], function(angular){

	var starter = angular.module('starter', ['app','ui.router']);
	
	starter.config(['$stateProvider', '$urlRouterProvider',
	            function($stateProvider, $urlRouterProvider){
		
		$stateProvider
			.state('app', {
				url: '/app',
				//abstract: true,
				templateUrl: 'js/app/views/main-content.html',
				controller: 'IndexController'
			})

			.state('app.home', {
				url: '/home',
				templateUrl: 'js/app/views/home.html',
				controller: 'HomeController'
			})

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/home');
		
	}]);
	
	return starter;
});
