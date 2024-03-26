function jourTravaille(date) {
    const annee = date.getFullYear();
    const mois = date.getMonth() + 1;
    const jour = date.getDate();

    const joursFeries = ["01-01", "15-04", "01-05", "08-05", "14-07", "15-08", "01-11", "11-11", "25-12"];
    const weekend = [0, 6]; // Dimanche (0) et Samedi (6)

    const jourSemaine = date.getDay();

    
    const dateStr = ("0" + jour).slice(-2) + "-" + ("0" + mois).slice(-2) ;

    if (joursFeries.includes(dateStr)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié");
    } else if (weekend.includes(jourSemaine)) {
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end");
    } else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour de travaille");
    }
}

// Exemple d'utilisation de la fonction avec une date
const maDate = new Date("2024-04-15");
jourTravaille(maDate);



