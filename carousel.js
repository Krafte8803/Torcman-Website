const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

// Animation anhalten und per Klick manuell verschieben
nextBtn.addEventListener('click', () => {
  track.style.animationPlayState = 'paused';
  track.scrollBy({ left: track.offsetWidth * 0.3, behavior: 'smooth' });
});
prevBtn.addEventListener('click', () => {
  track.style.animationPlayState = 'paused';
  track.scrollBy({ left: -track.offsetWidth * 0.3, behavior: 'smooth' });
});

// Auf Maus-Exit die Auto-Animation wieder starten
track.addEventListener('mouseleave', () => {
  track.style.animationPlayState = 'running';
});
