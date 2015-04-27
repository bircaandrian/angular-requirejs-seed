define(['angular','uiRouter','app/module'], function(angular){

	var starter = angular.module('starter', ['app','ui.router']);
	
	starter.config(['$stateProvider', '$urlRouterProvider',
	            function($stateProvider, $urlRouterProvider){
		
		$stateProvider

			.state('frontend', {
				url: '',
				abstract: true,
				templateUrl: 'js/app/views/frontend/index.html',
				controller: 'IndexController'
			})
			.state('frontend.index', {
				url: '/frontend',
				views : {
					'navigation': {
						templateUrl: 'js/app/views/frontend/navigation.html',
						controller: 'NavigationController'	
					},
					'body': {
						templateUrl: 'js/app/views/frontend/content.html',
					}
				}
			})
			.state('frontend.index.home', {
				url: '/home',
				views : {
					'content': {
						templateUrl: 'js/app/views/frontend/pages/home.html',
						controller: 'HomeController'	
					}
				}
			})
			.state('frontend.index.about', {
				url: '/about',
				views : {
					'content': {
						templateUrl: 'js/app/views/frontend/pages/about.html',	
					}
				}
			})
			;

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('frontend/home');
	}]);
	
	return starter;
});
