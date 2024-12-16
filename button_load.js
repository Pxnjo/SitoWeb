
// Funzione per aggiornare la larghezza della barra di progresso
function updateProgressBar(progressBar) {
    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    progressBar.style.setProperty('--width', width + 0.2);
}

// Configurazione dell'osservatore di intersezione
const observerOptions = {
    root: null, // Utilizza il viewport come radice
    threshold: 0.1 // Attiva la callback quando almeno il 10% dell'elemento è visibile
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Avvia l'aggiornamento della barra di progresso
            const progressBar = entry.target;
            const intervalId = setInterval(() => {
                updateProgressBar(progressBar);
                // Interrompi l'intervallo quando la barra è completa (supponendo che 100 sia il massimo)
                const computedStyle = getComputedStyle(progressBar);
                const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
                if (width >= 100) {
                    clearInterval(intervalId);
                }
            }, 5);

            // Interrompi l'osservazione una volta attivata la barra di progresso
            observer.unobserve(progressBar);
        }
    });
}, observerOptions);

// Seleziona tutte le barre di progresso
const progressBars = document.querySelectorAll('.progress_bar_eng, .progress_bar_ita, .progress_bar_rum');
progressBars.forEach(bar => {
    observer.observe(bar);
});



