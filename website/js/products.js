var $grid;
$( setupGrid );

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

function setupGrid()
{
	$grid = $( '#grid' );
	$grid.isotope({
		itemSelector : 'li',
		layoutMode : 'vertical',
		getSortData : {
			'title' : function ( e ) { return $( e ).find( 'strong' ).text(); },
			'rating' : '.rating parseInt',
			'price' : '.price parseInt'
		}
	} );

	$( '#filterOptions li' ).on( 'click', toggleFilter );
	$( '#sortOptions li' ).on( 'click', toggleSort );
	$( '#listOptions li' ).on( 'click', toggleList );
}

function toggleFilter()
{
	$( '#filterOptions li' ).removeClass( 'selected' );
	$( this ).addClass( 'selected' );

	switch( this.id )
	{
		case 'filterAll': $grid.isotope( { filter : 'li' } );
			break;
		case 'filterCD': $grid.isotope( { filter : '.cd' } );
			break;
		case 'filterDVD': $grid.isotope( { filter : '.dvd' } );
			break;
		case 'filterBluray': $grid.isotope( { filter : '.bluray' } );
			break;
		case 'filterBurner': $grid.isotope( { filter : '.burner' } );
			break;

	}
}

function toggleSort()
{
	$( '#sortOptions li' ).removeClass( 'selected' );
	$( this ).addClass( 'selected' );

	switch(this.id)
	{
		case 'sortAlpha' : $grid.isotope({ sortBy : 'title' });
			$( '#sortOptions' ).addClass( 'title' );

			break;
		case 'sortRating' : $grid.isotope({ sortBy : 'rating' });
			$( '#sortOptions' ).addClass( 'rating' );
			break;
		case 'sortPrice' : $grid.isotope({ sortBy : 'price' });
			$( '#sortOptions' ).addClass( 'price' );
			break;
	}
}

function toggleList()
{
	$( '#listOptions li' ).removeClass( 'selected' );
	$( this ).addClass( 'selected' );

	switch(this.id)
	{
		case 'listGrid' : $( grid).removeClass('list');$( grid).addClass('grid');
		 	$grid.isotope({ layoutMode : 'fitRows' });
			break;
		case 'listList' : $(grid).removeClass('grid');$( grid).addClass('list');
			$grid.isotope({ layoutMode : 'vertical' });
			break;
	}
}