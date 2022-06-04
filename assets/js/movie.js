$(function () {
  //スライドトグル
  $(".movie_detail").hide();

  $(".theater").click(function () {
    $(this).parent().children(".movie_detail").slideToggle(500);
  });

    //上映時間を押した後の処理

    $(".movie_detail ul").click(function () {
      theater = $(this).parents(".each_theater_schedule").children(".theater").html();
      $(".right_content .selected_theater").html(theater);
      sessionStorage.setItem("theater", theater);

      movie = $(this).parents(".movie_screen").prev(".movie_title").html();
      $(".right_content .selected_movie").html(movie);
  
      date = $(this).parents(".movie_detail").children(".date").html();
      date += $(this).children("li:first-child").html();
      $(".right_content .selected_date").html(date);
  
      screen = $(this).parent().prev("p").html();
  
      sessionStorage.setItem("movie", movie);
      sessionStorage.setItem("date", date);
      sessionStorage.setItem("screen", screen)
  
      window.location.href = "../ticket/seat_select.html";
    });

});


