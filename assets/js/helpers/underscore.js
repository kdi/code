_.mixin({

	ucfirst : function(str) {
		// http://kevin.vanzonneveld.net
		// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +   bugfixed by: Onno Marsman
		// +   improved by: Brett Zamir (http://brett-zamir.me)
		// *     example 1: ucfirst('kevin van zonneveld');
		// *     returns 1: 'Kevin van zonneveld'
		str += '';
		var f = str.charAt(0).toUpperCase();
		return f + str.substr(1);
	}, 
	
	ucwords : function(str) {
	  // http://kevin.vanzonneveld.net
	  // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	  // +   improved by: Waldo Malqui Silva
	  // +   bugfixed by: Onno Marsman
	  // +   improved by: Robin
	  // +      input by: James (http://www.james-bell.co.uk/)
	  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // *     example 1: ucwords('kevin van  zonneveld');
	  // *     returns 1: 'Kevin Van  Zonneveld'
	  // *     example 2: ucwords('HELLO WORLD');
	  // *     returns 2: 'HELLO WORLD'
	  return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
		return $1.toUpperCase();
	  });
	}
});