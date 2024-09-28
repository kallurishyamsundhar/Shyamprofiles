// Ensure smooth scrolling for sections
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        const sectionId = link.getAttribute('href'); // Get the href attribute, e.g., '#about'
        const section = document.querySelector(sectionId); // Find the section with the matching id

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth' // Smooth scroll to the section
            });
        }
    });
});
