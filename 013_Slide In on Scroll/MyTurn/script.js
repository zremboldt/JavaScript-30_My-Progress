
let scrollPosY = 0; // Holds current scroll position
let ticking = false;
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach((img) => {
    // Position of the bottom of the screen/
    const screenBottom = scrollPosY + window.innerHeight;
    // Bottom of screen meets the halfway point on the image's Y axis.
    const slideInAt = screenBottom - img.height / 2;
    // Position of the bottom of the image.
    const imgBottom = img.offsetTop + img.height;
    // Is half of the image shown?
    const isHalfShown = slideInAt > img.offsetTop;
    // Has the user scrolled past the image?
    const isNotScrolledPast = scrollPosY < imgBottom;

    if (isHalfShown && isNotScrolledPast) {
      img.classList.add('active');
    // } else {
    //   img.classList.remove('active');
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
