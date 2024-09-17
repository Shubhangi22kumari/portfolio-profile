document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-in');
    
    // Add fade-in effect on scroll
    window.addEventListener('scroll', () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.style.opacity = 1;
                element.style.transform = 'translateX(0)';
            }
        });
    });
});
