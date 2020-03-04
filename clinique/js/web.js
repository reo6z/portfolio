// JavaScript Document
$(function(){
	
	$("#black").fadeOut(500);	
	$("#title").delay(0).fadeIn(800);
	$("#article").delay(0).fadeIn(1000);
	$("#word").delay(2400).fadeIn(1000);
	TweenMax.from("#vision_kv", 2, {left:"-=0px", opacity:0, scale:1.2, delay:0, transformOrigin:"0px 890px", ease:"Quad.easeInOut"});
	TweenMax.from("#title", 1, {top:"+=30px", opacity:0, delay:1});
	TweenMax.from("#article", 2, {top:"+=30px", opacity:0, delay:1.5});
	
})

