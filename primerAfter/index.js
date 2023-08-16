let trueOrfalse = true;

const lenceria = prompt("Desea ver nuestro catalogo");

if (lenceria == "si") {
  catalogo();
} else {
  alert("Hasta luego");
}

function catalogo() {
  while (trueOrfalse) {
    let prendas = parseInt(
      prompt(
        "Que prenda anda buscando? \n 1- Conjuntos $1000 \n 2- Corpiños $100 \n 3- Colaless $200 \n 4. Salir \n Ingrese el numero de lista de la prenda"
      )
    );

    switch (prendas) {
      case 1:
        seleccionarPrenda("Conjunto", 1000);
        break;
      case 2:
        seleccionarPrenda("Corpiño", 100);
        break;
      case 3:
        seleccionarPrenda("Colaless", 200);
        break;
      case 4:
        trueOrfalse = false;
        break;
      default:
        alert("Opcion invalida");
    }
  }
}

function seleccionarPrenda(prenda, valor) {
  let talle;
  for (let i = 4; i >= 0; i--) {
    talle = prompt(
      `Ingrese el talle para ${prenda} \n S \n M \n L`
    ).toUpperCase();

    if (talle) {
      break;
    } else {
      alert("Talle invalido");
    }
    i--;
  }

  switch (talle) {
    case "S":
      seleccionarPrendaColor(prenda, valor, talle);
      break;
    case "M":
      seleccionarPrendaColor(prenda, valor, talle);
      break;
    case "L":
      seleccionarPrendaColor(prenda, valor, talle);
      break;
  }}

function seleccionarPrendaColor(prenda, valor, talle) {
  const color = parseInt(
    prompt(
      `Ingrese el color para ${prenda} \n
        1. Rojo \n 2. Azul \n 3. Verde `
    )
  );

  switch (color) {
    case 1:
      alert(`Usted selecciono ${prenda} en talle ${talle} y color Rojo`);
      metodoDePago(prenda, valor);
      break;
    case 2:
      alert(`Usted selecciono ${prenda} en talle ${talle} y color Azul`);
      metodoDePago(prenda, valor);
      break;
    case 3:
      alert(`Usted selecciono ${prenda} en talle ${talle} y color Verde`);
      metodoDePago(prenda, valor);
      break;
    default:
      alert("Color invalido");
  }
}

function metodoDePago(prenda, valor) {
  const metodos = parseInt(
    prompt(
      `Con que desea pagar el monto total de ${valor} por su prenda ${prenda}? \n 1. Efectivo(10% de descuento) \n 2. Tarjeta`
    )
  );

  switch (metodos) {
    case 1:
      const descuento = valor * 0.1;
      const total = valor - descuento;
      alert(`Usted selecciono efectivo, el total a pagar es de ${total}`);
      break;
    case 2:
      mercadoPago(prenda, valor);
      break;
  }
}

function mercadoPago(prenda, valor) {
  const tarjetaNumeros = prompt("Ingrese los numeros de su tarjeta");
  const tarjetaNombre = prompt("Ingrese el nombre de su tarjeta");
  const tarjetaVencimiento = prompt(
    "Ingrese la fecha de vencimiento de su tarjeta"
  );
  const tarjetaCodigo = prompt("Ingrese el codigo de su tarjeta");
  const cantidadCuotas = parseInt(
    prompt("Ingrese la cantidad de cuotas \n 1 \n 3 \n 6 \n 12")
  );

  if (
    tarjetaNumeros != "" &&
    tarjetaNombre != "" &&
    tarjetaVencimiento != "" &&
    tarjetaCodigo != "" &&
    cantidadCuotas != ""
  ) {
    switch (cantidadCuotas) {
      case 1:
        alert(
          `Usted selecciono 1 cuota, el total a pagar es de ${valor} por la prenda ${prenda}`
        );

        break;
      case 3:
        alert(
          `Usted selecciono 3 cuota, el total a pagar es de ${valor} por la prenda ${prenda}`
        );

        break;
      case 6:
        alert(
          `Usted selecciono 6 cuota, el total a pagar es de ${valor} por la prenda ${prenda}`
        );

        break;
      case 12:
        alert(
          `Usted selecciono 12 cuota, el total a pagar es de ${valor} por la prenda ${prenda}`
        );
        break;
      default:
        alert("Cuotas invalidas");
    }
  } else {
    alert("Datos invalidos");
  }
}
