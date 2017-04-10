

$(document).ready(function(){
    
	$(".hide").hide();

	$('.readmore a').click(function(event){
		event.preventDefault();
		$(".readmore").hide();
		$(".hide#show-this-on-click").slideDown();
		$(".hide.readless").show();
	});

	$(".readless a").click(function(event){
	    event.preventDefault();
		
		$(".hide").slideUp();
		$(".readmore").show();
	});

	$(".learnmore").click(function(event){
	    event.preventDefault();
		$(".hide#learnmoretext").slideDown();
	});

});