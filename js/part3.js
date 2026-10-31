$(document).ready(function () {
  let count = 1;

  $("#btn-add").click(function () {
    count++;
    $("#item-list").append(`<li>Appended Item ${count}</li>`);
  });

  $("#btn-prepend").click(function () {
    count++;
    $("#item-list").prepend(`<li>Prepended Item ${count}</li>`);
  });

  $("#btn-remove").click(function () {
    $("#item-list li:last-child").remove();
  });

  $("#btn-change-img").click(function () {
    $("#attr-img").attr("src", "https://picsum.photos/seed/pink2/250/120");
  });

  $("#btn-change-link").click(function () {
    $("#attr-link").attr("href", "https://api.jquery.com").text("Visit jQuery API Docs");
  });

  $("#input-name").on("keyup change", function () {
    $("#out-name").text($(this).val() || "---");
  });

  $("#input-email").on("keyup change", function () {
    $("#out-email").text($(this).val() || "---");
  });
});