const progressBar_ita = document.getElementsByClassName('progress_bar_ita')[0]
setInterval(() => {
    const computerStyle = getComputedStyle(progressBar_ita)
    const width = parseFloat(computerStyle.getPropertyValue('--width')) || 0
    progressBar_ita.style.setProperty('--width', width + .4)
}, 5)

const progressBar_rum = document.getElementsByClassName('progress_bar_rum')[0]
setInterval(() => {
    const computerStyle = getComputedStyle(progressBar_rum)
    const width = parseFloat(computerStyle.getPropertyValue('--width')) || 0
    progressBar_rum.style.setProperty('--width', width + .4)
}, 5)

const progressBar_eng = document.getElementsByClassName('progress_bar_eng')[0]
setInterval(() => {
    const computerStyle = getComputedStyle(progressBar_eng)
    const width = parseFloat(computerStyle.getPropertyValue('--width')) || 0
    progressBar_eng.style.setProperty('--width', width + .4)
}, 5)