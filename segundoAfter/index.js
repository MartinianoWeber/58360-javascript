const dbProductos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1000,
        stock: 10
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 2000,
        stock: 20
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 3000,
        stock: 30
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 4000,
        stock: 40
    },
]

const dbProductosPc = [
    {
        id: 1,
        nombre: "Mother",
        precio: 1000,
        tipo: "mother",
        stock: 10
    },
    {
        id: 2,
        nombre: "Procesador",
        precio: 2000,
        tipo: "procesador",
        stock: 20
    },
    {
        id: 3,
        nombre: "Ram",
        precio: 3000,
        tipo: "ram",
        stock: 30
    },
    {
        id: 4,
        nombre: "Placa de video",
        precio: 4000,
        tipo: "placaDeVideo",
        stock: 40
    },
    {
        id: 5,
        nombre: "Disco duro",
        precio: 5000,
        tipo: "discoDuro",
        stock: 50
    },
    {
        id: 6,
        nombre: "Gabinete",
        precio: 6000,
        tipo: "gabinete",
        stock: 60
    },
    {
        id: 7,
        nombre: "Fuente",
        precio: 7000,
        tipo: "fuente",
        stock: 70
    },
    {
        id: 8,
        nombre: "Procesador AMD",
        precio: 3000,
        tipo: "procesador",
        stock: 20
    },
    {
        id: 9,
        nombre: "Mother AMD",
        precio: 1000,
        tipo: "mother",
        stock: 10
    },

]
let trueOrFalse = true;
let carrito = [

]


function initProgram() {
    while (trueOrFalse) {
        const selection = parseInt(prompt("Ingrese 1 para ver los productos\n Ingrese 2 para comprar\n Ingrese 3 para armar una pc \n Ingrese 4 para salir"));
        switch (selection) {
            case 1:
                showProducts();
                break;
            case 2:
                comprar()
                break;
            case 3:
                buscarProcesador()

                break;
            case 4:
                trueOrFalse = false;

                break;
            default:
                alert("No es una opcion valida")
                break;
        }
    }
}

function showProducts() {
    let products = "";
    dbProductos.forEach((producto, index) => {
        products += `\n${index + 1} El producto ${producto.nombre} tiene un precio de ${producto.precio} y un stock de ${producto.stock}`
    })
    alert(products)
}

function comprar() {
    showProducts()
    const seleccion = parseInt(prompt("Ingrese la posición del producto que desea comprar"))
    let resultado
    switch (seleccion) {
        case 1:
            resultado = buscarProducto(1)
            break;
        case 2:
            resultado = buscarProducto(2)
            break;
        case 3:
            resultado = buscarProducto(3)
            break;
        case 4:
            resultado = buscarProducto(4)
            break;
        default:
            alert("No es una opcion valida")
            comprar()
            break;
    }

    if (resultado) {
        procesoCompra(resultado)
    } else {
        comprar()
    }
}
function procesoCompra(producto) {
    let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto.nombre} que desea comprar`))
    if (cantidad > producto.stock) {
        alert("No hay stock suficiente")
        procesoCompra(producto)
    } else if (cantidad <= producto.stock) {
        let total = cantidad * producto.precio
        alert(`El total de su compra es de ${total}`)
        const productoComprado = {
            ...producto,
            stock: cantidad,
            precio: total
        }
        carrito.push(productoComprado)
        bajarStock(productoComprado)
        seguirComprando()
    }
}
function seguirComprando() {
    const seguir = prompt("Desea seguir comprando? si/no")
    if (seguir == "si") {
        comprar()
    } else if (seguir == "no") {
        procesoFacturacion()
        initProgram()
    } else {
        alert("No es una opcion valida")
        seguirComprando()
    }
}
function bajarStock(productoComprado) {
    dbProductos.forEach((producto) => {
        if (productoComprado.id == producto.id) {
            producto.stock = producto.stock - productoComprado.stock
        }
    })
}
function buscarProducto(id) {
    const producto = dbProductos.find((producto) => {
        return producto.id == id
    })
    if (producto) {
        return producto
    } else {
        alert("No se encontro el producto")
    }

}
function procesoFacturacion() {
    const total = carritoTotal()
    alert(`El total de su compra es de ${total}`)

    const llevar = prompt("Desea llevarse los productos? si/no")

    if (llevar == "si") {
        alert("Gracias por su compra")
    } else {
        borrarProductos()
    }
}
function carritoTotal() {
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    return total
}
function borrarProductos() {
    const borrar = prompt("Desea borrar los productos del carrito? si/no")
    if (borrar == "si") {
        muestreoCarrito()
        const id = parseInt(prompt("Ingrese el id del producto que desea borrar"))
        borrarProducto(id)

    }


}
function muestreoCarrito() {
    let carritoString = ""
    carrito.forEach((producto) => {
        carritoString += `\n${producto.id} - ${producto.nombre} ${producto.precio}`
    })
    alert(carritoString)
}
function borrarProducto(id) {
    const producto = buscarProductoCarrito(id)
    if (producto) {
        devolverStock(producto)
        carrito = carrito.filter((productosDb) =>
            productosDb.id != producto.id
        )
        muestreoCarrito()
        showProducts()
    }
    procesoFacturacion()
}
function buscarProductoCarrito(id) {
    const producto = carrito.find((producto) => {
        return producto.id == id
    })
    if (producto) {
        return producto
    } else {
        alert("No se encontro el producto")
    }
}
function devolverStock(productoEliminado) {
    dbProductos.forEach((producto) => {
        if (productoEliminado.id == producto.id) {
            console.log(producto.stock)
            producto.stock = producto.stock + productoEliminado.stock
            console.log(producto.stock)
            console.log(productoEliminado.stock)
        }
    })

}




function buscarProcesador() {
    let procesador = dbProductosPc.filter((producto) => producto.tipo == "procesador")
    mostrarProductosPc(procesador)
    const seleccion = parseInt(prompt("Ingrese la posición del procesador que desea comprar"))
    switch (seleccion) {
        case 1:
            carrito.push(
                procesador[0]
            )
            buscarMother()
            break;
        case 2:
            carrito.push(
                procesador[1]
            )
            buscarMother()
            break;
        default:
            alert("No es una opcion valida")
            buscarProcesador()
            break;
    }
}

function buscarMother() {
    let mother = dbProductosPc.filter((producto) => producto.tipo == "mother")
    mostrarProductosPc(mother)
    const seleccion = parseInt(prompt("Ingrese la posición del mother que desea comprar"))
    switch (seleccion) {
        case 1:
            carrito.push(
                mother[0]
            )
            buscarRam()
            break;
        case 2:
            carrito.push(
                mother[1]
            )
            buscarRam()
            break;
        default:
            alert("No es una opcion valida")
            buscarMother()
            break;
    }
}

function buscarRam() {
    let ram = dbProductosPc.filter((producto) => producto.tipo == "ram")
    mostrarProductosPc(ram)
    const seleccion = parseInt(prompt("Ingrese la posición de la ram que desea comprar"))
    switch (seleccion) {
        case 1:
            carrito.push(
                ram[0]
            )
            buscarPlacaDeVideo()
            break;
        default:
            alert("No es una opcion valida")
            buscarRam()
            break;

    }
}

function buscarPlacaDeVideo() {
    let placaDeVideo = dbProductosPc.filter((producto) => producto.tipo == "placaDeVideo")
    mostrarProductosPc(placaDeVideo)
    const seleccion = parseInt(prompt("Ingrese la posición de la placa de video que desea comprar"))
    switch (seleccion) {
        case 1:
            carrito.push(
                placaDeVideo[0]
            )
            buscarDiscoDuro()
            break;
        default:
            alert("No es una opcion valida")
            buscarPlacaDeVideo()
            break;
    }
}

function buscarDiscoDuro() {
    let discoDuro = dbProductosPc.filter((producto) => producto.tipo == "discoDuro")
    mostrarProductosPc(discoDuro)
    const seleccion = parseInt(prompt("Ingrese la posición del disco duro que desea comprar"))
    switch (seleccion) {
        case 1:
            carrito.push(
                discoDuro[0]
            )
            buscarGabinete()
            break;
        default:
            alert("No es una opcion valida")
            buscarDiscoDuro()
            break;
    }
}

function buscarGabinete() {
    let gabinete = dbProductosPc.filter((producto) => producto.tipo == "gabinete")
    mostrarProductosPc(gabinete)
    const seleccion = parseInt(prompt("Ingrese la posición del gabinete que desea comprar"))
    switch (seleccion) {
        case 1:
            carrito.push(
                gabinete[0]
            )
            buscarFuente()
            break;
        default:
            alert("No es una opcion valida")
            buscarGabinete()
            break;
    }
}

function buscarFuente() {
    let fuente = dbProductosPc.filter((producto) => producto.tipo == "fuente")
    mostrarProductosPc(fuente)
    const seleccion = parseInt(prompt("Ingrese la posición de la fuente que desea comprar"))
    switch (seleccion) {
        case 1:
            carrito.push(
                fuente[0]
            )
            procesoFacturacion()
            break;
        default:
            alert("No es una opcion valida")
            buscarFuente()
            break;
    }
}



function mostrarProductosPc(arrayProductos) {
    let products = "";
    arrayProductos.forEach((producto, index) => {
        products += `\n${index + 1} El producto ${producto.nombre} tiene un precio de ${producto.precio} y un stock de ${producto.stock}`
    })
    alert(products)
}

initProgram()