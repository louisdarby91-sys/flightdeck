const TOTAL_CARDS = 30;

// Load progress
let completedCards =
  JSON.parse(localStorage.getItem("completedCards")) || [];

// Read card number from QR
const params = new URLSearchParams(window.location.search);
const cardNumber = params.get("card");

if (cardNumber && !completedCards.includes(cardNumber)) {
  completedCards.push(cardNumber);
  localStorage.setItem("completedCards", JSON.stringify(completedCards));
}

// Update UI
const completedCount = completedCards.length;
const percent = (completedCount / TOTAL_CARDS) * 100;

document.getElementById("progress-bar").style.width = percent + "%";
document.getElementById("plane").style.left = `calc(${percent}% - 10px)`;

document.getElementById(
  "progress-text"
).textContent = `Cards completed: ${completedCount} / ${TOTAL_CARDS}`;

// Achievement message
if (completedCount >= 5) {
  document.getElementById("achievement").classList.remove("hidden");
}
