document.addEventListener('DOMContentLoaded', () => {
    // Example: Show a modal when clicking a button
    const modalButton = document.getElementById('modalButton');
    modalButton.addEventListener('click', () => {
        // Code to show modal
    });
});

// Add a class to animate buttons on click
document.querySelectorAll('nav ul li a').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 200);
    });
});

