define(['app/js/services/services'], function(){
	
	function HomeController(
			$scope, 
			$state, 
			$stateParams,
			$log,
			TestService
	)
	{
		$scope.message = '';
		//this is and example scope methods, feel free to delete and add your own
		$scope.sayHello = function(){
			$log.log('home say hello');
			$scope.message = TestService.sayHello();
		}
	}
	
	HomeController.$inject = [
	                    '$scope',
	                    '$state',
	                    '$stateParams',
	                    '$log',
						'TestService'
	                    ];
	
	return HomeController;
	
});

