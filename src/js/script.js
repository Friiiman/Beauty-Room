import $ from 'jquery';
import slick from './../../node_modules/slick-carousel/slick/slick.min.js';
import svg4everybody from 'svg4everybody';

svg4everybody();

$(document).ready(function($){

  $('.discount-card__inner').click(function(){
    $(this).toggleClass('discount-card--flipped');
  });

  // $('.discount-card').click(function(){
  //   $(this).siblings('.discount-card__inner').toggleClass('discount-card--flipped');
  // });

});
