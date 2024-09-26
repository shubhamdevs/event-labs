function showLocalTime() {
    const timeElement = document.getElementById('time');

    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const timezoneOffset = now.getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(timezoneOffset) / 60).toString().padStart(2, '0');
    const offsetMinutes = (Math.abs(timezoneOffset) % 60).toString().padStart(2, '0');


    const offsetSign = timezoneOffset < 0 ? '+' : '-';

    const timeString = `${hours}:${minutes} UTC${offsetSign}${offsetHours}:${offsetMinutes}`;

    timeElement.textContent = timeString;
}

showLocalTime();

setInterval(showLocalTime, 60000);  // Update every minute