/* =========================================================
   NKC-TECH GALLERY JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
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


    /* Restore theme */

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
   GALLERY SCROLL ANIMATION
========================================================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


const galleryObserver =
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


galleryItems.forEach(item => {

    galleryObserver.observe(item);

});


/* =========================================================
   IMAGE LIGHTBOX
========================================================= */

const lightbox =
    document.getElementById(
        "imageLightbox"
    );

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );


const galleryImages =
    document.querySelectorAll(
        ".gallery-image"
    );


/* Open image */

galleryImages.forEach(image => {

    image.addEventListener(
        "click",
        () => {

            lightboxImage.src =
                image.src;

            lightboxImage.alt =
                image.alt;

            lightbox.classList.add(
                "active"
            );

            lightbox.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

});


/* Close lightbox */

function closeLightbox() {

    lightbox.classList.remove(
        "active"
    );

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


/* Close button */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


/* Click outside image */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* ESC key */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            lightbox.classList.contains(
                "active"
            )
        ) {

            closeLightbox();

        }

    }
);