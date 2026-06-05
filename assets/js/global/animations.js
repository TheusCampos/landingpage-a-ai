export function initAnimations() {
    // Add custom animation classes to specific elements if needed
    const heroImage = document.querySelector('.lg\\:col-span-6 .z-10 img');
    if (heroImage) {
        heroImage.style.animation = 'float 6s ease-in-out infinite';
    }

    // Intersection Observer for scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');
    
    // Only observe if browser supports IntersectionObserver and user prefers motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
        const revealOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers or reduced motion preference
        revealElements.forEach(el => el.classList.add('active'));
    }
}
