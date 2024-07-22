// script.js

document.addEventListener('DOMContentLoaded', function () {
    const currentHour = new Date().getHours();

    if (currentHour >= 16 || currentHour < 6) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
