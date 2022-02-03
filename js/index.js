function smoothScroll(new_position) {
  $("html, body").animate(
    {
      scrollTop: new_position.top,
    },
    100
  );
  return false;
}

$(document).ready(function () {
  //Smooth Scroll - homepage links
  $(".home-section-links li a, body #to-top").on("click", function (e) {
    e.preventDefault();

    let jump = $(this).attr("href");
    let new_position = $(jump).offset();
    smoothScroll(new_position);
  });

  //Smooth Scroll - sidebar links
  $("#sidebar-wrapper .sidebar-nav li a").on("click", function (e) {
    e.preventDefault();

    let jump = $(this).attr("href");
    let new_position = $(jump).offset();
    smoothScroll(new_position);

    $("#sidebar-wrapper").toggleClass("active");
  });
});
