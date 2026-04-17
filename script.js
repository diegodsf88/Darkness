const cards = document.querySelectorAll(".shadow-card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.textContent = "Dark Secret " + (index + 1);
  });
});
