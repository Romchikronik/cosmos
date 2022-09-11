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
});
