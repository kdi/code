//construct.configure(function(){

	//construct.asset(["bin"]);
	construct.register( construct.asset(["bin"]) );

//});


construct.configure(function(){

	APP.Routers.Default = APP.Router.extend({
		routes: {
			"": "index"
		},

		index: function(){
			console.log("I'm inininiin");
			this.data = new APP.Models.Asset();
			this.layout = new APP.Layouts.Main({ data: this.data });
		}
	});

	APP.Models.Asset = APP.Model.extend({
		defaults: {
			meshes: {}
		},
		url: function(){
			return this.asset;
		},
		asset: "", // add default model...

		parse: function( data ){
			console.log( data );
			return data;
		}

	});

	APP.Layouts.Main = APP.Layout.extend({

		events: {
			"submit form": "loadAsset"
		},

		initialize: function( options ){

			// load the data
			this.set({
				"viewer": new APP.Views.Viewer({
					model: options.data
				})
			});
			return APP.Layout.prototype.initialize.call( this, options );
		},

		loadAsset: function( e ){
			e.preventDefault();
			var asset = $(e.target).find("input[type='text']").val();
			this.options.data.asset = asset;
			this.options.data.fetch();
		}
	});

	APP.Views.Viewer = APP.Views.Main3D.extend({
		el: ".viewer",

		options: {
		},

		/*
		initialize: function( options ){

			// load the data
			this.data =
			return APP.Views.Main3D.prototype.initialize.call( this. options );
		},
		*/
		postRender: function(){
			// prerequisite
			if( _.isEmpty( this.model.get("mesh") ) ) return;

			// load model
			var src = this.model.get("mesh").m1;
			//
			//$el = $("asset").attr("src", src);
			//$el = $("<scene><asset src='"+ src +"'></asset><camera></camera></scene>");
			//console.log( $el );
			this.$3d.addScene().addCamera();
			this.$3d.add({ type: "asset", src: src });
			//this.$3d.append($el);
			//this.$3d.append( $el );
			/*
			this.objects.set({
				player: new Player({
					el: $(this.el).find("player")
				})
			});

			this.layers.set({
				rocks: new Rocks( new APP.Collection( new Array(20) ), {
					el: $(this.el).find("rocks")
				}),
				enemies: new Enemies( new APP.Collection( new Array(10) ), {
					el: $(this.el).find("enemies")
				})
			});
			*/
		}
	});

});

construct({}, function( backbone ){

	app = backbone;

});