$(document).ready(function(){
    setTimeout(function() {
      $(".loading").css("display", "none");
      $(".holder").css("opacity", "1");
  }, 3000);
  $(".btn1").click(function() {
    var $navbarElement = $("#offcanvasNavbar2");
      $navbarElement.removeClass("offcanvas offcanvas-end text-bg-dark hiding").addClass("offcanvas offcanvas-end text-bg-dark show");
    $(".logo").css({display:"none"})
  });
  $(".btn-close").click(function() {
    var $navbarElement = $("#offcanvasNavbar2");
      $navbarElement.removeClass("offcanvas offcanvas-end text-bg-dark show").addClass("offcanvas offcanvas-end text-bg-dark hiding");
      $(".logo").css({display:"block"})
  });
})