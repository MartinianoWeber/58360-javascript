// PARA LA CLASE
// const nombre = "Juan";
// const numero = "10"; // STRING
// const remera = prompt("Que color de remera tenes?");

// if (numero != 10) {
//   console.log("El numero es distinto ");
// } else {
//   console.log("El numero es 10");
// }

// if (numero == 10) {
//   console.log("El numero es 10");
// } else {
//   console.log("El numero es distinto ");
// }

// 1 != SOlamente evalua el valor
// 2 !== Va evaluar el tipo y el valor

// 1 == SOlamente evalua el valor
// 2 === Va evaluar el tipo y el valor

// Que la remera sea roja
// if (remera === "rojo") {
//   console.log("Entran todos los de remera roja");
// } else {
//   console.log("No entra nadie");
// }

// Que la remera sea distinta a roja
// if (remera !== "rojo") {
//   console.log("Entra");
// } else {
//   console.log("No entra");
// }

// ELSE IF

// if (edad >= 18 && colorRopa === "rojo") {
// }

// AND
// 18 , rojo = verdadero
// 17 , rojo = falso
// 18, azul = falso
// 17, azul = falso

// OR
// if (edad >= 18 || colorRopa === "rojo") {
// }
// 18 , rojo = verdadero
// 17 , rojo = verdadero
// 18, azul = verdadero
// 17, azul = falso

// if (!edad || !colorRopa) {
//   console.log("No ingresaste la edad");
// }
// 18 , rojo = verdadero
// "" , rojo = verdadero
// 18,""  = verdadero
// "", "" = FALSO

// const edad = prompt("Cual es tu edad?");
// const colorRopa = prompt("De que color es tu ropa?");
// const pulsera = prompt("Tenes pulsera?");

// if (edad >= 18 && colorRopa === "rojo" && pulsera === "si") {
//   const accion = prompt(
//     "¿Qué desea hacer? \n 1- Bailar \n  2- Cantar \n  Recorda de elegir la opcion por su nombre"
//   );
//   if (accion === "Bailar") {
//     alert("Baila...");
//   } else if (accion === "Cantar") {
//     alert("Canta...");
//   } else {
//     alert("No elegiste ninguna opcion valida");
//   }
//   console.log("Entra a la fiesta y va al VIP");
// } else if (edad >= 18 && colorRopa == "azul" && pulsera === "no") {
//   alert("Entra a la fiesta");
// } else {
//   console.log("No entra a la fiesta");
// }

let lista = prompt("Cual es tu nombre?").toLowerCase();
let nombreMayuscula = lista.charAt(0).toUpperCase();
nombreMayuscula = nombreMayuscula + lista.slice(1); //J
console.log(nombreMayuscula);
if (lista === "juan") {
  alert("Entra a la fiesta" + " " + lista); // "Entra a la fiesta JUAN"
} else if (lista == "") {
  console.log("Que reinicie el programa");
} else {
  console.log("No entra a la fiesta");
}
