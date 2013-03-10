
// Routers
APP.Routers.Default = APP.Router.extend({
	data: {}, 
	initialize: function() {
		// every function that uses 'this' as the current object should be in here
		_.bindAll(this, 'index'); 
		
	}, 
	routes: {
		"": "index",
		":path": "page"
	}, 
	index: function(){
		// default path...
		var path = "Home";
		new APP.Views.Main({ path : path });
	}, 
	page: function(path){
		new APP.Views.Main({ path : path });
	}

});

