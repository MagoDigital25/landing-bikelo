// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const demoForm = document.querySelector('form');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            // Here you would typically send this data to your backend
            console.log('Form submitted:', { name, email, phone });
            
            // Show success message
            alert(`¡Gracias ${name}! Hemos recibido tu solicitud de demo. Nos pondremos en contacto contigo pronto.`);
            
            // Reset form
            demoForm.reset();
        });
    }
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                el.classList.add('animate-fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});