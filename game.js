document.addEventListener("DOMContentLoaded", () => {
  const totalFragments = 7; // 5 glitch boxes + 2 hidden buttons
let collectedFragments = 0;

const gameArea = document.getElementById("game-area");
const fragmentElements = document.querySelectorAll(".glitch-box");
const hiddenButtons = document.querySelectorAll(".hidden-button");

function resetFragments() {
  collectedFragments = 0;
  fragmentElements.forEach(box => {
    box.textContent = "[ ]";
    box.style.borderColor = "transparent";
    box.style.color = "rgba(85, 85, 85, 0.5)";
  });
  hiddenButtons.forEach(btn => {
    btn.textContent = "[ ]";
    btn.style.color = "rgba(85, 85, 85, 0.1)";
    btn.style.border = "none";
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

function collectHiddenFragment(btn) {
  if (btn.textContent === "[✓]") return;

  btn.textContent = "[✓]";
  btn.style.color = "lime";
  btn.style.border = "1px solid lime";
  collectedFragments++;

  alert(`You found fragment ${collectedFragments} of ${totalFragments}! Keep going! 🔧`);

  if (collectedFragments === totalFragments) {
    alert("🎉 Congrats! You collected all fragments and escaped the broken page!");
  }
}

fragmentElements.forEach((box, i) => {
  box.addEventListener("click", () => collectFragment(i));
});

hiddenButtons.forEach(btn => {
  btn.addEventListener("click", () => collectHiddenFragment(btn));
});

window.addEventListener("DOMContentLoaded", () => {
  resetFragments();
  randomizePositions();
});

});

