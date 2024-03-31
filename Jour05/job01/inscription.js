function validateInscriptionForm() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validation du nom
    if (nom.trim() === '') {
        document.getElementById('nomError').innerText = 'Veuillez saisir votre nom';
        return;
    } else {
        document.getElementById('nomError').innerText = '';
    }

    // Validation du prénom
    if (prenom.trim() === '') {
        document.getElementById('prenomError').innerText = 'Veuillez saisir votre prénom';
        return;
    } else {
        document.getElementById('prenomError').innerText = '';
    }

    // Validation de l'email
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Adresse email invalide';
        return;
    } else {
        document.getElementById('emailError').innerText = '';
    }


    // Validation du mot de passe
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Le mot de passe doit contenir au moins 8 caractères';
        return;
    } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*\W)/.test(password)) {
        document.getElementById('passwordError').innerText = 'Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial';
        return;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // Validation de la confirmation du mot de passe
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Les mots de passe ne correspondent pas';
        return;
    } else {
        document.getElementById('confirmPasswordError').innerText = '';
    }

    // Si les validations sont réussies, vous pouvez envoyer les données ou effectuer d'autres actions
    console.log('Inscription réussie');
}
