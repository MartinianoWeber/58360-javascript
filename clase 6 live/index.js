// const nombre = [
//   "juan",
//   20,
//   null,
//   true,
//   undefined,
//   {
//     nombre: "juan",
//     edad: 20,
//   },
// ]; // TOTALIDAD 4
// // 0      1        2          3
// console.log(nombre.length - 1);
// console.log(nombre[nombre.length - 1]);

// console.log(nombre[2]);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numeros[1] + numeros[2]); //5

// const marcasDeAutos = [
//   "BMW",
//   "Mercedes Benz",
//   "Volvo",
//   "Audi",
//   "Ferrari",
//   "Ford",
//   "Chevrolet",
//   "Toyota",
//   "Nissan",
//   "Mazda",
// ];

// for (let i = 0; i < marcasDeAutos.length; i++) {
//   console.log(marcasDeAutos[i]);
// }

const perritosArr = [
  {
    name: "Firulais",
    age: 5,
    color: "cafe",
  },
  {
    name: "Atlas",
    age: 5,
    color: "cafe",
  },
  {
    name: "Pedro",
    age: 5,
    color: "cafe",
  },
];
const gatitosArr = [
  {
    name: "Michi",
    age: 3, // 0
    color: "blanco",
  },
  {
    name: "Naranja",
    age: 2, // 1
    color: "naranja",
  },
  {
    name: "Tom",
    age: 2, // 2
    color: "gris",
  },
];
let trueOFalse = true;

class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

function initProgram() {
  while (trueOFalse) {
    let selectSection = parseInt(
      prompt(
        "¿Qué quieres hacer? \n 1. Añadir un gato \n 2. Añadir un perro \n 3. Ver gatos \n 4. Ver perros \n 5. Adoptar al ultimo perro \n 6. Adoptar al primer gato \n 7. Adoptar al primer perro \n 8. Adoptar al primer gato \n 9. buscar un gato \n 10. Ver nombres con - \n 11. Buscar un perro \n 12. Nombres al reves \n 13. Ver gatos y perros \n 14. Adoptar perro especifico \n 15. Adoptar perro especifico slice \n 16. Salir"
      )
    );

    switch (selectSection) {
      case 1:
        anadirGato();
        break;
      case 2:
        anadirPerro();
        break;
      case 3:
        verGatos();
        break;
      case 4:
        verPerritos();
        break;
      case 5:
        adoptarUltimoPerro();
        break;
      case 6:
        adoptarPrimerGato();
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        buscarUnGato();
        break;
      case 10:
        verNombresConGuion();
        break;
      case 11:
        break;
      case 12:
        verNombresAlReves();
        break;
      case 13:
        verGatosYPerros();
        break;
      case 14:
        adoptarPerroEspecifico();
        break;
      case 15:
        adoptarPerroEspecificoSlice();
        break;
      case 16:
        trueOFalse = false;
        break;
    }
  }
}

function anadirGato() {
  while (trueOFalse) {
    const name = prompt("Ingresa el nombre del gato");
    const age = parseInt(prompt("Ingresa la edad del gato"));
    const color = prompt("Ingresa el color del gato");
    if (name == "" || age == "" || color == "") {
      alert("Ingresa todos los datos");
    } else {
      const gato = new Animal(name, age, color);
      console.log(gatitosArr);
      gatitosArr.push(gato);
      console.log(gatitosArr);
      initProgram();
    }
  }
}

function anadirPerro() {
  while (trueOFalse) {
    const name = prompt("Ingresa el nombre del perro");
    const age = parseInt(prompt("Ingresa la edad del perro"));
    const color = prompt("Ingresa el color del perro");
    if (name == "" || age == "" || color == "") {
      alert("Ingresa todos los datos");
    } else {
      const perro = new Animal(name, age, color);
      console.log(perritosArr);
      perritosArr.push(perro);
      console.log(perritosArr);
      initProgram();
    }
  }
}

function verGatos() {
  for (elemento of gatitosArr) {
    alert(elemento.name);
  }
}

function verPerritos() {
  let perritos = "";
  perritosArr.forEach((elemento) => {
    perritos += elemento.name + "\n";
  });
  alert(perritos);
}

function adoptarUltimoPerro() {
  const ultimoPerro = perritosArr.length - 1;
  if (perritosArr.length == 0) {
    alert("No hay perros");
    initProgram();
  } else {
    alert("Adoptaste a " + perritosArr[ultimoPerro].name);
    perritosArr.pop();
    console.log(perritosArr);
    initProgram();
  }
}

function adoptarPrimerGato() {
  if (gatitosArr.length == 0) {
    alert("No hay gatos");
    initProgram();
  } else {
    alert("Adoptaste a " + gatitosArr[0].name);
    gatitosArr.shift();
    console.log(gatitosArr);
    initProgram();
  }
}

function buscarUnGato() {
  const nombreGato = prompt("Introduce el nombre del gato que quieres buscar");
  const gatoEncontrado = gatitosArr // 0     1         2
    .map((gato) => gato.name) // ["Michi", "Naranja", "Tom"]
    .indexOf(nombreGato); // Queremos buscar a naranja nos devuelve su posicion en este 1 en caso de que nosotros no encontremos el nombre por que no existe, devuelve -1
  if (gatoEncontrado == -1) {
    alert("No se encontro el gato");
  } else {
    alert(
      `Nombre: ${gatitosArr[gatoEncontrado].name} \n Edad: ${gatitosArr[gatoEncontrado].age} \n Color: ${gatitosArr[gatoEncontrado].color}`
    );
    initProgram();
  }
}

function verNombresConGuion() {
  const nombreGatos = gatitosArr.map((gato) => gato.name).join(" - "); // ["Michi", "Naranja", "Tom"]
  alert(nombreGatos); // Michi - Naranja - Tom
  initProgram();
}

function verNombresAlReves() {
  const nombresPerro = perritosArr
    .map((perro) => perro.name)
    .reverse()
    .join(" - "); // ["Firulais", "Atlas", "Pedro"] Despues del reverse ["Pedro", "Atlas", "Firulais"]

  alert(nombresPerro);
  initProgram();
}

function verGatosYPerros() {
  const gatosYPerros = perritosArr.concat(gatitosArr);
  console.log(gatosYPerros);
  let nombres = "";
  for (elemento of gatosYPerros) {
    nombres += elemento.name + "\n";
  }
  alert(nombres);
  initProgram();
}

function adoptarPerroEspecifico() {
  const nombrePerro = prompt(
    "Introduce el nombre del perro que quieres adoptar"
  );
  const perroEncontrado = perritosArr
    .map((perro) => perro.name)
    .indexOf(nombrePerro); // ["Firulais", "Atlas", "Pedro"]

  if (perroEncontrado == -1) {
    alert("No se encontro el perro");
  } else {
    alert(`Adoptaste a ${perritosArr[perroEncontrado].name}`);
    perritosArr.splice(perroEncontrado, 1);
    console.log(perritosArr);
    initProgram();
  }
}

function adoptarPerroEspecificoSlice() {
  const nombrePerro = prompt(
    "Introduce el nombre del perro que quieres adoptar"
  );
  const perroEncontrado = perritosArr
    .map((perro) => perro.name)
    .indexOf(nombrePerro); // ["Firulais", "Atlas", "Pedro"]

  if (perroEncontrado == -1) {
    alert("No se encontro el perro");
  } else {
    alert(`Adoptaste a ${perritosArr[perroEncontrado].name}`);
    console.log(perroEncontrado);
    const perro = perritosArr.slice(perroEncontrado, 1);
    console.log(perro);
    initProgram();
  }
}

initProgram();
