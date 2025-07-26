
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


  const openModalLink = document.getElementById('openModalLink');
  const modal = document.getElementById('contactModal');
  const closeBtn = document.querySelector('.close-btn');

  openModalLink.addEventListener('click', (e) => {
    e.preventDefault(); // empêcher le lien de rediriger
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });