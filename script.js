// ===============================
// DARK MODE TOGGLE
// ===============================
const toggle = document.getElementById("modeToggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Ganti icon
        if (document.body.classList.contains("dark-mode")) {
            toggle.textContent = "☀️";
        } else {
            toggle.textContent = "🌙";
        }
    });
}

// ===============================
// FORM CONTACT ALERT
// ===============================
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Terima kasih, pesan Anda telah terkirim!");
        form.reset();
    });
}