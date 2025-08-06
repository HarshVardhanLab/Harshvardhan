// Enhanced Project Toggle
const toggleBtn = document.getElementById("toggle-projects-btn");
const extraProjects = document.getElementById("extra-projects");
let isVisible = false;

toggleBtn.addEventListener("click", () => {
  isVisible = !isVisible;
  extraProjects.classList.toggle("hidden", !isVisible);
  extraProjects.classList.toggle("block", isVisible);
  toggleBtn.innerHTML = isVisible
    ? 'Show Less <i class="fas fa-arrow-up ml-2"></i>'
    : 'View All Projects <i class="fas fa-arrow-down ml-2"></i>';
});

// Lazy Loading for Images
const lazyImages = document.querySelectorAll(".lazy-image");
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.classList.add("loaded");
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach((img) => imageObserver.observe(img));

// Scroll Progress Indicator
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scroll-progress").style.width = scrollPercent + "%";
});

// Floating Action Button
const fab = document.getElementById("fab");
fab.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Enhanced Form Validation
const formInputs = document.querySelectorAll(".form-input");
formInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.checkValidity()) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  });
});

// Register Service Worker for PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/static/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => toast.classList.add("show"), 100);

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 3000);
}

// Global sendMessage function
window.sendMessage = async function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const password = "1234";
  const sendButton = document.getElementById("send-button");
  const buttonText = document.getElementById("button-text");
  const loadingSpinner = document.getElementById("loading-spinner");

  if (!name || !email || !message) {
    showToast("Please fill out all fields.", "error");
    return;
  }

  // Show loading state
  sendButton.disabled = true;
  buttonText.textContent = "Sending...";
  loadingSpinner.classList.remove("hidden");

  try {
    const response = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (response.ok) {
      showToast(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );
      // Clear form after successful submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    } else {
      showToast("Failed to send message: " + result.error, "error");
    }
  } catch (error) {
    showToast("Network error. Please try again later.", "error");
    console.error("Error:", error);
  } finally {
    // Reset button state
    sendButton.disabled = false;
    buttonText.textContent = "Send Message";
    loadingSpinner.classList.add("hidden");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // ========== TYPING ANIMATION ==========
  const typingText = document.getElementById("typing-text");
  const roleText = document.getElementById("role-text");

  const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = "";
    const timer = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  };

  // Start typing animation after a delay
  setTimeout(() => {
    typeWriter(typingText, "Harsh Vardhan", 150);
  }, 1000);

  // ========== THREE.JS HERO BACKGROUND ==========
  const canvas = document.querySelector(".hero-canvas");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
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

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const particleMaterial = new THREE.PointsMaterial({
    size: 0.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
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

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ========== DARK MODE LOGIC ==========
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const pythonDarkModeToggle = document.getElementById(
    "python-dark-mode-toggle"
  );
  const body = document.body;

  const updateParticleColors = () => {
    const isDark = body.classList.contains("dark");
    for (let i = 0; i < particleCount * 3; i += 3) {
      colors[i] = isDark ? 0.93 : 1.0; // #ed8936 for dark, #ff7b00 for light
      colors[i + 1] = isDark ? 0.54 : 0.48;
      colors[i + 2] = isDark ? 0.21 : 0.0;
    }
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );
    particlesGeometry.attributes.color.needsUpdate = true;
  };

  const updateToggleIcon = () => {
    const isDark = body.classList.contains("dark");
    const newIcon = isDark ? "fa-sun" : "fa-moon";
    const oldIcon = isDark ? "fa-moon" : "fa-sun";
    [darkModeToggle, pythonDarkModeToggle].forEach((toggle) => {
      if (toggle) {
        const icon = toggle.querySelector("i");
        if (icon) {
          icon.classList.remove(oldIcon);
          icon.classList.add(newIcon);
        }
      }
    });
  };

  const applyTheme = (theme) => {
    body.classList.remove("light", "dark");
    body.classList.add(theme);
    localStorage.setItem("theme", theme);
    updateParticleColors();
    updateToggleIcon();
  };

  // Load Theme on Start
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  // Toggle Handler
  const toggleTheme = () => {
    const current = body.classList.contains("dark") ? "light" : "dark";
    applyTheme(current);
  };

  [darkModeToggle, pythonDarkModeToggle].forEach((btn) => {
    if (btn) btn.addEventListener("click", toggleTheme);
  });

  // ========== python MENU ==========
  const pythonMenuButton = document.getElementById("python-menu-button");
  const pythonMenu = document.getElementById("python-menu");
  pythonMenuButton.addEventListener("click", () => {
    pythonMenu.classList.toggle("hidden");
    const icon = pythonMenuButton.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
        if (!pythonMenu.classList.contains("hidden")) {
          pythonMenu.classList.add("hidden");
          pythonMenuButton
            .querySelector("i")
            .classList.replace("fa-times", "fa-bars");
        }
      }
    });
  });

  // ========== GSAP SCROLL ANIMATIONS ==========
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".animate-on-scroll").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: el.dataset.delay || i * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  gsap.utils.toArray(".skill-progress").forEach((bar) => {
    gsap.to(bar, {
      width: bar.dataset.width,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // ========== COUNTER ANIMATION ==========
  const animateCounter = (el, end, suffix = "") => {
    gsap.to(el, {
      innerText: end,
      duration: 2,
      snap: { innerText: 1 },
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: function () {
        el.innerText = Math.ceil(this.targets()[0].innerText) + suffix;
      },
    });
  };

  animateCounter(document.getElementById("project-counter"), 10, "+");
  animateCounter(document.getElementById("client-counter"), 1);
  animateCounter(document.getElementById("award-counter"), 10);
  animateCounter(document.getElementById("coffee-counter"), 500);

  // ========== PORTFOLIO FILTER ==========
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll("[data-category]"); // Updated selector

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      // Update button styles
      filterButtons.forEach((btn) => {
        btn.classList.remove("bg-orange-500", "text-white");
        btn.classList.add(
          "bg-gray-200",
          "dark:bg-gray-600",
          "hover:bg-orange-500",
          "dark:hover:bg-orange-400",
          "hover:text-white"
        );
      });

      button.classList.remove(
        "bg-gray-200",
        "dark:bg-gray-600",
        "hover:bg-orange-500",
        "dark:hover:bg-orange-400",
        "hover:text-white"
      );
      button.classList.add("bg-orange-500", "text-white");

      // Filter projects
      let visibleCount = 0;
      projectCards.forEach((card) => {
        const isVisible = filter === "all" || card.dataset.category === filter;

        if (isVisible) {
          visibleCount++;
          card.style.display = "block";
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        } else {
          gsap.to(card, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              card.style.display = "none";
            },
          });
        }
      });
    });
  });

  // ========== MAGNETIC HOVER ==========
  gsap.utils.toArray(".magnetic-effect").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = (e.clientX - centerX) * 0.2;
      const moveY = (e.clientY - centerY) * 0.2;
      gsap.to(el, {
        "--tx": `${moveX}px`,
        "--ty": `${moveY}px`,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        "--tx": "0px",
        "--ty": "0px",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // ========== ENHANCED KEYBOARD NAVIGATION ==========
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      // Close mobile menu if open
      const pythonMenu = document.getElementById("python-menu");
      if (!pythonMenu.classList.contains("hidden")) {
        pythonMenu.classList.add("hidden");
        document
          .getElementById("python-menu-button")
          .querySelector("i")
          .classList.replace("fa-times", "fa-bars");
      }
    }
  });

  // ========== ENHANCED ACCESSIBILITY ==========
  // Add focus indicators for all interactive elements
  const interactiveElements = document.querySelectorAll(
    "a, button, input, textarea, [tabindex]"
  );
  interactiveElements.forEach((el) => {
    el.addEventListener("focus", () => {
      el.classList.add("focus-visible");
    });
    el.addEventListener("blur", () => {
      el.classList.remove("focus-visible");
    });
  });

  // ========== PERFORMANCE OPTIMIZATION ==========
  // Debounce scroll events
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // Update scroll progress
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) {
        progressBar.style.width = scrollPercent + "%";
      }
    }, 10);
  });

  // ========== PROJECT CARD 3D HOVER ==========
  gsap.utils.toArray(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = (e.clientY - centerY) * -0.05;
      const rotateY = (e.clientX - centerX) * 0.05;
      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
});
