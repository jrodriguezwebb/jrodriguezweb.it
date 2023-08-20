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

export function jqueryScrollToTop($: any) {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    400
  );
}

export function openMenuJquery($: any) {
  // Mobile menu
  $(".site-nav").addClass("animate");
  $(".site-nav").toggleClass("mobile-menu-hide");
}
