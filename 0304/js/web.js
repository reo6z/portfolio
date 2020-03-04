//Top
$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href");if($(window).scrollTop()!="0"){$(this).fadeIn("slow")}var scrollDiv=$(this);$(window).scroll(function(){if($(window).scrollTop()=="0"){$(scrollDiv).fadeOut("slow")}else{$(scrollDiv).fadeIn("slow")}});$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}});
        
$(function(){
    $("#top").scrollToTop();
});

//overlay
function openNav1() {
    document.getElementById("myNav1").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav2() {
    document.getElementById("myNav2").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav3() {
    document.getElementById("myNav3").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav4() {
    document.getElementById("myNav4").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav5() {
    document.getElementById("myNav5").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav6() {
    document.getElementById("myNav6").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav7() {
    document.getElementById("myNav7").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav8() {
    document.getElementById("myNav8").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav9() {
    document.getElementById("myNav9").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav10() {
    document.getElementById("myNav10").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav11() {
    document.getElementById("myNav11").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav12() {
    document.getElementById("myNav12").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav13() {
    document.getElementById("myNav13").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav14() {
    document.getElementById("myNav14").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav15() {
    document.getElementById("myNav15").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}

function openNav16() {
    document.getElementById("myNav16").style.height = "100%";
    $('body').css('overflow-y', 'hidden');
}


function closeNav1() {
    document.getElementById("myNav1").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav2() {
    document.getElementById("myNav2").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav3() {
    document.getElementById("myNav3").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav4() {
    document.getElementById("myNav4").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav5() {
    document.getElementById("myNav5").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav6() {
    document.getElementById("myNav6").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav7() {
    document.getElementById("myNav7").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav8() {
    document.getElementById("myNav8").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav9() {
    document.getElementById("myNav9").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav10() {
    document.getElementById("myNav10").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav11() {
    document.getElementById("myNav11").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav12() {
    document.getElementById("myNav12").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav13() {
    document.getElementById("myNav13").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav14() {
    document.getElementById("myNav14").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav15() {
    document.getElementById("myNav15").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

function closeNav16() {
    document.getElementById("myNav16").style.height = "0%";
    $('body').css('overflow-y', 'scroll');
}

// animations Scroll
$(function(){
    
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