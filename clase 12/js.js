// FORM
const formularioCotizacion = document.querySelector("#formularioCotizacion");
const monto = document.querySelector("#monto");
const plazo = document.querySelector("#plazo");
const tasa = document.querySelector("#tasa");
const inputs = document.querySelectorAll(
    ".simulador__formulario-cotizacion-inputs"
);
const btnCotizar = document.querySelector("#btnCotizar");
let validarForm1 = false;
let validarForm2 = false;
// FIN FORM
// EMPIEZA RESULTADOS
const resultado = document.querySelector("#resultado");
const resultadoTexto = document.querySelector("#resultadoTexto");
const bntSi = document.querySelector("#bntSi");
const bntNo = document.querySelector("#btnNo");
// FIN RESULTADOS
// COMIENZO DE FINAL
const ultimoFormulario = document.querySelector("#ultimoFormulario");
const btnFormFin = document.querySelector("#btnFormFin");
const inputsFormularioFin = document.querySelectorAll(
    ".simulador__formularioFin-form-input"
);
const documentType = document.querySelector("#documentType");
const error = document.querySelector(".error");
const formularioFin = document.querySelector("#formulario2");
let contenedorUltimasActualizaciones = document.querySelector(
    "#contenedorUltimasActualizaciones"
);
console.log(contenedorUltimasActualizaciones);
const calculoArr = [];
const datosArr = [];
function calcularPrestamo() {
    const montoValor = monto.value;
    const plazoValor = plazo.value;
    const tasaValor = tasa.value / 100;

    const cuotaConComa = Math.round((montoValor * tasaValor) / plazoValor)
        .toFixed(2)
        .replace(".", ",");
    resultado.classList.remove("disable");
    resultadoTexto.innerHTML = `Cuota mensual: $${cuotaConComa}`;
    calculoArr.push({
        monto: montoValor,
        plazo: plazoValor,
        tasa: tasaValor,
        cuota: cuotaConComa,
    });
}

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        console.log(inputs);
        if (inputs[0].value && inputs[1].value) {
            validarForm1 = true;
            btnCotizar.classList.remove("buttonDisable");
        } else {
            validarForm1 = false;
            btnCotizar.classList.add("buttonDisable");
        }
    });
});

formularioCotizacion.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validarForm1) {
        calcularPrestamo();
    }
});

// CONTENEDOR RESULTADO

bntSi.addEventListener("click", () => {
    resultado.classList.add("disable");
    formularioCotizacion.reset();
    if (!ultimoFormulario.classList.contains("disable")) {
        ultimoFormulario.classList.add("disable");
    }
});

bntNo.addEventListener("click", () => {
    formularioCotizacion.reset();
    ultimoFormulario.classList.remove("disable");
});

inputsFormularioFin.forEach((input) => {
    input.addEventListener("input", () => {
        if (
            inputsFormularioFin[0].value &&
            inputsFormularioFin[1].value &&
            inputsFormularioFin[2].value &&
            inputsFormularioFin[4].value &&
            inputsFormularioFin[5].value
        ) {
            btnFormFin.classList.remove("buttonDisable");
            validarForm2 = true;
        } else {
            btnFormFin.classList.add("buttonDisable");
            validarForm2 = false;
        }
    });
});

documentType.addEventListener("change", () => {
    const valor = documentType.value;
    console.log(valor);
    if (valor != "") {
        if (valor === "DNI") {
            inputsFormularioFin[4].setAttribute("maxlength", "8");
            inputsFormularioFin[4].setAttribute("minlength", "8");
        } else if (valor === "Pasaporte") {
            inputsFormularioFin[4].setAttribute("maxlength", "10");
            inputsFormularioFin[4].setAttribute("minlength", "10");
        }
        if (!error.classList.contains("disable")) {
            error.classList.add("disable");
        }
    } else {
        error.classList.remove("disable");
    }
});

function envioFormulario() {
    const nombre = inputsFormularioFin[0].value;
    const apellido = inputsFormularioFin[1].value;
    const dni = inputsFormularioFin[4].value;
    const email = inputsFormularioFin[2].value;
    const telefono = inputsFormularioFin[5].value;
    const tipoDocumento = inputsFormularioFin[3].value;
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth();
    const año = fechaActual.getFullYear() + 1;
    const fechaVencimiento = `${dia}/${mes + 1}/${año}`;
    const calculo = calculoArr[0];
    // NUEVO PARA HOY
    // NUEVO PARA HOY
    // NUEVO PARA HOY
    // NUEVO PARA HOY
    const id = Date.now();

    const datos = {
        // NUEVO PARA HOY
        // NUEVO PARA HOY
        id,
        // NUEVO PARA HOY
        // NUEVO PARA HOY
        nombre,
        apellido,
        dni,
        email,
        telefono,
        tipoDocumento,
        fechaActual,
        fechaVencimiento,
        calculo,
    };
    datosArr.push(datos);
    localStorage.setItem("datos", JSON.stringify(datosArr));
    crearTemplate();
    formularioFin.reset();
    ultimoFormulario.classList.add("disable");
    resultado.classList.add("disable");
    btnFormFin.classList.add("buttonDisable");
    validarForm1 = false;
    validarForm2 = false;
}

ultimoFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    // CLASE 06/09/2023
    validarForm2 && envioFormulario();

});

document.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        validarForm2 && envioFormulario();
    }
});
// CLASE 04/09/2023
// CLASE 04/09/2023
// CLASE 04/09/2023
// CLASE 04/09/2023
// CLASE 04/09/2023
document.addEventListener("DOMContentLoaded", () => {
    crearCotizaciones();
});
function crearCotizaciones() {
    // CLASE 06/09/2023
    // CLASE 06/09/2023
    // DOS FORMAS NULLISH COACELESING o OR
    const datos = localStorage.getItem("datos") ?? []; // Nulish
    //const datos = localStorage.getItem("datos") || []; // OR
    // const datos = localStorage.getItem("datos");
    //if (datos) { //SACAMOS VALIDACION/
    const datosParseados = datos.length > 0 ? JSON.parse(datos) : datos;
    datosParseados.forEach((dato) => {
        datosArr.push(dato);
    });
    crearTemplate();
    // }
}

function crearTemplate() {
    contenedorUltimasActualizaciones.innerHTML = "";
    datosArr.length > 0 ?
        datosArr.forEach((dato) => {
            // ACA VAMOS A DESECCTRUCTURAR EL OBJETO
            // ACA VAMOS A DESECCTRUCTURAR EL OBJETO
            const {
                nombre,
                apellido,
                id,
                dni,
                calculo: { monto, plazo, tasa, cuota },
            } = dato;
            contenedorUltimasActualizaciones.innerHTML += `
        <div class="simulador__formularioFin-actualizacion">
            <div class="simulador__formularioFin-actualizacion-datos">
            <div>
                <p>Nombre: ${nombre}</p>
                <p>Apellido: ${apellido}</p>
            </div>
            <div>
                <p>DNI: ${dni}</p>
                <p>Monto: ${monto}</p>
            </div>
            <div>
                <p>Plazo: ${plazo}</p>
                <p>Tasa: ${tasa}</p>
            </div>
            <p>Cuota: ${cuota}</p>
               
            </div>
            <button id="${id}">X</button>
        </div>
        `;
        })
        : contenedorUltimasActualizaciones.innerHTML = `<p>No hay cotizaciones</p>`;
}


// CLASE 06/09/2023
borrarTodo.addEventListener("click", () => {
    localStorage.clear();
    datosArr.splice(0, datosArr.length);
    crearTemplate();
});


// Explicacion de acceso condicional
// Siempre y cuando el objeto venga nulo sino no funciona y debemos utilizar ||
// const obj = null
// console.log(obj.nombre) // Error
// console.log(obj?.nombre) // undefined

// const obj2 = {
//     nombre: "Juan"
// }

// console.log(obj2.nombre) // Juan
// console.log(obj2?.nombre) // Juan
// console.log(obj2?.apellido) // undefined
// console.log(obj2?.apellido || "No hay datos") // No hay datos



const obj = {
    nombre_primero: "Juan",
    apellido: "Perez",
    trabajos: {
        trabajo1: "Programador",
        trabajo2: "Diseñador",
    },
};

// ALIAS
const {
    nombre_primero: nombre,
    apellido,
    trabajos: { trabajo1: trabajo },
} = obj;

console.log(nombre, apellido, trabajo);

const desestructuracion = (elemento) => {
    const {
        nombre_primero,
        apellido,
        trabajos: { trabajo1 },
    } = elemento;
    console.log(nombre_primero, apellido, trabajo1)
    // No se puede retornar mas de un elemento. Si retornamos esto nos dara como resultado el trabajo 1

};

desestructuracion(obj);

// MAS EJEMPLOS DE DESESCTRUCTURACION EN PARAMETROS
window.addEventListener("click", ({ y, x }) => {
    console.log(y, x);
});

// DESESCTRUCTURACION EN FUNCIONES
const funcionesPersona = () => {
    return {
        comer: () => {
            console.log("la persona come");
        },
        correr: (elemento) => {
            console.log(elemento);
        },
    };
};

const { comer, correr } = funcionesPersona();

correr("Esta corriendo");

// DESESTRUCTURACION EN ARRAYS
const nombres = ["Juan", "Pedro", "Maria", "Jose"]; // 4

const [a, , , d] = nombres; // 4 Porque al poner comas vacias se saltean los elementos (PREGUNTA TECNCIA)
console.log(a, d);


