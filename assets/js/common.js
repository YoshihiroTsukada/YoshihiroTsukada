$(function () {
  
  //totop
  $(".totop a").click(function(){
    $("html, body").animate({
      scrollTop: 0}, 500);
      return false;
  });

  //header_resize
  //パソコンの場合にアクション
  if (window.matchMedia("(min-width: 651px)").matches) {
  $(window).scroll(function(){
    if ($(window).scrollTop() > 120) {
      $("header .sns").hide();
      $(".sticky_header").addClass("small");
      return false;
    } else {
      $("header .sns").show();
      $(".sticky_header").removeClass("small");
      return false;
    }
  });
}

//include
  //パソコンの場合にアクション
  //if (window.matchMedia("(min-width: 651px)").matches) {
    //urlからpathを取得
    url_path = location.hash;
    if ((url_path).match("#")){
      $("section").each(function () {
        include = $(this).attr("id");
        if (url_path.match(include)) {
          include_top = ($(this).offset().top);
          if (window.matchMedia("(min-width: 651px)").matches) {
          include_top -= 50;
          }else{
          include_top -= 70;
          }
          $(window).scrollTop(include_top);
          return false;
        }
      });
      $(window).scroll(function () {
        $(this).scrollTop();
      });
      console.log("パソコンでぇす");
    }
  // } else {
  //   console.log("スマホでぇす");
  // }

  //--sp--------------------

  //ハンバーガーメニュークリック時にトグルメニューの開閉
  $("header .hamburger_btn").click(function () {
    $(this).toggleClass('active');
    $("nav").slideToggle(500);
  });

});