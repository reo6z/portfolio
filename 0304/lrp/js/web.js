// JavaScript Document
$(function(){
	
	$(".black").fadeOut(500);
    $(".kv-tit").delay(100).fadeIn(500);
    $(".kv-pro").delay(300).fadeIn(800);
	$(".kv-icon01").delay(1200).fadeIn(500);
    $(".kv-icon02").delay(1400).fadeIn(1000);
	TweenMax.from(".kv-tit", 1, {top:"+=80px", scale:1, delay:0, transformOrigin:"0px 0px", ease:"Quad.easeInOut"});
	TweenMax.from(".kv-icon01", 1, {top:"-=50px", delay:1.2, transformOrigin:"0px 0px", ease:"Quad.easeInOut"});
    TweenMax.from(".kv-icon02", 1, {top:"-=50px", delay:1.4, transformOrigin:"0px 0px", ease:"Quad.easeInOut"});

    /*animations Scroll*/
    var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	 
	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);
	 
	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	      $element.addClass('in-view');
	    } else {
	      $element.removeClass('in-view');
	    }
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');


})
