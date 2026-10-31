$(document).ready(function () {
  $("#btn-hide").click(function () { $("#target-text").hide(400); });
  $("#btn-show").click(function () { $("#target-text").show(400); });
  $("#btn-toggle").click(function () { $("#target-text").toggle(400); });

  $("#btn-fade-out").click(function () { $("#fade-img").fadeOut(500); });
  $("#btn-fade-in").click(function () { $("#fade-img").fadeIn(500); });
  $("#btn-fade-toggle").click(function () { $("#fade-img").fadeToggle(500); });

  $("#panel-trigger").click(function () {
    $("#panel-body").slideToggle(400);
  });
});