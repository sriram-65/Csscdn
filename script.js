// script.js

document.addEventListener('DOMContentLoaded', function () {
    const currentHour = new Date().getHours();

    if (currentHour >= 16 || currentHour < 6) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    // Remove the 'spinner' class after 2 seconds using querySelector
    const spinnerElement = document.querySelector('.spinner');
    if (spinnerElement) {
        setTimeout(() => {
            spinnerElement.classList.remove('spinner');
        }, 2000);
    }
});

let popup = document.querySelector(".pop-up")
   window.addEventListener("load" , function(){
    setTimeout(function(){
      popup.classList.remove("pop-up")
    },3000)
   })
