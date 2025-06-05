const texts = [
  "Aspiring Developer",
  "GATE CSE 2027",
  "Python Enthusiast",
  "AI & Web Projects"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 120;
const deletingSpeed = 50;
const pauseTime = 1500;

const textElement = document.getElementById("typing-text");

function type() {
  const fullText = texts[i];

  if (!isDeleting) {
    currentText = fullText.substring(0, j++);
    textElement.textContent = currentText;

    if (j > fullText.length) {
      isDeleting = true;
      setTimeout(type, pauseTime); // pause before deleting
    } else {
      setTimeout(type, typingSpeed);
    }

  } else {
    currentText = fullText.substring(0, j--);
    textElement.textContent = currentText;

    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
      setTimeout(type, 300); // pause before next word
    } else {
      setTimeout(type, deletingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Vanta background
  VANTA.NET({
    el: "body",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00ffcc,
    backgroundColor: 0x0f0f0f,
    points: 12.0,
    maxDistance: 20.0,
    spacing: 15.0
  });

  // Start typing
  type();
});
