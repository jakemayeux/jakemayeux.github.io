var selected = -1;

$(function(){

  slider = $('.bxslider').bxSlider({
    slideWidth: 800,
    infiniteLoop: false,
    hideControlOnEnd: true,
    auto: true,
    pager: false,
  });

  $('#home2.content').addClass('show');

  $('#nav div').click(function(e){
    $('#nav div').removeClass('selected');
    $(e.target).addClass('selected');

    $('.content').removeClass('show');
    $('#'+e.target.id+'2.content').addClass('show');

    slider.reloadSlider();
  });

  $('span#site-link').click(function(e){
    $('#website').click();
  });

});
