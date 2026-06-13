console.log("🎯 Portfolio Navigation System Initializing...");

// Initialize the single-page portfolio
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Page loaded! Initializing interactive features...");

    // Get all navigation items and sections
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.portfolio-section');

    // ========================================
    // NAVIGATION CLICK HANDLERS
    // ========================================
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                // Update active states
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                // Update section visibility
                sections.forEach(section => section.classList.remove('active'));
                targetSection.classList.add('active');
                
                // Smooth scroll to section
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                console.log(`✅ Navigated to: ${sectionId}`);
            }
        });
    });

    // ========================================
    // INTERSECTION OBSERVER FOR ACTIVE STATES
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Update nav items
                navItems.forEach(nav => {
                    if (nav.getAttribute('data-section') === sectionId) {
                        nav.classList.add('active');
                    } else {
                        nav.classList.remove('active');
                    }
                });
                
                // Update sections
                sections.forEach(section => {
                    if (section.id === sectionId) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
                
                console.log(`👁️ Viewing section: ${sectionId}`);
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => observer.observe(section));

    // ========================================
    // INITIALIZE HOME SECTION AS ACTIVE
    // ========================================
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
        console.log("✅ Home section set as active on load");
    }

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ========================================
    // KEYBOARD NAVIGATION (OPTIONAL)
    // ========================================
    const sectionIds = ['home', 'about', 'background', 'projects', 'contact'];
    
    document.addEventListener('keydown', function(e) {
        // Arrow Down - Next Section
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            const activeNav = document.querySelector('.nav-item.active');
            const currentSection = activeNav?.getAttribute('data-section');
            const currentIndex = sectionIds.indexOf(currentSection);
            
            if (currentIndex < sectionIds.length - 1) {
                const nextNav = document.querySelector(`[data-section="${sectionIds[currentIndex + 1]}"]`);
                if (nextNav) nextNav.click();
            }
        }
        
        // Arrow Up - Previous Section
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            const activeNav = document.querySelector('.nav-item.active');
            const currentSection = activeNav?.getAttribute('data-section');
            const currentIndex = sectionIds.indexOf(currentSection);
            
            if (currentIndex > 0) {
                const prevNav = document.querySelector(`[data-section="${sectionIds[currentIndex - 1]}"]`);
                if (prevNav) prevNav.click();
            }
        }
    });

    console.log("✅ All interactive features initialized successfully!");
});

// ========================================
// HANDLE SCROLL ANIMATIONS
// ========================================
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Optional: Add subtle effects during scroll
    // You can add parallax or other scroll-triggered animations here
}, { passive: true });