// JavaScript Document
$(function(){
	
	$(".black").fadeOut(0);
    $(".title").delay(100).fadeIn(1000);
    $(".pro").delay(300).fadeIn(1000);
    $(".mark").delay(900).fadeIn(1000);

	TweenMax.from(".title", 1.2, {top:"-=80px", delay:0.2, transformOrigin:"0px 0px", ease:"Quad.easeInOut"});
    TweenMax.from(".pro", 1.0, {scale:1.1, delay:0.2, transformOrigin:"270px 424px", ease:"Quad.easeInOut"});
    TweenMax.from(".mark", 1.2, {top:"+=20px", delay:0.6, transformOrigin:"0px 0px", ease:"Quad.easeInOut"});

    // hover
    $("#flower_icon01").hover(function(){
        TweenMax.to("#flower_pic", 0.3, {opacity:0, ease:"Quad.easeOut"});
        TweenMax.to("#flower_icon01o", 0.5, {opacity:1, ease:"Quad.easeOut"});
    },function(){
        TweenMax.to("#flower_pic", 0.5, {opacity:1, ease:"Quad.easeOut"});
        TweenMax.to("#flower_icon01o", 0.3, {opacity:0, ease:"Quad.easeOut"});
    });

    $("#intro01_icon01").hover(function(){
        // TweenMax.to("#intro01_icon02", 0.3, {opacity:0, ease:"Quad.easeOut"});
        TweenMax.to("#intro01_icon01o", 0.5, {left:"-=20px",opacity:1, ease:"Quad.easeOut"});
    },function(){
        TweenMax.to("#intro01_icon01", 0.5, {opacity:1, ease:"Quad.easeOut"});
        TweenMax.to("#intro01_icon01o", 0.3, {left:"469px",opacity:0, ease:"Quad.easeOut"});
    });

    $("#intro01_icon02").hover(function(){
        // TweenMax.to("#intro01_icon02", 0.3, {opacity:0, ease:"Quad.easeOut"});
        TweenMax.to("#intro01_icon02o", 0.5, {left:"-=20px",opacity:1, ease:"Quad.easeOut"});
    },function(){
        TweenMax.to("#intro01_icon02", 0.5, {opacity:1, ease:"Quad.easeOut"});
        TweenMax.to("#intro01_icon02o", 0.3, {left:"469px",opacity:0, ease:"Quad.easeOut"});
    });    
    
    //icon動態
    $(document).ready(function() {
        animation1("10px");
    });
    
    function animation1(posicion_y){  
        $('#flower_icon01').animate({marginTop: posicion_y}, 600,"easeInOutSine", function() {
            if($('#flower_icon01').css("marginTop") == "10px"){
                animation1("0px");
            }
            else{
                animation1("10px");
            }
        });  
    }
    

	//臉書分享前 確認是否有打勾//
    $('.event_share').on('click', function() {
        var $agreeItem = $('.agree').find('input');

        if ($agreeItem.prop('checked')) {
            //window.location = $(this).attr('href');
            fbShare();
        } else {
            alert('請勾選「我已看過並了解所有活動規則與個資保護政策，且同意提供相關個人資料予Fashionguide所舉辦行銷活動之資訊傳達、抽獎及寄送物品上」，贈品才能安全地寄送到您的手中哦！');

           //eturn false;
        }
        return false;
    });

})

