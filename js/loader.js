document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.classList.add('loaded');
        });
    }, 250);
});
