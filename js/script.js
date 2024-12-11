window.onload = function() {
    const currentPath = window.location.pathname.replace(/^\/+/, ''); // Normalize path (remove leading slashes if any)
    if (currentPath === '' || currentPath === 'index.html') {
        alert("Hello, Welcome to my website!");
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