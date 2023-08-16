// function pedirNombre() {
//   const nombreIngresado = prompt("Ingrese su nombre");
//   alert(`Hola ${nombreIngresado}`);
// }
// pedirNombre();
// pedirNombre();

// function suma(a, b) {
//   const resultado = a + b; // 3
//   alert("EL resultado de la suma es " + resultado);
// }

// suma(1, 2);

// let trueOrFalse = true;

// while (trueOrFalse) {
//   const numero1 = parseInt(prompt("Ingrese un numero"));
//   const numero2 = parseInt(prompt("Ingrese otro numero"));
//   const operacion = prompt(
//     "Ingrese la operacion que desea realizar: \n1.suma \n2.resta \n3.multiplicacion \n 4.division \n 5.salir"
//   );
//   let resultado;
//   switch (operacion) {
//     case "1":
//       resultado = suma(numero1, numero2);
//       alert(`El resultado de la suma es ${resultado}`);
//       break;
//     case "2":
//       resultado = resta(numero1, numero2);
//       alert(`El resultado de la resta es ${resultado}`);
//       break;
//     case "3":
//       resultado = multiplicacion(numero1, numero2);
//       alert(`El resultado de la multiplicacion es ${resultado}`);
//       break;
//     case "4":
//       resultado = division(numero1, numero2);
//       alert(`El resultado de la division es ${resultado}`);
//       break;
//     case "5":
//       trueOrFalse = false;
//       break;
//     default:
//       alert("La operacion ingresada no es valida");
//       break;
//   }
// }

// function suma(a, b) {
//   return a + b;
// }
// function resta(a, b) {
//   return a - b;
// }
// function multiplicacion(a, b) {
//   return a * b;
// }
// function division(a, b) {
//   return a / b;
// }

// const numeroSecreto = generarNumeroAleatorio(1, 100);
// let intentos = 0;
// const intentosMaximos = 10;
// let gameOver = false;

// while (!gameOver) {
//   let numeroElegido = parseInt(prompt("Ingrese un numero entre 1 y 100"));
//   if (isNaN(numeroElegido)) {
//     alert("Ingrese un numero valido");
//   } else {
//     if (numeroElegido === numeroSecreto) {
//       alert("Ganaste con " + intentos + " intentos");
//       gameOver = true;
//     } else {
//       numeroMenorA(numeroElegido, numeroSecreto);
//       intentosMaximosValidation(intentos, intentosMaximos);
//     }
//   }
//   intentos++;
// }

// function numeroMenorA(numeroElegido, numeroSecreto) {
//   if (numeroElegido < numeroSecreto) {
//     alert("El numero es mayor");
//   } else {
//     alert("El numero es menor");
//   }
// }
// function intentosMaximosValidation(intentos, intentosMaximos) {
//   if (intentos === intentosMaximos) {
//     alert("Perdiste");
//     gameOver = true;
//   }
// }
// function generarNumeroAleatorio(min, max) {
//   return Math.floor(Math.random() * max) + min;
// }

// function sumar(boolean) {
//   let numero = 0;
//   if (boolean) {
//     numero = 1;
//     console.log(numero);
//   } else {
//     numero = 2;
//     console.log(numero);
//   }
// }
// sumar(false);

// const sumar = function (a, b) {
//   return a + b;
// };

// const resta = (a, b) => a - b;

// // function multiplicacion(a, b) {
// //   return a * b;
// // }

// console.log(resta(1, 2));

let trueOrFalse = true;

function calcularPrestamo() {
  const prestamo = Number(prompt("Ingrese el monto del prestamo"));
  while (trueOrFalse) {
    if (isNaN(prestamo) || prestamo === 0) {
      alert("Ingrese un monto valido");
    } else {
      let resultado = iva(prestamo);
      calcularCuotas(resultado);
      trueOrFalse = false;
    }
  }
}

const iva = (prestamo) => prestamo * 1.21;
const tasa = function (prestamo) {
  if (prestamo > 10000) {
    return prestamo * 1.45;
  } else {
    return prestamo * 1.3;
  }
};

function calcularCuotas(resultado) {
  let cuotas = Number(prompt("Ingresa la cantidad de cuotas\n3\n6\n12"));

  while (trueOrFalse) {
    const tasaCalculada = tasa(resultado);
    let resultadoFinal = 0;
    switch (cuotas) {
      case 3:
        resultadoFinal = Math.round(tasaCalculada / cuotas);
        alert(`El monto de las cuotas es ${resultadoFinal}`);
        trueOrFalse = false;
        break;
      case 6:
        resultadoFinal = Math.round(tasaCalculada / cuotas);
        alert(`El monto de las cuotas es ${resultadoFinal}`);
        trueOrFalse = false;
        break;
      case 12:
        resultadoFinal = Math.round(tasaCalculada / cuotas);
        alert(`El monto de las cuotas es ${resultadoFinal}`);
        trueOrFalse = false;
        break;
      default:
        alert("Ingrese una cantidad de cuotas valida");
        break;
    }
  }
}
calcularPrestamo();
