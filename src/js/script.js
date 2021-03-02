import $ from 'jquery';
import slick from './../../node_modules/slick-carousel/slick/slick.min.js';
import svg4everybody from 'svg4everybody';

svg4everybody();

$(document).ready(function($){

  //*****BURGER MENU*****
  $(document).mouseup(function (hideMenu){
    $('.burger').click(function(){
      $('.burger__item').toggleClass('burger--active');
      $('.main-nav').toggleClass('main-nav--active');
    });
    if (!$(".main-nav").is(hideMenu.target) &&
      $(".main-nav").has(hideMenu.target).length === 0) {
        $(".main-nav").removeClass('main-nav--active');
        $('.burger__item').removeClass('burger--active');
      }
  });

  //*****CARD FLIP*****
  $('.discount-card__inner').click(function(){
    $(this).toggleClass('discount-card--flipped');
  });

});
