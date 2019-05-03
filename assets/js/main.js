$(function(){
  // On cache le contenu de la boutique (bdd html)
  $('h3').hide();
  $('.prix2').hide();
  $('.toHide').hide();
  $('#order2').hide();
  // On vide le contenu du panier et on rafraichit la page.
  $('#emptyCart').on('click', function(){
    $('.panel-body').empty();
    location.reload();
  });
});
