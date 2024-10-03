document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', function() {
        const projectsContainer = this.previousElementSibling;
        projectsContainer.classList.toggle('expanded');

        if (projectsContainer.classList.contains('expanded')) {
            this.textContent = 'Show Less';
        } else {
            this.textContent = 'Show More';
        }
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = this.dataset.url;
    });
});
