$(document).ready(function(){
    $('#post-slider').carousel({
      interval: false
    });
  
    $('#post-slider .left carousel-control').click(function(){
      $('#post-slider').carousel('prev');
    });
  
    $('#post-slider .right carousel-control').click(function(){
      $('#post-slider').carousel('next');
    });
  });