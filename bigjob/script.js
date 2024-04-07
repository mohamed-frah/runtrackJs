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




$(document).ready(function() {
    // Fonction pour vérifier les identifiants utilisateur
    function verifierIdentifiants(email, password) {
        $.getJSON('utilisateurs.json', function(utilisateurs) {
            // Boucle à travers les utilisateurs pour trouver une correspondance
            for (var i = 0; i < utilisateurs.length; i++) {
                if (utilisateurs[i].email === email && utilisateurs[i].password === password) {
                    // Utilisateur trouvé, rediriger vers la page calendrier
                    window.location.href = 'calendrier.html';
                    return;
                }
            }
            // Aucune correspondance trouvée, afficher un message d'erreur
            alert('Adresse email ou mot de passe incorrect.');
        });
    }

    // Événement de soumission du formulaire de connexion
    $('#authForm').submit(function(event) {
        event.preventDefault(); // Empêcher le formulaire de se soumettre normalement
        var email = $('#email').val();
        var password = $('#password').val();
        // Vérifier les identifiants de l'utilisateur
        verifierIdentifiants(email, password);
    });

    // Événement de soumission du formulaire d'inscription
    $('#inscriptionForm').submit(function(event) {
        event.preventDefault(); // Empêcher le formulaire de se soumettre normalement
        // Traiter l'inscription de l'utilisateur ici
        // Vous pouvez envoyer les données du formulaire à votre serveur pour traitement
        alert('Inscription réussie !');
        // Réinitialiser le formulaire après l'inscription
        this.reset();
        // Fermer le modèle d'inscription
        $('#inscriptionModal').modal('hide');
    });
});
