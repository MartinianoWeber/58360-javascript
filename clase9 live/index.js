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

let trueOFalse = true;

function initProgram() {
    while (trueOFalse) {
        let selectSection = parseInt(prompt("¿Qué quieres hacer? \n 1. Nodos \n 2.Crear y eliminar nodos\n 3. Salir"));
        switch (selectSection) {
            case 1:
                nodos()
                break;
            case 2:
                break;
            case 3:
                trueOFalse = false;
                break;
            default:
                alert("No es una opción válida");
                break;
        }
    }
}


function nodos() {
    let selection = parseInt(prompt("¿Qué quieres hacer? \n 1. getElement por id \n 2. getElement por clase \n 3. getElement por etiqueta \n 4. Iterar varias clases \n5. Iterar varias etiquetas \n 6. Salir"));

    switch (selection) {
        case 1:
            getElementByIdFuncion()
            break;
        case 2:
            getElementClassFuncion()
            break;
        case 3:
            getElementTagFuncion()
            break;
        case 4:
            getElementsByClassFuncion()

            break;
        case 5:
            break;
        case 6:
            break;

    }

}


function getElementByIdFuncion() {
    let id = prompt("Ingrese el id");
    const element = document.getElementById(id);
    let modificar = prompt("¿Quieres modificar el texto? \n 1. Si \n 2 Quiero cambiar la clase \n 2 Quiero eliminar");
    if (modificar == 1) {
        const mensaje = prompt("Ingrese el mensaje");
        element.textContent = mensaje;
    } else if (modificar == 2) {
        const clase = prompt("Ingrese el nombre de la clase");
        element.classList.add(clase)
        console.log(element.classList)
    } else if (modificar == 3) {
        const clase = prompt("Ingrese el nombre de la clase que quiere eliminar");
        element.classList.remove(clase)
        console.log(element.classList)
    }
    initProgram()
}

function getElementsByClassFuncion() {
    const paises = document.getElementsByClassName("pais");
    for (const pais of paises) {
        if (pais.textContent == "Argentina") {
            pais.classList.add("azul")
        }
    }
    console.log(typeof paises)
    initProgram()
}

function getElementClassFuncion() {
    const element = document.getElementsByClassName("paisDivertido");
    for (const item of element) {
        console.log(item.textContent)
    }
    initProgram()
}

function getElementTagFuncion() {
    const element = document.getElementsByTagName("h1");
    for (const item of element) {
        console.log(item.textContent)
    }
}

// initProgram()



// let img = document.createElement('img')
// img.src = "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg"
// img.alt = "imagen de auto"
// img.width = "200"
// img.height = "200"

// let div2 = document.createElement("div");

// let h1 = document.createElement("h1");
// h1.textContent = "Hola soy un h1";

// div.appendChild(img)
// div.appendChild(div2)
// div2.appendChild(h1)

//div.removeChild(div2) // Cuando tenemos la variable en js
//console.log(div.childNodes[1].remove()) // Cuando tenmos el path de childrens


// const form = document.getElementById("form");
// const nombre = document.getElementById("nombre");
// const apellido = document.getElementById("apellido");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(nombre.value)
//     console.log(apellido.value)
// })


// const div = document.getElementById("div");

// function crearProductos() {
//     div.innerHTML = ""
//     dbProductos.forEach((producto) => {
//         div.innerHTML += `
//         <p>El nombre es ${producto.name}</p>
//         <p>El precio es ${producto.price}</p>
//         `
//     })
// }
// crearProductos()
// crearProductos()

// const div = document.querySelector('#div')
// const divClase = document.querySelector('.divClase')

// console.dir(divClase)
// console.dir(div)

const pais = document.querySelectorAll(".pais")
console.log(pais)
pais.forEach((item) => {
    console.log(item.textContent)
})

const paisesById = document.querySelectorAll("#paises")
console.log(paisesById)