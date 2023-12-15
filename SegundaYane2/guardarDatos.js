// Importar las funciones necesarias de las bibliotecas
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import { GeoPoint } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCnc2Ihcsq_OBaVLv_H490GZ7qc-58blQE",
    authDomain: "coordenadas-e3d44.firebaseapp.com",
    projectId: "coordenadas-e3d44",
    storageBucket: "coordenadas-e3d44.appspot.com",
    messagingSenderId: "677442679283",
    appId: "1:677442679283:web:8f0a2818b8092e47046286",
    measurementId: "G-WH6FT2PS2Y"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Conexión a Firebase establecida correctamente.");

// Escuchar el evento de envío del formulario
document.getElementById('coord-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Obtener latitud y longitud
    const latitud = parseFloat(document.getElementById('lat').value);
    const longitud = parseFloat(document.getElementById('lng').value);
  
    // Obtener el tipo de servicio seleccionado
    const tipoServicio = document.getElementById('tipoServicio').value;
  
    // Crear un objeto GeoPoint
    const ubicacion = new GeoPoint(latitud, longitud);
  
    try {
        // Añadir documento a la colección 'cor' en Firebase
        const docRef = await addDoc(collection(db, 'cor'), {
            ubicacion,
            tipoServicio
        });
        e.target.reset();
        alert('Los datos se han registrado correctamente en Firebase.');
    } catch (error) {
        console.error('Error al registrar datos en Firebase:', error);
        alert('Ocurrió un error al registrar los datos en Firebase.');
    }
});