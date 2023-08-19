// Animate layout
export function animateLayout($: any) {
  // Animation on Page Loading
  $(".preloader").fadeOut(800, "linear");
  var windowWidth = $(window).width(),
    animatedContainer: any,
    animateType = $("#page_container").attr("data-animation");

  if (windowWidth > 991) {
    animatedContainer = $(".page-container");
  } else {
    animatedContainer = $(".site-main");
  }

  animatedContainer.addClass("animated " + animateType);
  $(".page-scroll").addClass("add-prespective");
  animatedContainer.addClass("transform3d");
  setTimeout(function () {
    $(".page-scroll").removeClass("add-prespective");
    animatedContainer.removeClass("transform3d");
  }, 1000);
}
