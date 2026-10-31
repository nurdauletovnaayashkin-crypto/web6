$(document).ready(function () {
  $("#btn-anim-basic").click(function () {
    $("#box-basic").animate({
      left: '150px',
      width: '120px',
      height: '120px'
    }, 600);
  });

  $("#btn-anim-seq").click(function () {
    let $box = $("#box-seq");
    $box.animate({ left: '150px' }, 400)
        .animate({ top: '80px' }, 400)
        .animate({ width: '40px', height: '40px' }, 400)
        .animate({ left: '0px', top: '0px', width: '80px', height: '80px' }, 600);
  });

  $("#btn-anim-combo").click(function () {
    $("#box-combo").animate({
      opacity: 0.3,
      width: '140px',
      height: '140px',
      left: '120px'
    }, 800);
  });
});