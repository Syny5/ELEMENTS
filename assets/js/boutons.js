$(function(){
  var count = 0;
  var total = $('.priceValue').text();
  $('.plusIcons').click(function(){
    count++;
    $('.inputPlusLess').attr('value', count);
    $('.totalValue').text(count * total);
  });

  $('.minusIcons').click(function(){
    count--;
    $('.inputPlusLess').attr('value', count);
    $('.totalValue').text(count * total);
  });

  $('.basketButton').click(function(){
    if (count == 1) {
      alert('Votre article a bien été ajouté !')
    } else if (count > 1) {
      alert('Vos articles ont bien été ajoutés !')
    }
    $('.inputPlusLess'); 
  });
});
