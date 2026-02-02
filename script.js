const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("valVideo");
const question = document.getElementById("question");
const finalText = document.getElementById("finalText");
const bgMusic = document.getElementById("bgMusic");

const HER_NAME = " مهره 🤍"; // ← غيّري الاسم

const noTexts = [
  "لا 🙃",
  "متأكدة؟ 😏",
  "مو هني 😌",
  "حاولي مرة ثانية",
  "لا بس يمكن نعم؟",
  "قريبة… بس لا 😂"
];

let musicStarted = false;

/* Start background music on first tap (mobile-safe) */
document.body.addEventListener("click", () => {
  if (!musicStarted) {
    bgMusic.volume = 0.6;
    bgMusic.play();
    musicStarted = true;
  }
}, { once: true });

/* NO button floats forever + funny Arabic text */
noBtn.addEventListener("mouseenter", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.innerText = noTexts[Math.floor(Math.random() * noTexts.length)];
  noBtn.style.left = `${Math.random() * maxX}px`;
  noBtn.style.top = `${Math.random() * maxY}px`;
});

/* Gentle drifting even without hover */
setInterval(() => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.style.transition = "top 3s linear, left 3s linear";
  noBtn.style.left = `${Math.random() * maxX}px`;
  noBtn.style.top = `${Math.random() * maxY}px`;
}, 4000);

/* YES button */
yesBtn.addEventListener("click", () => {
  bgMusic.pause();
  bgMusic.currentTime = 0;

  yesBtn.classList.add("fade-out");
  setTimeout(() => {
    yesBtn.style.display = "none";
  }, 600);

  question.innerText = `    (مالي كله) ${HER_NAME}`;
  videoContainer.style.display = "block";
  finalText.innerText = "   والله مالي نتفتي 😌";

  video.muted = false;
  video.play();

  startHearts();

  // Emotional ending
  setTimeout(() => {
    finalText.innerText = "     العوزج شوي 🤍";
  }, 4000);
});

/* Hearts generator */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
}
