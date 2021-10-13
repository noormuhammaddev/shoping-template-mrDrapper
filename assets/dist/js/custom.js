// functions
function productsCarousel() {
  const products = $('#products');
  if (products.length > 0) {
    products.owlCarousel({
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
          autoWidth: false,
        },
        992: {
          items: 3,
          autoWidth: false,
        }
      }
    });
  }

}


// A $( document ).ready() block.
$( document ).ready(function() {
  productsCarousel();
});