const weddingStart = new Date('2027-05-27T00:00:00+01:00');

const countdownParts = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
};

function updateCountdown() {
  const now = new Date();
  const distance = weddingStart - now;

  if (distance <= 0) {
    Object.values(countdownParts).forEach((part) => {
      part.textContent = '0';
    });
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownParts.days.textContent = days;
  countdownParts.hours.textContent = hours.toString().padStart(2, '0');
  countdownParts.minutes.textContent = minutes.toString().padStart(2, '0');
  countdownParts.seconds.textContent = seconds.toString().padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

fadeElements.forEach((element) => observer.observe(element));

const rsvpForm = document.querySelector('.rsvp-form');
const formMessage = document.getElementById('form-message');

rsvpForm.addEventListener('submit', (event) => {
  if (!rsvpForm.action) {
    event.preventDefault();
    formMessage.textContent = 'Thank you — RSVP connection coming soon.';
    rsvpForm.reset();
  }
});
