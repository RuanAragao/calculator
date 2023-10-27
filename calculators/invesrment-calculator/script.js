document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
  
    calculateButton.addEventListener('click', function () {
      const principal = parseFloat(document.getElementById('principal').value);
      const rate = parseFloat(document.getElementById('rate').value);
      const years = parseFloat(document.getElementById('years').value);
  
      const futureValue = principal * Math.pow(1 + rate / 100, years);
  
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Your future value is: $${futureValue.toFixed(2)}`;
    });
  });
  