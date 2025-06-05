function initSlideshow() {
  const slides = document.querySelectorAll('.hero.slideshow .slide');
  const next = document.querySelector('.slideshow-nav .next');
  const prev = document.querySelector('.slideshow-nav .prev');
  if (!slides.length || !next || !prev) return;
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

  if (typeof window !== 'undefined') {
    window.showSlide = showSlide;
  }

  showSlide(current);
  setInterval(nextSlide, 5000);
}

if (typeof module !== 'undefined') {
  module.exports = { initSlideshow };
}
