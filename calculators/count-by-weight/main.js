const sampleNumber = document.getElementById('sample-number');
    const sampleWeight = document.getElementById('sample-weight');
    const sampleWeightUnit = document.getElementById('sample-weight-unit');
    const containerWeight = document.getElementById('container-weight');
    const containerWeightUnit = document.getElementById('container-weight-unit');
    const result = document.getElementById('result');

    const equation = (
      sampleNumber, 
      sampleWeightInGrams, 
      containerWeightInGrams
    ) => {
      try {
        if (sampleNumber && sampleNumber <= 0) {
          throw new Error('Sample number must be greater than 0.');
        }
        if (sampleWeightInGrams && sampleWeightInGrams <= 0) {
          throw new Error('Sample weight must be greater than 0.');
        }
        if (containerWeightInGrams && containerWeightInGrams <= 0) {
          throw new Error('Container weight must be greater than 0.');
        }
      } catch (error) {
        console.error(error);
      }

      return containerWeightInGrams / (sampleWeightInGrams / sampleNumber);
    }

    const calculate = () => {
      const sampleNumberValue = sampleNumber.value;
      const sampleWeightValue = sampleWeight.value;
      const sampleWeightUnitValue = sampleWeightUnit.value;
      const containerWeightValue = containerWeight.value;
      const containerWeightUnitValue = containerWeightUnit.value;

      if (
        sampleNumberValue && 
        sampleWeightValue && 
        sampleWeightUnitValue && 
        containerWeightValue && 
        containerWeightUnitValue
      ) {
        const sampleWeightInGrams = convertToGrams(sampleWeightValue, sampleWeightUnitValue);
        const containerWeightInGrams = convertToGrams(containerWeightValue, containerWeightUnitValue);
        const resultValue = Math.round(equation(sampleNumberValue, sampleWeightInGrams, containerWeightInGrams));
        result.value = resultValue;
      }
    }

    const convertToGrams = (value, unit) => {
      switch (unit) {
        case 'g':
          return value;
        case 'kg':
          return value * 1000;
        case 'oz':
          return value * 28.3495;
        case 'lb':
          return value * 453.592;
        default:
          return value;
      }
    }

    sampleNumber.addEventListener('input', calculate);
    sampleWeight.addEventListener('input', calculate);
    sampleWeightUnit.addEventListener('input', calculate);
    containerWeight.addEventListener('input', calculate);
    containerWeightUnit.addEventListener('input', calculate);