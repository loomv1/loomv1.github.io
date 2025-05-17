// Total fragments needed to collect
const totalFragments = 5;
let collectedFragments = 0;

// Select all fragment elements
const fragmentElements = document.querySelectorAll(".glitch-box");

// Initialize fragments
function resetFragments() {
  collectedFragments = 0;
  fragmentElements.forEach(box => {
    box.textContent = "[ ]";
    box.style.borderColor = "transparent";
    box.style.color = "#555";
  });
}

// Handle collecting a fragment when clicked
function collectFragment(index) {
  const box = fragmentElements[index];
  
  if (box.textContent === "[✓]") return; // Already collected

  // 20% chance to reset progress (glitch)
  if (Math.random() < 0.2) {
    alert("Uh oh! A glitch wiped your progress! Try again.");
    resetFragments();
    return;
  }

  // Mark this fragment collected
  box.textContent = "[✓]";
  box.style.borderColor = "lime";
  box.style.color = "lime";
  collectedFragments++;

  alert(`You found fragment ${collectedFragments} of ${totalFragments}! Keep going! 🔧`);

  if (collectedFragments === totalFragments) {
    alert("🎉 Congrats! You collected all fragments and escaped the broken page!");
  }
}

// Add event listeners for clicks
fragmentElements.forEach((box, i) => {
  box.addEventListener("click", () => collectFragment(i));
});

// Initialize on page load
resetFragments();
