function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function convertToBinary() {
    const inputValue = parseFloat(document.getElementById("display").value);
    if (!isNaN(inputValue)) {
        document.getElementById("display").value = inputValue.toString(2);
    } else {
        document.getElementById("display").value = "Invalid Input";
    }
}

function convertToOctal() {
    const inputValue = parseFloat(document.getElementById("display").value);
    if (!isNaN(inputValue)) {
        document.getElementById("display").value = inputValue.toString(8);
    } else {
        document.getElementById("display").value = "Invalid Input";
    }
}

function convertToDecimal() {
    const inputValue = document.getElementById("display").value;
    const binaryPattern = /^[01]+$/;
    const octalPattern = /^[0-7]+$/;
    if (binaryPattern.test(inputValue)) {
        document.getElementById("display").value = parseInt(inputValue, 2);
    } else if (octalPattern.test(inputValue)) {
        document.getElementById("display").value = parseInt(inputValue, 8);
    } else {
        document.getElementById("display").value = "Invalid Input";
    }
}
