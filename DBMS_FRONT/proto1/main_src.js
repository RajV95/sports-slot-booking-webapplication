<<<<<<< HEAD
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
=======
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
>>>>>>> 4ec76147f5b6b7c427930e69d20b60582e5430e6
