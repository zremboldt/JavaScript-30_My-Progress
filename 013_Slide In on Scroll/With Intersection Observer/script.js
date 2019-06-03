Splitting();

setTimeout(() => {
  document.querySelector('.first').classList.add('active');
}, 300);

// Using Intersection Observer ↓

const sections = document.querySelectorAll('.triggerOnScroll');

const observerConfig = {
  root: null,
  rootMargin: '200px 0px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, observerConfig);

sections.forEach(section => {
  observer.observe(section);
});
