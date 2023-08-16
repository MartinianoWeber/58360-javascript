// function holaMundo() {
//   console.log("Hola Mundo");
// }

// holaMundo();

// function pedirNombre() {
//   const nombre = prompt("Ingresa tu nombre");
//   console.log("Hola " + nombre);
// }

// pedirNombre();

// function suma() {
//   const num1 = parseInt(prompt("Ingresa un número"));
//   const num2 = parseInt(prompt("Ingresa otro número"));
//   console.log(num1 + num2);
// }
// suma();

// function suma(num1, num2) {
//   alert("Suma " + num1 + num2);
// }

// suma(2, 3);

// function suma(num1, num2) {
//   return num1 + num2;
// }
// const resultado = suma(2, 3);
// console.log(resultado);
// const trueOrFalse = true;

// while (trueOrFalse) {
//   const num1 = parseInt(prompt("Ingresa un número"));
//   const num2 = parseInt(prompt("Ingresa otro número"));
//   const ingreseOperacion = prompt(
//     "Ingresa la operación que deseas realizar: suma, resta, multiplicacion y division o salir"
//   );
//   switch (ingreseOperacion) {
//     case "suma":
//       alert(suma(num1, num2));
//       break;
//     case "resta":
//       alert(resta(num1, num2));
//       break;
//     case "multiplicacion":
//       alert(multiplicacion(num1, num2));
//       break;
//     case "division":
//       alert(division(num1, num2));
//       break;
//     case "salir":
//       trueOrFalse = false;
//       break;
//     default:
//       alert("Operacion no valida");
//       break;
//   }
// }

// function suma(num1, num2) {
//   return num1 + num2;
// }

// function resta(num1, num2) {
//   return num1 - num2;
// }

// function multiplicacion(num1, num2) {
//   return num1 * num2;
// }

// function division(num1, num2) {
//   return num1 / num2;
// }

// Función para calcular el precio total de un producto con descuento

// Función para generar un número aleatorio entre un rango dado
// function generarNumeroAleatorio(min, max) {
//   return Math.floor(Math.random() * max) + min;
// }

// // Variables del juego
// const numeroSecreto = generarNumeroAleatorio(1, 100);
// let intentos = 0;
// let intentosMaximos = 10;
// let gameOver = false;

// console.log("¡Bienvenido a Adivina el Número!");

// while (!gameOver) {
//   let numeroElegido = parseInt(prompt("Introduce un número entre 1 y 100:"));
//   if (isNaN(numeroElegido)) {
//     alert("No ingresaste un número.");
//   } else {
//     if (numeroElegido === numeroSecreto) {
//       alert(
//         "¡Felicidades! ¡Has adivinado el número en " + intentos + " intentos!"
//       );
//       gameOver = true;
//     } else {
//       if (numeroElegido < numeroSecreto) {
//         alert("El número es mayor.");
//       } else {
//         alert("El número es menor.");
//       }

//       if (intentos === intentosMaximos) {
//         alert(
//           "¡Agotaste tus intentos! El número secreto era: " + numeroSecreto
//         );
//         gameOver = true;
//       }
//     }
//   }
//   intentos++;
// }
// let trueOfalse = true;
// const iva = (a) => a * 1.21;

// const tasa = function (a) {
//   if (a > 1000) {
//     return a * 1.15;
//   } else {
//     return a * 1.1;
//   }
// };
// function calcularPrestamo() {
//   let prestamo = Number(prompt("Ingresa el monto del prestamo"));

//   while (trueOfalse) {
//     if (prestamo === 0) {
//       prestamo = Number(prompt("Ingresa el monto del prestamo"));
//     } else {
//       let resultado = iva(prestamo);
//       calcularCuotas(resultado);
//       trueOfalse = false;
//     }
//   }
// }

// function calcularCuotas(resultado) {
//   let cuotas = Number(prompt("Ingresa la cantidad de cuotas\n3\n6\n12"));

//   while (trueOfalse) {
//     const tasaCalculada = tasa(resultado);
//     let resultadoFinal = 0;
//     switch (cuotas) {
//       case 3:
//         resultadoFinal = Math.round(tasaCalculada / cuotas);
//         alert(`El monto de la cuota es de $${resultadoFinal}`);
//         trueOfalse = false;
//         break;
//       case 6:
//         resultadoFinal = Math.round(tasaCalculada / cuotas);
//         alert(`El monto de la cuota es de $${resultadoFinal}`);
//         trueOfalse = false;
//         break;
//       case 12:
//         resultadoFinal = Math.round(tasaCalculada / cuotas);
//         alert(`El monto de la cuota es de $${resultadoFinal}`);
//         trueOfalse = false;
//         break;
//       default:
//         cuotas = Number(prompt("Ingresa la cantidad de cuotas\n3\n6\n12"));
//         break;
//     }
//   }
// }

// calcularPrestamo();
