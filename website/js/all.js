

$(function() {
    $('p.rating').stars();
});

$.fn.stars = function() {
    return $(this).each(function() {
        $(this).html(function(){

        // Calculate the rating for the product
	        var val = parseFloat($(this).html());
	        var size = Math.max(0, (Math.min(5, val))) * 16;
	        
	        // Set the star span width and replace number with stars
        	return "<span class=\"stars\" ><span style=\"width: " + size + "px;\"/></span><p class=\"ratingNum\">" + val + "</p>";
        });
    });
}