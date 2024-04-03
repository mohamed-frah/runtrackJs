document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("game-board");
    const message = document.getElementById("message");
    const restartButton = document.getElementById("restart-button");

    let tiles = [];

    function initializeBoard() {
        const imageSources = ["./images/logo1.PNG", "./images/logo2.PNG", "./images/logo3.PNG", "./images/logo4.PNG", "./images/logo5.PNG", "./images/logo6.PNG", "./images/logo7.PNG", "./images/logo8.PNG", "./images/logo9.PNG"];
        
        for (let i = 0; i < 9; i++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            const img = document.createElement("img");
            img.src = imageSources[i];
            tile.appendChild(img);
            tiles.push(tile);
            board.appendChild(tile);
            tile.addEventListener("click", moveTile);
        }
        tiles.push(null); // Add empty space
        shuffleBoard();
    }

    function shuffleBoard() {
        tiles.sort(() => Math.random() - 0.5);
        renderBoard();
    }

    function renderBoard() {
        board.innerHTML = "";
        tiles.forEach(tile => {
            if (tile !== null) {
                board.appendChild(tile);
            }
        });
        checkWin();
    }

    function moveTile() {
        const currentIndex = tiles.indexOf(this);
        const emptyIndex = tiles.indexOf(null);
        if (isAdjacent(currentIndex, emptyIndex)) {
            const temp = tiles[currentIndex];
            tiles[currentIndex] = tiles[emptyIndex];
            tiles[emptyIndex] = temp;
            renderBoard();
        }
    }

    function isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / 3);
        const col1 = index1 % 3;
        const row2 = Math.floor(index2 / 3);
        const col2 = index2 % 3;
        return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
    }

    function checkWin() {
        const isWin = tiles.every((tile, index) => {
            return tile === null || parseInt(tile.innerText) === index + 1;
        });
        if (isWin) {
            message.style.display = "block";
            message.innerText = "Vous avez gagné!";
            tiles.forEach(tile => {
                tile.removeEventListener("click", moveTile);
            });
        }
    }

    restartButton.addEventListener("click", () => {
        tiles.forEach(tile => {
            tile.removeEventListener("click", moveTile);
        });
        tiles = [];
        message.style.display = "none";
        initializeBoard();
    });

    initializeBoard();
});
