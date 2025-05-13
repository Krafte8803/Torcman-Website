
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero.slideshow .slide');
  const next = document.querySelector('.slideshow-nav .next');
  const prev = document.querySelector('.slideshow-nav .prev');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  showSlide(current);
  setInterval(nextSlide, 5000);
});
