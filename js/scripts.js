$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });
  //login button script
  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
  });
  //login modal dismiss button
  $("#loginModalDismissButton").click(function () {
    $("#loginModal").modal("hide");
  });
  //login modal cancel button
  $("#loginCancelButton").click(function () {
    $("#loginModal").modal("hide");
  });
  //reserve table button
  $("#reserveTableButton").click(function () {
    $("#reserveModal").modal("show");
  });
  //reserve modal dismiss button
  $("#reserveModalDismissButton").click(function () {
    $("#reserveModal").modal("hide");
  });
  //reserve modal cancel button
  $("#reserveModalCancelButton").click(function () {
    $("#reserveModal").modal("hide");
  });
});
