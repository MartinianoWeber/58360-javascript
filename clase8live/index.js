const dbProductos = [
    {
        id: 1,
        name: "Remera",
        price: 1000,
        color: "rojo"
    },
    {
        id: 2,
        name: "Pantalon",
        price: 2000,
        color: "blanco"
    },
    {
        id: 3,
        name: "Zapatillas",
        price: 3000,
        color: "blanco"
    },
    {
        id: 4,
        name: "Zapatillas",
        price: 5000,
        color: "rojo"
    },
]


let productosArr = [];
let carritoArr = [];
let turnosArr = [];
let trueOFalse = true;

class Producto {
    constructor(id, name, price, color) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color
    }
    iva() {
        return this.price * 0.21;
    }

}



function pushProductos() {
    for (const element of dbProductos) {
        productosArr.push(new Producto(element.id, element.name, element.price, element.color))
    }
}
pushProductos()

function initProgram() {
    while (trueOFalse) {
        let selectSection = prompt("¿Qué quieres hacer? \n 1. Ver productos con forOF \n 2. Ver productos con forOF y function \n 3. Ver promedio de valor por prenda en stock \n 4. Ver productos con forEach \n 5. Ver productos de la A a la Z\n 6. Buscar un producto \n 7. Buscar color \n 8. Buscar en la DB si existe un producto \n 9. Comprar un producto \n 10. Salir \n 11. buscar con MAP\n 12. calculadora de precios \n 13. Agendar turno");
        switch (selectSection) {
            case "1":
                showProductosFor()
                break
            case "2":
                showProductosForReturnFunction()
                break
            case "3":
                alert(`El promedio de valor por prenda en stock es de ${calcularPricePromedio(productosArr)}`)
                break
            case "4":
                verProductosForEach()
                break
            case "5":
                atoZ()
                break
            case "6":
                buscarProducto()
                break
            case "7":
                buscarColor()
                break
            case "8":
                buscarEnDB()
                break
            case "9":
                comprarProducto()
                break
            case "10":
                trueOFalse = false;
                break
            case "11":
                buscarProductoConMap()
                break
            case "12":
                calculadoraDePrecios()
            case "13":
                agendarTurno()
                break
            default:
                alert("No ingresaste una opción valida")
                selectSection = prompt("¿Qué quieres hacer? \n 1. Ver productos con forOF \n 2. Ver productos con forOF y function \n 3. Ver promedio de valor por prenda en stock \n 4. Ver productos con forEach \n 5. Ver productos de la A a la Z\n 6. Buscar un producto \n 7. Buscar color \n 8. Buscar en la DB si existe un producto \n 9. Comprar un producto \n 10. Salir \n 11. buscar con MAP\n 12. calculadora de precios \n 13. Agendar turno");
                break
        }
    }

}

// FUNCIONES POR PARAMETROS
function showProductosFor() {
    showProductosForFunction(productosArr, alert)
    alert("Fin de la lista");
    initProgram()
}
// RETONAR UNA FUNCION

function showProductosForReturnFunction() {
    showProductosForReturn(productosArr)(alert)
    alert("Fin de la lista");
    initProgram()
}

function showProductosForReturn(arr) {
    return (fn) => {
        for (const el of arr) {
            fn(el.name + " " + el.price + " " + el.color)
        }
    }
}

function showProductosForFunction(arr, fn) {
    for (const el of arr) {
        fn(el.name + " " + el.price + " " + el.color)
    }
}

function porCadaUno(arreglo, funcion) {
    for (let i = 0; i < arreglo.length; i++) {
        funcion(arreglo[i]); // Llama a la funcion que se le pasa por parametro
    }
    initProgram()
}

function calcularPricePromedio(producArr) {
    let montoTotal = 0;
    let cantidadDeProductos = producArr.length;
    // EMPIEZA EL METODO PORCADAUNO
    porCadaUno(producArr, (producto) => {
        montoTotal += producto.price; // Obtiene la cantidad total del valor de los productos
    });
    // TERMINA Y RETORNA EL METODO PORCADAUNO
    return montoTotal / cantidadDeProductos;
}


function verProductosForEach() {
    productosArr.forEach((producto) => {
        alert(producto.name + " " + producto.price + " " + producto.color);
    });
}

function atoZ() {
    productosArr.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
    });
    console.log(productosArr);
    initProgram()
}

function buscarProducto() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    let productoEncontrado = productosArr.find((producto) => {
        return producto.name === productoABuscar;
    })
    console.log(productoEncontrado);
    if (productoEncontrado) {
        alert(productoEncontrado.name + " " + productoEncontrado.price + " " + productoEncontrado.color);
    } else {
        alert("No se encontro el producto");
    }
    initProgram()
}

function buscarColor() {
    let colorABuscar = prompt("Que color quieres buscar?");
    let colorEncontrado = productosArr.filter((producto) => {
        return producto.color === colorABuscar;
    })
    if (colorEncontrado) {
        colorEncontrado.forEach((producto) => {
            alert(producto.name + " " + producto.price + " " + producto.color);
        });
    } else {
        alert("No se encontro el producto");
    }
    initProgram()
}

function buscarEnDB() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    let productoEncontrado = dbProductos.some((producto) => {
        return producto.name === productoABuscar;
    })
    if (productoEncontrado) {
        alert("El producto existe");
    } else {
        alert("No se encontro el producto");
    }

}

function comprarProducto() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    let productoEncontrado = dbProductos.some((producto) => {
        return producto.name === productoABuscar;
    })
    if (productoEncontrado) {
        alert("El producto existe");
        addToCart(productoABuscar)
    } else {
        alert("No se encontro el producto");
    }
}


function addToCart(productoABuscar) {
    let productoEncontrado = dbProductos.find((producto) => {
        return producto.name === productoABuscar;
    })
    if (productoEncontrado) {
        alert("El producto existe");
        carritoArr.push(productoEncontrado)
        let confirmar = prompt("Quieres comprar otro producto? (si/no)")
        if (confirmar === "si") {
            comprarProducto()
        } else {
            sumarPrecioTotal()
            eliminarProductosComprados()
        }
    } else {
        alert("No se encontro el producto");
    }
}

function sumarPrecioTotal() {
    let precioTotal = carritoArr.reduce((acumulador, producto) => {
        return acumulador + producto.price
    }
        , 0)
    console.log(precioTotal);

}

function eliminarProductosComprados() {
    carritoArr.forEach((producto) => {
        let index = productosArr.indexOf(producto)
        productosArr.splice(index, 1)
    })
    console.log(productosArr);
    initProgram()
}

function buscarProductoConMap() {
    let productoABuscar = prompt("Que producto quieres buscar?");
    const productoEncontrado = productosArr.map((producto) => producto.name).indexOf(productoABuscar);
    if (productoEncontrado === -1) {
        alert("No se ha encontrado el producto");
        initProgram()
    } else {
        alert(`Nombre: ${productosArr[productoEncontrado].name} \n Precio: ${productosArr[productoEncontrado].price} \n Color: ${productosArr[productoEncontrado].color}`);
        initProgram()
    }
}



function calculadoraDePrecios() {
    while (trueOFalse) {
        let selectSection = parseInt(prompt("¿Qué quieres hacer? \n 1. Pi * precio de producto \n 2. Euler * precio de producto \n 3. Maximo precio \n 4. Minimo precio \n 5. Cambiar valor \n 6. Encontrar la raiz cuadrada de un producto \n 7. Selecionar un producto random\n 8. Volver"));

        switch (selectSection) {
            case 1:
                piPorPrecioProducto()
                break
            case 2:
                eulerPorPrecioProducto()
                break
            case 3:
                busquedaMaximoPrecio()
                break
            case 4:
                busquedaMinimoPrecio()
                break
            case 5:
                cambiarValor()
                break
            case 6:
                raizCuadradaDeProducto()
                break
            case 7:
                seleccioneUnProductoRandom()
                break
            case 8:
                initProgram()
                break
            default:
                alert("No ingresaste una opción valida")
        }
    }

}


function buscarProductoUtil() {
    const productoABuscar = prompt("Que producto quieres buscar?");
    const productoEncontrado = productosArr.find((producto) => {
        return producto.name === productoABuscar;
    })
    if (productoEncontrado) {
        return productoEncontrado
    } else {
        return false
    }
}


function piPorPrecioProducto() {
    const producto = buscarProductoUtil()
    if (producto) {
        alert(Math.PI * producto.price)
    } else {
        alert("No se encontro el producto");
    }
}

function eulerPorPrecioProducto() {
    const producto = buscarProductoUtil()
    if (producto) {
        alert(Math.E * producto.price)
    } else {
        alert("No se encontro el producto");
    }
}

function busquedaMaximoPrecio() {
    const productos = productosArr.map((producto) => producto.price) //  [1000, 2000, 3000, 5000]
    const maximoPrecio = Math.max(...productos) // 5000
    alert("El precio maximo es: " + maximoPrecio)
    calculadoraDePrecios()
}


function busquedaMinimoPrecio() {
    const productos = productosArr.map((producto) => producto.price) //  [1000, 2000, 3000, 5000]
    const minimoPrecio = Math.min(...productos) // 1000
    alert("El precio minimo es: " + minimoPrecio)
    calculadoraDePrecios()
}

function cambiarValor() {
    const producto = buscarProductoUtil()
    if (producto) {
        let nuevoPrecio = Number(prompt("Cual es el valor a aumentar?"));
        let tipoDeRedondeo = parseInt(prompt("Quieres redondear el valor? \n 1. Podemos redondear hacia arriba \n 2. Podemos redondear hacia abajo \n 3. Podemos redondear hacia el entero mas cercano"))
        switch (tipoDeRedondeo) {
            case 1:
                alert(`El nuevo precio es: ${Math.ceil(producto.price + nuevoPrecio)}`)
                break
            case 2:
                alert(`El nuevo precio es: ${Math.floor(producto.price + nuevoPrecio)}`)
                break
            case 3:
                alert(`El nuevo precio es: ${Math.round(producto.price + nuevoPrecio)}`)
                break
            default:
                alert("No ingresaste una opción valida")
                cambiarValor()
                break
        }
    } else {
        alert("No se encontro el producto");
        calculadoraDePrecios()
    }
}

function raizCuadradaDeProducto() {
    const producto = buscarProductoUtil()
    if (producto) {
        alert(`La raiz cuadrada del producto es: ${Math.sqrt(producto.price)}`)
        // alert(`La raiz cuadrada del producto es: ${Math.pow(producto.price, 1 / 2)}`)
    } else {
        alert("No se encontro el producto");
        calculadoraDePrecios()
    }
}

function seleccioneUnProductoRandom() {
    const productoRandom = productosArr[Math.floor(Math.random() * productosArr.length)];
    alert(`
    Nombre: ${productoRandom.name}
    Precio: ${productoRandom.price}
    Color: ${productoRandom.color}
    `);
    calculadoraDePrecios()

}

function agendarTurno() {
    let selectSection = parseInt(prompt("¿Qué quieres hacer? \n 1. Agendar turno \n 2. Ver turnos \n 3. Buscar turno \n 4. Buscar turno con locale \n 5. Volver"))

    switch (selectSection) {
        case 1:
            agendarTurnoFuncion()
            break
        case 2:
            verTurnos()
            break
        case 3:
            buscarTurno()
            break
        case 4:
            buscarTurnoConLocale()
            break
        case 5:
            initProgram()
            break
        default:
            alert("No ingresaste una opción valida")
            agendarTurno()
            break

    }
}

function agendarTurnoFuncion() {
    const nombre = prompt("Ingrese su nombre")
    const apellido = prompt("Ingrese su apellido")
    const edad = prompt("Ingrese su edad")
    const dia = prompt("Ingrese el dia")
    const mes = prompt("Ingrese el mes")
    const anio = prompt("Ingrese el año")
    const hora = prompt("Ingrese la hora")
    const minutos = prompt("Ingrese los minutos")
    const turno = new Date(anio, (mes - 1), dia, hora, minutos)
    console.log(turno);
    turnosArr.push({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        turno: turno
    })
    alert("Turno agendado")
    agendarTurno()
}

function verTurnos() {
    turnosArr.forEach((turno) => {
        alert(`
    Nombre: ${turno.nombre}
    Apellido: ${turno.apellido}
    Edad: ${turno.edad}
    Turno dia: ${changeDate(turno.turno)}
    Turno hora: ${changeHour(turno.turno)}
    `);
    })
}

function buscarTurno() {
    const nombreABuscar = prompt("Ingrese el nombre a buscar")
    const turnoEncontrado = turnosArr.find((turno) => {
        return turno.nombre === nombreABuscar;
    })
    if (turnoEncontrado) {
        alert(`
        Nombre: ${turnoEncontrado.nombre}
        Apellido: ${turnoEncontrado.apellido}
        Edad: ${turnoEncontrado.edad}
        Turno dia: ${changeDate(turnoEncontrado.turno)}
        Turno hora: ${changeHour(turnoEncontrado.turno)}
        `);
    } else {
        alert("No se encontro el turno");
    }
    agendarTurno()
}

function buscarTurnoConLocale() {
    const nombreABuscar = prompt("Ingrese el nombre a buscar")
    const turnoEncontrado = turnosArr.find((turno) => {
        return turno.nombre === nombreABuscar;
    })
    if (turnoEncontrado) {
        alert(`
        Nombre: ${turnoEncontrado.nombre}
        Apellido: ${turnoEncontrado.apellido}
        Edad: ${turnoEncontrado.edad}
        Dia turno: ${turnoEncontrado.turno.toLocaleDateString()}
        Hora turno: ${turnoEncontrado.turno.toLocaleTimeString()}
        `);
    } else {
        alert("No se encontro el turno");
    }
    agendarTurno()
}

function changeHour(fecha) {
    const hora = fecha.getHours()
    const minutos = fecha.getMinutes()
    const segundos = fecha.getSeconds()
    console.log(hora, minutos, segundos);

    const tiempo =
        hora.toString().padStart(2, "0") // 3 -> 03
        + ":" +
        minutos.toString().padStart(2, "0") // 3 -> 03
        + ":" +
        segundos.toString().padStart(2, "0") // 3 -> 03

    return tiempo
}


function changeDate(fecha) {
    const dia = fecha.getDate()
    const mes = fecha.getMonth() + 1
    const anio = fecha.getFullYear()
    const fechaFormateada = dia.toString().padStart(2, "0") + "/" + mes.toString().padStart(2, "0") + "/" + anio

    return fechaFormateada
}


initProgram()



