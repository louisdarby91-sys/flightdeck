
const TOTAL_CARDS = 30;

// Get card number from URL
const params = new URLSearchParams(window.location.search);
const cardNumber = parseInt(params.get("card"));

// Load completed cards
let completed = JSON.parse(localStorage.getItem("completedCards")) || [];

// Validate card number
if (!cardNumber || cardNumber < 1 || cardNumber > TOTAL_CARDS) {
  document.getElementById("message").innerText =
    "Invalid card. Please scan a valid card.";
} else {
  if (!completed.includes(cardNumber)) {
    completed.push(cardNumber);
    localStorage.setItem("completedCards", JSON.stringify(completed));
  }

  document.getElementById("message").innerText =
    completed.length === TOTAL_CARDS
      ? "🎉 You’ve completed all 30 cards!"
      : `Card ${cardNumber} completed. Keep going!`;
}

// Update progress
const progress = Math.min(completed.length / TOTAL_CARDS * 100, 100);
document.getElementById("progress-bar").style.width = `${progress}%`;
document.getElementById("progress-text").innerText =
  `${completed.length} / ${TOTAL_CARDS} cards completed`;
