import { myMap } from './mapaInicializacion.js';

// Función para ubicar un lugar en el mapa
function ubicar() {
    var latitud = parseFloat(document.getElementById('lat').value);
    var longitud = parseFloat(document.getElementById('lng').value);

    // Verifica si las coordenadas son válidas
    if (isNaN(latitud) || isNaN(longitud)) {
        alert('Por favor, ingrese coordenadas válidas.');
        return;
    }

    // Crea un marcador en las coordenadas especificadas
    var marker = L.marker([latitud, longitud]).addTo(myMap);

    // Centra el mapa en las coordenadas con un zoom de 10
    myMap.setView([latitud, longitud], 10);
}

export { ubicar };
