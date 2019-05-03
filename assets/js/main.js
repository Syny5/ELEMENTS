$(function(){
  $('h3').hide();
  $('.prix2').hide();
  $('.toHide').hide();
  $('#order2').hide();
  $('#emptyCart').on('click', function(){
    $('.panel-body').empty();
    location.reload();
  });
});
