document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 2. Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Gather form data to simulate the React state behavior
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Form Submitted:', data);
            
            // Show alert as in original React code
            alert('Thank you for contacting Jaifry. Our specialists will reach out to you shortly.');
            
            // Optional: Reset form
            contactForm.reset();
        });
    }

    // 3. Scroll Animation Logic (Replacement for Framer Motion)
    // Using Intersection Observer API for better performance
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements to animate
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});