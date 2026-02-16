// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.service, .portfolio-item, .feature, .testimonial').forEach(el => {
    el.dataset.animation = 'fadeInUp 0.8s ease-out forwards';
    el.style.opacity = '0';
    observer.observe(el);
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission with animation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = '✓ Sent Successfully!';
    btn.style.background = '#1a472a';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        this.reset();
    }, 2000);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${window.scrollY * 0.5}px`;
    }
});

// Scroll progress indicator
const createProgressBar = () => {
    const div = document.createElement('div');
    div.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #d4a574, #1a472a);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(div);
    
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        div.style.width = progress + '%';
    });
};
createProgressBar();

// Counter animation for stats (if added later)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Add staggered animation delay to elements
document.querySelectorAll('.service').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.portfolio-item').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.feature').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.testimonial').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

// Ripple effect on buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255,255,255,0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        `;

        if (!this.style.position || this.style.position === 'static') {
            this.style.position = 'relative';
        }
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(1); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';
document.body.style.opacity = '1';

// Add AOS-like scroll reveal for additional sections
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('section');
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            section.style.opacity = '1';
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
