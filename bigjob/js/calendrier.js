document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        events: [
            // Ajoutez ici les événements du calendrier
        ],
        select: function(info) {
            // Gestion de la sélection d'une date
            var today = new Date();
            if (info.start < today) {
                alert("Vous ne pouvez pas sélectionner une date passée.");
            } else {
                var confirmation = confirm("Voulez-vous faire une demande d'autorisation de présence pour le " + info.start.toLocaleDateString() + " ?");
                if (confirmation) {
                    // Envoyer la demande d'autorisation
                    // Vous pouvez implémenter cette partie selon vos besoins
                    alert("Demande d'autorisation envoyée pour le " + info.start.toLocaleDateString());
                }
            }
        }
    });

    calendar.render();
});
