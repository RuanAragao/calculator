function convertDistance() {
  const unit1 = document.getElementById('unitSelector1').value;
  const unit2 = document.getElementById('unitSelector2').value;
  const input1 = parseFloat(document.getElementById('distanceInput1').value);

  if (isNaN(input1)) {
    document.getElementById('error').innerText = 'Invalid input !';
    document.getElementById('distanceInput2').value = '';
    return;
  }

  const result = convertDistanceUnits(input1, unit1, unit2);

  document.getElementById('error').innerText = '';
  document.getElementById('distanceInput2').value = result.toFixed(2);
}

function convertDistanceUnits(value, fromUnit, toUnit) {
  if (fromUnit === toUnit) {
    return value;
  }

  switch (fromUnit) {
    case 'M':
      return convertFromMil(value, toUnit);
    case 'K':
      return convertFromKm(value, toUnit);
    default:
      return NaN;
  }
}

function convertFromKm(value, toUnit) {
  switch (toUnit) {
    case 'M':
      return value * 0.621371;
    default:
      return NaN;
  }
}

function convertFromMil(value, toUnit) {
  switch (toUnit) {
    case 'K':
      return value * 1.60934;
    default:
      return NaN;
  }
}
