function loadMarkdown() {
  const placeholder = document.getElementById('content');
  if (!placeholder) return;
  const page = location.pathname.split('/').pop().replace('.html', '') || 'index';
  const map = { index: 'home' };
  const file = map[page] || page;
  fetch(`content/${file}.md`)
    .then(r => r.text())
    .then(md => {
      placeholder.innerHTML = marked.parse(md);
      if (window.initSlideshow) window.initSlideshow();
      if (window.initCarousel) window.initCarousel();
    })
    .catch(err => {
      placeholder.innerHTML = '<p>Inhalt konnte nicht geladen werden.</p>';
      console.error(err);
    });
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', loadMarkdown);
}
