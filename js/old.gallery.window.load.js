$(document).ready(function(){
    
	var clickEvent = false;
	$('#myCarousel').carousel({
		interval:   onclick	
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
})



$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+150);
	$('#myCarousel .list-group-item').outerHeight(triggerheight);
});









<!-- Script needed for isotope window load? 


<script type="javascript">

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
 
    $('.portfolio-filter a').click(function(){
        $('.portfolio-filter .current').removeClass('current');
        $(this).addClass('current');
 
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

$('#robinModal').on('show.bs.modal', function () {
  $('.modal-body').css('height',$( window ).height()*0.8);
});

</script>


<script type="text/javascript">

$(document).ready(function () {

    imagesLoaded( '#portfolioContainer', function(){
    var $container = $('#portfolioContainer');

      $container.isotope({
        itemSelector: '.element',
        layoutMode: 'masonry',
        masonryHorizontal: {
        columnWidth: 240,
        rowHeight: 240,
        gutterwidth: 50},
      });
    });

});
    $(document).ready(function(){
  // Isotope messes up in Chrome because it initiates before everything has loaded
  // This ensures everything has loaded before applying
    $(window).load(function() {
      $("theselector isotope is on").isotope('reLayout');
         });
      });

// update columnWidth on window resize
$(window).smartresize(function(){
  $container.isotope({
    // update columnWidth to a percentage of container width
    masonry: { columnWidth: $container.width() }
  });
}); 
</script> 
-->












<!-- old 


<script type="javascript">

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
 
    $('.portfolio-filter a').click(function(){
        $('.portfolio-filter .current').removeClass('current');
        $(this).addClass('current');
 
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

</script>


<script type="text/javascript">

$(document).ready(function () {

    imagesLoaded( '#portfolioContainer', function(){
    var $container = $('#portfolioContainer');

      $container.isotope({
        itemSelector: '.element',
        layoutMode: 'masonry',
        masonryHorizontal: {
        columnWidth: 240,
        rowHeight: 240,
        gutterwidth: 50},
      });
    });

});
    $(document).ready(function(){
  // Isotope messes up in Chrome because it initiates before everything has loaded
  // This ensures everything has loaded before applying
    $(window).load(function() {
      $("theselector isotope is on").isotope('reLayout');
         });
      });

// update columnWidth on window resize
$(window).smartresize(function(){
  $container.isotope({
    // update columnWidth to a percentage of container width
    masonry: { columnWidth: $container.width() }
  });
}); 
</script> 
         -->

