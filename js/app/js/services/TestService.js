define([
    ], function(
    		
    ){
	
		function TestService()
		{
			return {
				sayHello: function()
				{
					return 'Hello world !';
				}
			}
		}
		
		TestService.$inject = [];
		
		return TestService;
});