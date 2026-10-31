$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#btn-change").click(function () {
    $("#p-id").text("Content changed using ID selector!").css("color", "#E0007A");
    $(".p-class").html("<b>HTML content updated via Class selector!</b>").css("font-weight", "bold");
    $("span").css({
      "background-color": "#FFD6EB",
      "padding": "5px 10px",
      "border-radius": "8px"
    });
  });
});