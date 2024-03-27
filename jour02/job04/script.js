
const keylogger = document.getElementById("keylogger");


document.addEventListener("keydown", function(event) {
    
    const key = event.key.toLowerCase();

   
    if (/^[a-z]$/.test(key)) {
     
        if (document.activeElement === keylogger) {
          
            keylogger.value += key ;
        } else {
            
            keylogger.value += key;
        }
    }
});
