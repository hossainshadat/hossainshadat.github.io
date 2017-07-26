/*
===========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Template Name   : Infusion - Responsive Personal Portfolio Template
 Author          : bootWeb
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2017 - bootWeb - https://themeforest.net/user/bootweb
===========================================================================
*/

/*================================================
            Table of contents  
==================================================
 
1. Scroll NavBar
2. Dynamic Colors
3. Background-image flickering solution for mobile
4. Parallax
5. Type js
6. Wow js
7. Progress Bar
8. Smooth scroll
9. Counter
10. Magnific Popup
11. Mixitup
12. OWL Carousel
13. Contact form
14. Google Map
15. Preloader

====================================================
            End table content 
===================================================*/

$(function () {
    "use strict";

    var $window = $(window),
    $body = $('body');

    jQuery(document).ready(function($){

//Scroll NavBar
$window.on("scroll", function () {
    if ($window.scrollTop() > 160) {
        $('#nav').addClass("scroll");
    } else {
            //remove the background property
            $('#nav').removeClass("scroll");
        }
    });

//Dynamic Colors
$(".option").on("click",function(){
  $("#box").toggleClass("open")}),
$("body").on("click",function(o){
  $(o.target).closest("#box").length||$(".box").removeClass("open")
});

$('.blue').on("click", function () {
    $('#pagestyle').attr("href", "/infusion/css/style.css");
});
$('.red').on("click", function () {
    $('#pagestyle').attr("href", "/infusion/css/red.css");
});
$('.purple').on("click", function () {
    $('#pagestyle').attr("href", "/infusion/css/purple.css");
});
$('.green').on("click", function () {
    $('#pagestyle').attr("href", "/infusion/css/green.css");
});
$('.orange').on("click", function () {
    $('#pagestyle').attr("href", "/infusion/css/orange.css");
});
$('.peach').on("click", function () {
    $('#pagestyle').attr("href", "/infusion/css/peach.css");
});

//Background-image flickering solution for mobile
var bg = jQuery("#home");
function resizeBackground() {
  bg.height(jQuery(window).height() + 60);
}
resizeBackground();

//Parallax
$(function(){
  $('body').stellar({
    responsive: true,
    positionProperty: 'position',
    horizontalScrolling: false
});
});

//Type js
var element = $(".element");
$(function() {
  element.typed({
    strings: ["I am Shahadath Hossain.", "I am from Bangladesh.", "I'm Python and Django Developer."],
    typeSpeed: 100,
    loop: true,
});
});

//Wow js
new WOW().init(); 

//Progress Bar
var startSkills = $('.single-skill');
startSkills.waypoint(function () {
    $(this).each(function () {
        var data = $(this).data('percent');
        $(this).find('.skill-bar-overlay').animate({
            width: data + "%"
        }, 2000);

        $(this).find('span').addClass('show').animate({
            width: data + (-20) + "%"
        }, 2000);
    });
}, {
    triggerOnce: true,
    offset: 'bottom-in-view'
});

//Smooth Scroll
$(".nav a,#home a,#quote a,[href='#body']").on('click', function(event) {
    if (this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 900, function(){
        window.location.hash = hash;
    });
  }
});

//Active Scroll
$(document).on("scroll", onScroll);
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.nav li a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
} 

//Counter
$('.counter').counterUp({
    delay: 1,
    time: 200
});

//Magnific Popup
$('#parent').magnificPopup({
  delegate: 'a',
  type: 'image',
  closeOnContentClick: true,
  gallery: {enabled: true}
});

//Mixitup
$('#parent').mixItUp();

//Owl Carousel
$("#owl-testimonial").owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 800,
    paginationSpeed: 800,
    smartSpeed: 500,
    autoplay: false,
    singleItem: true,
    loop: false,
    responsive:{
        0:{
            items:1
        },
        580:{
            items:2
        },
        900:{
            items:3
        }
    }
});

//Contact form
var validator=$("#form").validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true
  },
  subject: "required",
  message: "required",
},

messages: {
    name: "Please enter your name",
    email: "Please enter a valid email address",
    subject: "Please enter a subject",
    message: "Please enter your message"
}
});
$(".send-btn").on("click touchstart", function () {
    $("#form").css("color", "#ac4b49");
});

//Google Map
/*var myCenter = new google.maps.LatLng(28.6069,77.214);
function initialize() {
    var mapProp = {
        center:myCenter,
        zoom:13,
        scrollwheel:false,
        draggable:true,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),mapProp);
    var marker = new google.maps.Marker({
        position:myCenter,
        icon: '/infusion/images/map.png',
    });
    marker.setMap(map);
    marker.setAnimation(google.maps.Animation.BOUNCE);
}
google.maps.event.addDomListener(window, 'load', initialize);*/

//Preloader
$window.on('load', function(){               
    $('#status').fadeOut(); 
    $('#preloader').delay(350).fadeOut('slow'); 
    $body.delay(350).css({'overflow':'visible'});           
});

}(jQuery));

});