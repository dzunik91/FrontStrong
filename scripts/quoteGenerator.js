var quote, author;
$(document).ready(function(){
	$("#generate").on("click", function(){
		$.ajax({
			dataType: "jsonp",
    		jsonpCallback: "parseQuote",
			url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote',
			success: function(data){
				quote = data.quoteText;
				author = data.quoteAuthor;
				$('#quote').html("<h3><q>" + quote + "</q></h3>");
				$('#quote').append("<cite> ~" + author + "</cite>");

			}
		});
	});
	$("#twitter").on("click", function(){
		window.open("https://twitter.com/intent/tweet?text="+quote+"\n~"+author);
	});
});
