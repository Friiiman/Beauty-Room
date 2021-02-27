import $ from 'jquery';
import slick from './../../node_modules/slick-carousel/slick/slick.min.js';
import svg4everybody from 'svg4everybody';

svg4everybody();

$(document).ready(function($){

  //*****CARD FLIP*****
  $('.discount-card__inner').click(function(){
    $(this).toggleClass('discount-card--flipped');
  });

  //*****BURGER MENU*****
  $('.burger').click(function(){
    $('.burger__item').toggleClass('burger--active');
  });

  $('.burger').click(function(){
    $('.main-nav').toggleClass('main-nav--active');
  });

});
