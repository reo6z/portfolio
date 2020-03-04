// JavaScript Document
$(function(){
	
	$("#black").fadeOut(500);	
	$("#bar").delay(0).fadeIn(1000);
	$("#product01").delay(0).fadeIn(1200);
	$("#product02").delay(0).fadeIn(1200);
	$("#title").delay(0).fadeIn(500);
	TweenMax.from("#bar", 1, {top:"+=90px", opacity:0, delay:0.1});
	TweenMax.from("#product01", 1, {top:"-=50px", opacity:0, delay:0.4 , ease:"Quad.easeInOut"});
	TweenMax.from("#product02", 1, {top:"-=50px", opacity:0, delay:0.6 , ease:"Quad.easeInOut"});
	TweenMax.from("#title", 1, {top:"-=50px", opacity:0, delay:1.2 , ease:"Quad.easeInOut"});
	
})

