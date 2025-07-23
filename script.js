document.addEventListener('DOMContentLoaded', () => {
    // ========== THREE.JS HERO BACKGROUND ==========
    const canvas = document.querySelector('.hero-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const particleCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 100;
        positions[i + 1] = (Math.random() - 0.5) * 100;
        positions[i + 2] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.6
    });

    const particles = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particles);
    camera.position.z = 50;

    const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.001;
        particles.rotation.x += 0.0005;
        renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // ========== DARK MODE LOGIC ==========
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
    const body = document.body;

    const updateParticleColors = () => {
        const isDark = body.classList.contains('dark');
        for (let i = 0; i < particleCount * 3; i += 3) {
            colors[i] = isDark ? 0.93 : 1.0; // #ed8936 for dark, #ff7b00 for light
            colors[i + 1] = isDark ? 0.54 : 0.48;
            colors[i + 2] = isDark ? 0.21 : 0.0;
        }
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        particlesGeometry.attributes.color.needsUpdate = true;
    };

    const updateToggleIcon = () => {
        const isDark = body.classList.contains('dark');
        const newIcon = isDark ? 'fa-sun' : 'fa-moon';
        const oldIcon = isDark ? 'fa-moon' : 'fa-sun';
        [darkModeToggle, mobileDarkModeToggle].forEach(toggle => {
            if (toggle) {
                const icon = toggle.querySelector('i');
                if (icon) {
                    icon.classList.remove(oldIcon);
                    icon.classList.add(newIcon);
                }
            }
        });
    };

    const applyTheme = (theme) => {
        body.classList.remove('light', 'dark');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
        updateParticleColors();
        updateToggleIcon();
    };

    // Load Theme on Start
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Toggle Handler
    const toggleTheme = () => {
        const current = body.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(current);
    };

    [darkModeToggle, mobileDarkModeToggle].forEach(btn => {
        if (btn) btn.addEventListener('click', toggleTheme);
    });

    // ========== MOBILE MENU ==========
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.querySelector('i').classList.replace('fa-times', 'fa-bars');
                }
            }
        });
    });

    // ========== GSAP SCROLL ANIMATIONS ==========
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.animate-on-scroll').forEach((el, i) => {
        gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: el.dataset.delay || i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    gsap.utils.toArray('.skill-progress').forEach(bar => {
        gsap.to(bar, {
            width: bar.dataset.width,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // ========== COUNTER ANIMATION ==========
    const animateCounter = (el, end, suffix = '') => {
        gsap.to(el, {
            innerText: end,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power1.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            onUpdate: function () {
                el.innerText = Math.ceil(this.targets()[0].innerText) + suffix;
            }
        });
    };

    animateCounter(document.getElementById('project-counter'), 10, '+');
    animateCounter(document.getElementById('client-counter'), 1);
    animateCounter(document.getElementById('award-counter'), 3);
    animateCounter(document.getElementById('coffee-counter'), 100);

    // ========== PORTFOLIO FILTER ==========
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(btn => {
                btn.classList.remove('bg-orange-500', 'text-white');
                btn.classList.add('bg-gray-200', 'dark:bg-gray-600', 'hover:bg-orange-500', 'dark:hover:bg-orange-400', 'hover:text-white');
            });

            button.classList.remove('bg-gray-200', 'dark:bg-gray-600', 'hover:bg-orange-500', 'dark:hover:bg-orange-400', 'hover:text-white');
            button.classList.add('bg-orange-500', 'text-white');

            projectCards.forEach(card => {
                const isVisible = filter === 'all' || card.dataset.category === filter;
                gsap.to(card, {
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.8,
                    duration: 0.5,
                    ease: 'power2.out',
                    onComplete: () => {
                        card.style.display = isVisible ? 'block' : 'none';
                    }
                });
            });
        });
    });

    // ========== MAGNETIC HOVER ==========
    gsap.utils.toArray('.magnetic-effect').forEach(el => {
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const moveX = (e.clientX - centerX) * 0.2;
            const moveY = (e.clientY - centerY) * 0.2;
            gsap.to(el, {
                '--tx': `${moveX}px`,
                '--ty': `${moveY}px`,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                '--tx': '0px',
                '--ty': '0px',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // ========== PROJECT CARD 3D HOVER ==========
    gsap.utils.toArray('.project-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const rotateX = (e.clientY - centerY) * -0.05;
            const rotateY = (e.clientX - centerX) * 0.05;
            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});