let json = require('../data/jardins.json');
//console.log(json);

json.forEach(x => x.nbElemCorrect = 0);

let nbCritereTraite = 0;

json.forEach(x => {
    if (x["Chiens autorisés"]) x.nbElemCorrect++;
});

nbCritereTraite++;

json.sort((a, b) => { return b.nbElemCorrect - a.nbElemCorrect });

console.log(json);
/*
json.filter(x => x["Nom"]);
json.filter(x => x["Type"]);
json.filter(x => x["Adresses"]);

json.filter(x => x["Géolocalisation"]);
json.filter(x => x["Code postal"]);
json.filter(x => x["Web"]);







json.filter(x => x["Informations complémentaires"]);

json.forEach(x => {
	if (x["Informations complémentaires"]) x.nbElemCorrect++;
});



json.filter(x => x["Gardien"]);

json.forEach(x => {
	if (x["Gardien"]) x.nbElemCorrect++;
});



json.filter(x => x["Jeux pour enfants"]);

json.forEach(x => {
	if (x["Jeux pour enfants"]) x.nbElemCorrect++;
});



json.filter(x => x["Pataugeoire"]);

json.forEach(x => {
	if (x["Pataugeoire"]) x.nbElemCorrect++;
});



json.filter(x => x["Sanitaires"]);

json.forEach(x => {
	if (x["Sanitaires"]) x.nbElemCorrect++;
});



json.filter(x => x["Sanitaires pour handicapés"]);

json.forEach(x => {
	if (x["Sanitaires pour handicapés"]) x.nbElemCorrect++;
});



json.filter(x => x["Jardin clos"]);

json.forEach(x => {
	if (x["Jardin clos"]) x.nbElemCorrect++;
});




json.filter(x => x["Abris"]);

json.forEach(x => {
	if (x["Abris"]) x.nbElemCorrect++;
});






json.filter(x => x["Point d'eau"]);

json.forEach(x => {
	if (x["Point d'eau"]) x.nbElemCorrect++;
});





json.filter(x => x["Table pique-nique"]);

json.forEach(x => {
	if (x["Table pique-nique"]) x.nbElemCorrect++;
});





json.filter(x => x["Accès transports en commun"]);

json.forEach(x => {
	if (x["Accès transports en commun"]) x.nbElemCorrect++;
});





json.filter(x => x["Bancs"]);

json.forEach(x => {
	if (x["Bancs"]) x.nbElemCorrect++;
});



json.filter(x => x["Accès Parking"]);

json.forEach(x => {
	if (x["Accès Parking"]) x.nbElemCorrect++;
});





json.filter(x => x["Restauration"]);

json.forEach(x => {
	if (x["Restauration"]) x.nbElemCorrect++;
});





json.filter(x => x["Présence d'animaux"]);

json.forEach(x => {
	if (x["Présence d'animaux"]) x.nbElemCorrect++;
});





json.filter(x => x["Herbe (un minimum) / Sable"]);

json.forEach(x => {
	if (x["Herbe (un minimum) / Sable"]) x.nbElemCorrect++;
});





json.filter(x => x["Verdure / Plante Espace Vert"]);

json.forEach(x => {
	if (x["Verdure / Plante Espace Vert"]) x.nbElemCorrect++;
});






json.filter(x => x["CRAPA"]);

json.forEach(x => {
	if (x["CRAPA"]) x.nbElemCorrect++;
});






json.filter(x => x["Terrains de sport"]);

json.forEach(x => {
	if (x["Terrains de sport"]) x.nbElemCorrect++;
});





json.filter(x => x["Activités organisées"]);

json.forEach(x => {
	if (x["Activités organisées"]) x.nbElemCorrect++;
});





json.filter(x => x["Élément de culture"]);

json.forEach(x => {
	if (x["Élément de culture"]) x.nbElemCorrect++;
});





// TODO Définir la détection des horraires
json.filter(x => x["Horaires d'ouverture"]);


// TODO Avoir une gestion de l'âge par rapport à l'écart à la tranche d'âge
json.filter(x => x["Âge"]);

// TODO Définir Qu'est ce qu'un grand/moyen/petit parc

json.filter(x => x["Taille (m^2)"]);

*/






json.filter(x => x["Informations complémentaires"]);

json.forEach(x => {
    if (x["Informations complémentaires"]) x.nbElemCorrect++;
});



json.filter(x => x["Gardien"]);

json.forEach(x => {
    if (x["Gardien"]) x.nbElemCorrect++;
});



json.filter(x => x["Jeux pour enfants"]);

json.forEach(x => {
    if (x["Jeux pour enfants"]) x.nbElemCorrect++;
});



json.filter(x => x["Pataugeoire"]);

json.forEach(x => {
    if (x["Pataugeoire"]) x.nbElemCorrect++;
});



json.filter(x => x["Sanitaires"]);

json.forEach(x => {
    if (x["Sanitaires"]) x.nbElemCorrect++;
});



json.filter(x => x["Sanitaires pour handicapés"]);

json.forEach(x => {
    if (x["Sanitaires pour handicapés"]) x.nbElemCorrect++;
});



json.filter(x => x["Jardin clos"]);

json.forEach(x => {
    if (x["Jardin clos"]) x.nbElemCorrect++;
});




json.filter(x => x["Abris"]);

json.forEach(x => {
    if (x["Abris"]) x.nbElemCorrect++;
});






json.filter(x => x["Point d'eau"]);

json.forEach(x => {
    if (x["Point d'eau"]) x.nbElemCorrect++;
});





json.filter(x => x["Table pique-nique"]);

json.forEach(x => {
    if (x["Table pique-nique"]) x.nbElemCorrect++;
});





json.filter(x => x["Accès transports en commun"]);

json.forEach(x => {
    if (x["Accès transports en commun"]) x.nbElemCorrect++;
});





json.filter(x => x["Bancs"]);

json.forEach(x => {
    if (x["Bancs"]) x.nbElemCorrect++;
});



json.filter(x => x["Accès Parking"]);

json.forEach(x => {
    if (x["Accès Parking"]) x.nbElemCorrect++;
});





json.filter(x => x["Restauration"]);

json.forEach(x => {
    if (x["Restauration"]) x.nbElemCorrect++;
});





json.filter(x => x["Présence d'animaux"]);

json.forEach(x => {
    if (x["Présence d'animaux"]) x.nbElemCorrect++;
});





json.filter(x => x["Herbe (un minimum) / Sable"]);

json.forEach(x => {
    if (x["Herbe (un minimum) / Sable"]) x.nbElemCorrect++;
});





json.filter(x => x["Verdure / Plante Espace Vert"]);

json.forEach(x => {
    if (x["Verdure / Plante Espace Vert"]) x.nbElemCorrect++;
});






json.filter(x => x["CRAPA"]);

json.forEach(x => {
    if (x["CRAPA"]) x.nbElemCorrect++;
});






json.filter(x => x["Terrains de sport"]);

json.forEach(x => {
    if (x["Terrains de sport"]) x.nbElemCorrect++;
});





json.filter(x => x["Activités organisées"]);

json.forEach(x => {
    if (x["Activités organisées"]) x.nbElemCorrect++;
});





json.filter(x => x["Élément de culture"]);

json.forEach(x => {
    if (x["Élément de culture"]) x.nbElemCorrect++;
});





// TODO Définir la détection des horraires
json.filter(x => x["Horaires d'ouverture"]);


// TODO Avoir une gestion de l'âge par rapport à l'écart à la tranche d'âge
json.filter(x => x["Âge"]);

// TODO Définir Qu'est ce qu'un grand/moyen/petit parc

json.filter(x => x["Taille (m^2)"]);

*/