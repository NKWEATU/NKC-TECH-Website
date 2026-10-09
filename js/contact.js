
/* =========================================================
   NKC-TECH CONTACT JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("active");
        });
    });
}


/* =========================================================
   DARK MODE
========================================================= */

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "☀️";
            localStorage.setItem("nkc-theme", "dark");
        } else {
            darkModeBtn.textContent = "🌙";
            localStorage.setItem("nkc-theme", "light");
        }
    });

    /* Restore saved theme */
    const savedTheme = localStorage.getItem("nkc-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkModeBtn.textContent = "☀️";
    }
}


/* =========================================================
   SCROLL ANIMATION
========================================================= */

const animatedElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {
    observer.observe(element);
});


/* =========================================================
   EMAILJS CONFIGURATION
========================================================= */

/*
   Replace the three placeholder values below with
   your actual EmailJS details.
*/

const EMAILJS_PUBLIC_KEY = "krz8bAdNl6MKHtxeI";
const EMAILJS_SERVICE_ID = "BblUZDcOS6zeMWx0hhzS3";
const EMAILJS_TEMPLATE_ID = "template_0lqppph";


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

if (contactForm && successMsg) {

    // Display status messages without changing the form design.
    successMsg.setAttribute("role", "status");
    successMsg.setAttribute("aria-live", "polite");

    contactForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        const originalButtonHTML = submitButton
            ? submitButton.innerHTML
            : "";

        // Hide any previous status message.
        successMsg.classList.remove("show");
        successMsg.textContent = "";

        // Check that the EmailJS library is available.
        if (typeof emailjs === "undefined") {
            successMsg.textContent =
                "Email service could not load. Please refresh and try again.";
            successMsg.classList.add("show");
            return;
        }

        // Prevent repeated submissions while sending.
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        try {

            // Initialize EmailJS with your public key.
            emailjs.init({
                publicKey: EMAILJS_PUBLIC_KEY
            });

            // Send the form fields to your EmailJS template.
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                contactForm
            );

            successMsg.textContent =
                "Message sent successfully! We will get back to you soon.";

            successMsg.classList.add("show");

            // Clear the form only after EmailJS reports success.
            contactForm.reset();

        } catch (error) {

            console.error("EmailJS error:", error);

            successMsg.textContent =
                "Sorry, your message could not be sent. Please try again or email nkctechacademy@gmail.com.";

            successMsg.classList.add("show");

        } finally {

            // Restore the original button.
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonHTML;
            }

        }

    });

}

