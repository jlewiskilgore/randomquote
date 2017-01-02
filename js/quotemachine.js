//TODO: Function will quote Quote API and return string to render
function getQuote() {
	//alert("getQuote button pressed");

	$.ajax({
		url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
		type: 'GET',
		success: function(results) {
			alert(results.quoteText+results.quoteAuthor);
		}
	});
}

function tweetQuote() {
	alert("tweetQuote button pressed");
}