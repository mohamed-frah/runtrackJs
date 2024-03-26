function showhide() {
    // Sélectionner l'élément <article> avec l'ID "article"
    const article = document.getElementById("article");

    // Vérifier si l'article est caché ou affiché
    if (article.style.display === "none") {
        // Si l'article est caché, l'afficher
        article.style.display = "block";
    } else {
        // Sinon, s'il est affiché, le cacher
        article.style.display = "none";
    }
}
