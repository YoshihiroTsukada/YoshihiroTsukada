$(function () {

  //--index--
  $(".to_theater_select").click(function(){
    sessionStorage.clear();
    window.location.href = "theater_select.html";
  });

  //--theater_select--
  $(".theater").click(function () {
    theater = $(this).html();
    $(".right_content .selected_theater").html(theater);
    sessionStorage.setItem("theater", theater);
    window.location.href = "movie_select.html";
  });

  //--movie_select--
  var theater = sessionStorage.getItem("theater");
  $(".right_content .selected_theater").html(theater);

  $(".movie_detail ul").click(function () {
    movie = $(this).parents(".movie_screen").prev(".movie_title").html();
    $(".right_content .selected_movie").html(movie);

    date = $(this).parents(".movie_detail").children(".date").html();
    date += $(this).children("li:first-child").html();
    $(".right_content .selected_date").html(date);

    screen = $(this).parent().prev("p").html();

    sessionStorage.setItem("movie", movie);
    sessionStorage.setItem("date", date);
    sessionStorage.setItem("screen", screen)

    window.location.href = "seat_select.html";
  });

  //--seat_select--
  var movie = sessionStorage.getItem("movie");
  $(".right_content .selected_movie").html(movie);
  var date = sessionStorage.getItem("date")
  $(".right_content .selected_date").html(date);
  var screen = sessionStorage.getItem("screen");
  $(".seat_select .screen").html(screen);

  var display_seat = "";
  var selected_seat = "";
  var select_num = 0;

  $("main .seat_select td").click(function () {
    if (select_num >= 4) {
      alert("購入枚数の上限に達しました");
    } else {
      $(this).css({
        "background-color": "#00c",
        "color": "#00c",
      });
      selected_seat = $(this).html();
      if (selected_seat === sessionStorage.getItem("selected_seat1") || selected_seat === sessionStorage.getItem("selected_seat2") || selected_seat === sessionStorage.getItem("selected_seat3")) {
        alert("既に選択されています");
      } else {
        if (select_num !== 0) {
          display_seat += " と "
        }
        display_seat += $(this).html();
        $(".selected_seat").html(`<span>${display_seat}</span> を選択しています`);
        select_num++;
        if (select_num === 1) {
          sessionStorage.setItem("selected_seat1", selected_seat);
          sessionStorage.removeItem("selected_seat2");
          sessionStorage.removeItem("selected_seat3");
          sessionStorage.removeItem("selected_seat4");
        } else if (select_num === 2) {
          sessionStorage.setItem("selected_seat2", selected_seat);
        } else if (select_num === 3) {
          sessionStorage.setItem("selected_seat3", selected_seat);
        } else {
          sessionStorage.setItem("selected_seat4", selected_seat);
        }
      }
    }
  });

  $(".reset_btn").click(function () {
    sessionStorage.removeItem("selected_seat1");
    sessionStorage.removeItem("selected_seat2");
    sessionStorage.removeItem("selected_seat3");
    sessionStorage.removeItem("selected_seat4");
    location.reload();
  });

  $(".next_btn").click(function () {
    if ($(".selected_seat").html() !== "シートが選択されていません") {
      window.location.href = "ticket_select.html";
    } else {
      alert("シートが選択されていません");
    }
  });

  //--ticket_select--
  var selected_seat1 = sessionStorage.getItem("selected_seat1", selected_seat);
  var selected_seat2 = sessionStorage.getItem("selected_seat2", selected_seat);
  var selected_seat3 = sessionStorage.getItem("selected_seat3", selected_seat);
  var selected_seat4 = sessionStorage.getItem("selected_seat4", selected_seat);
  var omikujitrue = 0;

  $(".selected_seats dt, .selected_seats dd").hide();
  $(".selected_seats").children().each(function () {
    if (selected_seat1 != null) {
      $("dt.selected_seat1").html(selected_seat1);
      $("dd.selected_seat1").children("p").html("選択してください");
      $(".selected_seat1").show();
    }
    if (selected_seat2 != null) {
      $("dt.selected_seat2").html(selected_seat2);
      $("dd.selected_seat2").children("p").html("選択してください");
      $(".selected_seat2").show();
    }
    if (selected_seat3 != null) {
      $("dt.selected_seat3").html(selected_seat3);
      $("dd.selected_seat3").children("p").html("選択してください");
      $(".selected_seat3").show();
    }
    if (selected_seat4 != null) {
      $("dt.selected_seat4").html(selected_seat4);
      $("dd.selected_seat4").children("p").html("選択してください");
      $(".selected_seat4").show();
    }
  });

  if(movie.match("New")){
    $(".std_price").hide()
  }else{
    $(".new4d_price").hide();
  }
  $(".selected_seats dd ul").hide();

  $(".selected_seats p").click(function () {
    if ($(this).next("ul").css("display").match("none")) {
      $(".selected_seats ul").slideUp();
      $(this).next("ul").slideDown();
    } else {
      $(this).next("ul").slideUp();
    }

    $(".selected_seats li").click(function () {
      var ticket = $(this).html();

      $(this).parents("dd").children("p").html(ticket).css("color","#222");
      $(this).parent().slideUp();

      var total_price = 0;
      $(".price").each(function () {
        total_price += Number($(this).html().replace(/[^0-9]/g, ""))
      });
      total_price_omikuji = total_price;
      if(omikujitrue === 0){
        total_price = total_price.toLocaleString();
        $(".total_price").html(`合計金額 ${total_price} 円`);
      }else{
        total_price_omikuji = total_price_omikuji/2;
        total_price_omikuji = total_price_omikuji.toLocaleString();
        $(".total_price").html(`合計金額 ${total_price_omikuji} 円 半額適用中`);
      }
    });
  });

  $(".buy_btn").click(function () {
    var cnt_num = 0;
    var max_cnt = $(".price").length;

    $(".price").each(function () {
      if ($(this).html() !== "選択してください") {
        cnt_num++;
      }
    });
    if (cnt_num === max_cnt) {

      var cnt_children_ticket = 0;
      $(".price").each(function () {
        if ($(this).html().match("子供")) {
          cnt_children_ticket++;
        }
      });

      var cnt_adult_ticket = 0;
      if (cnt_children_ticket === 0) {
        window.location.href = "thankyou.html";
        return false;
      }else{
        $(".price").each(function () {
          if ($(this).html().match("大人")) {
            cnt_adult_ticket++;
          }
        });
      }

      if (cnt_adult_ticket >= 1) {
        window.location.href = "thankyou.html";
      } else {
        alert("親の同伴が必要です");
      }

    } else {
      alert("チケットを選択してください");
    $(".price").each(function () {
        if ($(this).html() === "選択してください") {
          $(this).css("color", "#f00");
        }
      });
    }

  });

  //おみくじ
  var omikujiArray = ["01", "02", "03", "04", "05"];
  var num;
  var intervalOmikuji = 30;
  var timerOmikuji;
  var count = 0;

  $("#pullOmikuji").click(function () {
      omikujitrue=1;
      timerOmikuji = setInterval(omikujiTimer, intervalOmikuji);
      $("button#pullOmikuji").remove();
      $(".omikuji").css("margin-bottom","130px");
      $("#kekka").html("全集中!");
      $(".cutin").animate({"left": "+=150px",
    "opacity": "1" },300);
      $(".cutin").animate({"left": "+=50px"},2000);
      $(".cutin").animate({"left": "+=150px" ,
    "opacity": 0},300);

      function omikujiTimer() {
        num = Math.random();
        num *= 5;
        num = Math.floor(num);
        $("#omikuji #omikuji_start").attr({ "src": "../assets/images/omikuji_" + omikujiArray[num] + ".png" });
        count++;
        if (count > 200) {
          clearInterval(timerOmikuji);
          $("#omikuji #omikuji_start").attr({ "src": "../assets/images/omikuji_" + omikujiArray[0] + ".png"
          });
          $("#kekka").html("おめでとうございます!見事半額当選♪")
          total_price_omikuji = total_price_omikuji/2;
        total_price_omikuji = total_price_omikuji.toLocaleString();
        $(".total_price").html(`合計金額 ${total_price_omikuji} 円 半額適用中`);
        }
        
      }
    });

  //thankyou
  url_name = $(location).attr("pathname");
  if ( url_name.match("thankyou.html")) {
    sessionStorage.clear();
    setTimeout(function(){
      window.location.href = "../index.html";
    }, 5000);
  }



});