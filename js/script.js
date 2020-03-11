$(document).ready(function() {
  $(".fourth .col-right").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear"
  });

  $(".first").on("mousemove", function(e) {
    $(".first__nums").css({
      left: e.pageX / -50 + "px",
      top: e.pageY / -50 + "px"
    });
  });
});
