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
const DateTime = luxon.DateTime;

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
// COMPRAR PRODUCTOS
const btnContenedor = document.querySelector("#btnContenedor");
const contenedorFormularioPagar = document.querySelector("#contenedorFormularioPagar");
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


    contenedorFormularioPagar.innerHTML =
        `
 <form id="form">
    <input name="nombre" id="nombre"  type="text" class="mb-1 mt-4" placeholder="Nombre y apellido" />
    <input name="mail" id="mail" type="text" class="mb-1" placeholder="Correo electrónico" />
    <input  name="direccion" id="direccion" type="text" class="mb-1" placeholder="Dirección" />
    <input name="telefono" id="telefono" type="text" class="mb-1" placeholder="Telefono" />
    <input type="text" class="inputProductos" name="productos" id="productos" style="display:none" />
    <div class="d-flex justify-content-end">
        <input id="btnCompra" type="submit" value="Comprar" class="btn btn-primary" />
    </div>
</form>
`


    const inputProductos = document.querySelector(".inputProductos")
    document.querySelector("#form").addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(inputProductos)
        const serviceID = 'default_service';
        const templateID = 'template_u18sfaa';

        arrayCarrito.forEach(producto => {
            inputProductos.value += `${producto.nombre} - ${producto.cantidad} \n`
        })


        Swal.fire({
            title: '¿Queres confirmar la compra?',
            text: "No puedes cancelar la misma!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si lo quiero',
            cancelButtonText: 'Cancelar',
            reverseButtons: true

        }).then((result) => {
            if (result.isConfirmed) {

                esperandoElPago().then((res) => {
                    Swal.fire(
                        'La recepcion del mail ha sido confirmada!',
                        res,
                        'success'
                    )
                    emailjs.sendForm(serviceID, templateID, document.querySelector("#form"))
                        .then(() => {
                            Toastify({
                                text: "Email enviado correctamente",
                                duration: 3000,
                                close: true,
                                gravity: "top", // `top` or `bottom`
                                position: "right", // `left`, `center` or `right`
                                stopOnFocus: true, // Prevents dismissing of toast on hover
                                style: {
                                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                                },
                                onClick: function () { } // Callback after click
                            }).showToast();
                        }, (err) => {
                            alert(JSON.stringify(err));
                        });
                }).catch((err) => {
                    Swal.fire(
                        'Error',
                        err,
                        'error'
                    )
                })


            } else {
                setTimeout(() => {
                    Swal.fire(
                        'Cancelado',
                        'Tu compra ha sido cancelada',
                        'error'
                    )
                }, 1000)
            }

        })
    })
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
    // BORRAR PRODUCTO
    const btnBorrar = document.querySelectorAll(".btnBorrar");
    btnBorrar.forEach((btn) => {
        if (e.target == btn) {
            const id = e.target.id;
            borrarProducto(id)
            totalCarrito()
        }
    });
});

console.dir(document.getElementById('formularioPagar'))


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
        Toastify({
            text: "No hay productos en el localStorage",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }

});


function esperandoElPago() {
    return new Promise((resolve, reject) => {
        const validarPago = Math.random() < 0.5; // Nos devulve true o false(ES ALEATORIO)
        setTimeout(() => {
            if (validarPago) {
                resolve("El pago fue exitoso");
            } else {
                reject("El pago no fue exitoso");
            }
        }, 3000);
    });
}



setInterval(1000, rederizarSelect);



// prueba tecnica

console.log(1)
setTimeout(() =>
    console.log(2)
)
Promise.resolve().then(() => console.log(3))
Promise.resolve().then(() => setTimeout(() => console.log(4)))
Promise.resolve().then(() => console.log(5))
setTimeout(() => console.log(6))
console.log(7)

// 1 3 5 7 2 4 6

