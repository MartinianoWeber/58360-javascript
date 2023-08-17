// function mayorQue(n) {
//   return (m) => m > n; //(m) => m > 10
// }
// let prueba = mayorQue(10)(11);
// console.log(prueba);

// function calculadora(op) {
//   let resultado;
//   if (op === "suma") {
//     resultado = (a, b) => a + b;
//   } else if (op === "resta") {
//     resultado = (a, b) => a - b;
//   } else if (op === "multiplicacion") {
//     resultado = (a, b) => a * b;
//   } else if (op === "division") {
//     resultado = (a, b) => a / b;
//   } else {
//     return "Operacion no valida";
//   }
//   return resultado;
// }

// let suma = calculadora("suma");
// console.log(suma(1, 2));

// console.log(calculadora("resta")(1, 2));

// function cuente(fn) {
//   for (let i = 0; i <= 10; i++) {
//     fn(i); //console.log(i)
//   }
// }
// cuente(console.log);

// const duplicado = [];
// const numeros = [1, 2, 3, 4, 5];

// function porCadaUno(arr, fn) {
//   for (const elemento of arr) {
//     fn(elemento);
//   }
// }

// porCadaUno(numeros, (elm) => {
//   duplicado.push(elm * 2);
// });

// console.log(duplicado);
