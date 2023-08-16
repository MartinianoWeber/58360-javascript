// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// tabla de multiplicar

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     let resultado = i * j;
//     console.log(`
//     ${i} * ${j} = ${resultado}`);
//   }
// }

// const numeroUsuario = Number(prompt("Ingrese un numero"));

// for (let i = 1; i <= numeroUsuario; i++) {
//   for (let j = 1; j <= 10; j++) {
//     let resultado = i * j;
//     console.log(`El resultado de ${i} * ${j} : ${resultado}`);
//   }
// }

// const turnos = Number(prompt("Ingrese la cantidad de turnos"));

// for (let i = 1; i <= turnos; i++) {
//   const nombre = prompt("Ingrese su nombre");
//   console.log(`Turno ${i}: ${nombre}`);
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     let resultado = i * j;
//     if (resultado == 10) {
//       console.log("El resultado es 10");
//       break;
//     }

//     if (resultado == 8) {
//       continue;
//     }
//     console.log(`
//     ${i} * ${j} = ${resultado}`);
//   }
// }

// let repetir = true;

// while (repetir) {
//   console.log(repetir);
// }

// let trueOrFalse = true;

// while (trueOrFalse) {
//   const nombre = prompt("Ingrese su nombre");
//   const apellido = prompt("Ingrese su apellido");
//   const edad = Number(prompt("Ingrese su edad"));
//   const email = prompt("Ingrese su email");
//   if (nombre != "" && apellido != "" && edad != "" && email != "") {
//     alert(`Bienvenido ${nombre} ${apellido}! Gracias por registrarte`);
//     trueOrFalse = false;
//   } else {
//     alert("Por favor complete todos los campos");
//     const verificar = prompt("Quiere continuar? S/N").toUpperCase();
//     if (verificar == "N") {
//       trueOrFalse = false;
//     } else {
//       trueOrFalse = true;
//     }
//   }
// }

// let nombre = "";

// do {
//   nombre = prompt("Ingrese su nombre");
//   console.log(nombre);
// } while (nombre == "");

// let suma = 0; //Acumulador
// let contador = 0;
// let numero;

// do {
//   numero = Number(
//     prompt("Ingrese un numero (Para frenar, ingresar un numero negativo)")
//   );
//   if (!isNaN(numero) && numero >= 0) {
//     suma += numero; //ACUMULADOR
//     contador++;
//   }
// } while (numero >= 0);

// let promedio;
// if (contador > 0) {
//   promedio = suma / contador;
// } else {
//   promedio = 0;
// }

// console.log(`el promedio de los numeros ingresados: ${promedio}`);
// !isNan(11); // true
// !isNan("hola"); // false

let trueOrFalse = true;

while (trueOrFalse) {
  const numero1 = Number(prompt("Ingrese un numero"));
  const numero2 = Number(prompt("Ingrese otro numero"));
  if (!isNaN(numero1) && !isNaN(numero2) && numero1 && numero2) {
    const eleccion = parseInt(
      prompt(
        "Ingrese una opcion: \n 1- Sumar \n 2- Restar \n 3- Multiplicar \n 4- Dividir \n 5- Salir"
      )
    );
    let resultado;
    switch (eleccion) {
      case 1:
        resultado = numero1 + numero2;
        break;
      case 2:
        resultado = numero1 - numero2;
        break;
      case 3:
        resultado = numero1 * numero2;
        break;
      case 4:
        resultado = numero1 / numero2;
        break;
      case 5:
        trueOrFalse = false;
        break;
      default:
        alert("Opcion invalida");
        break;
    }

    if (eleccion != 5 && eleccion) {
      alert(`El resultado es ${resultado}`);

      const verificar = prompt("Quiere continuar? S/N").toUpperCase();
      if (verificar == "N") {
        trueOrFalse = false;
      } else {
        trueOrFalse = true;
      }
    }
  } else {
    alert("Por favor ingrese un numero");
  }
}

function sumar() {
  const numero1 = Number(prompt("Ingrese un numero"));
  const numero2 = Number(prompt("Ingrese otro numero"));
  const resultado = numero1 + numero2;
  alert(`El resultado es ${resultado}`);
}
