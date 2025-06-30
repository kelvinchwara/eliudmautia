const menu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menu.classList.toggle('active');
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = hamburgerMenu.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.classList.toggle('active');
            });
        });

        // Close mobile menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const bars = hamburgerMenu.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.classList.remove('active');
                });
            });
        });
    }

    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add fade-in animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .project-card, .skill-card, .highlight-card, .quality-card, .education-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add CSS for hamburger menu animation
const style = document.createElement('style');
style.textContent = `
    .hamburger-menu .bar.active:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .hamburger-menu .bar.active:nth-child(2) {
        opacity: 0;
    }
    .hamburger-menu .bar.active:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    .header {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const whatsappMessage = `Hello Mr. Eliud Mautia , my name is ${name}.%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
        const phone = '254720059892'; // Kenya code, no '+' needed in WhatsApp link
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, '_blank');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const letters = document.querySelectorAll('.logo .letter');
    const colors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE']; // Rainbow colors
    let colorIndex = 0;

    function changeLetterColors() {
        letters.forEach((letter, index) => {
            // Skip the space if you want, or give it a color too
            if (letter.textContent !== ' ') {
                 // Distribute colors across letters
                const currentColorIndex = (colorIndex + index) % colors.length;
                letter.style.color = colors[currentColorIndex];
            }
        });
        colorIndex = (colorIndex + 1) % colors.length; // Move to the next starting color
    }

    // Change colors every 500 milliseconds (0.5 seconds)
    setInterval(changeLetterColors, 500);

    // Optional: Reset colors on hover for a different effect
    letters.forEach(letter => {
        letter.addEventListener('mouseover', () => {
            letter.style.color = '#fff'; // Change to white on hover
        });
        letter.addEventListener('mouseout', () => {
            // Revert to the current cycled color
            const index = Array.from(letters).indexOf(letter);
            const currentColorIndex = (colorIndex + index) % colors.length;
            letter.style.color = colors[currentColorIndex];
        });
    });
});
