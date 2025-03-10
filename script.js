// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ===== NAVIGATION FUNCTIONALITY =====
    const header = document.getElementById('header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===== TYPING EFFECT FOR HERO SECTION =====
    const typingText = document.querySelector('.typing-text');
    const words = ['Elevate.', 'Innovate.', 'Transform.', 'Scale.'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Deleting text
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // If word is complete, wait then delete
        if (!isDeleting && charIndex === currentWord.length) {
            isWaiting = true;
            setTimeout(() => {
                isDeleting = true;
                isWaiting = false;
            }, 1500);
        }

        // If deletion is complete, move to next word
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        // Set typing speed based on current action
        let typingSpeed = isDeleting ? 80 : 150;
        
        // Pause longer at end of word
        if (isWaiting) {
            return;
        }
        
        setTimeout(typeEffect, typingSpeed);
    }

    // Start the typing effect
    setTimeout(typeEffect, 1000);

    // ===== SERVICES GRID DYNAMIC CONTENT =====
    // ===== PORTFOLIO SECTION =====
    // ===== CONTACT FORM VALIDATION =====
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Simple validation
            if (nameInput.value.trim() === '') {
                isValid = false;
                nameInput.style.borderColor = 'red';
            } else {
                nameInput.style.borderColor = '#e2e8f0';
            }
            
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                isValid = false;
                emailInput.style.borderColor = 'red';
            } else {
                emailInput.style.borderColor = '#e2e8f0';
            }
            
            if (messageInput.value.trim() === '') {
                isValid = false;
                messageInput.style.borderColor = 'red';
            } else {
                messageInput.style.borderColor = '#e2e8f0';
            }
            
            if (isValid) {
                // Simulate form submission (replace with actual form submission)
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
        
        // Email validation helper function
        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }
    }
}
)
