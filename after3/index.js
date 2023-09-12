const dbProductos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1000,
        imagen: "https://via.placeholder.com/150",
        tipo: "celulares"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 2000,
        imagen: "https://via.placeholder.com/150",
        tipo: "celulares"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 3000,
        imagen: "https://via.placeholder.com/150",
        tipo: "auto"
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 4000,
        imagen: "https://via.placeholder.com/150",
        tipo: "auto"
    },
]
const carrito = []

const productos = document.querySelectorAll(".productos")
const carritoSelector = document.querySelector("#carrito")

function crearTemplate() {
    productos.forEach((producto) => {
        producto.innerHTML = ""

        dbProductos.forEach((productoItem) => {
            const { id, nombre, precio, imagen } = productoItem
            const productoTarjeta = `
            <div class="producto">
            <img src="${imagen}" alt="Producto 2" />
            <h2>${nombre}</h2>
            <p>Precio: $${precio}</p>
            <button class="btnAgregar" id="${id}">Añadir al Carrito</button>
          </div>
            `
            if (producto.id == "celulares" && productoItem.tipo == "celulares") {
                producto.innerHTML += productoTarjeta
            } else if (producto.id == "autos" && productoItem.tipo == "auto") {
                producto.innerHTML += productoTarjeta
            }
        })
    })
}


crearTemplate()
// renderizarCarrito()

// document.addEventListener("click", (e) => {
//     const btnAgregar = document.querySelectorAll(".btnAgregar")
//     const btnEliminar = document.querySelectorAll(".btnEliminar")
//     btnAgregar.forEach((btn) => {
//         if (e.target == btn) {
//             const id = parseInt(e.target.id)
//             // WAY 1
//             // const producto = dbProductos.map((producto) => producto.id).indexOf(id)
//             // agregarAlCarrito(producto)
//             // WAY 2
//             const producto = dbProductos.find((producto) => producto.id === id)
//             agregarAlCarrito(producto)
//         }
//         // btn.addEventListener("click", (e) => {
//         //     console.log(e.target.id)
//         // })
//     })
//     btnEliminar.forEach((btnBorrar) => {
//         if (e.target == btnBorrar) {
//             const id = e.target.id
//             const idSinEliminar = id.replace("Eliminar", "")
//             const productoBusqueda = carrito.map((producto) => producto.id).indexOf(parseInt(idSinEliminar))
//             eliminarDelCarrito(productoBusqueda)
//         }
//     })

//     // , { once: true }
// })

// function agregarAlCarrito(producto) {
//     const productoBusqueda = carrito.find((productoCarrito) => productoCarrito.id === producto.id)
//     if (productoBusqueda) {
//         productoBusqueda.cantidad++
//     } else {
//         carrito.push(
//             {
//                 ...producto,
//                 cantidad: 1
//             }
//         )
//     }
//     localStorage.setItem("carrito", JSON.stringify(carrito))
//     renderizarCarrito()
// }

// function eliminarDelCarrito(id) {
//     console.log(carrito[id].cantidad)
//     if (carrito[id].cantidad > 1) {
//         carrito[id].cantidad--
//     } else {
//         carrito.splice(id, 1)
//     }
//     localStorage.setItem("carrito", JSON.stringify(carrito))
//     renderizarCarrito()
// }

// function renderizarCarrito() {
//     carritoSelector.innerHTML = ""
//     carrito.length > 0 ? carrito.forEach((producto) => {
//         const { id, nombre, precio, cantidad } = producto
//         carritoSelector.innerHTML += `
//         <li class="producto-carrito">${nombre} - $${precio} - Cantidad: ${cantidad} <button class="btnEliminar" id="${id}Eliminar">X</button></li>
//         `
//     }) : carritoSelector.innerHTML += `
//     <p>  No hay productos en el carrito</p>
//     `



// }


// document.addEventListener("DOMContentLoaded", () => {
//     const carritoSinParse = localStorage.getItem("carrito") || []
//     const carritoParse = JSON.parse(carritoSinParse)
//     console.log(...carritoParse)
//     carritoParse.length > 0 ? carrito.push(...carritoParse) : null
//     console.log(carrito)
//     renderizarCarrito()
// })