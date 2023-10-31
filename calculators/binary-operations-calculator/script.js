function solve() {
	const var1 = document.getElementById("firstNum").value;
	const var2 = document.getElementById("secNum").value;
	const oper = document.getElementById("operation").value;
	if (/[^01]/.test(var1) || Number(var1) == NaN) {
		document.getElementById("output").innerText =
			"Invalid Input! Enter in Binary.";
	} else if (/[^01]/.test(var2) || Number(var2) == NaN) {
		document.getElementById("output").innerText =
			"Invalid Input! Enter in Binary.";
	} else {
		if (oper == "&") {
			const ans = (parseInt(var1, 2) & parseInt(var2, 2)).toString(2);
			document.getElementById("output").innerText = "0" + ans;
		}
		if (oper == "|") {
			const ans = (parseInt(var1, 2) | parseInt(var2, 2)).toString(2);
			document.getElementById("output").innerText = "0" + ans;
		}
		if (oper == "^") {
			const ans = (parseInt(var1, 2) ^ parseInt(var2, 2)).toString(2);
			document.getElementById("output").innerText = "0" + ans;
		}
		if (oper == "+") {
			const ans = (parseInt(var1, 2) + parseInt(var2, 2)).toString(2);
			document.getElementById("output").innerText = "0" + ans;
		}
		if (oper == "-") {
			const ans = (parseInt(var1, 2) - parseInt(var2, 2)).toString(2);
			document.getElementById("output").innerText = "0" + ans;
		}
		if (oper == "*") {
			const ans = (parseInt(var1, 2) * parseInt(var2, 2)).toString(2);
			document.getElementById("output").innerText = "0" + ans;
		}
		if (oper == "/") {
			const ans = (parseInt(var1, 2) / parseInt(var2, 2)).toString(2);
			const remain = (parseInt(var1, 2) % parseInt(var2, 2)).toString(2);
			document.getElementById("output").innerText =
				"0" + Math.trunc(ans) + " R: " + "0" + remain;
		}
	}
}
