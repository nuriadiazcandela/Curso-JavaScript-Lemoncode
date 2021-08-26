// Mostrar una estructura de carrito de la compra.
const carrito = [
  {
    id: 198752,
    name: 'Tinta DJ27 Color',
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: 'Impresora ticketera PRO-201',
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: 'Caja de rollos de papel para ticketera',
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: 'Caja de folios DIN-A4 80gr',
    price: 9.95,
    count: 2,
    premium: false,
  },
];

// Listar todos los productos.
for (let i = 0; i < carrito.length; i++) {
  listar(carrito[i]);
}
function listar(producto) {
  console.log('id:' + producto.id);
  console.log('name:' + producto.name);
  console.log('price:' + producto.price);
  console.log('count:' + producto.count);
  console.log('premium:' + producto.premium);
  console.log('-------------');
}

// Eliminar un producto del carrito de la compra.
carrito.splice(0, 1);
console.log(carrito);

// Calcular el total del carrito de la compra (ojo aquí truco multiplicar cantidad por valor).
let total = 0;
for (const producto of carrito) {
  total += producto.price * producto.count;
}
console.log('Total del carrito: ' + total);

// Filtrar por los productos que sean prime.
for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].premium === true) {
    console.log(carrito[i].name + ' es prime');
  }
}
