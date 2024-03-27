// Sélectionner le footer
const footer = document.querySelector("footer");

// Ajouter un écouteur d'événements pour le défilement de la page
window.addEventListener("scroll", function() {
    // Calculer le pourcentage de défilement
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    
    // Mettre à jour la couleur du footer en fonction du pourcentage de défilement
    footer.style.backgroundColor = `hsl(100, 100%, ${Math.min(50, scrollPercentage,50)}%)`;
});
