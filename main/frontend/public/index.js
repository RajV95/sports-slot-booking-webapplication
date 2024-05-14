let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navList');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin: 'top'});
sr.reveal('.hero-img', {delay: 450, origin: 'top'});
sr.reveal('.icons', {delay: 500, origin: 'bottom'});
sr.reveal('.scroll-down', {delay: 500, origin: 'bottom'});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-container");
    let currentIndex = 0;

    function showNextImage() {
        // Hide current image
        images[currentIndex].classList.remove("active");

        // Move to the next image
        currentIndex = (currentIndex + 1) % images.length;

        // Show next image
        images[currentIndex].classList.add("active");
    }

    // Show the first image initially
    images[currentIndex].classList.add("active");

    // Start the animation sequence
    setInterval(showNextImage, 4000); // Adjust the interval as needed (5 seconds in this example)
});



