// Sélectionner le bouton
const bouton = document.getElementById("button");

// Ajouter un gestionnaire d'événement pour le clic sur le bouton
bouton.addEventListener("click", function() {
    // Récupérer l'élément ayant comme id "citation"
    const citationElement = document.getElementById("citation");
    
    // Vérifier si l'élément existe
    if (citationElement) {
        // Récupérer le contenu de l'élément
        const citationText = citationElement.textContent;
        
        // Afficher le contenu dans la console
        console.log(citationText);
    } else {
        console.log("L'élément 'citation' n'a pas été trouvé.");
    }
});

