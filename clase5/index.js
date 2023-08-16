// const nombre = "Martiniano";
// const edad = 20;
// const altura = 1.85;

// console.log(nombre, edad, altura);

// const martiniano2 = {
//   nombre: "Martiniano",
//   edad: 20,
//   altura: 1.85,
// };

// console.log(martiniano2);

// console.log(martiniano);
// martiniano.nombre = "Jose"; //REASIGNACION
// console.log(martiniano);

// martiniano.peso = 80;
// console.log(martiniano);

// function Personas(nombre, edad, altura) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.altura = altura;
//   this.nombreEdad = function () {
//     return this.nombre + " y edad " + this.edad;
//   };
// }

// const martiniano = new Personas("Martiniano", 20, 1.85);
// const jose = new Personas("Jose", 30, 1.7);

// console.log(martiniano);
// console.log(jose);

// console.log(martiniano.nombreEdad());
// console.log(jose.nombreEdad());
// // martiniano.nombreEdad();

// function Producto(nombre, precio) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.ivaPorcentaje = function () {
//     return this.precio * 0.21;
//   };
// }

// let trueOrFalse = true;
// let producto;
// while (trueOrFalse) {
//   let nombre = prompt("Ingrese el nombre del producto");
//   let precio = Number(prompt("Ingrese el precio del producto"));
//   if (nombre === "" || precio == "") {
//     alert("No se ingreso un nombre o un precio");
//   } else {
//     producto = new Producto(nombre, precio);
//     trueOrFalse = false;
//   }
// }

// for (clave in producto) {
//   console.log(`Para la clave ${clave} su valor es ${producto[clave]}`);
// }

// trueOrFalse = true;
// while (trueOrFalse) {
//   const opciones = Number(
//     prompt("Ingrese una opcion: 1- Ver producto, 2- Ver precio, 3- Salir")
//   );
//   switch (opciones) {
//     case 1:
//       alert(
//         `El nombre del producto es ${producto.nombre} y su precio ${producto.precio}`
//       );
//       break;
//     case 2:
//       alert(
//         `El precio del producto es ${
//           producto.precio
//         } y  el iva incluido es de ${producto.ivaPorcentaje()} y su total es ${
//           producto.precio + producto.ivaPorcentaje()
//         }`
//       );

//       break;
//     case 3:
//       trueOrFalse = false;
//       break;
//     default:
//       alert("Opcion incorrecta");
//       break;
//   }
// }

// function Producto2(nombre, precio) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.ivaPorcentaje = function () {
//     return this.precio * 0.21;
//   };
// }

// const producto2 = new Producto2("Coca cola", 100);
// console.log(producto2);

let arrayProductos = [
  {
    nombre: "Coca cola",
    precio: 100,
  },
  {
    nombre: "Pepsi",
    precio: 200,
  },
  {
    nombre: "Sprite",
    precio: 300,
  },
];

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  ivaPorcentaje() {
    return this.precio * 0.21;
  }
  precioFinal() {
    return this.precio + this.ivaPorcentaje();
  }
  nombreYprecio() {
    return `El nombre del producto es ${
      this.nombre
    } y su precio es ${this.precioFinal()}`;
  }
}

// let trueOrFalse = true;
// let producto;
// while (trueOrFalse) {
//   const nombre = prompt("Ingrese el nombre del producto");
//   const precio = Number(prompt("Ingrese el precio del producto"));
//   if (nombre === "" || precio == "") {
//     alert("No se ingreso un nombre o un precio");
//   } else {
//     producto = new Producto(nombre, precio);
//     trueOrFalse = false;
//   }
// }

// trueOrFalse = true;

// while (trueOrFalse) {
//   const opciones = Number(
//     prompt("Ingrese una opcion: 1- Ver producto, 2- Ver precio, 3- Salir")
//   );
//   switch (opciones) {
//     case 1:
//       alert(producto.nombreYprecio());
//       break;
//     case 2:
//       alert(
//         `El precio del producto es ${
//           producto.precio
//         } y  el iva incluido es de ${producto.ivaPorcentaje()} y su total es ${producto.precioFinal()}`
//       );

//       break;
//     case 3:
//       trueOrFalse = false;
//       break;
//     default:
//       alert("Opcion incorrecta");
//       break;
//   }
// }
let productos = [];
arrayProductos.forEach((producto) => {
  productos.push(new Producto(producto.nombre, producto.precio));
});

productos.forEach((producto) => {
  console.log(producto.nombreYprecio());
});
