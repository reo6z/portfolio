// JavaScript Document
$(function(){
	
	$("#black").fadeOut(300);
    $("#subtitle").delay(300).fadeIn(800);
	$("#title").delay(300).fadeIn(800);
	$("#word").delay(600).fadeIn(1000);
    $("#product").delay(600).fadeIn(1200);
	$("#icon").delay(1500).fadeIn(1200);
	TweenMax.from("#title", 1.2, {top:"-=40px", delay:0, transformOrigin:"175px 85px", ease:"Quad.easeInOut"});
	TweenMax.from("#word", 1.4, {top:"-=60px", delay:0, transformOrigin:"175px 55px", ease:"Quad.easeInOut"});
	
    //彈出對話框//
    $( "#event01_note" ).mouseover(function() {
      $( "#event01_pop" ).fadeIn( 100 );
    });
    
    $( "#event01_note" ).mouseleave(function() {
      $( "#event01_pop" ).fadeOut( 100 );
    });

    //intro01
    $('#intro01_ctag1, #intro01_ctag2').append('<img src="http://newproducts.fashionguide.com.tw/p/160411/esteelauder_newdimension/web/images/60x20.png" >');
    
    $('#intro01_ctag1').mouseover(function(){
            TweenMax.to($('#intro01_pop1,#intro01_pop2'), 0,{autoAlpha:0});
            TweenMax.to($('#intro01_pop1'), 0.7,{autoAlpha:1,top:'190px',ease:Back.easeOut});
        }).mouseout(function(){
            TweenMax.to($('#intro01_pop1'), 0.3,{autoAlpha:0,top:'170px'});
        })

    $('#intro01_ctag2').mouseover(function(){
            TweenMax.to($('#intro01_pop1,#intro01_pop2'), 0,{autoAlpha:0});
            TweenMax.to($('#intro01_pop2'), 0.7,{autoAlpha:1,top:'340px',ease:Back.easeOut});
        }).mouseout(function(){
            TweenMax.to($('#intro01_pop2'), 0.3,{autoAlpha:0,top:'320px'});
        })

    //intro02
    $('#intro02_ctag1, #intro02_ctag2').append('<img src="http://newproducts.fashionguide.com.tw/p/160411/esteelauder_newdimension/web/images/60x20.png" >');
    
    $('#intro02_ctag1').mouseover(function(){
            TweenMax.to($('#intro02_pop1,#intro02_pop2,#intro02_pop3'), 0,{autoAlpha:0});
            TweenMax.to($('#intro02_pop1'), 0.7,{autoAlpha:1,top:'240px',ease:Back.easeOut});
        }).mouseout(function(){
            TweenMax.to($('#intro02_pop1'), 0.3,{autoAlpha:0,top:'220px'});
        })

    $('#intro02_ctag2').mouseover(function(){
            TweenMax.to($('#intro02_pop1,#intro02_pop2,#intro02_pop3'), 0,{autoAlpha:0});
            TweenMax.to($('#intro02_pop2'), 0.7,{autoAlpha:1,top:'210px',ease:Back.easeOut});
        }).mouseout(function(){
            TweenMax.to($('#intro02_pop2'), 0.3,{autoAlpha:0,top:'190px'});
        })

    $('#intro02_ctag3').mouseover(function(){
            TweenMax.to($('#intro02_pop1,#intro02_pop2,#intro02_pop3'), 0,{autoAlpha:0});
            TweenMax.to($('#intro02_pop3'), 0.7,{autoAlpha:1,top:'310px',ease:Back.easeOut});
        }).mouseout(function(){
            TweenMax.to($('#intro02_pop3'), 0.3,{autoAlpha:0,top:'290px'});
        })

	$(function() {
        $('.goto').on('click', function(){
            var to = $(this).attr('href'); // $(this) is the clicked link. We store its href.
            $('html, body').animate({ scrollTop: ($(to).offset().top)-0}, 700);
            $('section').removeClass("active");
            $('section' + to).addClass("active");
            $('.goto').removeClass("active");
            $(this).addClass("active");
            return false;
        });
    });

})



