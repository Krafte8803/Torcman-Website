function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  if (!track || !nextBtn || !prevBtn) return;

  nextBtn.addEventListener('click', () => {
    track.style.animationPlayState = 'paused';
    track.scrollBy({ left: track.offsetWidth * 0.3, behavior: 'smooth' });
  });
  prevBtn.addEventListener('click', () => {
    track.style.animationPlayState = 'paused';
    track.scrollBy({ left: -track.offsetWidth * 0.3, behavior: 'smooth' });
  });
  track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initCarousel);
}

module.exports = { initCarousel };
