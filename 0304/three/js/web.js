// JavaScript Document
$(function(){
	
	$("#black").fadeOut(300);
    $("#kv").delay(300).fadeIn(800);
	$("#logo").delay(300).fadeIn(800);
	$("#title").delay(600).fadeIn(1000);
    $("#word").delay(800).fadeIn(1200);
	$("#icon").delay(1200).fadeIn(1200);
	TweenMax.from("#logo", 1.2, {top:"-=40px", delay:0, transformOrigin:"175px 85px", ease:"Quad.easeInOut"});
	TweenMax.from("#title", 1.4, {top:"-=60px", delay:0, transformOrigin:"175px 55px", ease:"Quad.easeInOut"});
    TweenMax.from("#word", 1.6, {top:"-=60px", delay:0, transformOrigin:"175px 55px", ease:"Quad.easeInOut"});
	
    //intro
    $('#intro_ctag1, #intro_ctag2, #intro_ctag3, #intro_ctag4, #intro_ctag5, #intro_ctag6').append('<img src="http://newproducts.fashionguide.com.tw/p/161116/three_skincare/web/images/200x45.png" >');
    
    $('#intro_ctag1').mouseover(function(){
            TweenMax.to($('#intro_pop1,#intro_pop2,#intro_pop3,#intro_pop4,#intro_pop5,#intro_pop6'), 0,{autoAlpha:0});
            TweenMax.to($('#intro_pop1'), 0.7,{autoAlpha:1,top:'170px',ease:Back.easeOut});
        }).mouseout(function(){
            TweenMax.to($('#intro_pop1'), 0.3,{autoAlpha:0,top:'200px'});
        })

    $('#intro_ctag2').mouseover(function(){
            TweenMax.to($('#intro_pop1,#intro_pop2,#intro_pop3,#intro_pop4,#intro_pop5,#intro_pop6'), 0,{autoAlpha:0});
            TweenMax.to($('#intro_pop2'), 0.7,{autoAlpha:1,top:'470px',ease:Back.easeOut});
        }).mouseout(function(){
            TweenMax.to($('#intro_pop2'), 0.3,{autoAlpha:0,top:'500px'});
        })

    $('#intro_ctag3').mouseover(function(){
            TweenMax.to($('#intro_pop1,#intro_pop2,#intro_pop3,#intro_pop4,#intro_pop5,#intro_pop6'), 0,{autoAlpha:0});
            TweenMax.to($('#intro_pop3'), 0.7,{autoAlpha:1,top:'170px',ease:Back.easeOut});
        }).mouseout(function(){
            TweenMax.to($('#intro_pop3'), 0.3,{autoAlpha:0,top:'200px'});
        })

    $('#intro_ctag4').mouseover(function(){
            TweenMax.to($('#intro_pop1,#intro_pop2,#intro_pop3,#intro_pop4,#intro_pop5,#intro_pop6'), 0,{autoAlpha:0});
            TweenMax.to($('#intro_pop4'), 0.7,{autoAlpha:1,top:'0px',ease:Back.easeOut});
        }).mouseout(function(){
            TweenMax.to($('#intro_pop4'), 0.3,{autoAlpha:0,top:'30px'});
        })

    $('#intro_ctag5').mouseover(function(){
            TweenMax.to($('#intro_pop1,#intro_pop2,#intro_pop3,#intro_pop4,#intro_pop5,#intro_pop6'), 0,{autoAlpha:0});
            TweenMax.to($('#intro_pop5'), 0.7,{autoAlpha:1,top:'430px',ease:Back.easeOut});
        }).mouseout(function(){
            TweenMax.to($('#intro_pop5'), 0.3,{autoAlpha:0,top:'460px'});
        })

    $('#intro_ctag6').mouseover(function(){
            TweenMax.to($('#intro_pop1,#intro_pop2,#intro_pop3,#intro_pop4,#intro_pop5,#intro_pop6'), 0,{autoAlpha:0});
            TweenMax.to($('#intro_pop6'), 0.7,{autoAlpha:1,top:'170px',ease:Back.easeOut});
        }).mouseout(function(){
            TweenMax.to($('#intro_pop6'), 0.3,{autoAlpha:0,top:'200px'});
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

    //nav
    $(function(){
        // 預設顯示第一個 Tab
        var _showTab = 0;
        var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
        $('.tab_content').eq($defaultLi.index()).siblings().hide();
        
        // 當 li 頁籤被點擊時...
        // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
        $('ul.tabs li').mouseover(function() {
            // 找出 li 中的超連結 href(#id)
            var $this = $(this),
                _index = $this.index();
            // 把目前點擊到的 li 頁籤加上 .active
            // 並把兄弟元素中有 .active 的都移除 class
            $this.addClass('active').siblings('.active').removeClass('active');
            // 淡入相對應的內容並隱藏兄弟元素
            $('.tab_content').eq(_index).stop(false, true).fadeIn().siblings().hide();

            return false;
        }).find('a').focus(function(){
            this.blur();
        });
    });
