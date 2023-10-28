function convertToRoman() {
    const numberInput = document.getElementById("numberInput").value;
    const romanResult = document.getElementById("romanResult");

    if(!numberInput)
    {
        alert("please enter a Number.");
        return;
    }
  
    const romanNumeral = convertToRomanNumber(parseInt(numberInput));
    romanResult.innerText = `Roman Numeral: ${romanNumeral}`;
  }
  
  function convertToNumber() {
    const romanInput = document.getElementById("romanInput").value.toUpperCase();
    const numberResult = document.getElementById("numberResult");
    if(!romanInput)
    {
        alert("please enter a Roman numeral.");
        return;
    }
    const number = convertToRegularNumber(romanInput);
    numberResult.innerText = `Number: ${number}`;
  }
  
  function convertToRomanNumber(num) {
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
  
    let roman = '';
  
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        roman += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }
  
    return roman;
  }
  
  function convertToRegularNumber(roman) {
    const romanNumeralsMap = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000]
    ]);
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentLetterValue = romanNumeralsMap.get(roman[i]);
      const nextLetterValue = romanNumeralsMap.get(roman[i + 1]);
  
      if (nextLetterValue && currentLetterValue < nextLetterValue) {
        result += nextLetterValue - currentLetterValue;
        i++;
      } else {
        result += currentLetterValue;
      }
    }
  
    return result;
  }
  