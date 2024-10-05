
// Add any specific JavaScript animations or interactions needed
document.addEventListener('DOMContentLoaded', () => {
    // Example: Make nav links glitch when clicked
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            link.classList.add('glitch');
            setTimeout(() => {
                link.classList.remove('glitch');
            }, 1000);
        });
    });
});
