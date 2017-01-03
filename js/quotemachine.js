$(document).ready(function(){ 
	$("#tweetQuoteButton").hide();
}) 

function getQuote() {
	//alert("getQuote button pressed");
	$("#tweetQuoteButton").show();

	var qText = document.getElementById("randQuoteText");
	var qAuth = document.getElementById("randQuoteAuthor");
	$.ajax({
		url: "http://api.forismatic.com/api/1.0/",
		jsonp: "jsonp",
	    dataType: "jsonp",
	      data: {
	        method: "getQuote",
	        lang: "en",
	        format: "jsonp"
	      },
		success: function(results) {
			//alert(results.quoteText+results.quoteAuthor);
			qText.innerHTML = '"' + results.quoteText + '"';
			//Show author if exits, if not it is an anonymous quote
			if(results.quoteAuthor)
				qAuth.innerHTML = '- ' + results.quoteAuthor;
			else
				qAuth.innerHTML = '- Anonymous';
		}
	});
}

//TODO: Check for lenght of quote
//TODO: Add hashtags if there is extra space
function tweetQuote() {
	var qText = document.getElementById("randQuoteText");
	var qAuth = document.getElementById("randQuoteAuthor");
	var tweetURL = 'http://twitter.com/intent/tweet?text='+qText.innerHTML+' '+qAuth.innerHTML;
	window.open(tweetURL);
}