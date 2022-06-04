$(function () {

  //メインビジュアルで使ってるSwiper
  if (window.matchMedia("(min-width: 651px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,//サムネ表示枚数
    });
    var swiper2 = new Swiper(".mySwiper2", {
      //オートプレイ
      autoplay: {
        delay: 5000,//待機時間
        disableOnInteraction: false,//ユーザー操作で一時停止
      },
      //coverflowのエフェクト
      effect: "coverflow",
      centeredSlides: true,//スライドの真ん中がスタート
      slidesPerView: 1.5,//表示枚数
      coverflowEffect: {
        //rotate: 0,//スライド
        //stretch: 0,//画像の間隔
        depth: 0,//オフセットの深さ
        modifier: 1.2,//角度
        //slideShadows: true,//スライドにある影
      },
      //右端から左に戻る
      loop: true,
            
      //アローボタンの追加
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      //メインビジュアルとサムネをリンク
      thumbs: {
        swiper: swiper,
      },
    });
  }else{
    $(".swiper-button-prev, .swiper-button-next").hide();
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,//サムネ表示枚数
    });
    var swiper2 = new Swiper(".mySwiper2", {
      //オートプレイ
      autoplay: {
        delay: 5000,//待機時間
        disableOnInteraction: false,//ユーザー操作で一時停止
      },
      //coverflowのエフェクト
      effect: "coverflow",
      centeredSlides: true,//スライドの真ん中がスタート
      slidesPerView: 1,//表示枚数
      coverflowEffect: {
        //rotate: 0,//スライド
        //stretch: 0,//画像の間隔
        depth: 0,//オフセットの深さ
        modifier: 1.2,//角度
        //slideShadows: true,//スライドにある影
      },
      //右端から左に戻る
      loop: true,
            
      //メインビジュアルとサムネをリンク
            thumbs: {
              swiper: swiper,
            },

    });
  }

    
    $(".swiper-slide img").click(function(){
      if (!$(this).parents("div").hasClass("swiper-slide-active")){
        return false;
      }
    });
  
    //comming_movieで使ってるslick
    $("#comming_movie .autoplay").slick({
      slidesToShow: 4, //表示するスライドの数
      autoplay: true, //自動再生
      autoplaySpeed: 0, //自動再生待機時間
      speed: 5000, //スライドのアニメーションの速度
      pauseOnFocus: false, // フォーカスしても無視
      pauseOnHover: false, // マウスホバーしても無視
      arrow: false, //アローボタン消す
      cssEase: "linear", //スライドアニメーションのeasing指定
      infinite: true, //無限ループ
    });
  
  });