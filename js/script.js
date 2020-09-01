$(document).ready(function () {
  $(".creativity").rProgressbar({
    percentage: 90,
  });
  $(".team-work").rProgressbar({
    percentage: 85,
  });
  $(".desiging").rProgressbar({
    percentage: 75,
  });
  new WOW().init();

  // Back to Top Buttton
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".up").fadeIn();
    } else {
      $(".up").fadeOut();
    }
  });

  $(".up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});
