
Splitting();

setTimeout(() => {
  document.querySelector('.first').classList.add('active');
}, 300);

// -----------------------------

let scrollPosY = 0; // Holds current scroll position
let ticking = false;
const sections = document.querySelectorAll('.triggerOnScroll');

function checkSlide() {
  sections.forEach((section) => {
    // Position of the bottom of the screen
    const screenBottom = scrollPosY + window.innerHeight;
    // Bottom of screen meets the 260px point on the section's Y axis.
    const slideInAt = screenBottom - 260;
    // Is part of the section shown?
    const isHalfShown = slideInAt > section.offsetTop;

    if (isHalfShown) {
      section.classList.add('active');
    }

    // Resets everything when at the top of page
    if (scrollPosY < 200) {
      section.classList.remove('active');
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
