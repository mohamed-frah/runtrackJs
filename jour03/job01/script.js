
document.addEventListener("DOMContentLoaded", function() {
    const showTextButton = document.getElementById('showTextButton');
    const hideElementButton = document.getElementById('hideElementButton');
    const quoteElement = document.getElementById('quote');

    showTextButton.addEventListener('click', function() {
        quoteElement.style.display = 'block';
    });

    hideElementButton.addEventListener('click', function() {
        quoteElement.style.display = 'none';
    });
});
