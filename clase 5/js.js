const martiniano = {
  nombre: "Martiniano",
  apellido: "Weber",
  edad: 20,
};

console.log(martiniano);
// One way
console.log(martiniano.nombre);
console.log(martiniano.apellido);
console.log(martiniano.edad);

// Another way
console.log(martiniano["nombre"]);
console.log(martiniano["apellido"]);
console.log(martiniano["edad"]);

// reasignar valor
martiniano.edad = 21;
console.log(martiniano.edad);

// agregar propiedad
martiniano.ubicacion = "Argentina";
console.log(martiniano);

// Definición de la función constructora para crear productos
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}
let trueOrFalse = true;
// let productoActual = null;

// // Función para ingresar datos de un nuevo producto usando prompts
// function ingresarProducto() {
//   const nombre = prompt("Ingrese el nombre del producto:");
//   const precio = parseFloat(prompt("Ingrese el precio del producto:"));

//   if (!isNaN(precio)) {
//     productoActual = new Producto(nombre, precio);
//     alert("Producto agregado exitosamente.");
//   } else {
//     alert("Precio inválido. Por favor, ingrese un número válido.");
//   }
// }

// // Función para ver el producto actual
// function verProducto() {
//   if (productoActual === null) {
//     alert("No hay producto para mostrar.");
//     return;
//   }

//   const productoStr = `Nombre: ${productoActual.nombre}, Precio: $${productoActual.precio}`;
//   alert(productoStr);
// }

// // Menú de opciones
// while (trueOrFalse) {
//   const opcion = parseInt(
//     prompt(
//       "Seleccione una opción:\n1. Ingresar producto\n2. Ver producto\n3. Salir"
//     )
//   );

//   switch (opcion) {
//     case 1:
//       ingresarProducto();
//       break;
//     case 2:
//       verProducto();
//       break;
//     case 3:
//       alert("¡Hasta luego!");
//       trueOrFalse = false;
//       break;
//     default:
//       alert("Opción inválida. Por favor, seleccione una opción válida.");
//   }
// }

// Definición de la función constructora para crear productos
// Definición de la función constructora para crear productos
// function Producto(nombre, precio) {
//   this.nombre = nombre;
//   this.precio = precio;

//   this.calcularTotalConIVA = function () {
//     const ivaPorcentaje = 0.16; // Porcentaje de IVA (16%)
//     const costoConIVA = this.precio * (1 + ivaPorcentaje);
//     return costoConIVA;
//   };
// }

// // Función para ingresar datos de un nuevo producto usando prompts
// function ingresarProducto() {
//   const nombre = prompt("Ingrese el nombre del producto:");
//   const precio = parseFloat(prompt("Ingrese el precio del producto:"));

//   if (!isNaN(precio)) {
//     productoActual = new Producto(nombre, precio);
//     alert("Producto agregado exitosamente.");
//   } else {
//     alert("Precio inválido. Por favor, ingrese un número válido.");
//   }
// }

// // Función para ver el producto actual y su costo total con IVA
// function verProducto() {
//   if (productoActual === null) {
//     alert("No hay producto para mostrar.");
//     return;
//   }

//   const costoTotalConIVA = productoActual.calcularTotalConIVA();

//   const productoStr = `Nombre: ${productoActual.nombre}, Precio: $${
//     productoActual.precio
//   }\nCosto Total con IVA: $${costoTotalConIVA.toFixed(2)}`;
//   alert(productoStr);
// }

// // Menú de opciones
// while (trueOrFalse) {
//   const opcion = parseInt(
//     prompt(
//       "Seleccione una opción:\n1. Ingresar producto\n2. Ver producto\n3. Ver keys\n4. Salir"
//     )
//   );

//   switch (opcion) {
//     case 1:
//       ingresarProducto();
//       break;
//     case 2:
//       verProducto();
//       break;
//     case 3:
//       for (const key in productoActual) {
//         alert(`${key}: ${productoActual[key]}`);
//       }
//       break;
//     case 4:
//       alert("¡Hasta luego!");
//       trueOrFalse = false;
//       break;

//     default:
//       alert("Opción inválida. Por favor, seleccione una opción válida.");
//   }
// }
// Definición de la clase constructora para crear animales
// class Animal {
//   constructor(nombre, especie) {
//     this.nombre = nombre;
//     this.especie = especie;
//     this.salud = 100; // Valor inicial de salud
//   }

//   comer(comida) {
//     alert(`${this.nombre} está comiendo ${comida}.`);
//     this.salud += 10;
//   }

//   dormir(horas) {
//     alert(`${this.nombre} está durmiendo por ${horas} horas.`);
//     this.salud += 20;
//   }

//   enfermar() {
//     alert(`${this.nombre} se ha enfermado.`);
//     this.salud -= 30;
//   }

//   obtenerSalud() {
//     return this.salud;
//   }
// }

// // Función para crear un nuevo animal personalizado
// function crearAnimalPersonalizado() {
//   const nombre = prompt("Ingrese el nombre del animal:");
//   const especie = prompt("Ingrese la especie del animal:");
//   return new Animal(nombre, especie);
// }

// // Menú de opciones
// while (trueOrFalse) {
//   const opcion = parseInt(
//     prompt(
//       "Seleccione una opción:\n1. Crear animal personalizado\n2. Usar animales predefinidos\n3. Salir"
//     )
//   );

//   switch (opcion) {
//     case 1:
//       const animalPersonalizado = crearAnimalPersonalizado();
//       alert(
//         `Se ha creado un nuevo animal personalizado: ${animalPersonalizado.nombre} (${animalPersonalizado.especie}).`
//       );
//       break;
//     case 2:
//       const perro = new Animal("Rex", "Perro");
//       const gato = new Animal("Whiskers", "Gato");

//       perro.comer("croquetas");
//       perro.dormir(8);
//       gato.comer("pescado");
//       gato.enfermar();

//       alert(
//         `${perro.nombre} tiene una salud de ${perro.obtenerSalud()} puntos.`
//       );
//       alert(`${gato.nombre} tiene una salud de ${gato.obtenerSalud()} puntos.`);
//       break;
//     case 3:
//       alert("¡Hasta luego!");
//       trueOrFalse = false;
//       break;
//     default:
//       alert("Opción inválida. Por favor, seleccione una opción válida.");
//   }
// }

// Definición de la clase para crear personajes
// Definición de la clase para crear personajes
// Definición de la clase para crear personajes
// Definición de la clase para crear personajes
// Definición de la clase para crear personajes
// class Personaje {
//   constructor(nombre, salud, poder) {
//     this.nombre = nombre;
//     this.salud = salud;
//     this.poder = poder;
//   }

//   atacar(enemigo) {
//     alert(
//       `${this.nombre} ataca a ${enemigo.nombre} con ${this.poder} de poder.`
//     );
//     enemigo.salud -= this.poder;
//   }

//   curar() {
//     alert(`${this.nombre} se está curando.`);
//     this.salud += 20;
//   }

//   obtenerSalud() {
//     return this.salud;
//   }

//   estaVivo() {
//     return this.salud > 0;
//   }
// }

// // Función para simular el turno de un personaje
// function turno(personaje, enemigo) {
//   const accion = parseInt(
//     prompt(
//       `Seleccione una acción para ${personaje.nombre}:\n1. Atacar\n2. Curar`
//     )
//   );

//   switch (accion) {
//     case 1:
//       personaje.atacar(enemigo);
//       alert(
//         `${enemigo.nombre} tiene ${enemigo.obtenerSalud()} de salud restante.`
//       );

//       // Acción del enemigo
//       const accionEnemigo = Math.floor(Math.random() * 2); // 0 para atacar, 1 para curar
//       if (accionEnemigo === 0) {
//         enemigo.atacar(personaje);
//         alert(
//           `${enemigo.nombre} ataca a ${personaje.nombre} con ${
//             enemigo.poder
//           } de poder. ${
//             personaje.nombre
//           } tiene ${personaje.obtenerSalud()} de salud restante.`
//         );
//       } else {
//         enemigo.curar();
//         alert(
//           `${enemigo.nombre} se está curando. ${
//             enemigo.nombre
//           } tiene ${enemigo.obtenerSalud()} de salud.`
//         );
//       }

//       break;
//     case 2:
//       personaje.curar();
//       alert(`${personaje.nombre} tiene ${personaje.obtenerSalud()} de salud.`);

//       // Acción del enemigo
//       const accionEnemigoCurar = Math.floor(Math.random() * 2); // 0 para atacar, 1 para curar
//       if (accionEnemigoCurar === 0) {
//         enemigo.atacar(personaje);
//         alert(
//           `${enemigo.nombre} ataca a ${personaje.nombre} con ${
//             enemigo.poder
//           } de poder. ${
//             personaje.nombre
//           } tiene ${personaje.obtenerSalud()} de salud restante.`
//         );
//       } else if (enemigo.obtenerSalud() < 80) {
//         enemigo.curar();
//         alert(
//           `${enemigo.nombre} se está curando. ${
//             enemigo.nombre
//           } tiene ${enemigo.obtenerSalud()} de salud.`
//         );
//       } else {
//         enemigo.atacar(personaje);
//         alert(
//           `${enemigo.nombre} ataca a ${personaje.nombre} con ${
//             enemigo.poder
//           } de poder. ${
//             personaje.nombre
//           } tiene ${personaje.obtenerSalud()} de salud restante.`
//         );
//       }

//       break;
//     default:
//       alert("Opción inválida. Se pasa el turno.");
//   }
// }

// // Crear instancias de personajes
// const personajeSeleccionado = new Personaje("Jugador", 100, 25);
// const enemigo = new Personaje("Enemigo", 80, 20);

// // Juego principal
// alert("¡Bienvenido al juego de batallas!");

// while (personajeSeleccionado.estaVivo() && enemigo.estaVivo()) {
//   turno(personajeSeleccionado, enemigo);
// }

// if (personajeSeleccionado.estaVivo()) {
//   alert(
//     `${personajeSeleccionado.nombre} ha derrotado a ${enemigo.nombre}. ¡Ganaste!`
//   );
// } else {
//   alert(
//     `${enemigo.nombre} ha derrotado a ${personajeSeleccionado.nombre}. ¡Perdiste!`
//   );
// }
