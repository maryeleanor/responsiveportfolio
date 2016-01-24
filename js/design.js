
$(document).ready(function () {
        $(".navbar-toggle").on("click", function () {
            $(this).toggleClass("active");
        });
    });


$( function() {
  // initialize Masonry
  var $container = $('#container').masonry();
  // layout Masonry again after all images have loaded
  $container.imagesLoaded( function() {
    $container.masonry();
  });
});



// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


var isoOptions = {
  masonry: {
    columnWidth: 1
  }
};


//Isotope
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
 });


 
    $('.portfolio-filter> li>a').click(function(d){
        $('.portfolio-filter> li>a').removeClass('active');
        $(d.currentTarget).addClass('active');
        
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});




(function ($) {
$.fn.showHide = function (options) {

//default vars for the plugin
var defaults = {
speed: 1000,
easing: '',
changeText: 1,
showText: 'Show',
hideText: 'Hide'

};
var options = $.extend(defaults, options);

$(this).click(function () {
// optionally add the class .toggleDiv to each div you want to automatically close
$('.toggleDiv').slideUp(options.speed, options.easing);
// this var stores which button you've clicked
var toggleClick = $(this);
// this reads the rel attribute of the button to determine which div id to toggle
var toggleDiv = $(this).attr('rel');
// here we toggle show/hide the correct div at the right speed and using which easing effect
$(toggleDiv).slideToggle(options.speed, options.easing, function() {
// this only fires once the animation is completed
if(options.changeText==1){
$(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
}
});

return false;

});

};
})(jQuery);
