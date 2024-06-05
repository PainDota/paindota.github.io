document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const target = this.getAttribute('href');
            // Ensure it's an internal link leading to an ID
            if (target.startsWith('#')) {
                event.preventDefault();
                const targetSection = document.querySelector(target);

                // Scroll smoothly to the section
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Close navbar if it's expanded
                if (navbarToggler.getAttribute('aria-expanded') === 'true') {
                    navbarToggler.click(); // Simulate a click on the toggler only when it's expanded
                }
            }
        });
    });
});
