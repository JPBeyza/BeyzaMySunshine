// Optional: Add floating heart particles
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";
    body.appendChild(heart);
  }
});

// Add styles directly for floating hearts
const style = document.createElement("style");
style.innerHTML = `
.floating-heart {
  position: fixed;
  bottom: 0;
  width: 15px;
  height: 15px;
  background: red;
  opacity: 0.6;
  border-radius: 50%;
  animation: floatUp ease-in infinite;
}

@keyframes floatUp {
  0% {
    transform: translateY(0);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
