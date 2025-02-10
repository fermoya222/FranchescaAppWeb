import {
    obtenerParametroId,
    procesarFormulario,
    enviarDatos,
    renderizarBikini,
    eliminarRegistro,
} from './funciones.js';
// ---------------------------------------------------------
const id = obtenerParametroId();
const formulario = document.getElementById('form-editar');
const botonEliminar = document.getElementById('eliminar-registro');
const mensajes = document.getElementById('mensajes');

// Asignar escuchador evento boton eliminar
botonEliminar.addEventListener('click', async (evento) => {
    evento.preventDefault();
    const mensajeRespuesta = await eliminarRegistro('http://localhost:3000/api//eliminarBikini' + id);
    // Respuestas
    const { mensaje } = mensajeRespuesta;
    if (mensajeRespuesta.ok) {
        formulario.reset();
    } else {
        console.log(mensaje);
    }
    mensajes.innerHTML = mensaje;
});

// Asignar escuchador evento enviar formulario (submit)
formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    // Obtener datos formulario
    const datosFormulario = procesarFormulario(formulario);
    // Enviar datos al back
    const mensajeRespuesta = await enviarDatos(
        'http://localhost:3000/api//modificarBikini' + id,
        'PUT',
        datosFormulario
    );
    // Respuestas
    const { mensaje } = mensajeRespuesta;
    mensajes.innerHTML = mensaje;
});

// Renderizar bikini
renderizarBikini('http://localhost:3000/api/obtenerBikinis/' + id, formulario);
