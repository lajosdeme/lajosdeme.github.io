$(".work-btn").css("opacity", "0")

anime({
  targets: ".work-btn",
  opacity: 1,
  duration: 9000,
  delay: (el, i) => 1000 + 30 * i
})
