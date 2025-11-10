/*
====================================
PROFESSIONAL PORTFOLIO WEBSITE
Interactive Features & Animations
====================================
*/

// ========== UTILITY FUNCTIONS ==========

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Check if element is partially in viewport
 */
function isPartiallyInViewport(element, offset = 100) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top <= windowHeight - offset &&
        rect.bottom >= offset
    );
}

// ========== NAVIGATION ==========

class Navigation {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');

        this.init();
    }

    init() {
        // Scroll effect on navigation
        window.addEventListener('scroll', debounce(() => {
            if (window.scrollY > 50) {
                this.nav?.classList.add('scrolled');
            } else {
                this.nav?.classList.remove('scrolled');
            }
        }, 10));

        // Mobile menu toggle
        this.navToggle?.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Close menu when clicking on link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav') && this.navMenu?.classList.contains('active')) {
                this.closeMenu();
            }
        });

        // Set active link based on current page
        this.setActiveLink();
    }

    toggleMenu() {
        this.navToggle?.classList.toggle('active');
        this.navMenu?.classList.toggle('active');
        document.body.style.overflow = this.navMenu?.classList.contains('active') ? 'hidden' : '';
    }

    closeMenu() {
        this.navToggle?.classList.remove('active');
        this.navMenu?.classList.remove('active');
        document.body.style.overflow = '';
    }

    setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            }
        });
    }
}

// ========== SCROLL ANIMATIONS ==========

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.scroll-animate');
        this.init();
    }

    init() {
        // Animate elements on scroll
        this.animateOnScroll();
        window.addEventListener('scroll', debounce(() => {
            this.animateOnScroll();
        }, 50));
    }

    animateOnScroll() {
        this.elements.forEach((element, index) => {
            if (isPartiallyInViewport(element, 100)) {
                setTimeout(() => {
                    element.classList.add('active');
                }, index * 100); // Stagger animation
            }
        });
    }
}

// ========== PROJECT FILTERING ==========

class ProjectFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                this.filterProjects(filter);

                // Update active button
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    filterProjects(category) {
        this.projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
}

// ========== CONTACT FORM VALIDATION ==========

class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                this.submitForm();
            }
        });

        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });

            input.addEventListener('input', () => {
                if (input.parentElement.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
    }

    validateField(field) {
        const formGroup = field.parentElement;
        const errorElement = formGroup.querySelector('.form-error');
        let isValid = true;
        let errorMessage = '';

        // Clear previous error
        formGroup.classList.remove('error');

        // Check if field is empty
        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Email validation
        if (field.type === 'email' && field.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Name validation (at least 2 characters)
        if (field.name === 'name' && field.value.trim() && field.value.trim().length < 2) {
            isValid = false;
            errorMessage = 'Name must be at least 2 characters';
        }

        // Message validation (at least 10 characters)
        if (field.name === 'message' && field.value.trim() && field.value.trim().length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters';
        }

        if (!isValid) {
            formGroup.classList.add('error');
            if (errorElement) {
                errorElement.textContent = errorMessage;
            }
        }

        return isValid;
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    submitForm() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitButton = this.form.querySelector('.btn');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            console.log('Form data:', data);

            // Show success message
            this.showMessage('success', 'Thank you! Your message has been sent successfully.');

            // Reset form
            this.form.reset();

            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);

        // For actual implementation, use fetch API:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            this.showMessage('success', 'Thank you! Your message has been sent successfully.');
            this.form.reset();
        })
        .catch(error => {
            this.showMessage('error', 'Sorry, something went wrong. Please try again.');
        })
        .finally(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
        */
    }

    showMessage(type, message) {
        const successElement = document.querySelector('.form-success');
        const errorElement = document.querySelector('.form-error-message');

        if (type === 'success' && successElement) {
            successElement.textContent = message;
            successElement.classList.add('show');
            setTimeout(() => {
                successElement.classList.remove('show');
            }, 5000);
        } else if (type === 'error' && errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
            setTimeout(() => {
                errorElement.classList.remove('show');
            }, 5000);
        }
    }
}

// ========== SMOOTH SCROLL ==========

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80; // Account for fixed nav
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            });
        }
    }
}

// ========== RIPPLE EFFECT FOR BUTTONS ==========

class RippleEffect {
    constructor() {
        this.init();
    }

    init() {
        const buttons = document.querySelectorAll('.btn');

        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.width = '0';
                ripple.style.height = '0';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.5)';
                ripple.style.pointerEvents = 'none';
                ripple.style.transition = 'width 0.6s, height 0.6s, opacity 0.6s';
                ripple.style.opacity = '1';

                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.style.width = '300px';
                    ripple.style.height = '300px';
                    ripple.style.opacity = '0';
                }, 10);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
}

// ========== PROJECT CARD HOVER EFFECTS ==========

class ProjectCardEffects {
    constructor() {
        this.init();
    }

    init() {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            });

            // 3D tilt effect on mouse move
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
}

// ========== SKILLS ANIMATION ==========

class SkillsAnimation {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-progress');
        this.animated = false;
        this.init();
    }

    init() {
        if (this.skillBars.length === 0) return;

        window.addEventListener('scroll', debounce(() => {
            if (!this.animated) {
                const firstSkill = document.querySelector('.skills-grid');
                if (firstSkill && isPartiallyInViewport(firstSkill, 200)) {
                    this.animateSkills();
                    this.animated = true;
                }
            }
        }, 100));
    }

    animateSkills() {
        this.skillBars.forEach((bar, index) => {
            const width = bar.getAttribute('data-width') || '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, index * 100);
        });
    }
}

// ========== CURSOR TRAIL EFFECT (OPTIONAL) ==========

class CursorTrail {
    constructor() {
        this.coords = { x: 0, y: 0 };
        this.circles = [];
        this.colors = ['#00F0FF', '#8B5CF6'];
        this.init();
    }

    init() {
        // Only on desktop
        if (window.innerWidth < 768) return;

        // Create circles
        for (let i = 0; i < 12; i++) {
            const circle = document.createElement('div');
            circle.style.position = 'fixed';
            circle.style.width = '20px';
            circle.style.height = '20px';
            circle.style.borderRadius = '50%';
            circle.style.border = `2px solid ${this.colors[i % 2]}`;
            circle.style.pointerEvents = 'none';
            circle.style.zIndex = '9999';
            circle.style.transition = 'opacity 0.3s';
            circle.style.opacity = '0';
            document.body.appendChild(circle);
            this.circles.push(circle);
        }

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.coords.x = e.clientX;
            this.coords.y = e.clientY;
        });

        // Animate circles
        this.animateCircles();
    }

    animateCircles() {
        let x = this.coords.x;
        let y = this.coords.y;

        this.circles.forEach((circle, index) => {
            circle.style.left = x - 10 + 'px';
            circle.style.top = y - 10 + 'px';
            circle.style.transform = `scale(${(this.circles.length - index) / this.circles.length})`;
            circle.style.opacity = '0.3';

            const nextCircle = this.circles[index + 1] || this.circles[0];
            x += (parseFloat(nextCircle.style.left) - x) * 0.3;
            y += (parseFloat(nextCircle.style.top) - y) * 0.3;
        });

        requestAnimationFrame(() => this.animateCircles());
    }
}

// ========== LAZY LOADING IMAGES ==========

class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('fade-in');
                        observer.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            this.images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }
}

// ========== TYPING EFFECT (FOR HERO) ==========

class TypingEffect {
    constructor(element, words, typingSpeed = 100, deletingSpeed = 50, pause = 2000) {
        this.element = element;
        this.words = words;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.pause = pause;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;

        if (this.element) {
            this.type();
        }
    }

    type() {
        const currentWord = this.words[this.wordIndex];

        if (this.isDeleting) {
            this.element.textContent = currentWord.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentWord.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.typingSpeed;

        if (this.isDeleting) {
            typeSpeed = this.deletingSpeed;
        }

        if (!this.isDeleting && this.charIndex === currentWord.length) {
            typeSpeed = this.pause;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ========== PARALLAX EFFECT ==========

class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.init();
    }

    init() {
        if (this.elements.length === 0) return;

        window.addEventListener('scroll', debounce(() => {
            this.elements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                const yPos = -(window.pageYOffset * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }, 10));
    }
}

// ========== INITIALIZE ALL MODULES ==========

document.addEventListener('DOMContentLoaded', () => {
    // Core features
    new Navigation();
    new ScrollAnimations();
    new SmoothScroll();
    new RippleEffect();
    new LazyLoader();
    new ParallaxEffect();

    // Page-specific features
    if (document.querySelector('.project-card')) {
        new ProjectCardEffects();
    }

    if (document.querySelector('.filter-btn')) {
        new ProjectFilter();
    }

    if (document.querySelector('.contact-form')) {
        new ContactForm();
    }

    if (document.querySelector('.skills-grid')) {
        new SkillsAnimation();
    }

    // Optional: Typing effect for hero
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const words = typingElement.dataset.words ? typingElement.dataset.words.split(',') : ['Developer', 'Designer', 'Creator'];
        new TypingEffect(typingElement, words);
    }

    // Optional: Cursor trail (uncomment to enable)
    // new CursorTrail();
});

// ========== PAGE TRANSITIONS ==========

// Fade in page on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========== THEME PERSISTENCE (IF IMPLEMENTING LIGHT/DARK TOGGLE) ==========

class ThemeToggle {
    constructor() {
        this.themeToggle = document.querySelector('.theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        if (!this.themeToggle) return;

        document.documentElement.setAttribute('data-theme', this.currentTheme);

        this.themeToggle.addEventListener('click', () => {
            const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.currentTheme = newTheme;
        });
    }
}

// ========== PERFORMANCE OPTIMIZATION ==========

// Preload critical images
const preloadImages = (urls) => {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

// ========== SCROLL PROGRESS INDICATOR ==========

class ScrollProgress {
    constructor() {
        this.progressBar = this.createProgressBar();
        this.init();
    }

    createProgressBar() {
        const bar = document.createElement('div');
        bar.className = 'scroll-progress';
        document.body.prepend(bar);
        return bar;
    }

    init() {
        window.addEventListener('scroll', debounce(() => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            this.progressBar.style.width = `${scrolled}%`;
        }, 10));
    }
}

// ========== ENHANCED LAZY LOADING ==========

class EnhancedLazyLoad {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;

                        // Add skeleton class while loading
                        img.classList.add('image-skeleton');

                        // Load image
                        img.addEventListener('load', () => {
                            img.classList.remove('image-skeleton');
                            img.classList.add('fade-in');
                        });

                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });

            this.images.forEach(img => imageObserver.observe(img));
        }
    }
}

// ========== TOOLTIPS ==========

class TooltipManager {
    constructor() {
        this.init();
    }

    init() {
        // Add tooltip class to skill icons
        const skillIcons = document.querySelectorAll('.skill-icon');
        skillIcons.forEach((icon, index) => {
            const skillName = icon.closest('.skill-card')?.querySelector('.skill-name')?.textContent;
            if (skillName) {
                icon.classList.add('tooltip');
                icon.setAttribute('data-tooltip', skillName);
            }
        });

        // Add tooltip to social links
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            const label = link.getAttribute('aria-label');
            if (label) {
                link.classList.add('tooltip');
                link.setAttribute('data-tooltip', label);
            }
        });
    }
}

// ========== ENHANCED FORM SUBMISSION ==========

class EnhancedContactForm extends ContactForm {
    submitForm() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        const submitButton = this.form.querySelector('.btn');
        const originalText = submitButton.innerHTML;

        // Show loading spinner
        submitButton.innerHTML = '<span class="loading-spinner"></span> Sending...';
        submitButton.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            console.log('Form data:', data);

            // Show success with checkmark animation
            this.showSuccessMessage();

            // Reset form
            this.form.reset();

            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 1500);
    }

    showSuccessMessage() {
        const successElement = document.querySelector('.form-success');
        if (successElement) {
            // Add checkmark SVG
            const checkmark = `
                <svg width="20" height="20" viewBox="0 0 20 20" style="display: inline-block; margin-right: 8px; vertical-align: middle;">
                    <circle cx="10" cy="10" r="9" fill="none" stroke="#22C55E" stroke-width="2"/>
                    <path class="success-checkmark" d="M6 10 L9 13 L14 7" fill="none" stroke="#22C55E" stroke-width="2" stroke-linecap="round"/>
                </svg>
            `;
            successElement.innerHTML = checkmark + 'Thank you! Your message has been sent successfully.';
            successElement.classList.add('show');

            setTimeout(() => {
                successElement.classList.remove('show');
            }, 5000);
        }
    }
}

// ========== KEYBOARD NAVIGATION ENHANCEMENT ==========

class KeyboardNavigation {
    constructor() {
        this.init();
    }

    init() {
        // Add keyboard support for filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach((button, index) => {
            button.setAttribute('tabindex', '0');

            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }

                // Arrow key navigation
                if (e.key === 'ArrowRight' && filterButtons[index + 1]) {
                    filterButtons[index + 1].focus();
                }
                if (e.key === 'ArrowLeft' && filterButtons[index - 1]) {
                    filterButtons[index - 1].focus();
                }
            });
        });

        // Add keyboard support for project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            const link = card.querySelector('a');
            if (link) {
                card.setAttribute('tabindex', '0');
                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        link.click();
                    }
                });
            }
        });

        // Escape key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu?.classList.contains('active')) {
                    const navToggle = document.querySelector('.nav-toggle');
                    navToggle?.click();
                }
            }
        });
    }
}

// ========== INTERSECTION OBSERVER FOR STAGGERED ANIMATIONS ==========

class StaggeredAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe all project cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
    }
}

// ========== PARALLAX EFFECT ==========

class EnhancedParallax {
    constructor() {
        this.heroElements = document.querySelectorAll('.floating-element');
        this.init();
    }

    init() {
        if (this.heroElements.length === 0) return;

        window.addEventListener('scroll', debounce(() => {
            const scrolled = window.pageYOffset;

            this.heroElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.2);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.05}deg)`;
            });
        }, 10));

        // Mouse move parallax for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mousemove', (e) => {
                const rect = hero.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                this.heroElements.forEach((element, index) => {
                    const speed = 20 + (index * 10);
                    element.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
                });
            });
        }
    }
}

// ========== PERFORMANCE MONITORING ==========

class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        if ('PerformanceObserver' in window) {
            // Monitor long tasks
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.duration > 50) {
                        console.warn('Long task detected:', entry);
                    }
                }
            });

            try {
                observer.observe({ entryTypes: ['longtask'] });
            } catch (e) {
                // Long task API not supported
            }
        }

        // Log page load performance
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
                    console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.fetchStart, 'ms');
                }
            }, 0);
        });
    }
}

// ========== ACCESSIBILITY ANNOUNCER ==========

class AccessibilityAnnouncer {
    constructor() {
        this.announcer = this.createAnnouncer();
    }

    createAnnouncer() {
        const announcer = document.createElement('div');
        announcer.setAttribute('role', 'status');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.style.position = 'absolute';
        announcer.style.left = '-10000px';
        announcer.style.width = '1px';
        announcer.style.height = '1px';
        announcer.style.overflow = 'hidden';
        document.body.appendChild(announcer);
        return announcer;
    }

    announce(message) {
        this.announcer.textContent = '';
        setTimeout(() => {
            this.announcer.textContent = message;
        }, 100);
    }
}

// Create global announcer instance
const a11yAnnouncer = new AccessibilityAnnouncer();

// ========== ENHANCED PROJECT FILTER WITH ANNOUNCEMENTS ==========

class EnhancedProjectFilter extends ProjectFilter {
    filterProjects(category) {
        super.filterProjects(category);

        // Count visible projects
        const visibleProjects = Array.from(this.projectCards).filter(
            card => card.style.display !== 'none'
        ).length;

        // Announce to screen readers
        const categoryText = category === 'all' ? 'all categories' : category;
        a11yAnnouncer.announce(`Showing ${visibleProjects} projects in ${categoryText}`);
    }
}

// ========== INITIALIZE ALL ENHANCED MODULES ==========

document.addEventListener('DOMContentLoaded', () => {
    // Core features (already initialized)
    new Navigation();
    new ScrollAnimations();
    new SmoothScroll();
    new RippleEffect();
    new LazyLoader();
    new ParallaxEffect();

    // Enhanced features
    new ScrollProgress();
    new EnhancedLazyLoad();
    new TooltipManager();
    new KeyboardNavigation();
    new StaggeredAnimations();
    new EnhancedParallax();
    new PerformanceMonitor();

    // Page-specific enhanced features
    if (document.querySelector('.project-card')) {
        new ProjectCardEffects();
    }

    if (document.querySelector('.filter-btn')) {
        new EnhancedProjectFilter();
    }

    if (document.querySelector('.contact-form')) {
        new EnhancedContactForm();
    }

    if (document.querySelector('.skills-grid')) {
        new SkillsAnimation();
    }

    // Optional: Typing effect for hero
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const words = typingElement.dataset.words ? typingElement.dataset.words.split(',') : ['Developer', 'Designer', 'Creator'];
        new TypingEffect(typingElement, words);
    }

    // Add page-enter animation
    document.body.classList.add('page-enter');

    console.log('🚀 Portfolio website loaded successfully!');
    console.log('✨ All animations and interactions are active');
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Navigation,
        ProjectFilter,
        ContactForm,
        ScrollAnimations,
        EnhancedProjectFilter,
        EnhancedContactForm,
        KeyboardNavigation,
        AccessibilityAnnouncer
    };
}
