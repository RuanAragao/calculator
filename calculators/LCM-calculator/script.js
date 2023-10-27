function calculateLCM() {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);

    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    const lcm = getLCM(input1, input2);
    document.getElementById('result').textContent = `LCM of ${input1} and ${input2} is ${lcm}.`;
}

function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
}

function getGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return getGCD(b, a % b);
}