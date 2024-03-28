function jsonValueKey(jsonString, key) {
    try {
        // Convertit la chaîne JSON en objet JavaScript
        const jsonObject = JSON.parse(jsonString);
        
        // Vérifie si la clé existe dans l'objet
        if (key in jsonObject) {
            // Retourne la valeur associée à la clé
            return jsonObject[key];
        } else {
            // Si la clé n'existe pas, retourne null
            return null;
        }
    } catch (error) {
        // Si une erreur se produit lors de l'analyse JSON, retourne null
        console.error('Erreur lors de l\'analyse JSON:', error);
        return null;
    }
}

// Exemple d'utilisation de la fonction
const jsonString = '{"city": "marseille" , "name" : "momo" , "age": "12ans"}';
const key = 'age';
const value = jsonValueKey(jsonString, key);
console.log('Valeur associée à la clé', key, ':', value); // Affiche : "Valeur associée à la clé city : marseille"
