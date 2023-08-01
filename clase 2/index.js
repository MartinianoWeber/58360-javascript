// VALIDAR PROMPT
// const nombre = prompt("Ingrese su nombre");

// if (nombre) {
//   console.log(`El nombre es: ${nombre}`);
// } else {
//   console.log("No ingreso un nombre");
// }

// VALIDAR PROMPT (MEJORADO simple)
// const nombre = prompt("Ingrese su nombre");
// if (nombre == "juan" || nombre == "Juan" || nombre == "JUAN") {
//   console.log(`El nombre es: ${nombre}`);
// } else {
//   console.log("No ingreso un nombre esperado en la lista");
// }

// VALIDAR PROMPT (MEJORADO pro)
// const nombre = prompt("Ingrese su nombre").toLowerCase();
// const nombreConMayuscula = nombre.charAt(0).toUpperCase() + nombre.slice(1);
// if (nombre == "juan") {
//   console.log(`El nombre es: ${nombreConMayuscula}`);
// } else {
//   console.log("No ingreso un nombre esperado en la lista");
// }

// PROMPS, condicionales y operadores
// const edad = prompt("Ingrese su edad");
// const colorRopa = prompt("Ingrese el color de su ropa");
// if (edad >= 18 && colorRopa === "blanco") {
//   console.log("Puede pasar");
// } else {
//   console.log("No puede pasar");
// }

// if (edad >= 18 && colorRopa && colorRopa === "blanco" && edad) {
//   console.log("Puede pasar");
// } else if (edad >= 18 && colorRopa && colorRopa !== "blanco" && edad) {
//   console.log("Es mayor pero no se permite el color de ropa");
// } else {
//   console.log("No puede pasar");
// }

// VERSION 2.0

// const edad = prompt("Ingrese su edad");
// const colorRopa = prompt("Ingrese el color de su ropa");

// if (edad >= 18 && colorRopa && colorRopa === "blanco" && edad) {
//   const accion = prompt(
//     "¿Qué desea hacer?\n1- Bailar \n 2- Cantar \n Recorda de elegir la opcion por su nombre"
//   ).toLowerCase();
//   if (accion === "bailar") {
//     alert("Bailando....");
//   } else if (accion === "cantar") {
//     alert("Cantando....");
//   } else {
//     alert("No se puede realizar la acción");
//   }
// } else if (edad >= 18 && colorRopa && colorRopa !== "blanco" && edad) {
//   alert("Es mayor pero no se permite el color de ropa");
// } else {
//   alert("No puede pasar");
//   const proximoPaso = prompt(
//     "¿Qué desea hacer?\n1- Irme a otro lado \n 2- Ir a mi casa \n Recorda de elegir la opcion por su nombre"
//   ).toLowerCase();

//   if (proximoPaso === "irme a otro lado") {
//     alert("Yendo a otro lado....");
//   } else if (proximoPaso === "ir a mi casa") {
//     alert("Yendo a mi casa....");
//   } else {
//     alert("No se puede realizar la acción");
//   }
// }

// const nombreIngresado = prompt("Ingrese su nombre");

// if (
//   (nombreIngresado != "" && nombreIngresado == "EMA") ||
//   nombreIngresado == "ema"
// ) {
//   console.log("Hola Ema");
// } else {
//   console.log("No te conozco");
// }
// if (
//   nombreIngresado != "" &&
//   (nombreIngresado == "EMA" || nombreIngresado == "ema")
// ) {
//   console.log("Hola Ema");
// } else {
//   console.log("No te conozco");
// }
