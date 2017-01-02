//TODO: Function will quote Quote API and return string to render
function getQuote() {
	//alert("getQuote button pressed");
	var qText = document.getElementById("randQuoteText");
	var qAuth = document.getElementById("randQuoteAuthor");
	$.ajax({
		url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
		type: 'GET',
		success: function(results) {
			//alert(results.quoteText+results.quoteAuthor);
			qText.innerHTML = '"' + results.quoteText + '"';
			qAuth.innerHTML = '- ' + results.quoteAuthor;
		}
	});
}

function tweetQuote() {
	alert("tweetQuote button pressed");
}