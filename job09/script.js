function tri(numbers, order) {
    // Vérifier si le paramètre "order" est "asc" ou "desc"
    if (order === "asc") {
        // Tri dans l'ordre ascendant
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        // Tri dans l'ordre décroissant
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        // Si le paramètre "order" n'est ni "asc" ni "desc", retourner un message d'erreur
        return "Le paramètre 'order' doit être 'asc' ou 'desc'.";
    }
    // Retourner le tableau trié
    return numbers;
}

// Exemple d'utilisation de la fonction
const tableau1 = [3, 1, 5, 2, 4];
console.log(tri(tableau1, "asc")); // Résultat attendu: [1, 2, 3, 4, 5]

const tableau2 = [3, 1, 5, 2, 4];
console.log(tri(tableau2, "desc")); // Résultat attendu: [5, 4, 3, 2, 1]

const tableau3 = [3, 1, 5, 2, 4];
console.log(tri(tableau3, "invalid")); // Résultat attendu: "Le paramètre 'order' doit être 'asc' ou 'desc'."
