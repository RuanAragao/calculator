function calculate() {
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  let result;

  switch (operation) {
    case 'and':
      result = num1 & num2;
      break;
    case 'or':
      result = num1 | num2;
      break;
    case 'xor':
      result = num1 ^ num2;
      break;
    default:
      result = 'Invalid operation';
      break;
  }

  document.getElementById('result').value = result;
}
