$(document).ready(function(){
  $(window).click(function() {
    var video = $("#particles-js video")[0];  // Get the video element from within #particles-js
    if (video) {
        video.play();  // Play the video
    }
});


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
  var words = ['Welcome to my page', 'Iam a PHP Fullstack Web Developer','Iam a python developer','Iam a Data Scientist'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 30,
    speed = 80;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};
window.addEventListener("scroll", function() {
  var scroll = window.scrollY;
  if (scroll >= 600) {
      $(".goUp").css({opacity: "1"});
  } else {
      $(".goUp").css({opacity: "0"});
  }
  if (scroll >= 50) {
    $("#navbar").addClass("bg-dark");
} else {
    $("#navbar").removeClass("bg-dark");
}
});
let show = 0;
$(".dropdown").click(function() {
  if (show === 0) {
    $(".logout").removeClass("log2").addClass("log1");
    show = 1;
  } else {
    $(".logout").removeClass("log1").addClass("log2");
    show = 0;
  }
});

$(document).ready(function () {
  wordflick();
});
})
particlesJS("particles-js", {"particles":{"number":{"value":400,"density":{"enable":true,"value_area":1279.4882047181134}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
