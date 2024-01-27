document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    let count = 0;

    function slide() {
        count++;
        if (count === slides.length) {
            count = 0;
        }

        const transformValue = `translateX(${-count * 100}%)`;
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = transformValue;

        // Wait for the transition to finish before removing the transition property
        setTimeout(() => {
            slider.style.transition = "none";
        }, 3000); // Adjust the interval for sliding (in milliseconds)
    }

    setInterval(slide, 3000); // Adjust the interval (in milliseconds) for sliding
});