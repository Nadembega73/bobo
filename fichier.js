const commentForm = document.querySelector('#comment-form');
const submitBtn = document.querySelector('#submit-btn');
const cancelBtn = document.querySelector('#cancel-btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // code pour envoyer le commentaire
  commentForm.reset();
});

cancelBtn.addEventListener('click', (event) => {
  event.preventDefault();
  commentForm.reset();
});

// Code JavaScript pour ajouter une fonctionnalité supplémentaire si nécessaire

// Exemple de validation du formulaire avant soumission
document.getElementById("reservation-form").addEventListener("submit", function(event) {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  
  if (nameInput.value === "" || emailInput.value === "") {
    alert("Veuillez remplir tous les champs obligatoires !");
    event.preventDefault();
  }
});


const images = document.querySelectorAll('.gallery img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // Action à effectuer lorsque l'image est cliquée
    console.log('Image cliquée: ', image.src);
  });
});
const images = document.querySelectorAll('.gallery img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // Action à effectuer lorsque l'image est cliquée
    console.log('Image cliquée: ', image.src);
  });
});



  // Afficher ou masquer le bouton en fonction de la position de défilement
  window.onscroll = function() { afficherMasquerBouton(); };

  function afficherMasquerBouton() {
    var boutonRetour = document.getElementById("btn-retour");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      boutonRetour.style.display = "block";
    } else {
      boutonRetour.style.display = "none";
    }
  }

  // Fonction pour remonter en haut de la page
  function retourEnHaut() {
    document.body.scrollTop = 0; // Pour les anciens navigateurs
    document.documentElement.scrollTop = 0; // Pour les navigateurs modernes
  }
