const intro = document.getElementById("intro");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  intro.style.backgroundPositionY = offset * 0.7 + 'px';
})
