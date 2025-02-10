import { procesarFormulario, enviarDatos } from './funciones.js';
// ----------------------------------------------
const formulario = document.getElementById('form-editar');
const mensajes = document.getElementById('mensajes');

// Asignar escuchador evento para enviar el formulario
formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    
    // Obtener los datos del formulario
    const datosFormulario = procesarFormulario(formulario);
    
    // Enviar los datos al backend para agregar un bikini
    const mensajeRespuesta = await enviarDatos(
        'http://localhost:3000/api/agregarBikini', // Cambiar la URL al endpoint adecuado para bikinis
        'POST',
        datosFormulario
    );
    
    const { mensaje, detail } = mensajeRespuesta;
    mensajes.innerHTML = mensaje + (detail || '');
    
    if (mensajeRespuesta.ok) {
        console.log(mensaje);
    } else {
        console.log(mensaje);
    }
});
