var morphing = anime({
  targets: 'svg path',
  d: 'm-2,-110.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-139.92534,-24.11052 -264.85068,196.11055 -641.77607,0l0,-296.80101z',
  easing: 'easeOutQuad',
  duration: 7000,
  loop: true,
  direction: 'alternate'
});


$(".btn").hover(function() {
  console.log("hover")
  $(".fas").addClass("fa-chevron-down")
  $(".fas").removeClass("fa-chevron-right")
}, function() {
  $(".fas").removeClass("fa-chevron-down")
  $(".fas").addClass("fa-chevron-right")
})
