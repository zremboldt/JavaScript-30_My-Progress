

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach((img) => {
    // Position of the bottom of the screen/
    const screenBottom = window.scrollY + window.innerHeight;
    // Bottom of screen meets the halfway point on the image's Y axis.
    const slideInAt = screenBottom - img.height / 2;
    // Position of the bottom of the image.
    const imgBottom = img.offsetTop + img.height;
    // Is half of the image shown?
    const isHalfShown = slideInAt > img.offsetTop;
    // Has the user scrolled past the image?
    const isNotScrolledPast = window.scrollY < imgBottom;

    if (isHalfShown && isNotScrolledPast) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
