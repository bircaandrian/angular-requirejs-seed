//this is the main controller, from which any other controllers inherit
//it is assigned to the top level ui-view and define some general model and functions for the application
define(['app/js/services/services'], function(){
	
	function IndexController(
			$scope, 
			$state, 
			$stateParams,
			$log
	)
	{
		
		//some global and convenience methods, feel free to change as needed
		$scope.version = '0.1';
		$scope.goBack = function()
		{
			window.history.back();
		}

		$scope.currentYear = new Date().getFullYear();
	}
	
	IndexController.$inject = [
	                    '$scope',
	                    '$state',
	                    '$stateParams',
	                    '$log'
	                    ];
	
	return IndexController;
	
});