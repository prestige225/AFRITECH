
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

window.addEventListener("scroll", () => {
  const scrollBtn = document.querySelector(".scroll-to-top");
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});


// Afficher la flèche si on a scrollé
