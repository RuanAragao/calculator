let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function appendToDisplay(value) {
    // Check if adding a close bracket is valid
    if (value === ')' && isCloseBracketValid(displayValue)) {
        displayValue += value;
    } else if (value !== ')') {
        displayValue += value;
    }
    document.getElementById('display').value = displayValue;
}

function isCloseBracketValid(expression) {
    // Check if an open bracket exists before adding a close bracket
    return expression.split('(').length > expression.split(')').length;
}

function calculatePercentage() {
    // Evaluate the expression and divide it by 100 to get the percentage
    try {
        displayValue = eval(displayValue) / 100;
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
