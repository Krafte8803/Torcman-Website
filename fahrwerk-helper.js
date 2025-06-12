function initFahrwerkHelper() {
  const form = document.getElementById('auswahlForm');
  const result = document.getElementById('ergebnis');
  if (!form || !result) return;

  let daten = [];
  fetch('Fahrwerke.json')
    .then(r => r.json())
    .then(json => {
      daten = json;
    })
    .catch(err => {
      result.textContent = 'Fehler beim Laden der Daten.';
      console.error(err);
    });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!daten.length) {
      result.textContent = 'Daten noch nicht geladen, bitte kurz warten und erneut versuchen.';
      return;
    }
    const startgewicht = parseFloat(document.getElementById('startgewicht').value);
    const propellerZoll = parseFloat(document.getElementById('propeller').value);
    const propellerMm = propellerZoll * 25.4;
    const passende = daten.filter(
      row =>
        startgewicht < row.Startgewicht &&
        propellerMm / 2 < (row.Hoehe || row.Höhe) + (row.Rad || 0) / 2 - 50
    );
    if (passende.length) {
      const unique = [...new Set(passende.map(x => x.Größe || x.Groesse))];
      result.innerHTML = '<b>Empfohlene Größen:</b><ul>' +
        unique.map(g => `<li>${g}</li>`).join('') +
        '</ul>';
    } else {
      result.textContent = 'Kein passendes Fahrwerk gefunden.';
    }
  });
}

if (typeof module !== 'undefined') {
  module.exports = { initFahrwerkHelper };
}
