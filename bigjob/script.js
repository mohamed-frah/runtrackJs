// Votre code JavaScript personnalisé
document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre

    // Récupère les valeurs des champs
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Vérifie le domaine de l'adresse e-mail
    if (email.endsWith('@laplateforme.io')) {
        // Simulation de connexion réussie pour l'exemple
        alert('Connexion réussie!');
    } else {
        alert('Seuls les membres de La Plateforme_ ont le droit de créer leur compte.');
    }
});
