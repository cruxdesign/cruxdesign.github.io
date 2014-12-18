$(document).ready(function(){
  $(window).scroll(function(){
    var brand = $('.brand-logo');
    if ($(window).scrollTop() > ($('.work-container').offset().top - 146)) {
      if (!brand.hasClass('nav-scrolled')){
        //brand.fadeOut();
        brand.attr('src', '/img/crux-sign.png');
        brand.fadeIn();
        brand.addClass('nav-scrolled');
        $('.navbar').addClass('navbar-crux-default').find('.container').css('padding-top', '8px');;
      }
    } 
    else if ($(window).scrollTop() < ($('.work-container').offset().top - 146)) {
      brand.attr('src', '/img/crux-logo.png');
      brand.fadeIn();
      brand.removeClass('nav-scrolled');
      $('.navbar').removeClass('navbar-crux-default').find('.container').css('padding-top', '42px');
    }
  });
});