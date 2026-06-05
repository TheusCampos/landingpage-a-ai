export function initNavigation() {
    const header = document.getElementById('main-header');
    const logo = document.getElementById('header-logo');
    const cta = document.getElementById('header-cta');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    const menu = document.getElementById('mobile-menu');

    if (!header || !mobileMenuBtn || !menu) return;

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white/80', 'backdrop-blur-md', 'border-gray-100', 'shadow-sm');
            header.classList.remove('border-transparent');
            if (logo) logo.classList.remove('brightness-0', 'invert');
            if (cta) {
                cta.classList.add('bg-acai-700', 'text-white');
                cta.classList.remove('bg-white', 'text-acai-900');
            }
            mobileMenuBtn.classList.add('text-acai-900');
            mobileMenuBtn.classList.remove('text-white');
            navLinks.forEach(link => {
                link.classList.add('text-slate-600', 'hover:text-acai-700');
                link.classList.remove('text-white/90', 'hover:text-white');
            });
        } else {
            header.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-gray-100', 'shadow-sm');
            header.classList.add('border-transparent');
            if (logo) logo.classList.add('brightness-0', 'invert');
            if (cta) {
                cta.classList.remove('bg-acai-700', 'text-white');
                cta.classList.add('bg-white', 'text-acai-900');
            }
            mobileMenuBtn.classList.remove('text-acai-900');
            mobileMenuBtn.classList.add('text-white');
            navLinks.forEach(link => {
                link.classList.remove('text-slate-600', 'hover:text-acai-700');
                link.classList.add('text-white/90', 'hover:text-white');
            });
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
        
        if (!isExpanded) {
            menu.classList.remove('menu-hidden');
            menu.classList.add('menu-visible');
        } else {
            menu.classList.remove('menu-visible');
            menu.classList.add('menu-hidden');
        }
    });

    // Close mobile menu when clicking a link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            menu.classList.remove('menu-visible');
            menu.classList.add('menu-hidden');
        });
    });
}
