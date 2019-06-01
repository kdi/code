
APP.Views.Main = Backbone.View.extend({
	el: "#main", 
	events: {
		"click a" : "processLink"
	}, 
	initialize: function( options ){
		
		_.bindAll(this, "setup", "render", "processLink");
		
		this.template = new Showdown.converter();
		
		var file = _.ucwords (options.path);
		$.get("content/"+ file +".md", this.setup);

	}, 
	setup : function(response){
		
		this.md = response;
		this.render();
		
	}, 
	render : function(){
		
			var html = this.template.makeHtml( this.md );
			$(this.el).html( html );
			
	}, 
	processLink : function( e ){
                e.preventDefault();
		var el = ( e.target.tagName == "A") ?  $(e.target) : $(e.target).closest("a");
		var url= el.attr("href");
                // if a full http link allow the clickthrough
                if(/(file|http).*/.test(url)) window.location = url;
                // 'clean' all the wiki paths
                url= url.replace("./wiki", "").replace("./", "");
		// goto the new page
		app.navigate(url, true);
		
	}
	
});
