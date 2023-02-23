const guessElement = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const guess = e.results[0][0].transcript;

    showGuessOnScreen(guess);
    validateGuess(guess);
}

function showGuessOnScreen(guess) {
    const treatedNumber = +guess.replace('.', '');
    const isNumber = Number.isNaN(treatedNumber);
    const notAllowedValue = validateAllowedValue(treatedNumber);

    if (!isNumber && !notAllowedValue) {
        guessElement.innerHTML = `
            <div>Você disse:</div>
            <span class="box">${treatedNumber}</span>
        `
    } else {
        guessElement.innerHTML = `
        <i style="color: #252A34" class="wrong-box fa-solid fa-xmark"></i>
        `
    }
}