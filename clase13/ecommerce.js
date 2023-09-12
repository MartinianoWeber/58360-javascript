const dbProductos = [
    {
        id: 1,
        nombre: "Remera",
        precio: 1000,
        imagen: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        nombre: "Pantalon",
        precio: 2000,
        imagen: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        nombre: "Zapatillas",
        precio: 3000,
        imagen: "https://via.placeholder.com/150",
    },
];

const formulario = document.querySelector("#formulario");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const btnAddProduct = document.querySelector("#btnAddProduct");
// SELECT DE VENDER PRODUCTO
const productSelect = document.querySelector("#productSelect");
const sellProduct = document.querySelector("#sellProduct");
// CARRITO
const productList = document.querySelector("#productList");
// Total
const total = document.querySelector("#total");
const arrayCarrito = [];
// AGREGAR PRODUCTO
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const producto = {
        id: Date.now(),
        nombre: name.value,
        precio: price.value,
        description: description.value,
    };

    dbProductos.push(producto);
    rederizarSelect();
});

// VENDER PRODUCTO

sellProduct.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = productSelect.value;

    agregarProducto(buscarProducto(id, dbProductos));
});

function buscarProducto(id, array) {
    const producto = array.find((producto) => producto.id == id);
    return producto;
}

function agregarProducto(producto) {
    if (producto) {
        const productoEncontrado = buscarProducto(producto.id, arrayCarrito);
        if (productoEncontrado) {
            productoEncontrado.cantidad++;
            console.log(arrayCarrito);
        } else {
            arrayCarrito.push({
                ...producto,
                cantidad: 1,
            });

        }
        renderizarCarrito();
        totalCarrito()
        localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
    }
}

function renderizarCarrito() {
    productList.innerHTML = "";
    arrayCarrito.forEach((producto) => {
        productList.innerHTML += `
        <div class="card">
        <img src="${producto.imagen ? producto.imagen : "No hay"}" alt="">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.description ? producto.description : "No hay"
            }</p>
                <p class="card-text">${producto.precio}</p>
                <p class="card-text">${producto.cantidad}</p>
                <button class="btn btn-danger btnBorrar" id="${producto.id}">Eliminar</button>
            </div>
        </div>
        `;
    });
}


// RENDERIZA EL SELECT

function rederizarSelect() {
    productSelect.innerHTML =
        '<option value="" disabled selected>Seleccione un producto</option>';
    dbProductos.forEach((producto) => {
        productSelect.innerHTML += `<option value="${producto.id}">${producto.nombre}</option>`;
    });
}


// BORRAR PRODUCTO

function borrarProducto(id) {
    const producto = buscarProducto(id, arrayCarrito);
    if (producto.cantidad > 1) {
        producto.cantidad--;
    } else {
        const index = arrayCarrito.indexOf(producto);
        arrayCarrito.splice(index, 1);
    }
    renderizarCarrito();
    localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
}

document.addEventListener("click", (e) => {
    const btnBorrar = document.querySelectorAll(".btnBorrar");
    btnBorrar.forEach((btn) => {
        if (e.target == btn) {
            const id = e.target.id;
            borrarProducto(id)
            totalCarrito()
        }
    });
});

function totalCarrito() {
    const totalFinal = arrayCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
    total.innerHTML = totalFinal
}

document.addEventListener("DOMContentLoaded", () => {
    rederizarSelect();
    const carritoStorage = JSON.parse(localStorage.getItem("carrito")) || []
    if (carritoStorage.length > 0) {
        carritoStorage.forEach(producto => {
            arrayCarrito.push(producto)
        })
        renderizarCarrito()
        totalCarrito()
    } else {
        alert("No hay productos en el carrito")
    }

});




