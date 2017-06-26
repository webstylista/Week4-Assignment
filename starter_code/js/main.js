$(document).ready(function() {

  $('.readmore').click(showMore);
  $('.readless').click(showLess);
  $('.learnmore').click(learnMore);

  function showMore(event) {
    event.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
  }

  function showLess(event) {
    event.preventDefault();
    $('#show-this-on-click').slideUp();
    $('.readmore').show();
    $('.readless').hide();
  }

  function learnMore(event) {
    event.preventDefault();
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
  }

});
