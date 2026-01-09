const TOTAL = 30;
let completed = Number(localStorage.getItem("cardsCompleted")) || 0;

document.getElementById("progress-fill").style.width =
  (completed / TOTAL) * 100 + "%";

document.getElementById("progress-text").textContent =
  `Cards completed ${completed} / ${TOTAL}`;
