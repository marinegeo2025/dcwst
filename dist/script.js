// script.js

// Scroll fade-in animation
const faders = document.querySelectorAll(".fade-in-section");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// 🌊 Gentle floating animation (adds class to elements)
const floaters = document.querySelectorAll('.floater');
floaters.forEach(floater => {
  floater.classList.add('gentle-float');
});

// 🫧 Random bubble generator
function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = Math.random() * 100 + 'vw'; // Random position across the screen
  bubble.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Bubble speed between 2s - 5s
  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.remove(); // Remove the bubble after it completes its animation
  }, 5000); // Remove bubble after 5s
}

// Spawn bubbles every 1 second (can adjust to create more/less)
setInterval(createBubble, 1000);

// 🏄🏽‍♂️ Smooth anchor scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
