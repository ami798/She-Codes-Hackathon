ScrollReveal().reveal('.programs-hero-section h1', { delay: 500, distance: '50px', origin: 'top' });
ScrollReveal().reveal('.programs-hero-section p', { delay: 700, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.latest-programs-section h2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.program-card', {
interval: 200,
origin: 'bottom',
});
const progressBarFills = document.querySelectorAll('.progress-bar-fill');
progressBarFills.forEach(fill => {
const progress = fill.getAttribute('data-progress');
fill.style.width = `${progress}%`;
});
