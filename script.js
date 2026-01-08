const TOTAL_CARDS = 30;

// Load completed cards
let completed = JSON.parse(localStorage.getItem("completedCards")) || [];

// Check if this visit includes a card scan
const params = new URLSearchParams(window.location.search);
const card = parseInt(params.get("card"));

if (card && card >= 1 && card <= TOTAL_CARDS) {
  if (!completed.includes(card)) {
    completed.push(card);
    localStorage.setItem("completedCards", JSON.stringify(completed));
  }
}

// Update progress UI
const count = completed.length;
const percent = Math.min((count / TOTAL_CARDS) * 100, 100);

document.getElementById("progress-bar").style.width = percent + "%";
document.getElementById("progress-text").innerText =
  `${count} / ${TOTAL_CARDS} completed`;

// Optional completion message
if (count === TOTAL_CARDS) {
  document.querySelector("h1").innerText = "✈️ Mission Complete!";
}
