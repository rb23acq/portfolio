window.onload = function() {
    if (window.location.pathname === '/' || window.location.pathname === 'index.html') {
        alert("Hi, Welcome to my website!");
    }
};

//selecting all of the images from the clickable class
const images = document.querySelectorAll('.clickable-image');

//loop
images.forEach((image) => {
    image.addEventListener('click', () => {
// Toggle the 'enlarged' class
        image.classList.toggle('enlarged');
    });
});