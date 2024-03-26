// Sélectionner le textarea
const keylogger = document.getElementById("keylogger");

// Ajouter un écouteur d'événements pour les frappes clavier
document.addEventListener("keydown", function(event) {
    // Récupérer la touche pressée
    const key = event.key.toLowerCase();

    // Vérifier si la touche est une lettre de l'alphabet (a-z)
    if (/^[a-z]$/.test(key)) {
        // Vérifier si le focus est dans le textarea
        if (document.activeElement === keylogger) {
            // Si oui, ajouter la lettre deux fois au textarea
            keylogger.value += key ;
        } else {
            // Sinon, ajouter la lettre une seule fois au textarea
            keylogger.value += key;
        }
    }
});
