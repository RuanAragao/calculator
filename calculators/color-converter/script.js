// Function to convert HEX to RGB
function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `RGB: rgb(${r}, ${g}, ${b})`;
}

// Function to convert RGB to HEX
function rgbToHex(rgb) {
    const values = rgb.match(/\d+/g);
    const r = parseInt(values[0]);
    const g = parseInt(values[1]);
    const b = parseInt(values[2]);
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

// Function to convert RGB to HSL
function rgbToHsl(rgb) {
    const values = rgb.match(/\d+/g);
    const r = parseFloat(values[0]) / 255;
    const g = parseFloat(values[1]) / 255;
    const b = parseFloat(values[2]) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }

        h = Math.round(h * 60);
        if (h < 0) {
            h += 360;
        }

        s = Math.round(s * 100);
        l = Math.round(l * 100);
    }

    return `HSL: hsl(${h}, ${s}%, ${l}%)`;
}

// Function to convert RGB to CMYK
function rgbToCmyk(rgb) {
    const values = rgb.match(/\d+/g);
    const r = parseFloat(values[0]) / 255;
    const g = parseFloat(values[1]) / 255;
    const b = parseFloat(values[2]) / 255;

    const k = 1 - Math.max(r, g, b);
    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k);

    if (k === 1) {
        return `CMYK: cmyk(0%, 0%, 0%, 100%)`;
    } else {
        return `CMYK: cmyk(${Math.round(c * 100)}%, ${Math.round(m * 100)}%, ${Math.round(y * 100)}%, ${Math.round(k * 100)}%)`;
    }
}

// Function to convert HSL to RGB
function hslToRgb(hsl) {
    const values = hsl.match(/\d+/g);
    const h = parseInt(values[0]) / 60;
    const s = parseInt(values[1]) / 100;
    const l = parseInt(values[2]) / 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h % 2) - 1));
    const m = l - c / 2;

    let r, g, b;

    if (h >= 0 && h < 1) {
        r = c;
        g = x;
        b = 0;
    } else if (h >= 1 && h < 2) {
        r = x;
        g = c;
        b = 0;
    } else if (h >= 2 && h < 3) {
        r = 0;
        g = c;
        b = x;
    } else if (h >= 3 && h < 4) {
        r = 0;
        g = x;
        b = c;
    } else if (h >= 4 && h < 5) {
        r = x;
        g = 0;
        b = c;
    } else {
        r = c;
        g = 0;
        b = x;
    }

    r = (r + m) * 255;
    g = (g + m) * 255;
    b = (b + m) * 255;

    return `RGB: ${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}`;
}

function cmykToRgb(cmyk) {
    const values = cmyk.match(/\d+/g);
    const c = parseFloat(values[0]) / 100;
    const m = parseFloat(values[1]) / 100;
    const y = parseFloat(values[2]) / 100;
    const k = parseFloat(values[3]) / 100;

    const r = Math.round(255 * (1 - c) * (1 - k));
    const g = Math.round(255 * (1 - m) * (1 - k));
    const b = Math.round(255 * (1 - y) * (1 - k));

    return `RGB: ${r}, ${g}, ${b}`;
}

const convertButton = document.getElementById('convertButton');
const colorInput = document.getElementById('colorInput');
const colorFormat = document.getElementById('colorFormat');
const result = document.getElementById('result');
const colorDisplay = document.getElementById('colorDisplay');

colorFormat.addEventListener('change', () => {
    const selectedOption = colorFormat.options[colorFormat.selectedIndex];
    const format = selectedOption.getAttribute('data-format');
    colorInput.placeholder = `Enter color code (${format})`;
    colorInput.value = ''; // Clear the input field
    result.textContent = ''; // Clear the result display
    colorDisplay.style.backgroundColor = "";
});

convertButton.addEventListener('click', () => {
    const inputColor = colorInput.value;
    const selectedFormat = colorFormat.value;

    if (selectedFormat === "hex") {
        if (/^#[0-9A-Fa-f]{6}$/.test(inputColor)) {
            const hexColor = inputColor;
            const rgbColor = hexToRgb(inputColor);
            const hslColor = rgbToHsl(rgbColor);
            const cmykColor = rgbToCmyk(rgbColor);

            result.innerHTML = `HEX: ${hexColor}<br>${rgbColor}<br>${hslColor}<br>${cmykColor}`;
            colorDisplay.style.backgroundColor = hexColor;
        } else {
            result.textContent = 'Invalid input. Please enter a valid HEX color.';
        }
    } else if (selectedFormat === "rgb") {
        if (/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(inputColor)) {
            const rgbColor = inputColor;
            const hexColor = rgbToHex(inputColor);
            const hslColor = rgbToHsl(inputColor);
            const cmykColor = rgbToCmyk(inputColor);

            result.innerHTML = `RGB: ${rgbColor}<br>HEX: ${hexColor}<br>${hslColor}<br>${cmykColor}`;
            colorDisplay.style.backgroundColor = rgbColor;
        } else {
            result.textContent = 'Invalid input. Please enter a valid RGB color.';
        }
    } else if (selectedFormat === "hsl") {
        if (/^hsl\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*\)$/.test(inputColor)) {
            const hslColor = inputColor;
            const rgbColor = hslToRgb(inputColor);
            const hexColor = rgbToHex(rgbColor);
            const cmykColor = rgbToCmyk(rgbColor);

            result.innerHTML = `HSL: ${hslColor}<br>${rgbColor}<br>HEX: ${hexColor}<br>${cmykColor}`;
            colorDisplay.style.backgroundColor = hslColor;
        } else {
            result.textContent = 'Invalid input. Please enter a valid HSL color.';
        }
    } else if (selectedFormat === "cmyk") {
        if (/^cmyk\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*\)$/.test(inputColor)) {
            const cmykColor = inputColor;
            const rgbColor = cmykToRgb(inputColor);
            const hexColor = rgbToHex(rgbColor);
            const hslColor = rgbToHsl(rgbColor);

            result.innerHTML = `CMYK: ${cmykColor}<br>${rgbColor}<br>HEX: ${hexColor}<br>${hslColor}`;
            colorDisplay.style.backgroundColor = `rgb(${rgbColor.split('RGB: ')[1]})`;
        } else {
            result.textContent = 'Invalid input. Please enter a valid CMYK color (e.g., cmyk(0%, 50%, 100%, 0%)).';
        }
    } else {
        result.textContent = 'Invalid input format. Please select a valid color format.';
    }
});
