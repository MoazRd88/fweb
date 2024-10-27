// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.querySelector('i').classList.toggle('fa-bars');
    mobileMenu.querySelector('i').classList.toggle('fa-times');
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Testimonial Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const sliderDots = document.querySelector('.slider-dots');
let currentSlide = 0;

// Create dots
testimonialSlides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    sliderDots.appendChild(dot);
});

function goToSlide(index) {
    testimonialSlides[currentSlide].classList.remove('active');
    document.querySelectorAll('.slider-dot')[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    testimonialSlides[currentSlide].classList.add('active');
    document.querySelectorAll('.slider-dot')[currentSlide].classList.add('active');
}

// Auto slide
setInterval(() => {
    goToSlide((currentSlide + 1) % testimonialSlides.length);
}, 5000);

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to your server
    // For now, we'll just log it and show a success message
    console.log({ name, email, phone, message });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenu.querySelector('i').classList.remove('fa-times');
            mobileMenu.querySelector('i').classList.add('fa-bars');
            
            // Scroll to target
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Optional: Add hover effect for service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

