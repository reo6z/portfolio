$(function(){
  //
  $('#p_ctag1, #p_ctag2, #p_ctag2').append('<img src="https://fgdemo.s3.amazonaws.com/newprod/180613_sebamed_mei/0703-2/images/190x65.png">');
  $('#p_ctag1new').append('<img src="https://fgdemo.s3.amazonaws.com/newprod/180613_sebamed_mei/0703-2/images/index_08none.png">');
  $('#p_ctag2new').append('<img src="https://fgdemo.s3.amazonaws.com/newprod/180613_sebamed_mei/0703-2/images/index_09none.png">');
  $('#p_ctag3new').append('<img src="https://fgdemo.s3.amazonaws.com/newprod/180613_sebamed_mei/0703-2/images/index_10none.png">');

  $('#p_ctag1, #p_ctag1new').mouseover(function(){
      TweenMax.to($('#prod_pt1,#prod_pt2,#prod_pt3'), 0,{autoAlpha:0});
      TweenMax.to($('#prod_pt1'), 0.7,{autoAlpha:1,top:'200px',ease:Back.easeOut});
      TweenMax.to($('#prod_p2,#prod_p3'), 0.5,{autoAlpha:0.3});
    }).mouseout(function(){
      TweenMax.to($('#prod_pt1'), 0.3,{autoAlpha:0,top:'240px'});
      TweenMax.to($('#prod_p2,#prod_p3'), 0.3,{autoAlpha:1});
    })

  $('#p_ctag2, #p_ctag2new').mouseover(function(){
      TweenMax.to($('#prod_pt1,#prod_pt2,#prod_pt3'), 0,{autoAlpha:0});
      TweenMax.to($('#prod_pt2'), 0.7,{autoAlpha:1,top:'60px',ease:Back.easeOut});
      TweenMax.to($('#prod_p1,#prod_p3'), 0.5,{autoAlpha:0.3});
    }).mouseout(function(){
      TweenMax.to($('#prod_pt2'), 0.3,{autoAlpha:0,top:'100px'});
      TweenMax.to($('#prod_p1,#prod_p3'), 0.3,{autoAlpha:1});
    })

  $('#p_ctag3, #p_ctag3new').mouseover(function(){
      TweenMax.to($('#prod_pt1,#prod_pt2,#prod_pt3'), 0,{autoAlpha:0});
      TweenMax.to($('#prod_pt3'), 0.7,{autoAlpha:1,top:'80px',ease:Back.easeOut});
      TweenMax.to($('#prod_p1,#prod_p2'), 0.5,{autoAlpha:0.3});
    }).mouseout(function(){
      TweenMax.to($('#prod_pt3'), 0.3,{autoAlpha:0,top:'120px'});
      TweenMax.to($('#prod_p1,#prod_p2'), 0.3,{autoAlpha:1});
    })

  //頁籤
  $(function(){
    // 預設顯示第一個 Tab
    var _showTab = 0;
    var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
    $($defaultLi.find('a').attr('href')).siblings().hide();
    
    // 當 li 頁籤被點擊時...
    // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
    $('ul.tabs li').click(function() {
      // 找出 li 中的超連結 href(#id)
      var $this = $(this),
        _clickTab = $this.find('a').attr('href');
      // 把目前點擊到的 li 頁籤加上 .active
      // 並把兄弟元素中有 .active 的都移除 class
      $this.addClass('active').siblings('.active').removeClass('active');
      // 淡入相對應的內容並隱藏兄弟元素
      $(_clickTab).stop(false, true).show().siblings().hide();

      return false;
    }).find('a').focus(function(){
      this.blur();
    });
  });

  //臉書分享前 確認是否有打勾//
  $('.event-share').on('click', function() {
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