
var villes = [
    { nom: ' SIEGE SOCIAL<br>Treichville RUE 12 <br>Cell:(+225) 01 02 00 88 01',coords: [5.3599517, -4.0082563] },
    { nom: 'Yamoussoukro',coords: [6.8206, -5.2764] },
    { nom: 'Bouaké', coords:  [7.685474, -5.030857] },
    { nom: 'Daloa', coords:    [6.877, -6.450] },
    { nom: 'Korhogo', coords:   [9.458, -5.631] },
    { nom: 'San Pedro', coords: [4.7485, -6.6363] },
    { nom: 'Cocody', coords: [5.3500,	-3.9667] },
    { nom: 'Man', coords:    [7.4000,	-7.5500] },
    { nom: 'Koumassi', coords: [5.3000,	-3.9500] },
    { nom: 'Gagnoa', coords: [6.1333,	-5.9333] },
    { nom: 'Soubré', coords: [5.7833,	-6.6000] },
    { nom: 'Gagnoa', coords: [6.1333,	-5.9333] },
    { nom: 'Soubré', coords: [5.7833,	-6.6000] },
    { nom: 'Oumé', coords:   [6.3833,	-5.4167] },
    { nom: 'Duekoué', coords: [6.7333,	-7.3500] }, 
    { nom: 'Bingerville', coords:   [5.3500, -3.9000] },
    { nom: 'Divo', coords: [5.8333,	-5.3667] },
    { nom: 'Abengourou', coords: [6.7333, -3.4833] }, 
    { nom: 'Ferkessédougou', coords:   [9.5833, -5.2000] },
    { nom: 'Adzopé', coords: [6.1667, -3.9833] },
    { nom: 'Bondoukou', coords: [8.0333, -2.8000] }, 
    { nom: 'Dabou', coords:   [5.3167, -4.3833] },
    { nom: 'Agboville', coords: [5.9333, -4.2167] },


    { nom: 'Séguéla', coords: [7.9667,	-6.6667] },
    { nom: 'Daoukro', coords: [7.0500, -3.9667] }, 
    { nom: 'Aboisso', coords:   [5.4667, -3.2000] },
    { nom: 'Odienné', coords: [9.5000, -7.5667] },


    { nom: 'Grand-Bassam', coords: [5.2000, -3.7333] },
    { nom: 'Dimbokro', coords: [6.6500, -4.7000] }, 
    { nom: 'Bangolo', coords:   [7.0123, -7.4864] },
    { nom: 'Anyama', coords: [5.4946, -4.0518] },
    { nom: 'Méagui', coords: [5.4048, -4.0518] }
    ];

var map = L.map('map').setView([7.5400, -5.5471], 7); // Coordonnées approximatives du centre de la Côte d'Ivoire
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var markers = [];

villes.forEach((ville) => {
    var marker = L.marker(ville.coords).addTo(map);
    markers.push(marker);

    marker.bindTooltip(ville.nom, {
        permanent: false,
        direction: 'top',
        opacity: 0.7
    });

    marker.on('mouseover', function () {
        afficherTooltip(ville.nom);
    });

    marker.on('mouseout', function () {
        cacherTooltip();
    });
});

function afficherTooltip(nomVille) {
    var tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = nomVille;
    tooltip.style.display = 'block';
    setTimeout(() => {
        tooltip.style.display = 'none';
    }, 2000); // Cache le tooltip après 2 secondes (2000 millisecondes)
}

function cacherTooltip() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}
