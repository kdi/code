
APP.Views.Main = Backbone.View.extend({
	el: "#main", 
	events: {
		"click a" : "processLink"
	}, 
	initialize: function( options ){
		
		_.bindAll(this, "setup", "render", "processLink");
		
		this.template = new Showdown.converter();
		
		var file = _.ucfirst (options.path);
		$.get("assets/html/"+ file +".md", this.setup);

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
		var href= el.attr("href").replace("./wiki", "");
		// goto the new page
		app.navigate(href, true);
		
		
	}
	
});
