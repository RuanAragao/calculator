document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", calculateRoots);
});

function calculateRoots() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const discriminant = b ** 2 - 4 * a * c;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("results").textContent = "Please enter valid coefficients.";
    } else if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("results").textContent = `The roots of the quadratic equation are ${root1.toFixed(2)} and ${root2.toFixed(2)}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        document.getElementById("results").textContent = `The root of the quadratic equation is ${root.toFixed(2)}`;
    } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        document.getElementById("results").textContent = `The roots of the quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
    }
}
