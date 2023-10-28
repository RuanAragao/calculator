function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);
    const compoundingFrequency = parseInt(document.getElementById("compoundingFrequency").value);

    const rateDecimal = rate / 100;
    const periodicRate = rateDecimal / compoundingFrequency;
    const n = compoundingFrequency * time;

    const futureValue = principal * Math.pow(1 + periodicRate, n);

    document.getElementById("result").innerHTML = `Future Value: $${futureValue.toFixed(2)}`;
}
