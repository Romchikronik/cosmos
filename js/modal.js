$(document).ready(function () {
  $(".videocourse-card").click(function (e) {
    e.preventDefault();
    $(".overlay").show().css("overflow", "auto");
    $("html").css("overflow-y", "hidden");
    $(".modal-videocourse").animate({
      top: "50%",
    });
  });

  $(".overlay").click(function () {
    $(".overlay").hide();
    $("html").css("overflow-y", "scroll");
    $(".modal-videocourse").animate({
      top: "-150%",
    });
  });

  $(".preview__buy-course, .modal_btn").click(function (e) {
    e.preventDefault();
    $(".overlay").show().css("overflow", "auto");
    $("html").css("overflow-y", "hidden");
    $(".modal-manager").animate({
      top: "50%",
    });
    $(".modal-videocourse").animate({
      top: "-150%",
    });
  });

  $(".overlay, .modal-manager__exit").click(function () {
    $(".overlay").hide();
    $("html").css("overflow-y", "scroll");
    $(".modal-manager").animate({
      top: "-100%",
    });
  });

  $(".tutors_search").click(function (e) {
    e.preventDefault();
    $(".header-search").animate(
      {
        top: 0,
      },
      800
    );
  });
  $("#close").click(function (e) {
    e.preventDefault();
    $(".header-search").animate(
      {
        top: -100,
      },
      800
    );
  });

  $(".show_hide-menu").click(function () {
    if (!$(".filters").hasClass("open")) {
      $(".filters").animate(
        {
          right: 0,
        },
        800
      );
      $(".filters").addClass("open");
      $(".fa-sign-in").addClass("fa-rotate-270");
    } else {
      $(".filters").animate(
        {
          right: -300,
        },
        800
      );
      $(".filters").removeClass("open");
      $(".fa-sign-in").removeClass("fa-rotate-270");
    }
  });
});
