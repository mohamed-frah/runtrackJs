// Sélectionner le bouton et le paragraphe
const button = document.getElementById("button");
const compteur = document.getElementById("compteur");

// Définir un compteur pour suivre le nombre de clics
let count = 0;

// Ajouter un écouteur d'événements pour le clic sur le bouton
button.addEventListener("click", function() {
    // Incrémenter le compteur
    count++;
    // Mettre à jour le contenu du paragraphe avec la nouvelle valeur du compteur
    compteur.textContent = count;
});
