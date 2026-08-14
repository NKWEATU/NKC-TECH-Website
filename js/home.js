/* =========================================
   NKC-TECH HOME JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("active");

    });


    // Close menu when a navigation link is clicked

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("active");

        });

    });

}


/* =========================================
   DARK MODE
========================================= */

const darkModeBtn =
    document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (
            document.body.classList.contains("dark-mode")
        ) {

            darkModeBtn.textContent = "☀️";

            localStorage.setItem(
                "nkc-theme",
                "dark"
            );

        } else {

            darkModeBtn.textContent = "🌙";

            localStorage.setItem(
                "nkc-theme",
                "light"
            );

        }

    });


    // Remember user's preference

    const savedTheme =
        localStorage.getItem("nkc-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        darkModeBtn.textContent = "☀️";

    }

}


/* =========================================
   ANIMATED COUNTERS
========================================= */

const counters =
    document.querySelectorAll(".counter");


let counterStarted = false;


function startCounters() {

    if (counterStarted) {
        return;
    }

    counterStarted = true;


    counters.forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            Math.max(1, Math.ceil(target / 80));


        function updateCounter() {

            current += increment;

            if (current >= target) {

                counter.textContent = target;

                return;

            }

            counter.textContent = current;

            requestAnimationFrame(updateCounter);

        }


        updateCounter();

    });

}


/* =========================================
   START COUNTERS WHEN VISIBLE
========================================= */

const counterSection =
    document.getElementById("counters");


if (counterSection) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        startCounters();

                        observer.unobserve(
                            counterSection
                        );

                    }

                });

            },
            {
                threshold: 0.3
            }
        );


    observer.observe(counterSection);

}