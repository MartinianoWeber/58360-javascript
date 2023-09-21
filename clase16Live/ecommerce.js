let dbProductos = [

];
const DateTime = luxon.DateTime;
const baseUrl = "https://64ef7b6b219b3e2873c48fa2.mockapi.io"

const formulario = document.querySelector("#formulario");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const btnAddProduct = document.querySelector("#btnAddProduct");
// SELECT DE VENDER PRODUCTO
const productSelect = document.querySelector("#productSelect");
const sellProduct = document.querySelector("#sellProduct");
// select eliminar producto 
const eliminarProducto = document.querySelector("#deleteProductSelect");
const deleteProduct = document.querySelector("#deleteProduct");
// CARRITO
const productList = document.querySelector("#productList");
// Total
const total = document.querySelector("#total");
const arrayCarrito = [];
// EDITAR
const btnEditProduct = document.querySelector("#btnEditProduct");
const btnEnviarProducto = document.querySelector("#btnEnviarProducto");
// COMPRAR PRODUCTOS
const btnContenedor = document.querySelector("#btnContenedor");
const contenedorFormularioPagar = document.querySelector("#contenedorFormularioPagar");

// Validar 
let validarEdit = false;


async function fetchWithAwait() {
    const resp = await fetch(`${baseUrl}/partesAuto?orderby=nombre&order=desc`)
    const data = await resp.json()
    dbProductos = []
    console.log(data)
    data.forEach(producto => {
        dbProductos.push(producto)
    })
}




// AGREGAR PRODUCTO
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const producto = {
        nombre: name.value,
        precio: price.value,
        description: description.value,
        img: "https://picsum.photos/200/300",
        tipo: "parte",
    };

    agregarProducto(producto);
});

// VENDER PRODUCTO

sellProduct.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = productSelect.value;

    agregarProducto(buscarProducto(id, dbProductos));
});

// DELETE PRODUCT

deleteProduct.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = eliminarProducto.value;

    eliminarUnProducto(id);
});

// EDITAR PRODUCTO
btnEditProduct.addEventListener("click", (e) => {

    if (productSelect.value != "") {
        validarEdit = true;
        const producto = buscarProducto(productSelect.value, dbProductos)
        name.value = producto.nombre
        price.value = producto.precio
        description.value = producto.description

    }
})

btnEnviarProducto.addEventListener("click", (e) => {
    if (validarEdit) {
        const producto = {
            nombre: name.value,
            precio: price.value,
            description: description.value,
            img: "https://picsum.photos/200/300",
            tipo: "parte",
        };
        editarProducto(producto, productSelect.value)
    }
})



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
        <img src="${producto.img ? producto.img : "No hay"}" alt="">
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
    console.log(dbProductos)
    dbProductos.forEach((producto) => {
        productSelect.innerHTML += `<option value="${producto.id}">${producto.nombre}</option>`;
    });


    eliminarProducto.innerHTML = '<option value="" disabled selected>Seleccione un producto</option>';
    dbProductos.forEach((producto) => {
        eliminarProducto.innerHTML += `<option value="${producto.id}">${producto.nombre}</option>`;
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


document.addEventListener("DOMContentLoaded", async () => {
    await fetchWithAwait()

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

async function eliminarUnProducto(id) {
    const resp = await fetch(`${baseUrl}/partesAuto/${id}`, {
        method: "DELETE"
    })
    const data = await resp.json()

    await fetchWithAwait()
    rederizarSelect()
}

async function agregarProducto(objeto) {
    const resp = await fetch(`${baseUrl}/partesAuto`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto)
    })
    const data = await resp.json()
    if (data) {
        await fetchWithAwait()
        rederizarSelect()
    }
}

async function editarProducto(objeto, id) {
    const resp = await fetch(`${baseUrl}/partesAuto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto)
    })
    const data = await resp.json()
    if (data) {
        await fetchWithAwait()
        rederizarSelect()
    }
}

// prueba tecnica

// console.log(1)
// setTimeout(() =>
//     console.log(2)
// )
// Promise.resolve().then(() => console.log(3))
// Promise.resolve().then(() => setTimeout(() => console.log(4)))
// Promise.resolve().then(() => console.log(5))
// setTimeout(() => console.log(6))
// console.log(7)




// function fetchAndThen() {
//     fetch(`${baseUrl}/partesAuto`).then((res) => res.json()).then((res) => console.log("DESDE MOCKAPI", res))
// }
// fetchAndThen()
// function fetchAndThenWithJson() {
//     fetch("./productos.json").then((res) => res.json()).then((res) => console.log('DESDE JSON', res))
// }
// fetchAndThenWithJson()

// async function fetchWithAwait() {
//     try {
//         const resp = await fetch(`${baseUrl}/partesAut`)
//         const data = await resp.json()
//         if (data.status != 404) {
//             throw new Error("No se pudo obtener el recurso")
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }

// fetchWithAwait()



// let baseString;


// NUESTROINPUTDETIPOFILE.addEventListener("change", (e) => {
//   selectedFile = e.target.files[0];
//   if (!selectedFile) return;
//   const reader = new FileReader();
//   reader.onloadend = function () {
//     baseString = reader.result;
//   };
//   reader.readAsDataURL(selectedFile);
// });

// function convertirBase64(data) {
//     const files = []; // Crear un array para almacenar los datos base64

//     data.forEach((item) => {
//         let base64String = item.base64File;
//         files.push(base64String);
//     });

//     // Llamar a la función para agregar las imágenes al slider
//     addSlider(files);
// }