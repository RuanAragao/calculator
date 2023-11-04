document.getElementById("generate").addEventListener("click", function() {
    const minute = document.getElementById("minute").value;
    const hour = document.getElementById("hour").value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const dow = document.getElementById("dow").value;

    if (!minute || !hour || !day || !month || !dow) {
        // Show an error message
        alert("Please fill in all fields");
    } else {
        const cronExpression = `${minute} ${hour} ${day} ${month} ${dow}`;
        const description = getCronDescription(cronExpression);

        document.getElementById("result").value = cronExpression;
        document.getElementById("description").value = description;
    }
});

function getCronDescription(cronExpression) {
    const parts = cronExpression.split(" ");
    const minute = parts[0];
    const hour = parts[1];
    const day = parts[2];
    const month = parts[3];
    const dow = parts[4];

    let description = `This expression means: `;

    // Handle minute part
    if (minute === "*") {
        description += `every minute`;
    } else {
        const minuteParts = minute.split('/');
        if (minuteParts.length === 2) {
            description += `every ${minuteParts[1]} minute(s) past the hour`;
        } else {
            description += `At ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
        }
    }

    // Handle hour part
    if (hour !== "*") {
        if (description !== `This expression means: `) {
            description += `, `;
        }
        description += `at ${hour.padStart(2, '0')}:00`;
    }

    // Handle other parts
    if (day !== "*") {
        description += ` on the ${day} day(s) of the month`;
    }
    if (month !== "*") {
        description += ` in ${month} month(s)`;
    }
    if (dow !== "*") {
        description += ` on ${dow === "7" ? "Sunday" : `day ${dow}`} of the week`;
    }

    return description;
}
