const dbProductos = [
  {
    id: 1,
    name: "Remera",
    price: 1000,
    color: "rojo",
  },
  {
    id: 2,
    name: "Pantalon",
    price: 2000,
    color: "blanco",
  },
  {
    id: 3,
    name: "Zapatillas",
    price: 3000,
    color: "blanco",
  },
  {
    id: 4,
    name: "Zapatillas",
    price: 5000,
    color: "rojo",
  },
];

let productosArr = [];
let carritoArr = [];
let trueOrFalse = true;

class Productos {
  constructor({ id, name, price, color }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.color = color;
  }
  iva() {
    return this.price * 0.21;
  }
}

function pushProductos() {
  for (const elemento of dbProductos) {
    productosArr.push(new Productos(elemento));
    console.log(productosArr);
  }
}

pushProductos();

function initProgram() {
  while (trueOrFalse) {
    let selectSection = parseInt(
      prompt(
        "¿Qué quieres hacer? \n 1. Ver productos con forOF \n 2. Ver productos con forOF y function \n 3. Ver promedio de valor por prenda en stock \n 4. Ver productos con forEach \n 5. Ver productos de la A a la Z\n 6. Buscar un producto \n 7. Buscar color \n 8. Buscar en la DB si existe un producto \n 9. Comprar un producto \n 10. Salir \n 11. Bonus track buscar con MAP"
      )
    );

    switch (selectSection) {
      case 1:
        verProductosFor();
        break;
      case 2:
        verProductosForFuncion();
        break;
      case 3:
        calcularPrecioPromedio(productosArr);
        break;
      case 4:
        verProductosForEach();
        break;
      case 5:
        aToZ();
        break;
      case 6:
        buscarUnProducto();
        break;
      case 7:
        buscarColor();
        break;
      case 8:
        buscarEnDb();
        break;
      case 9:
        comprarProducto();
        break;
      case 10:
        trueOrFalse = false;
        break;
      case 11:
        buscarConMap();
        break;
    }
  }
}

function verProductosFor() {
  showProducts(productosArr, alert);
  alert("Fin");
  initProgram();
}

function showProducts(arr, fn) {
  for (const elemento of arr) {
    fn(elemento.name);
  }
}

function verProductosForFuncion() {
  showProductsReturn(productosArr)(alert);
  initProgram();
}

function showProductsReturn(arr) {
  return function (fn) {
    for (const elemento of arr) {
      fn(elemento.name);
    }
  };
}

function calcularPrecioPromedio(productArr) {
  let monto = 0;
  porCadaUno(productArr, (elm) => {
    monto += elm.price;
  });

  alert(
    `El promedio de precio de los productos es ${monto / productArr.length}`
  );
  initProgram();
}

function porCadaUno(arr, fn) {
  for (const elemento of arr) {
    fn(elemento);
  }
}

function verProductosForEach() {
  productosArr.forEach((elm) => {
    alert(elm.name);
  });
  initProgram();
}

function aToZ() {
  productosArr.sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
  });
  console.log(productosArr);
  initProgram();
}

function buscarUnProducto() {
  let productoABuscar = prompt("Ingrese el nombre del producto a buscar");
  let productoEncontrado = productosArr.find((elm) => {
    return elm.name === productoABuscar;
  });
  if (productoEncontrado) {
    alert(
      productoEncontrado.name +
        " " +
        productoEncontrado.price +
        " " +
        productoEncontrado.color
    );
  } else {
    alert("El producto no existe");
  }

  console.log(productoEncontrado);
  initProgram();
}

function buscarColor() {
  let colorABuscar = prompt("Ingrese el color a buscar");
  let colorEncontrado = productosArr.filter(
    (elm) => elm.color === colorABuscar
  );

  if (colorEncontrado.length > 0) {
    colorEncontrado.forEach((elm) => {
      alert(elm.name + " " + elm.price + " " + elm.color);
    });
  } else {
    alert("El color no existe");
  }
}

function buscarEnDb() {
  let productoABuscar = prompt("Ingrese el nombre del producto a buscar");
  let productoEncontrado = dbProductos.some((elm) => {
    return elm.name === productoABuscar;
  });

  if (productoEncontrado) {
    alert("El producto existe");
  } else {
    alert("El producto no existe");
  }

  initProgram();
}

function comprarProducto() {
  let productoABuscar = prompt("Ingrese el nombre del producto a buscar");
  let productoEncontrado = dbProductos.some((elm) => {
    return elm.name === productoABuscar;
  });
  if (productoEncontrado) {
    alert("El producto existe");
    addToCart(productoABuscar);
  } else {
    alert("El producto no existe");
  }
}

function addToCart(productoABuscar) {
  let producto = productosArr.find((elm) => {
    return elm.name === productoABuscar;
  });
  if (producto) {
    carritoArr.push(producto);
    let confirmar = prompt("Desea agregar otro producto? SI/NO");
    if (confirmar === "SI") {
      comprarProducto();
    } else {
      sumarPrecioTotal();
      eliminarTodosLosProductos();
    }
  }
}

function sumarPrecioTotal() {
  let precioTotal = carritoArr.reduce(
    (acumulador, producto) => acumulador + producto.price,
    0
  );
  alert("El precio total es " + precioTotal);
}

function eliminarTodosLosProductos() {
  carritoArr.splice(0, carritoArr.length);
}

function buscarConMap() {
  let productoABuscar = prompt("Ingrese el nombre del producto a buscar");
  let productoEncontrado = dbProductos
    .map((elm) => elm.name)
    .indexOf(productoABuscar); //["Remera", "Pantalon", "Zapatillas", "Zapatillas"]

  if (productoEncontrado == -1) {
    alert("El producto no existe");
  } else {
    console.log(productoEncontrado);
    alert("El producto existe");
  }

  initProgram();
}

// initProgram();

// EJEMPLOS DE USO DE MAP

let arr = [1, 2, 3, 4, 5];

let arr2 = arr.map((elm) => {
  const obj = {
    id: elm,
    name: "Producto " + elm,
    price: elm * 1000,
  };
  return obj;
});
console.log(arr2);
