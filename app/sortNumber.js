const lowerValue = 1;
const highestValue = 1000;

const secretNumber = generateRandomNumber();
console.log(secretNumber);

function generateRandomNumber() {
    return parseInt(Math.random() * highestValue + 1);
}

const lowerValueElement = document.getElementById('menor-valor');
lowerValueElement.innerHTML = lowerValue;

const highestValueElement = document.getElementById('maior-valor');
highestValueElement.innerHTML = highestValue;