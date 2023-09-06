$(document).ready(function(){
	
// ----sticky-header--
$(window).scroll(function() {
    if ($(this).scrollTop() > 120){  
      $('.header-inner-wrapper').addClass("sticky-header");
      }
      else{
      $('.header-inner-wrapper').removeClass("sticky-header");
      }
    });
// sticky header end

$('.tab-content').hide();
  $('.tab-content:first').show();
  
  // Click function
  $('.tabs').click(function(){
    $('.tabs').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    var tabCount =  $(this).attr('data-tab');
    $(tabCount).fadeIn();
    return false;
  });

var minnnextSlide,maxnextSlide,widthnextSlide,nextslidewidth;
function windowWidthnext(){
     if(($(window).width()<=1199) && ($(window).width()>=980)){
          minnnextSlide=2;
          maxnextSlide=2;
          widthnextSlide= 220;
     }
     else if(($(window).width()<=979) && ($(window).width()>=568)){
          minnnextSlide=2;
          maxnextSlide=2;
          widthnextSlide= 200;     
    }
    else if(($(window).width()<=567) && ($(window).width()>=320)){
        minnnextSlide=1;
          maxnextSlide=1;
          widthnextSlide= 220;
                    
     }
     else{
          minnnextSlide=3;
          maxnextSlide=3;
          widthnextSlide= 220;
                    
     }
}
$(function(){
    $('.slider-inner-wrapper').bxSlider({
      captions: true,
      slideWidth: widthnextSlide,
       minSlides: minnnextSlide,
       maxSlides:maxnextSlide,
       pager:false,
       maxSlides:3,
       auto:true,
    });
  });

// scroll on top button

$(window).scroll(function() {
  var btn = $('#button'); 
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
  
});
var btn = $('#button'); 
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});
// ----------------------------------
// ------------slicknav------------------------

$('.menubar').slicknav({
  prependTo:'.header-wrapper'
});
// $('.menubar').slicknav('toggle');
$('.menubar').slicknav('open'); 
$('.menubar').slicknav('close'); 

// -------------------------
// -------------------------
// Accordion Start
//     $(function() {
 
//   $(".accordion > .accordion-item.active-before-service").children(".accordion-panel").slideDown();
  
//   $(".accordion > .accordion-item").click(function() {
//     $(this).addClass("active-before-service").children(".accordion-panel").slideDown("ease-in-out");
//     $(this).siblings(".accordion-item").removeClass("active-before-service").children(".accordion-panel").slideUp();
   
//   });
// });

// $('.head').click(function(){
//   $(this).toggleClass('active-service');
//   $(this).parent().find('.arrow').toggleClass('arrow-animate');
//   $(this).parent().find('.content').slideToggle(280);
// });

// Accordion End
// Accordion Start
$(".accordion").on("click", ".acordeon-tittle", function() {
  $(this).toggleClass("active").next().slideToggle();
});
// Accordion End

$(document).ready(function(){

  $(".accordion").on("click", ".heading", function() {



  $(this).toggleClass("isactive").next().slideToggle();


  $(".contents").not($(this).next()).slideUp(300);

               

  $(this).siblings().removeClass("isactive");

  });
  $(".nextaccordion").on("click", ".nextheading", function() {



  $(this).toggleClass("issactive").next().slideToggle();


  $(".nextcontents").not($(this).next()).slideUp(300);

               

  $(this).siblings().removeClass("issactive");

  });
  
 });








var windowSize = window.outerWidth;
 if (windowSize <=767) {
  $('.slicknav_menu').show();
 } 
 else {
  $('.slicknav_menu').hide();
}

});