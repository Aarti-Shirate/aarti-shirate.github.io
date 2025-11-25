console.log("Meow! 🐾 Welcome to Because Cats.");

// ❤️ Heart Animation
function vote(button, type) {
    const container = document.getElementById("heart-container");
    const heart = document.createElement("div");
    heart.className = "heart";

    // Which emoji based on vote type
    heart.textContent = type === "cute" ? "😺" : "❤️";

    // Position near the clicked button
    const rect = button.getBoundingClientRect();
    heart.style.left = rect.left + rect.width / 2 + "px";
    heart.style.top = rect.top + window.scrollY + "px";

    container.appendChild(heart);

    // Remove after animation finishes
    setTimeout(() => heart.remove(), 1200);
}

// 🌙 Dark mode toggle
const modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Change button text based on mode
    if (document.body.classList.contains("dark")) {
        modeBtn.textContent = "☀️ Light Mode";
        console.log("Dark mode is on");
    } else {
        modeBtn.textContent = "🌙 Dark Mode";
        console.log("Light mode is on");
    }
});
