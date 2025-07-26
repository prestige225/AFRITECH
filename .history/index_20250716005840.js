
// script.js

// Récupération des éléments
const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

// Écoute du clic sur le bouton menu
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
