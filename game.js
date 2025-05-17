const totalFragments = 5;
let collectedFragments = 0;

const gameArea = document.getElementById("game-area");
const fragmentElements = document.querySelectorAll(".glitch-box");

function resetFragments() {
  collectedFragments = 0;
  fragmentElements.forEach(box => {
    box.textContent = "[ ]";
    box.style.borderColor = "transparent";
    box.style.color = "rgba(85, 85, 85, 0.8)";
  });
}

function randomizePositions() {
  const areaRect = gameArea.getBoundingClientRect();

  fragmentElements.forEach(box => {
    const maxX = areaRect.width - box.offsetWidth;
    const maxY = areaRect.height - box.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
  });
}

function collectFragment(index) {
  const box = fragmentElements[index];

  if (box.textContent === "[✓]") return;

  if (Math.random() < 0.3) {
    alert("Uh oh! A glitch wiped your progress! Try again.");
    resetFragments();
    return;
  }

  box.textContent = "[✓]";
  box.style.borderColor = "lime";
  box.style.color = "lime";
  collectedFragments++;

  alert(`You found fragment ${collectedFragments} of ${totalFragments}! Keep going! 🔧`);

  if (collectedFragments === totalFragments) {
    alert("🎉 Congrats! You collected all fragments and escaped the broken page!");
  }
}

fragmentElements.forEach((box, i) => {
  box.addEventListener("click", () => collectFragment(i));
});

// Initialize after DOM content loads
window.addEventListener("DOMContentLoaded", () => {
  resetFragments();
  randomizePositions();
});
