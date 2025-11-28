/* -------------------- DARK MODE -------------------- */
const toggleBtn = document.getElementById("darkModeBtn");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
});

/* -------------------- STICKY HEADER -------------------- */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

/* -------------------- CONTACT FORM -------------------- */
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    successMsg.style.display = "block";
    form.reset();

    setTimeout(() => {
        successMsg.style.display = "none";
    }, 4000); // hide message after 4 seconds
});

/* -------------------- COUNTER ANIMATION -------------------- */
const counters = document.querySelectorAll(".counter");

const startCounters = () => {
    counters.forEach(counter => {
        counter.innerText = "0";
        const update = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 200;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(update, 10);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
};

let counterStarted = false;
window.addEventListener("scroll", () => {
    const countersSection = document.getElementById("counters");

    if (window.scrollY > countersSection.offsetTop - window.innerHeight + 100) {
        if (!counterStarted) {
            startCounters();
            counterStarted = true;
        }
    }
});

/* -------------------- FADE-UP ON SCROLL -------------------- */
const fadeElements = document.querySelectorAll(".fade-up");

const reveal = () => {
    const trigger = window.innerHeight - 120;

    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* -------------------- CERTIFICATIONS FADE-IN -------------------- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.cert-card').forEach(card => {
    observer.observe(card);
});

/* -------------------- MOBILE MENU TOGGLE -------------------- */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');        // toggle menu visibility
    menuToggle.classList.toggle('active');     // animate hamburger
    document.body.classList.toggle('menu-open'); // optional: prevent scroll when menu open
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');  // reset hamburger icon
        document.body.classList.remove('menu-open'); // allow scroll again
    });
});
