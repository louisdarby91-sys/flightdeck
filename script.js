const TOTAL_CARDS = 30;

// Get completed cards from localStorage
let completedCards = JSON.parse(localStorage.getItem("completedCards")) || [];

// Read card number from URL
const params = new URLSearchParams(window.location.search);
const cardNumber = params.get("card");

if (cardNumber && !completedCards.includes(cardNumber)) {
  completedCards.push(cardNumber);
  localStorage.setItem("completedCards", JSON.stringify(completedCards));
}

// Update UI
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");

const completedCount = completedCards.length;
progressText.textContent = `${completedCount} / ${TOTAL_CARDS}`;

progressBar.style.width = `${(completedCount / TOTAL_CARDS) * 100}%`;
