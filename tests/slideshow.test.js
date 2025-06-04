beforeEach(() => {
  document.body.innerHTML = `
    <div class="hero slideshow">
      <div class="slide"></div>
      <div class="slide"></div>
    </div>
    <div class="slideshow-nav">
      <button class="prev">Prev</button>
      <button class="next">Next</button>
    </div>
  `;
});

test('showSlide toggles active class on slides', () => {
  // Import script which registers DOMContentLoaded listener
  require('../slideshow.js');
  // Trigger the listener
  document.dispatchEvent(new Event('DOMContentLoaded'));

  const slides = document.querySelectorAll('.hero.slideshow .slide');
  // initial call inside script sets first slide active
  expect(slides[0].classList.contains('active')).toBe(true);
  expect(slides[1].classList.contains('active')).toBe(false);

  // call exported function to show second slide
  global.showSlide(1);
  expect(slides[0].classList.contains('active')).toBe(false);
  expect(slides[1].classList.contains('active')).toBe(true);
});
