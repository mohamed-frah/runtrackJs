$(document).ready(function() {
    $("#shuffleButton").click(function() {
        var images = $("#rainbow img").toArray(); // Convertit la collection jQuery en un tableau JavaScript
        shuffleArray(images); // Appelle la fonction shuffleArray pour mélanger les images
        $("#rainbow").empty().append(images);
    });

    var firstClickedImg = null;
    // Utilise la délégation d'événements pour gérer le clic sur les images
    $("#rainbow").on("click", "img", function() {
        if (!firstClickedImg) {
            firstClickedImg = this; // Stocke la première image cliquée
        } else {
            // Échange les sources des images au lieu de remplacer les éléments
            var secondClickedImgSrc = $(this).attr("src");
            $(this).attr("src", $(firstClickedImg).attr("src"));
            $(firstClickedImg).attr("src", secondClickedImgSrc);
            firstClickedImg = null; // Réinitialise pour le prochain clic

            // Vérifie l'ordre après chaque échange
            checkOrder();
        }
    });

    function checkOrder() {
        // Vérifie si les sources des images correspondent à l'ordre arc1, arc2, arc3, etc.
        var isCorrect = true;
        $("#rainbow img").each(function(index) {
            if (!$(this).attr("src").includes("arc" + (index + 1))) {
                isCorrect = false;
            }
        });

        if (isCorrect) {
            $("#resultMessage").text("Vous avez gagné").css("color", "green");
        } else {
            $("#resultMessage").text("Vous avez perdu").css("color", "red");
        }
    }

    // Fonction pour mélanger un tableau
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
});
