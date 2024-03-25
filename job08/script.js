// Fonction pour vérifier si un nombre est premier
function estNombrePremier(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Fonction pour calculer la somme des nombres premiers
function la_somme_des_nombre_premier(a, b) {
    // Vérifier si les deux nombres sont premiers
    if (estNombrePremier(a) && estNombrePremier(b)) {
        // Retourner leur somme
        return a + b;
    } else {
        // Sinon, retourner false
        return false;
    }
}

// Exemples d'utilisation de la fonction
console.log(la_somme_des_nombre_premier(3, 5)); // Résultat attendu: 8
console.log(la_somme_des_nombre_premier(4, 7)); // Résultat attendu: false
