function convertTemperature() {
  const unit1 = document.getElementById('unitSelector1').value;
  const unit2 = document.getElementById('unitSelector2').value;
  const input1 = parseFloat(document.getElementById('temperatureInput1').value);

  if (isNaN(input1)) {
    document.getElementById('error').innerText = 'Invalid input !';
    document.getElementById('temperatureInput2').value = '';
    return;
  }

  const result = convertTemperatureUnits(input1, unit1, unit2);

  document.getElementById('error').innerText = '';
  document.getElementById('temperatureInput2').value = result.toFixed(2);
}

function convertTemperatureUnits(value, fromUnit, toUnit) {
  if (fromUnit === toUnit) {
    return value;
  }

  switch (fromUnit) {
    case 'C':
      return convertFromCelsius(value, toUnit);
    case 'F':
      return convertFromFahrenheit(value, toUnit);
    case 'K':
      return convertFromKelvin(value, toUnit);
    default:
      return NaN;
  }
}

function convertFromCelsius(value, toUnit) {
  switch (toUnit) {
    case 'F':
      return (value * 9 / 5) + 32;
    case 'K':
      return value + 273.15;
    default:
      return NaN;
  }
}

function convertFromFahrenheit(value, toUnit) {
  switch (toUnit) {
    case 'C':
      return (value - 32) * 5 / 9;
    case 'K':
      return (value + 459.67) * 5 / 9;
    default:
      return NaN;
  }
}

function convertFromKelvin(value, toUnit) {
  switch (toUnit) {
    case 'C':
      return value - 273.15;
    case 'F':
      return (value * 9 / 5) - 459.67;
    default:
      return NaN;
  }
}
