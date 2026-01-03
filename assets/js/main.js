// Import Typed.js as ES6 module

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, initializing scripts...");

    // Initialize SweetScroll for smooth scrolling
    if (typeof SweetScroll !== "undefined") {
        new SweetScroll({});
        console.log("SweetScroll initialized");
    } else {
        console.warn("SweetScroll not loaded");
    }

    // Initialize particles.js
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#FFFFFF"
                },
                shape: {
                    type: "polygon",
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#FFFFFF",
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: false
                    },
                    onclick: {
                        enable: false
                    },
                    resize: true
                }
            },
            retina_detect: true,
        });
        console.log("particles.js initialized");
    } else {
        console.warn("particlesJS not loaded - check if particles.js script is included");
    }

    // Initialize Typed.js for name animation
    try {
        const typedElement = document.getElementById("typed-name");
        if (typedElement) {
            new Typed("#typed-name", {
                strings: ["Patrick Jedrzejko"],
                typeSpeed: 150,
                backSpeed: 50,
                loop: false,
                loopCount: Infinity,
                showCursor: false,
                cursorChar: "|",
                autoInsertCss: true,
            });
            console.log("Typed.js initialized");
        } else {
            console.error("Element #typed-name not found");
        }
    } catch (error) {
        console.error("Typed.js initialization failed:", error);
    }
});