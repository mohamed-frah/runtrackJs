// Sélectionner le bouton et le paragraphe
const button = document.getElementById("button");
const compteur = document.getElementById("compteur");


let count = 0;


button.addEventListener("click", function() {
    
    count++;
   
    compteur.textContent = count;
});
