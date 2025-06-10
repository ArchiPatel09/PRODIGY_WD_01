// Navigation scroll effect
const nav = document.getElementById('mainNav');
const navHeight = nav.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > navHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Button click effect
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    alert('Thanks for exploring! The navigation menu changes color when you scroll - try it!');
});

// Add active class to current menu item
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});