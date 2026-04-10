// DARK MODE
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// SCROLL REVEAL EFFECT
const elements = document.querySelectorAll(".card, .job");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});
