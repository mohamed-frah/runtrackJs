document.getElementById('updateButton').addEventListener('click', updateUserTable);

function updateUserTable() {
    fetch('utilisateur.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de récupération des données');
            }
            return response.json();
        })
        .then(users => {
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                </tr>
            `;
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                table.appendChild(row);
            });
            document.getElementById('userTable').innerHTML = '';
            document.getElementById('userTable').appendChild(table);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}
