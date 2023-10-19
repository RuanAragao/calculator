const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');
const resultDisplay = document.getElementById('result');
const calculateBtn = document.getElementById('calculate-btn');
const clearBtn = document.getElementById('clear-btn');

function clear() {
    numberA.value = 0;
    numberB.value = 0;
    resultDisplay.value = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    calculateBtn.addEventListener('click', () => {
        let result = 0;

        if (numberA.value && numberA.value.length <= 0) return alert("Need the first number")
        if (numberA.value && numberA.value.length <= 0) return alert("Need the second number")

        result = parseInt(numberA.value) + parseInt(numberB.value);

        resultDisplay.value = result;
    });

    numberA.addEventListener('focus', numberA.select);
    numberB.addEventListener('focus', numberB.select);
    resultDisplay.addEventListener('focus', resultDisplay.select);

    clearBtn.addEventListener('click', clear);
});