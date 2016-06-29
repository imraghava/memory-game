var up = 0;
var remaining = 8;
var found = 0;
var checked = 0;

// When a card is clicked
$('.card').on('click', function() {

  if ($(this).hasClass('a')) {
    $(this).text('A');
  }
  
   
  
  if ($('.flipped').hasClass('a') && $(this).hasClass('a')) {
    $(this).addClass('flipped');
    alert("Match!");
    $('.flipped').remove();
  } else {
    $(this).addClass('flipped');
  }
  
  
  
 
  
  
 
  
  up++;
  if (up > 2) { 
    up = 0;
    $('.flipped').removeClass('flipped');
  } else {
     checked++;
    $('.checked').text(checked);
  }
  
  
  
  
});