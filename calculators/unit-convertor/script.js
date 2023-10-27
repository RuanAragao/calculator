const units = {
    length: {
        meter: 1,
        kilometer: 1000,
        mile: 1609.34,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254
    },
    weight: {
        kilogram: 1,
        gram: 0.001,
        pound: 0.453592,
        ounce: 0.0283495
    },
    volume: {
        liter: 1,
        milliliter: 0.001,
        cubicMeter: 1000,
        gallon: 3.78541,
        quart: 0.946353
    }
};

// Function to populate unit types
function populateUnitTypes(selectElement, unitCategory) {
    selectElement.innerHTML = "";
    for (const unit in units[unitCategory]) {
        const option = document.createElement("option");
        option.value = unit;
        option.text = unit;
        selectElement.appendChild(option.cloneNode(true));
    }
}

// Function to convert length units
function convertLengthUnit() {
    const fromUnitType = document.getElementById("length-from-unit").value;
    const toUnitType = document.getElementById("length-to-unit").value;
    const inputValue = parseFloat(document.getElementById("length-from").value);

    if (fromUnitType === toUnitType) {
        document.getElementById("length-to").value = inputValue;
        return;
    }

    if (!isNaN(inputValue)) {
        const convertedValue = inputValue * (units.length[toUnitType] / units.length[fromUnitType]);
        document.getElementById("length-to").value = convertedValue.toFixed(2);
    } else {
        alert("Please enter a valid number for conversion.");
    }
}

// Function to convert weight units
function convertWeightUnit() {
    const fromUnitType = document.getElementById("weight-from-unit").value;
    const toUnitType = document.getElementById("weight-to-unit").value;
    const inputValue = parseFloat(document.getElementById("weight-from").value);

    if (fromUnitType === toUnitType) {
        document.getElementById("weight-to").value = inputValue;
        return;
    }

    if (!isNaN(inputValue)) {
        const convertedValue = inputValue * (units.weight[toUnitType] / units.weight[fromUnitType]);
        document.getElementById("weight-to").value = convertedValue.toFixed(2);
    } else {
        alert("Please enter a valid number for conversion.");
    }
}

// Function to convert volume units
function convertVolumeUnit() {
    const fromUnitType = document.getElementById("volume-from-unit").value;
    const toUnitType = document.getElementById("volume-to-unit").value;
    const inputValue = parseFloat(document.getElementById("volume-from").value);

    if (fromUnitType === toUnitType) {
        document.getElementById("volume-to").value = inputValue;
        return;
    }

    if (!isNaN(inputValue)) {
        const convertedValue = inputValue * (units.volume[toUnitType] / units.volume[fromUnitType]);
        document.getElementById("volume-to").value = convertedValue.toFixed(2);
    } else {
        alert("Please enter a valid number for conversion.");
    }
}

// Initialize the unit type selects for each category
populateUnitTypes(document.getElementById("length-from-unit"), "length");
populateUnitTypes(document.getElementById("length-to-unit"), "length");
populateUnitTypes(document.getElementById("weight-from-unit"), "weight");
populateUnitTypes(document.getElementById("weight-to-unit"), "weight");
populateUnitTypes(document.getElementById("volume-from-unit"), "volume");
populateUnitTypes(document.getElementById("volume-to-unit"), "volume");
