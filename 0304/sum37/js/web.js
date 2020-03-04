// JavaScript Document
$(function(){
	
	$("#black").fadeOut(0);
    $("#kv").delay(0).fadeIn(300);
    $("#logo").delay(300).fadeIn(500);
	$("#title").delay(600).fadeIn(600);
    $("#line").delay(1000).fadeIn(800);
    $("#word").delay(1000).fadeIn(1000);
	TweenMax.from("#title", 1.2, {top:"-=80px", delay:0.4, transformOrigin:"188px 45px", ease:"Quad.easeInOut"});
    TweenMax.from("#line", 1.2, {top:"-=80px", delay:0.6, transformOrigin:"186px 6px", ease:"Quad.easeInOut"});
    TweenMax.from("#word", 1.4, {top:"-=80px", delay:0.6, transformOrigin:"158px 25px", ease:"Quad.easeInOut"});

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


$(function(){

    // hover
	$("#intro01-1a").hover(function(){
		TweenMax.to("#intro01-1b", 0.5, {opacity:1, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-1a", 0.3, {opacity:0, ease:"Quad.easeOut"});
	},function(){
		TweenMax.to("#intro01-1b", 0.3, {opacity:0, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-1a", 0.5, {opacity:1, ease:"Quad.easeOut"});
	});

	$("#intro01-2a").hover(function(){
		TweenMax.to("#intro01-2b", 0.5, {opacity:1, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-2a", 0.3, {opacity:0, ease:"Quad.easeOut"});
	},function(){
		TweenMax.to("#intro01-2b", 0.3, {opacity:0, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-2a", 0.5, {opacity:1, ease:"Quad.easeOut"});
	});

	$("#intro01-3a").hover(function(){
		TweenMax.to("#intro01-3b", 0.5, {opacity:1, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-3a", 0.3, {opacity:0, ease:"Quad.easeOut"});
	},function(){
		TweenMax.to("#intro01-3b", 0.3, {opacity:0, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-3a", 0.5, {opacity:1, ease:"Quad.easeOut"});
	});

	$("#intro01-4a").hover(function(){
		TweenMax.to("#intro01-4b", 0.5, {opacity:1, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-4a", 0.3, {opacity:0, ease:"Quad.easeOut"});
	},function(){
		TweenMax.to("#intro01-4b", 0.3, {opacity:0, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-4a", 0.5, {opacity:1, ease:"Quad.easeOut"});
	});

	$("#intro01-5a").hover(function(){
		TweenMax.to("#intro01-5b", 0.5, {opacity:1, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-5a", 0.3, {opacity:0, ease:"Quad.easeOut"});
	},function(){
		TweenMax.to("#intro01-5b", 0.3, {opacity:0, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-5a", 0.5, {opacity:1, ease:"Quad.easeOut"});
	});

	$("#intro01-6a").hover(function(){
		TweenMax.to("#intro01-6b", 0.5, {opacity:1, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-6a", 0.3, {opacity:0, ease:"Quad.easeOut"});
	},function(){
		TweenMax.to("#intro01-6b", 0.3, {opacity:0, ease:"Quad.easeOut"});
		TweenMax.to("#intro01-6a", 0.5, {opacity:1, ease:"Quad.easeOut"});
	});

})

