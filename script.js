const timeElement = document.querySelector('#time');

function updateClock() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString();

    const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    timeElement.innerHTML = timeString;
}

// Update the clock every 100 milliseconds
setInterval(updateClock, 100);

// Initial update
updateClock();
