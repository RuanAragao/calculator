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
        selectElement.appendChild(option);
    }
}

// Function to convert length units
function convertLengthUnit() {
    const fromUnitType = document.getElementById("length-from-unit").value;
    const toUnitType = document.getElementById("length-to-unit").value;
    const inputValue = parseFloat(document.getElementById("length-from").value);

    if (fromUnitType === toUnitType) {
        document.getElementById("length-to").value = inputValue.toFixed(4); // Set precision
        return;
    }

    if (!isNaN(inputValue)) {
        const valueInMeters = inputValue * units.length[fromUnitType];
        const convertedValue = valueInMeters / units.length[toUnitType];
        document.getElementById("length-to").value = convertedValue.toFixed(4); // Set precision
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
        document.getElementById("weight-to").value = inputValue.toFixed(4); // Set precision
        return;
    }

    if (!isNaN(inputValue)) {
        const valueInKilograms = inputValue * units.weight[fromUnitType];
        const convertedValue = valueInKilograms / units.weight[toUnitType];
        document.getElementById("weight-to").value = convertedValue.toFixed(4); // Set precision
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
        document.getElementById("volume-to").value = inputValue.toFixed(4); // Set precision
        return;
    }

    if (!isNaN(inputValue)) {
        const valueInLiters = inputValue * units.volume[fromUnitType];
        const convertedValue = valueInLiters / units.volume[toUnitType];
        document.getElementById("volume-to").value = convertedValue.toFixed(4); // Set precision
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

// Set default values for "from" and "to" units
document.getElementById("length-from-unit").value = "kilometer";
document.getElementById("length-to-unit").value = "meter";
document.getElementById("weight-from-unit").value = "kilogram";
document.getElementById("weight-to-unit").value = "gram";
document.getElementById("volume-from-unit").value = "liter";
document.getElementById("volume-to-unit").value = "milliliter";
