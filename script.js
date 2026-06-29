document.addEventListener("DOMContentLoaded", () => {

    const fadeEls = document.querySelectorAll(".fade");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    fadeEls.forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.08}s`;
        revealObserver.observe(el);
    });

    const sections  = document.querySelectorAll("section[id]");
    const navLinks  = document.querySelectorAll(".nav-links a");

    const updateActiveLink = () => {
        let current = "";
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 160) {
                current = sec.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    };

    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
        navbar.classList.toggle("scrolled", window.scrollY > 60);
        updateActiveLink();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

});
