const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let current = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[current]) {
        current++;

        if (current === konamiCode.length) {
            activateKonami();
            current = 0;
        }
    } else {
        current = 0;
    }
});

function activateKonami() {
    document.body.style.backgroundColor = "#1B19CD"; 


}



