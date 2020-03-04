// JavaScript Document
$(function(){
	
	$("#black").fadeOut(0);
    $("#kv").delay(0).fadeIn(300);
    $("#logo").delay(300).fadeIn(500);
	$("#title").delay(600).fadeIn(600);
    $("#pro01").delay(1000).fadeIn(800);
    $("#pro02").delay(1200).fadeIn(1000);
	TweenMax.from("#title", 1.2, {top:"-=80px", delay:0.4, transformOrigin:"188px 45px", ease:"Quad.easeInOut"});
    TweenMax.from("#pro01", 1.2, {top:"-=80px", delay:0.6, transformOrigin:"186px 6px", ease:"Quad.easeInOut"});
    TweenMax.from("#pro02", 1.6, {top:"-=80px", delay:0.6, transformOrigin:"158px 25px", ease:"Quad.easeInOut"});

    //animations Scroll
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

	//
	$('#i_ctag1').mouseover(function(){
			TweenMax.to($('#intro_pop1, #intro_pop2, #intro_pop3, #intro_pop4, #intro_pop5, #intro_pop6'), 0,{opacity:0});
			TweenMax.to($('#intro_pop1'), 0.7,{opacity:1,top:'165px',ease:Back.easeOut});
			TweenMax.to($('#intro_normal'), 0,{opacity:0});
		}).mouseout(function(){
			TweenMax.to($('#intro_pop1'), 0.3,{opacity:0,top:'185px'});
			TweenMax.to($('#intro_normal'), 0.7,{opacity:1});
		})

	$('#i_ctag2').mouseover(function(){
			TweenMax.to($('#intro_pop1, #intro_pop2, #intro_pop3, #intro_pop4, #intro_pop5, #intro_pop6'), 0,{opacity:0});
			TweenMax.to($('#intro_pop2'), 0.7,{opacity:1,top:'165px',ease:Back.easeOut});
			TweenMax.to($('#intro_normal'), 0,{opacity:0});
		}).mouseout(function(){
			TweenMax.to($('#intro_pop2'), 0.3,{opacity:0,top:'185px'});
			TweenMax.to($('#intro_normal'), 0.7,{opacity:1});
		})

	$('#i_ctag3').mouseover(function(){
			TweenMax.to($('#intro_pop1, #intro_pop2, #intro_pop3, #intro_pop4, #intro_pop5, #intro_pop6'), 0,{opacity:0});
			TweenMax.to($('#intro_pop3'), 0.7,{opacity:1,top:'165px',ease:Back.easeOut});
			TweenMax.to($('#intro_normal'), 0,{opacity:0});
		}).mouseout(function(){
			TweenMax.to($('#intro_pop3'), 0.3,{opacity:0,top:'185px'});
			TweenMax.to($('#intro_normal'), 0.7,{opacity:1});
		})
	
	$('#i_ctag4').mouseover(function(){
			TweenMax.to($('#intro_pop1, #intro_pop2, #intro_pop3, #intro_pop4, #intro_pop5, #intro_pop6'), 0,{opacity:0});
			TweenMax.to($('#intro_pop4'), 0.7,{opacity:1,top:'165px',ease:Back.easeOut});
			TweenMax.to($('#intro_normal'), 0,{opacity:0});
		}).mouseout(function(){
			TweenMax.to($('#intro_pop4'), 0.3,{opacity:0,top:'185px'});
			TweenMax.to($('#intro_normal'), 0.7,{opacity:1});
		})
		
	$('#i_ctag5').mouseover(function(){
			TweenMax.to($('#intro_pop1, #intro_pop2, #intro_pop3, #intro_pop4, #intro_pop5, #intro_pop6'), 0,{opacity:0});
			TweenMax.to($('#intro_pop5'), 0.7,{opacity:1,top:'165px',ease:Back.easeOut});
			TweenMax.to($('#intro_normal'), 0,{opacity:0});
		}).mouseout(function(){
			TweenMax.to($('#intro_pop5'), 0.3,{opacity:0,top:'185px'});
			TweenMax.to($('#intro_normal'), 0.7,{opacity:1});
		})
		
	$('#i_ctag6').mouseover(function(){
			TweenMax.to($('#intro_pop1, #intro_pop2, #intro_pop3, #intro_pop4, #intro_pop5, #intro_pop6'), 0,{opacity:0});
			TweenMax.to($('#intro_pop6'), 0.7,{opacity:1,top:'165px',ease:Back.easeOut});
			TweenMax.to($('#intro_normal'), 0,{opacity:0});
		}).mouseout(function(){
			TweenMax.to($('#intro_pop6'), 0.3,{opacity:0,top:'185px'});
			TweenMax.to($('#intro_normal'), 0.7,{opacity:1});
		})

	//icon動態
	$(document).ready(function() {
		animation1("10px");
	});
	
	function animation1(posicion_y){  
		$('#intro_check').animate({marginTop: posicion_y}, 600,"easeInOutSine", function() {
			if($('#intro_check').css("marginTop") == "10px"){
				animation1("0px");
			}
			else{
				animation1("10px");
			}
		});  
	}

})

