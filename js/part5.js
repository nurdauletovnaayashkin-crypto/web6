$(document).ready(function () {
  $(".accordion-header").click(function () {
    let currentBody = $(this).next(".accordion-body");
    $(".accordion-body").not(currentBody).slideUp(300);
    currentBody.slideToggle(300);
  });
});