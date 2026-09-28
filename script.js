const facts = [
  { front: "favorite drink?", back: "'sounds like a good time drink'" },
  { front: "currently learning", back: "a lot😭" },
  { front: "go-to color", back: "sage green + blush pink" },
  { front: "dream project", back: "a book tracker app" },
  { front: "song on repeat", back: "loverboy-A-Wall" },
  { front: "small joy", back: "a night out" },
];

const grid = document.getElementById("flip-grid");

facts.forEach((fact) => {
  const card = document.createElement("div");
  card.className = "flip-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `${fact.front} — tap to reveal`);

  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-face flip-front">${fact.front}</div>
      <div class="flip-face flip-back">${fact.back}</div>
    </div>
  `;

  const toggle = () => card.classList.toggle("flipped");
  card.addEventListener("click", toggle);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });

  grid.appendChild(card);
});