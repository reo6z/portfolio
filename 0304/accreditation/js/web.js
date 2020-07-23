//btn
joinus = document.getElementById("joinus");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 200) {
        joinus.className = "btn show"
    } else {
        joinus.className = "btn hide"
    }
};

window.addEventListener("scroll", myScrollFunc);

//fade
var documentEl = $(document),
    fadeElem = $('.fade-scroll'); 

var fadeOptions = {
    scale: 1,
    duration: 1000
}

ScrollReveal().reveal(fadeElem, fadeOptions);

documentEl.on('scroll', function () {
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function () {
        var elemOffsetTop = $(this).offset().top;
        var height = $(this).height();
        if (height < 600) {
            if (height < 300) {
                elemOffsetTop -= height / 8;
            }
            height = 600;
        }

        if ($(this).offset().top !=0) {
            elemOffsetTop -= ($(this).height() / 8);
        }

        if (currScrollPos > elemOffsetTop) $(this).css('opacity', 1 - (currScrollPos - elemOffsetTop) / height);
    });
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

/*animations Scroll*/
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
