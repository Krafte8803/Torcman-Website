<script>
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero.slideshow .slide');
    const next  = document.querySelector('.slideshow-nav .next');
    const prev  = document.querySelector('.slideshow-nav .prev');
    let current  = 0;

    function show(n) {
      slides.forEach((s,i) => s.classList.toggle('active', i===n));
    }
    function nextSlide() { current = (current + 1) % slides.length; show(current); }
    function prevSlide() { current = (current - 1 + slides.length) % slides.length; show(current); }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    show(current);
    setInterval(nextSlide, 5000); // wechselt alle 5 Sekunden
  });
</script>
