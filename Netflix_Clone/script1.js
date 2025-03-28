document.addEventListener('DOMContentLoaded', () => {
    // Navbar scrolling effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'black';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });

    // Movie hover effects
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.1)';
            card.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.zIndex = '1';
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search input');
    const searchIcon = document.querySelector('.search i');

    searchIcon.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
        }
    });

    // Play button interaction
    const playButton = document.querySelector('.play-btn');
    
    playButton.addEventListener('click', () => {
        alert('Playing selected content');
    });

    // More Info button
    const infoButton = document.querySelector('.info-btn');
    
    infoButton.addEventListener('click', () => {
        alert('Showing more information about the content');
    });
});