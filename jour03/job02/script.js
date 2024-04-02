document.addEventListener("DOMContentLoaded", function() {
    const shuffleButton = document.getElementById('shuffleButton');
    const imageBoxes = document.querySelectorAll('.imageBox');

    // Liste des chemins d'accès aux images
    const imageSources = [
        "arc1.png",
        "arc2.png",
        "arc3.png",
        "arc4.png",
        "arc5.png",
        "arc6.png"
    ];

    // Fonction pour mélanger les images
    function shuffleImages() {
        let shuffledSources = imageSources.slice(); // Copie des chemins d'accès aux images
        shuffledSources.sort(() => Math.random() - 0.5); // Mélange des chemins d'accès
        imageBoxes.forEach((box, index) => {
            box.style.backgroundImage = `url(${shuffledSources[index]})`; // Attribution des images mélangées
        });
    }

    // Écouteur d'événement pour le bouton de mélange
    shuffleButton.addEventListener('click', shuffleImages);

    // Mélanger les images initialement au chargement de la page
    shuffleImages();
});
