document.getElementById('button').addEventListener('click', function() {
    fetch('expression.txt') // Fait une requête Fetch pour récupérer le contenu du fichier expression.txt
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier expression.txt');
            }
            return response.text(); // Renvoie le contenu du fichier sous forme de texte
        })
        .then(data => {
            // Insère le contenu récupéré dans un paragraphe
            document.getElementById('expression').textContent = data;
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});
