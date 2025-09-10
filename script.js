// Animation texte header
const headerText = document.querySelector("header h1");
let text = headerText.innerText;
headerText.innerText = "";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    headerText.innerText += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;

// Sélectionner tous les blocs compétences
const skillCards = document.querySelectorAll(".skill-card");

// Ajouter l'animation avec un délai progressif
window.addEventListener("load", () => {
  skillCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.animation = "fadeInUp 0.6s ease forwards";
    }, index * 300); // délai (200ms entre chaque bloc)
  });
});