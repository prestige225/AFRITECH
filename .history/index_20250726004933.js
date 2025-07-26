
// script.js

// Récupération des éléments
const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

// Écoute du clic sur le bouton menu
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const speed = 100; // Plus petit = plus rapide

      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });


  const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('contactModal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

// Fermer avec la touche ESC
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    modal.classList.remove('show');
  }
});


 // Affichage de la flèche quand on descend la page
  // JavaScript pour afficher la flèche après défilement
window.addEventListener("scroll", () => {
  const scrollTopBtn = document.querySelector(".scroll-to-top");
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Remonter en haut de la page au clic
document.querySelector(".scroll-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
