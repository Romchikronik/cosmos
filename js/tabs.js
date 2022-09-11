$(document).ready(function () {
  $(".login-registration__tabs-pills a").click(function (e) {
    e.preventDefault();
    $(".login-registration__item_active").removeClass(
      "login-registration__item_active"
    );
    $(this).parent().addClass("login-registration__item_active");
    $($(this).attr("href")).addClass("login-registration__item_active");
  });
});
