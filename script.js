// DARK MODE TOGGLE
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// SIMPLE ANIMATION ON SCROLL (optional enhancement)
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
