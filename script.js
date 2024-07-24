// Add event listeners to project links
document.querySelectorAll('#projects a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const projectId = link.getAttribute('href').replace('#', '');
        // Display project details
        console.log(`Displaying project ${projectId} details`);
    });
});