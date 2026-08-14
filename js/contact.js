/* =========================================================
   NKC-TECH CONTACT JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        () => {

            mainNav.classList.toggle(
                "active"
            );

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


/* =========================================================
   DARK MODE
========================================================= */

const darkModeBtn =
    document.getElementById(
        "darkModeBtn"
    );


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

                darkModeBtn.textContent =
                    "☀️";

                localStorage.setItem(
                    "nkc-theme",
                    "dark"
                );

            } else {

                darkModeBtn.textContent =
                    "🌙";

                localStorage.setItem(
                    "nkc-theme",
                    "light"
                );

            }

        }
    );


    /* Restore saved theme */

    const savedTheme =
        localStorage.getItem(
            "nkc-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        darkModeBtn.textContent =
            "☀️";

    }

}


/* =========================================================
   SCROLL ANIMATION
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".fade-up"
    );


const observer =
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


animatedElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const successMsg =
    document.getElementById(
        "successMsg"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            /*
             * This currently displays a success
             * message only.
             *
             * It does NOT send an actual email.
             */

            successMsg.classList.add(
                "show"
            );


            contactForm.reset();


            setTimeout(
                () => {

                    successMsg.classList.remove(
                        "show"
                    );

                },
                5000
            );

        }
    );

}