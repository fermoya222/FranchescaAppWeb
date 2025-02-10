// index.js
import { renderizarHTML, showCategory, cargarJSON } from './funciones.js';

let catalogo;
const contenedor = document.getElementById('id-productos');

cargarJSON('./json/productos.json').then(datos => {
    catalogo = datos;
    renderizarHTML(catalogo.producto, contenedor);
}).catch(error => {
    console.error('Error al cargar los datos:', error);
});

// Hacer que la función showCategory sea accesible globalmente
window.showCategory = showCategory;

// //sidebar ---------------------------
// function showCategory(category) {
//     var products = document.getElementsByClassName('product');
//     for (var i = 0; i < products.length; i++) {
//         products[i].style.display = 'none';
//     }
//     var selectedProducts = document.querySelectorAll(`.product[id="${category}"]`);
//     for (var i = 0; i < selectedProducts.length; i++) {
//         selectedProducts[i].style.display = 'block';
//     }
// }

// PRODUCTOS ---------------------------------------------
// const catalogo = {
//     productos: [
//         {
//             id: 'bikinis1',
//             categoria: 'bikinis',
//             imagen: 'img/bikini1.jpg',
//             titulo: 'Bikini',
//             descripcion: 'Bikini "Angra" (art. 101)',
//         },
//         {
//             id: 'bikinis2',
//             categoria: 'bikinis',
//             imagen: 'img/bikini2.jpg',
//             titulo: 'Bikini',
//             descripcion: 'Bikini "Fenicia" (art. 102)',
//         },
//         {
//             id: 'bikinis3',
//             categoria: 'bikinis',
//             imagen: 'img/bikini3.jpg',
//             titulo: 'Bikini',
//             descripcion: 'Bikini "Alika" (art. 103)',
//         },
//         {
//             id: 'bikinis4',
//             categoria: 'bikinis',
//             imagen: 'img/bikini4.jpg',
//             titulo: 'Bikini',
//             descripcion: 'Bikini "Malika" (art. 104)',
//         },
//         {
//             id: 'lenceria1',
//             categoria: 'lenceria',
//             imagen: 'img/lenceria1.jpg',
//             titulo: 'Lencería',
//             descripcion: 'Conjunto "Kiana" (art. 201)',
//         },
//         {
//             id: 'lenceria2',
//             categoria: 'lenceria',
//             imagen: 'img/lenceria2.jpg',
//             titulo: 'Lencería',
//             descripcion: 'Conjunto "Maikala" (art. 202)',
            
//         },
//         {
//             id: 'lenceria3',
//             categoria: 'lenceria',
//             imagen: 'img/lenceria3.jpg',
//             titulo: 'Lencería',
//             descripcion: 'Conjunto "Electra" (art. 203)',
            
//         },
//         {
//             id: 'lenceria4',
//             categoria: 'lenceria',
//             imagen: 'img/lenceria4.jpg',
//             titulo: 'Lencería',
//             descripcion: 'Conjunto "Viena" (art. 204)',
            
//         }
//     ],
// }
console.log(catalogo);

// // FUNCIONES ------------------------------
// function renderizarHTML(arregloProductos, contenedor) {
//     let html = '';
//     arregloProductos.forEach((producto) => {
//         html += `
//             <article class="content">
//                 <div id="${producto.id}" class="product">
//                     <img src="${producto.imagen}" alt="${producto.titulo}">
//                     <h2>${producto.titulo}</h2>
//                     <p>${producto.descripcion}</p>
//                     <button class="btncarrito">Agregar al carrito</button>
//                 </div>
//             </article>
//         `;
//     });
//     // Insertamos el HTML generado en el contenedor especificado
//     contenedor.innerHTML = html;
// }
// renderizarHTML(catalogo.productos, contenedor);

