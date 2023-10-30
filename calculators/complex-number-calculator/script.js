document.getElementById("addButton").addEventListener("click", performAddition);
document.getElementById("subtractButton").addEventListener("click", performSubtraction);
document.getElementById("multiplyButton").addEventListener("click", performMultiplication);
document.getElementById("divideButton").addEventListener("click", performDivision);

function getComplexNumber1() {
    const real1 = parseFloat(document.getElementById("real1").value);
    const imaginary1 = parseFloat(document.getElementById("imaginary1").value);
    return { real: real1, imaginary: imaginary1 };
}

function getComplexNumber2() {
    const real2 = parseFloat(document.getElementById("real2").value);
    const imaginary2 = parseFloat(document.getElementById("imaginary2").value);
    return { real: real2, imaginary: imaginary2 };
}

function performAddition() {
    const complex1 = getComplexNumber1();
    const complex2 = getComplexNumber2();
    const result = {
        real: complex1.real + complex2.real,
        imaginary: complex1.imaginary + complex2.imaginary
    };
    displayResult(result);
}

function performSubtraction() {
    const complex1 = getComplexNumber1();
    const complex2 = getComplexNumber2();
    const result = {
        real: complex1.real - complex2.real,
        imaginary: complex1.imaginary - complex2.imaginary
    };
    displayResult(result);
}

function performMultiplication() {
    const complex1 = getComplexNumber1();
    const complex2 = getComplexNumber2();
    const result = {
        real: complex1.real * complex2.real - complex1.imaginary * complex2.imaginary,
        imaginary: complex1.real * complex2.imaginary + complex1.imaginary * complex2.real
    };
    displayResult(result);
}

function performDivision() {
    const complex1 = getComplexNumber1();
    const complex2 = getComplexNumber2();
    const denominator = complex2.real * complex2.real + complex2.imaginary * complex2.imaginary;
    const result = {
        real: (complex1.real * complex2.real + complex1.imaginary * complex2.imaginary) / denominator,
        imaginary: (complex1.imaginary * complex2.real - complex1.real * complex2.imaginary) / denominator
    };
    displayResult(result);
}

function displayResult(result) {
    const resultText = `Result: ${result.real} + ${result.imaginary}i`;
    document.getElementById("resultText").innerText = resultText;
}
