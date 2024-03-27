
const bouton = document.getElementById("button");

bouton.addEventListener("click", function() {
    
    const citationElement = document.getElementById("citation");
    
   
    if (citationElement) {
       
        const citationText = citationElement.textContent;
        
       
        console.log(citationText);
    } else {
        console.log("L'élément 'citation' n'a pas été trouvé.");
    }
});

