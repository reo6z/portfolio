$(function(){

  $(".kv_title").delay(300).fadeIn(600);
  $(".kv_pro").delay(600).fadeIn(1000);
  TweenMax.from(".kv_pro", 1, {top:"-=60px", delay:0.6, transformOrigin:"0px 0px", ease:"Quad.easeInOut"});

  // hover
  $("#intro_icon01d").hover(function(){
    TweenMax.to("#intro_icon01d", 0.3, {opacity:0, ease:"Quad.easeOut"});
    TweenMax.to("#intro_icon01h", 0.5, {opacity:1, ease:"Quad.easeOut"});
    },function(){
    TweenMax.to("#intro_icon01d", 0.5, {opacity:1, ease:"Quad.easeOut"});
  });

  $("#intro_icon02d").hover(function(){
    TweenMax.to("#intro_icon02d", 0.3, {opacity:0, ease:"Quad.easeOut"});
    TweenMax.to("#intro_icon02h", 0.5, {opacity:1, ease:"Quad.easeOut"});
    },function(){
    TweenMax.to("#intro_icon02d", 0.5, {opacity:1, ease:"Quad.easeOut"});
  });

  $("#intro_icon03d").hover(function(){
    TweenMax.to("#intro_icon03d", 0.3, {opacity:0, ease:"Quad.easeOut"});
    TweenMax.to("#intro_icon03h", 0.5, {opacity:1, ease:"Quad.easeOut"});
    },function(){
    TweenMax.to("#intro_icon03d", 0.5, {opacity:1, ease:"Quad.easeOut"});
  });

  $("#intro_icon04d").hover(function(){
    TweenMax.to("#intro_icon04d", 0.3, {opacity:0, ease:"Quad.easeOut"});
    TweenMax.to("#intro_icon04h", 0.5, {opacity:1, ease:"Quad.easeOut"});
    },function(){
    TweenMax.to("#intro_icon04d", 0.5, {opacity:1, ease:"Quad.easeOut"});
  });


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

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.article');
});


$(window).resize(function(){
  equalheight('.article');
});
