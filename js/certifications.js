/* =========================================================
   NKC-TECH CERTIFICATIONS JAVASCRIPT
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
        localStorage.getItem(
            "nkc-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        darkModeBtn.textContent = "☀️";

    }

}


/* =========================================================
   CERTIFICATE SCROLL ANIMATION
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
   CERTIFICATE IMAGE MODAL
========================================================= */

const certificateImages =
    document.querySelectorAll(
        ".cert-image img"
    );

const certificateModal =
    document.getElementById(
        "certificateModal"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );


certificateImages.forEach(image => {

    image.addEventListener(
        "click",
        () => {

            modalImage.src =
                image.src;

            modalImage.alt =
                image.alt;

            certificateModal.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

});


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeCertificateModal() {

    certificateModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeCertificateModal
    );

}


/* Close when clicking outside image */

if (certificateModal) {

    certificateModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                certificateModal
            ) {

                closeCertificateModal();

            }

        }
    );

}


/* Close with ESC key */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeCertificateModal();

        }

    }
);