import { myMap } from './mapaInicializacion.js';

// Función para limpiar los datos del formulario
function limpiar() {
    document.getElementById('lat').value = '';
    document.getElementById('lng').value = '';
    document.getElementById('tipoServicio').value = '';

    // Elimina cualquier marcador presente en el mapa
    myMap.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
            myMap.removeLayer(layer);
        }
    });
}

export { limpiar };
