$("form").submit(function( e ){
	e.preventDefault();
	// get the selected type
	//var data = $(e.target).serializeArray();
	var type = $(e.target).find("[name='type']:checked").val() || "I";
	var $result= $(e.target).find("#result");
	var id = "";
	// get the date
	var now = new Date();
	var date = formatDate( now );
	// get a "random" suffix (remove first 4 chars that are the same each day...)
	var suffix = ( uniqueCode( now ) ).substr(4);
	// format
	id = type + date +"-"+ suffix;
	console.log(id );
	// output result
	$result.val( id );
});


function formatDate(d)
{
	var month = d.getMonth();
	var day = d.getDate();
	var year = d.getFullYear();

	year = year.toString().substr(2,2);

	month = month + 1;

	month = month + "";

	if (month.length == 1)
	{
		month = "0" + month;
	}

	day = day + "";

	if (day.length == 1)
	{
		day = "0" + day;
	}

	return year + month + day;
}

function getSuffix( now ){
	// get unix timestamp
	var time = now.getTime().toString();
	// one day ~14400000 (length: 8)
	time = time.substr( -8 );
	// a three digit random number...
	var random =parseInt(Math.random()* (999 - 100)) + 100;
	return time + random;
}

// Source: https://gist.github.com/tracend/8203090
function uniqueCode(){
	var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var ticks = (new Date()).getTime().toString();
	var code = "";
	for (var i = 0; i < characters.length; i += 2) {
		if ((i + 2) <= ticks.length) {
			var number = parseInt(ticks.substr(i, 2));
			if (number > characters.length - 1) {
				var one = number.toString().substr(0, 1);
				var two = number.toString().substr(1, 1);
				code += characters[parseInt(one)];
				code += characters[parseInt(two)];
			} else {
				code += characters[number];
			}
		}
	}
	return code;
}