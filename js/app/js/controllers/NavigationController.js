define(['app/js/services/services'], function(){
	
	function NavigationController(
			$rootScope,
			$scope, 
			$state,
			$stateParams
	)
	{
		$scope.menu = [
			{
				state: 'frontend.index.home',
				label: 'Home',
				active: 'active'
			},
			{
				state: 'frontend.index.about',
				label: 'About Us',
				active: ''
			},
		];

		$scope.state = $state;
		
	}
	
	NavigationController.$inject = [
						'$rootScope',
	                    '$scope',
	                    '$state',
	                    '$stateParams'
	                    ];
	
	return NavigationController;
	
});

