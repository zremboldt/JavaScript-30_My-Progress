
let scrollPosY = 0; // Holds current scroll position
let ticking = false;
const sections = document.querySelectorAll('.triggerOnScroll');

function checkSlide() {
  sections.forEach((section) => {
    // Position of the bottom of the screen/
    const screenBottom = scrollPosY + window.innerHeight;
    // Bottom of screen meets the halfway point on the image's Y axis.
    const slideInAt = screenBottom - 200;
    // Is half of the image shown?
    const isHalfShown = slideInAt > section.offsetTop;

    if (isHalfShown) {
      section.classList.add('active');
    }
  });
}

function update() {
  checkSlide();
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
    ticking = true;
  }
}

function onScroll() {
  scrollPosY = window.pageYOffset;
  requestTick();
}

window.addEventListener('scroll', onScroll, false);
