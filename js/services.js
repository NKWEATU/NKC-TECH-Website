/* =========================================
   NKC-TECH SERVICES PAGE
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        () => {

            mainNav.classList.toggle("active");

        }
    );


    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "active"
                );

            }
        );

    });

}


/* =========================================
   DARK MODE
========================================= */

const darkModeBtn =
    document.getElementById("darkModeBtn");


if (darkModeBtn) {

    darkModeBtn.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-mode"
            );


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
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

        }
    );


    /* Restore saved theme */

    const savedTheme =
        localStorage.getItem("nkc-theme");


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        darkModeBtn.textContent = "☀️";

    }

}


/* =========================================
   SERVICE CARD ANIMATION
========================================= */

const serviceCards =
    document.querySelectorAll(
        ".service-card"
    );


const serviceObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


serviceCards.forEach(card => {

    serviceObserver.observe(card);

});