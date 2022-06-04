$(function () {

//メインビジュアルで使ってるSwiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,//サムネ表示枚数
  });
  var swiper2 = new Swiper(".mySwiper2", {
    //オートプレイ
    autoplay: {
      delay: 3000,//待機時間
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

});