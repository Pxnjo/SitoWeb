function ShowDiv() {
  const certificazioniBox2 = document.querySelector('.certificazioni_box_2');
  const certificazioniBox = document.querySelector('.certificazioni_box');
  const screenWidth = window.matchMedia('(max-width: 1700px)').matches;

  if (screenWidth) {
    // On smaller screens, toggle certificazioni_box
    var x = document.querySelector(".certificazioni_box");
            if (x.style.display === "none") {
              x.style.display = "flex";
            } else {
              x.style.display = "none";
            }
  } else {
    // On full screen, toggle certificazioni_box_2
    var x = document.querySelector(".certificazioni_box_2");
            if (x.style.display === "none") {
              x.style.display = "flex";
            } else {
              x.style.display = "none";
            }
    }
}


function highlightText() {
  // Rimuovi vecchie evidenziazioni
  const elements = document.querySelectorAll('h1, h2, h3, p, span, li'); // Cerca nei tag specificati
  elements.forEach(el => {
      el.innerHTML = el.textContent; // Rimuove le evidenziazioni precedenti
  });

  // Ottieni il testo di ricerca
  const query = document.getElementById('searchInput').value.toLowerCase();
  if (!query) return; // Se il campo è vuoto, non fare nulla

  // Evidenzia le occorrenze del testo
  elements.forEach(el => {
      const regex = new RegExp(`(${query})`, 'gi');
      el.innerHTML = el.innerHTML.replace(regex, '<span class="highlight">$1</span>');
  });
}
    