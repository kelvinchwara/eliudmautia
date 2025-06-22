document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // WhatsApp Form Submission
    const whatsappForm = document.getElementById('whatsappForm');
    const formMessage = document.getElementById('form-message');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value.trim();
            const message = document.getElementById('message').value.trim();
            const phoneNumber = '254722123456'; // Replace with Eliud's actual WhatsApp number

            if (name && message) {
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello Eliud, my name is ${name} and I have a message for you: ${message}`)}`;

                window.open(whatsappUrl, '_blank');

                formMessage.textContent = 'Opening WhatsApp to send your message...';
                formMessage.classList.remove('hidden', 'text-red-600');
                formMessage.classList.add('text-green-600');

                whatsappForm.reset(); // Clear the form
            } else {
                formMessage.textContent = 'Please fill in both your name and message.';
                formMessage.classList.remove('hidden', 'text-green-600');
                formMessage.classList.add('text-red-600');
            }
        });
    }
});
