// Smooth scrolling for navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Surprise Button Click Event
document.querySelector('.surprise-btn').addEventListener('click', function() {
    alert("Abhi, you are my most special person! Here's to an amazing year ahead! ❤️");
});
