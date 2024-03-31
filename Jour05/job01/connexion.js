function validateConnexionForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validation de l'email
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Adresse email invalide';
        return;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Validation du mot de passe
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Le mot de passe doit contenir au moins 6 caractères';
        return;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // Si les validations sont réussies, vous pouvez envoyer les données ou effectuer d'autres actions
    console.log('Connexion réussie');
}

function validateEmail(email) {
    // Expression régulière pour valider l'email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
