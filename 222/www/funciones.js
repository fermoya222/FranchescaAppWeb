// funciones.js
function renderizarHTML(arregloProductos, contenedor) {
    let html = '';
    arregloProductos.forEach((producto) => {
        html += `
            <article class="content">
                <div id="${producto.id}" class="product">
                    <img src="${producto.imagen}" alt="${producto.titulo}">
                    <h2>${producto.titulo}</h2>
                    <p>${producto.descripcion}</p>
                    <button class="btncarrito">Agregar al carrito</button>
                </div>
            </article>
        `;
    });
    contenedor.innerHTML = html;
}



function showCategory(category) {
    var products = document.getElementsByClassName('product');
    
    // Ocultar todos los productos
    for (var i = 0; i < products.length; i++) {
        products[i].style.display = 'none';
    }

    // Seleccionar los productos que coincidan con la categoría
    var selectedProducts = document.querySelectorAll(`.product[id="${category}"]`);
    
    // Mostrar solo los productos seleccionados
    for (var i = 0; i < selectedProducts.length; i++) {
        selectedProducts[i].style.display = 'block';
    }
}


async function cargarJSON(ruta) {
    try {
        const respuesta = await fetch(ruta);
        const datosJSON = await respuesta.json();
        return datosJSON;
    } catch (error) {
        console.error('Error cargando el JSON:', error);
        throw error;
    }
}
// export{renderizarHTML,cargarJSON}