export function procesarFormulario(formulario) {
    const datosFormulario = new FormData(formulario);
    return Object.fromEntries(datosFormulario);
}

export function obtenerParametroId() {
    const params = new URL(location.href).searchParams;
    return params.get('id');
}

export async function enviarDatos(ruta, metodo, datos) {
    const respuesta = await fetch(ruta, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: metodo,
        body: JSON.stringify(datos),
    });
    return await respuesta.json();
}

export async function eliminarRegistro(ruta) {
    if (confirm('¿Eliminar bikini?')) {
        const respuesta = await fetch(ruta, {
            method: 'DELETE',
        });
        return await respuesta.json();
    } else {
        return;
    }
}

export async function renderizarBikini(ruta, formulario) {
    try {
        const resultado = await fetch(ruta);
        console.log(resultado)
        const bikini = await resultado.json();
        if (resultado.ok) {
            // Llenar formulario
            formulario.nombre.value = bikini[0].nombre;
            formulario.descripcion.value = bikini[0].descripcion;
            formulario.articulo.value = bikini[0].art;
            formulario.categoria.value = bikini[0].categoria;
            formulario.disponibilidad.value = bikini[0].disponibilidad;
            formulario.imagen.value = bikini[0].imagen;
        } else {
            console.log('Bikini no encontrado');
        }
    } catch (error) {
        console.log(error);
    }
}

export async function renderizarBikinis(ruta) {
    try {
        const resultado = await fetch(ruta);
        const arregloBikinis = await resultado.json();
        if (resultado.ok) {
            const contenedorBikinis = document.getElementById('contenedor-bikinis');
            let filas = '';
            arregloBikinis.forEach(bikini => {
                filas += `
                    <tr>
                        <td>${bikini.nombre}</td>
                        <td>${bikini.descripcion}</td>
                        <td>${bikini.art}</td>
                        <td>${bikini.categoria}</td>
                        <td>${bikini.disponibilidad}</td>
                        <td><img src="${bikini.imagen}" alt="${bikini.nombre}" width="50"></td>
                        <td><a href="./editar.html?id=${bikini.id}">Editar</a></td>
                    </tr>
                `;
            });
            contenedorBikinis.innerHTML = filas;
        } else {
            console.log(arregloBikinis.mensaje);
        }
    } catch (error) {
        console.log(error);
    }
}
