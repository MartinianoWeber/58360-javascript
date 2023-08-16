// for
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// tabla de multiplicacion

// for (let i = 1; i <= 10; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(i + "x" + j + "=" + i * j);
//   }
// }

// tabla de multiplicacion con un prompt
// const numeroInicial = parseInt(prompt("Ingrese un numero"));

// for (let i = numeroInicial; i <= 10; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(i + "x" + j + "=" + i * j);
//   }
// }

// Turnero
// const turnos = parseInt(prompt("Ingrese la cantidad de turnos"));

// for (let i = 1; i <= turnos; i++) {
//   const nombre = prompt("Ingrese su nombre");
//   console.log("Turno N°" + i + " Nombre: " + nombre);
// }

// EXPLICAION DE BREAK
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     console.log("Cortamos el for");
//     break;
//   }
// }

// const numeroInicial = parseInt(prompt("Ingrese un numero"));
// for (let i = 1; i <= numeroInicial; i++) {
//   for (let j = 1; j <= 10; j++) {
//     if (i * j == 10) {
//       console.log("Se ha encontrado el resultado 10");
//       break;
//     }
//     if (i * j == 8) {
//       continue;
//     }
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// while

// let trueOrFalse = true;

// while (trueOrFalse) {
//   console.log("Esto es un while");
//   trueOrFalse = false;
// }

// while (trueOrFalse) {
//   const nombre = prompt("Ingrese su nombre");

//   if (nombre != "") {
//     console.log("Hola " + nombre);
//     trueOrFalse = false;
//   } else {
//     alert("No ingresaste tu nombre");
//     trueOrFalse = true;
//   }
// }

// while (trueOrFalse) {
//   const nombre = prompt("Ingrese su nombre");
//   const apellido = prompt("Ingrese su apellido");
//   const edad = parseInt(prompt("Ingrese su edad"));
//   const email = prompt("Ingrese su email");

//   if (nombre != "" && apellido != "" && edad != "" && email != "") {
//     alert(
//       `Hola ${nombre} ${apellido}, gracias por registrarte! a tu email ${email} llegara un correo de confirmacion`
//     );
//     trueOrFalse = false;
//   } else {
//     alert("No ingresaste todos los datos");
//     trueOrFalse = true;
//   }
// }
// let nombre = "";
// do {
//   nombre = prompt("Ingresa tu nombre y tu apellido: ");
//   console.log(nombre);
// } while (nombre == "");

// Inicializamos variables
// let sum = 0;
// let count = 0;
// let number;

// console.log(isNaN(2));

// Bucle do-while para ingresar los números
// do {
//   // Solicitar al usuario ingresar un número
//   number = parseFloat(
//     prompt(
//       "Ingresa un número positivo (ingresa un número negativo para detener):"
//     )
//   );
//   if (!isNaN(number) && number >= 0) {
//     sum += number;
//     count++;
//   }
// } while (number >= 0);

// // Calcular el promedio
// let average;
// if (count > 0) {
//   average = sum / count;
// } else {
//   average = 0;
// }
// // Mostrar el resultado al usuario
// alert(`El promedio de los números ingresados es: ${average}`);

// while (trueOrFalse) {
//   const eleccion = parseInt(
//     prompt(
//       "Ingrese una opcion: \n 1- Sumar \n 2- Restar \n 3- Multiplicar \n 4- Dividir \n 5- Salir"
//     )
//   );
//   switch (eleccion) {
//     case 1:
//       const numero1 = parseInt(prompt("Ingrese el primer numero"));
//       const numero2 = parseInt(prompt("Ingrese el segundo numero"));
//       alert(numero1 + numero2);
//       break;
//     case 2:
//       const numero3 = parseInt(prompt("Ingrese el primer numero"));
//       const numero4 = parseInt(prompt("Ingrese el segundo numero"));
//       alert(numero3 - numero4);
//       break;
//     case 3:
//       const numero5 = parseInt(prompt("Ingrese el primer numero"));
//       const numero6 = parseInt(prompt("Ingrese el segundo numero"));
//       alert(numero5 * numero6);
//       break;
//     case 4:
//       const numero7 = parseInt(prompt("Ingrese el primer numero"));
//       const numero8 = parseInt(prompt("Ingrese el segundo numero"));
//       alert(numero7 / numero8);
//       break;
//     case 5:
//       trueOrFalse = false;
//       break;
//     default:
//       alert("No ingresaste una opcion valida");
//       break;
//   }

//   if (eleccion != 5 && eleccion) {
//     const continuar = prompt("Desea continuar? s/n");
//     if (continuar === "s") {
//       trueOrFalse = true;
//     } else {
//       trueOrFalse = false;
//     }
//   }
// }
