  var textWrapper = document.querySelector('.ml12');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({
      loop: false
    })
    .add({
      targets: '.ml12 .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 1000 + 30 * i
    }).add({
      targets: '.ml12 .letter',
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: Infinity,
      delay: (el, i) => 100 + 30 * i
    });
