function calculateDistance() {
    const lat1 = parseFloat(document.getElementById('lat1').value);
    const lon1 = parseFloat(document.getElementById('lon1').value);
    const lat2 = parseFloat(document.getElementById('lat2').value);
    const lon2 = parseFloat(document.getElementById('lon2').value);

    if (isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) {
        document.getElementById('result').textContent = 'Please enter valid coordinates.';
        return;
    }

    const earthRadius = 6371; // Earth's radius in kilometers

    const lat1Rad = toRadians(lat1);
    const lat2Rad = toRadians(lat2);
    const latDiff = toRadians(lat2 - lat1);
    const lonDiff = toRadians(lon2 - lon1);

    const a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
              Math.cos(lat1Rad) * Math.cos(lat2Rad) *
              Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    document.getElementById('result').textContent = `Distance: ${distance.toFixed(2)} km`;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
