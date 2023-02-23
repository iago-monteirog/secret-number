function validateGuess(guess) {
    const intNumber = +guess;
    
    if (validGuess(intNumber)) guessElement.innerHTML += '<div style="color:#FF2E63"; margin-top:10px>Valor inválido. Por favor, fale um número válido.</div>';

    if (validateAllowedValue(intNumber)) guessElement.innerHTML += `<div style="color:#FF2E63">Valor inválido: o número secreto precisa estar entre ${lowerValue} e ${highestValue}</div>`

    if (intNumber === secretNumber) document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${secretNumber}!</h3>
    `
}

function validGuess(n) {
    return Number.isNaN(n);
}

function validateAllowedValue(n) {
    return n > highestValue || n < lowerValue;
}