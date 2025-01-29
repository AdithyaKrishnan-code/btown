// let currentIndex = 0; // Keep track of the current image
// const images = document.querySelectorAll('.slider-img'); // Get all images
// const totalImages = images.length; // Get the total number of images

// // Function to show the active image
// function showImage(index) {
//     // Hide all images
//     images.forEach(img => img.classList.remove('active'));

//     // Show the image at the current index
//     images[index].classList.add('active');
// }

// // Switch image every 5 seconds
// setInterval(() => {
//     currentIndex = (currentIndex + 1) % totalImages; // Move to the next image, loop back to the first
//     showImage(currentIndex);
// }, 5000);

// // Show the first image initially
// showImage(currentIndex);

// // Add click event to change the image on click
// document.querySelector('.slider-hero').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalImages; // Move to the next image on click
//     showImage(currentIndex);
// });
