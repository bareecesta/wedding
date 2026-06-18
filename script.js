const weddingDate = new Date("2027-05-27T00:00:00").getTime();

function updateCountdownText() {
    const el = document.getElementById("countdown-text");
    if (!el) return;

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        el.textContent = "Wedding weekend";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    el.textContent = `${days} days to go`;
}

updateCountdownText();
setInterval(updateCountdownText, 1000 * 60 * 60);

const form = document.getElementById("rsvp-form");

if (form) {
    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        await fetch(
            "https://script.google.com/macros/s/AKfycbx3SB49WpqlO-ex2MyvUnqbQ6VpERR_3mvVIUL15U5LIhTXENc6lKzph30YESw9u7Ccvg/exec",
            {
                method: "POST",
                body: formData
            }
        );

        form.reset();
        document.getElementById("success-message").style.display = "block";
    });
}
