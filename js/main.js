var quotes = [

	"If you need to talk, I will pretend to listen.",
	"I am not anti-social. I am anti-stupid.",
	"I don't want to seem like I think I'm always right, but I am and that's why it comes accross that way.",
	"I can't stop thinking about you and my other options.",
	"I may look calm, but in my head I've killed you three times.",
	"Nothing brightens up a room like your absence.",
	"No, no, no. I'm not insulting you. I'm just describing you.",
	"I've come up with some great ideas on how to make you a better person.",
	"I'm pretty sure that only one of us is right, and the other one is you."


];	




$(document).ready(function() {


	var getNewQuote = function (e) {
		var quotePicker = Math.floor(Math.random() * quotes.length);
		$("#quote").html(quotes[quotePicker]);
	}
	
	$("#next-quote-button").click(getNewQuote);
	setInterval(getNewQuote, 12000);
});


