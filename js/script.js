const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,//slide1-3まで行った時1にもどるかどうか　true→3→1にもどる

  // If we need pagination
  pagination: {//下の何枚スライドあるかのドット
    el: '.swiper-pagination',
    clickable: true//ドットをクリックしてもページが移動
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();

jQuery('.drawer-icon').on('click' , function(e){//どういった動きをすのかを下に
  e.preventDefault();//aタグ等のブラウザの操作を無効化する？？

  // alert('haha');//alertで挙動の確認ができる
  jQuery('.drawer-icon').toggleClass('is-active');//toggleClass＝クラスがついてたらなくす、なかったらつける
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});

// //#を押すとグイーンってリンク先に動く（ネット版）
// jQuery('a[href^="#"]').on('click' , function(){
//     let header = jQuery(".header").innerHeight();// .headerクラスがついた要素の高さを取得
//     let speed = 300;//移動速度（ミリ秒）
//     let href = $(this).attr("href");
//     let target = $(href == "#" || href == "" ? 'html' : href);
//     let position = target.offset().top; // ターゲットの位置までspeedの速度で移動
//     $("html, body").animate({scrollTop:position}, speed, "swing");
//     return false;
//   });

// //#を押すとグイーンってリンク先に動く（デイトラ版）
jQuery('a[href^="#"]').on('click' ,function(){

  var header = jQuery('.header').innerHeight();//headerの高さを取得
  var id = jQuery(this).attr('href');//idを所得できる
  var position = 0;//#だけだったら戻る
  if (id != '#'){//idの値が＃でない場合は。。。
    position = jQuery(id).offset().top - header;//上部から該当のものを取得できる
  }
  jQuery('html,body').animate({
    scrollTop:position//取得した位置にスクロールさせてあげる
  },
  300);
});


// スクロール検知
jQuery(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('.to-top').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('.to-top').removeClass( 'is-show' );
  }
});

//header下線のアクション
jQuery('.header__nav li a').on('click' , function(){
  jQuery('.header__nav li a').removeClass('is-active');//クリックしたらis-activeをとる
  jQuery(this).addClass('is-active');//クリックされたものを
});

//Q&A
jQuery('.qa-box__q').on('click' ,function(){
  jQuery(this).next().slideToggle();//thisの次の要素
  jQuery(this).children('.qa-box__icon').toggleClass('is-open');
});

//modal
jQuery('.js-close-button').on('click' , function(e){
  e.preventDefault();//aタグだから
  var target = jQuery(this).data('target');
  jQuery(target).hide();
});

jQuery('.js-open-button').on('click' , function(e){
  e.preventDefault();//aタグだから
  var target = jQuery(this).data('target');
  jQuery(target).show();
});


//
  $('.main__visual__slider').slick({
    fade: true,
    speed: 1500,
    autoplaySpeed: 3000,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
  });



