$( setupLightbox )

var $overlay;
var $lightbox;
var $image;
var $closeButton;

function setupLightbox() {
  $overlay = $( '<div id="overlay">' )
  $lightbox = $( '<div id="lightbox">' )
  $image = $( '<img id="lightboxImage">' )
  $closeButton = $( '<img id="closeButton" src="img/close-button.png">' )
  $caption = $( '<h2 id="caption">' )
  $detail = $( '<p id="detail">' )
  
  $( 'body' ).append( $overlay );
  $( 'body' ).append( $lightbox );
  $lightbox.append( $image );
  $lightbox.append( $closeButton );
  $lightbox.append( $caption );
  $lightbox.append( $detail );
  
  $overlay.hide();
  $lightbox.hide();
  $caption.hide();
  $detail.hide();
  
  $( 'a[rel=lightbox]' ).on( 'click', showLightbox );
}

function showLightbox() {
  $image.hide();
  $image.removeAttr( 'src' );
  $closeButton.hide();
  $overlay.fadeIn();
  $lightbox.fadeIn();

  loadImage( this.href, this.title );
  
  $overlay.on( 'click', closeLightbox );
  $closeButton.on( 'click', closeLightbox );
  
  return false;
}

function loadImage( imageURL, caption ) {
  $image.on( 'load', showImage );
  $image.attr( 'src', imageURL );

  $caption.text(caption);
  $caption.delay( 1000 ).fadeIn();
}

function showImage() {
  $lightbox.css( 'width', this.width );
  $lightbox.css( 'height', this.height);

  $image.delay( 1000 ).fadeIn();
  $closeButton.delay( 1000 ).fadeIn();
}

function closeLightbox() {
  $image.off( 'load', showImage );

  $overlay.fadeOut();
  $lightbox.fadeOut();
  $caption.fadeOut();
  $detail.fadeOut();
}