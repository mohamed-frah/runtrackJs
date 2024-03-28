function filterData() {
    const formData = new FormData(document.getElementById('filterForm'));
    

    fetch('pokemon.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de récupération des données');
            }
            return response.json();
        })
        .then(data => {
            const filteredData = data.filter(pokemon => {
                // Vérifie si chaque Pokemon correspond aux critères de filtrage
                const id = document.getElementById('id').value;
                const name = document.getElementById('name').value;
                const type = document.getElementById('type').value;
                return (!id || pokemon.id === id) &&
                       (!name || pokemon.name.toLowerCase().includes(name.toLowerCase())) &&
                       (!type || pokemon.type === type);
            });
            displayResults(filteredData);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (data.length === 0) {
        resultsDiv.textContent = 'Aucun résultat trouvé.';
        return;
    }

    const ul = document.createElement('ul');
    data.forEach(pokemon => {
        const li = document.createElement('li');
        li.textContent = `ID: ${pokemon.id}, Name: ${pokemon.name}.french , Type: ${pokemon.type}`;
        ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
}
