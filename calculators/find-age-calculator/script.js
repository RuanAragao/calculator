function calculateAge() {

    // Get the user's entered birthdate from the input field
    const birthdate = new Date(document.getElementById('birthdate').value);

    // Get the current date
    const today = new Date();

    // Calculate the age by subtracting the birth year from the current year
    const age = today.getFullYear() - birthdate.getFullYear();

    // Check if the birthday has already occurred this year
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
}
