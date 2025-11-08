// DARK MODE TOGGLE
const toggle = document.getElementById('modeToggle');
const body = document.body;

if (toggle) {
    toggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        toggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
    });
}

// FORM ALERT
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Terima kasih, pesan Anda telah terkirim!');
        form.reset();
    });
}
