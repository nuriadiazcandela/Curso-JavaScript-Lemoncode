// hasId
const myObject = {
  id: 1,
  name: 'Nuria',
  age: 35,
};
const hasId = ({ id }) => (id ? true : false);
console.log(hasId(myObject));

// head
const list = ['patatas', 'bacon', 'caramelos'];
const head = ([firstElement]) => firstElement;
console.log(head(list));

// tail
const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
const tail = ([, ...rest]) => rest;
console.log(tail(months));

// swapFirstToLast
const numbers = [1, 2, 3, 4, 5];
const swapFirstToLast = ([first, ...rest]) => [...rest, first];
console.log(swapFirstToLast(numbers));

// excludeId
const myObject2 = {
  id: 1,
  name: 'Alberto',
  age: 22,
};
const exclueId = ({ id, ...rest }) => rest;
console.log(exclueId(myObject2));

// wordsStartingWithA
const names = ['Alicia', 'Silvia', 'Andrea', 'Teresa'];
const wordsStartingWithA = (names) => names.filter(([name]) => name.toLowerCase() == 'a');
console.log(wordsStartingWithA(names));

// concat
const concat = (...items) => items.join(' | ');
console.log(concat('Part 1', 'Part 2', 'Part 3', 'Part 4'));

// multArray
const arr = [1, 2, 3, 4, 5, 6, 7];
const multArray = (arr, x) => arr.map((item) => item * x);
console.log(multArray(arr, 2));

// calcMult
const numbers2 = [1, 2, 3, 4];
const calcMult = ([...numbers2]) => numbers2.reduce((acc, n) => acc * n);
console.log(calcMult(numbers2));

/// EXTRA
// Lista de la compra
const shoppingCart = [
  { category: 'Frutas y Verduras', product: 'Lechuga', price: 0.8, units: 1 },
  { category: 'Carne y Pescado', product: 'Pechuga pollo', price: 3.75, units: 2 },
  { category: 'Droguería', product: 'Gel ducha', price: 1.15, units: 1 },
  { category: 'Droguería', product: 'Papel cocina', price: 0.9, units: 3 },
  { category: 'Frutas y Verduras', product: 'Sandía', price: 4.65, units: 1 },
  { category: 'Frutas y Verduras', product: 'Puerro', price: 4.65, units: 2 },
  { category: 'Carne y Pescado', product: 'Secreto ibérico', price: 5.75, units: 2 },
];
// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const getIva = (iva, items) => items.map((item) => ({ ...item, IVA: item.price * iva }));
console.log(getIva(0.21, shoppingCart));

// B. Ordena la lista de más a menos unidades.
const shoppingCartCopy = [...shoppingCart];
const sortItems = (items) => items.sort((a, b) => b.units - a.units);
console.log(sortItems(shoppingCartCopy));

// C. Obtén el subtotal gastado en droguería.
const subtotalDrugstore = (items) =>
  items
    .filter((item) => item.category === 'Droguería')
    .reduce((acc, item) => acc + item.price * item.units, 0);
console.log(subtotalDrugstore(shoppingCart));

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
const productPrice = (products) =>
  products
    .sort((a, b) => a.category.localeCompare(b.category))
    .map((product) => `${product.product} -> Precio Total: ${product.price * product.units}€`)
    .join(' | ');
console.log(productPrice(shoppingCart));
