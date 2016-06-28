$('.card').on('click', function() {
  $(this).addClass('flipped');
  if ($(this).hasClass('a')) {
    $(this).text('A');
  }
});