
// Select the active nav-link
$(".nav .nav-link").on("click", function() {
  $(".nav").find(".active").removeClass("active")
  $(this).addClass("active")
})

// default icon for slider
$(".slider").attr("data-before", "\uf6c4")

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// Scroll to correct position when navigation action happens
window.addEventListener("hashchange", function () {
  if (window.scrollY === 0) {
    return
  }
  window.scrollTo(window.scrollX, window.scrollY + 200);
});

$('.work-btn').click(function() {
  window.scrollTo(window.scrollX, window.scrollY + 200);
})

// Changing appearance to dark mode
$('#checkbox').click(function() {
  if (this.checked === true) {
    $("#portfolio").css("background-color","#252A34")
    $(".blog-top").css("fill", "#252A34")

    $(".portfolio-title").css("color", "white")

    $(".app-title").css("color", "white")
    $(".app-description").css("color", "white")
    $(".chirps-app-description").css("color", "white")

    $(".tech-description").css("color", "white")

    $(".tempo-screens").attr("src", "images/phones-tempo-dark.png")
    $(".chirps-screens").attr("src", "images/phones-chirps-dark.png")
    $(".biz-screens").attr("src", "images/phones-biz-dark.png")

    $("#contact").css("background-color", "#252A34")
    $(".contact-title").css("color", "white")
    $(".contact-description-lg").css("color", "white")
    $(".contact-description").css("color", "white")

    $(".slider").attr("data-before", "\uf6c3")
  }
  // change appearance back to light mode
  if (this.checked === false) {
    $("#portfolio").css("background-color","white")
    $(".blog-top").css("fill", "white")

    $(".portfolio-title").css("color", "black")

    $(".app-title").css("color", "black")
    $(".app-description").css("color", "black")
    $(".chirps-app-description").css("color", "black")

    $(".tech-description").css("color", "black")

    $(".tempo-screens").attr("src", "images/phones-tempo.png")
    $(".chirps-screens").attr("src", "images/phones-chirps.png")
    $(".biz-screens").attr("src", "images/phones-biz.png")

    $("#contact").css("background-color", "white")
    $(".contact-title").css("color", "black")
    $(".contact-description-lg").css("color", "black")
    $(".contact-description").css("color", "black")

    $(".slider").attr("data-before", "\uf6c4")
  }
})
