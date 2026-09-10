/* Component Loader - Loads navbar and footer on every page */

// Load navbar
fetch('./components/navbar.html')
    .then(response => {
        if (!response.ok) throw new Error('Failed to load navbar');
        return response.text();
    })
    .then(data => {
        const placeholder = document.getElementById('navbar-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
            initializeNavbar();
        }
    })
    .catch(error => console.error('Error loading navbar:', error));

// Load footer
fetch('./components/footer.html')
    .then(response => {
        if (!response.ok) throw new Error('Failed to load footer');
        return response.text();
    })
    .then(data => {
        const placeholder = document.getElementById('footer-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
        }
    })
    .catch(error => console.error('Error loading footer:', error));

// Initialize navbar functionality after loading
function initializeNavbar() {
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage || (currentPage === 'index' && linkPage === 'home')) {
            link.classList.add('active');
        }
    });

    // Mobile navigation
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('navLinks');

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });

        // Close mobile nav on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinksContainer.classList.remove('active');
            });
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('portfolio-theme', next);
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}
