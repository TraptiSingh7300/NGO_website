// Grab the menu items and the toggle button using their unique HTML IDs
const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

// Listen for a user click on the yellow button
toggleButton.addEventListener('click', () => {
    // Dynamically toggle the '.active' styling class on and off
    navLinks.classList.toggle('active');
});