function convertNumber() {
    var number = document.getElementById("number").value;
    var base = parseInt(document.getElementById("base").value);
    
    var result;
    if (base === 2) {
        result = "<div>Decimal: " + parseInt(number, 2) +
                    "</div><div>Hexadecimal: " + parseInt(number, 2).toString(16).toUpperCase() +
                    "</div><div>Octal: " + parseInt(number, 2).toString(8) + "</div>";
    } else if (base === 10) {
        result = "<div>Binary: " + parseInt(number, 10).toString(2) +
                 "</div><div>Hexadecimal: " + parseInt(number, 10).toString(16).toUpperCase() +
                 "</div><div>Octal: " + parseInt(number, 10).toString(8) + "</div>";
    } else if (base === 16) {
        result = "<div>Decimal: " + parseInt(number, 16) +
                    "</div><div>Binary: " + parseInt(number, 16).toString(2) +
                    "</div><div>Octal: " + parseInt(number, 16).toString(8) + "</div>";
    } else if (base === 8) {
        result = "<div>Decimal: " + parseInt(number, 8) +
                    "</div><div>Binary: " + parseInt(number, 8).toString(2) +
                    "</div><div>Hexadecimal: " + parseInt(number, 8).toString(16).toUpperCase() + "</div>";
    }
    
    document.getElementById("result").innerHTML = result;
}
