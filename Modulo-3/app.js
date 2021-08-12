// Calcular precio total

const hotel = {
  count: -1,
  price: 60,
  type: 'vacaciones',
};

function getTotal() {
  if (hotel.count <= 0) {
    return 0;
  } else {
    return hotel.count * hotel.price;
  }
}
console.log('El precio total es: ', getTotal());

// Calcular el IVA
const product = {
  count: 3,
  price: 12.55,
  type: 'ropa',
};

function getVat() {
  switch (product.type) {
    case 'alimentacion':
      IVA = 0.1;
      break;
    case 'libro':
      IVA = 0.04;
      break;
    default:
      IVA = 0.21;
      break;
  }
  return IVA;
}
console.log('El tipo de IVA correspondiente es', getVat());
console.log('El IVA total es', getVat() * product.price);

function getVat2() {
  if (product.type == 'alimentacion') {
    IVA = 0.1;
  } else if (product.type == 'libro') {
    IVA = 0.04;
  } else {
    IVA = 0.21;
  }
  return IVA;
}
console.log('El El tipo de IVA correspondiente es', getVat2());
console.log('El IVA total es', getVat2() * product.price);

//Calcular sueldo neto en nómina

const empleado = {
  bruto: 14500,
  hijos: 2,
  pagas: 14,
};

let retencion;

function getSalary() {
  if (empleado.bruto <= 12000) {
    retencion = 0;
  } else if (empleado.bruto <= 24000) {
    retencion = 0.08;
  } else if (empleado.bruto <= 34000) {
    retencion = 0.16;
  } else {
    retencion = 0.3;
  }
  return empleado.bruto * retencion;
}

function children() {
  if ((empleado.hijos > 0) & (empleado.bruto > 12000)) {
    return empleado.bruto * (retencion - 0.02);
  } else {
    return empleado.bruto * retencion;
  }
}

console.log('El empleado tiene una retención de', getSalary(), 'euros');
console.log('El empleado tiene una retencion de', children(), 'euros por tener hijos');
console.log('El empleado tiene un sueldo neto anual de', empleado.bruto - children());
console.log(
  'El empleado tiene un sueldo neto mensual de',
  (empleado.bruto - children()) / empleado.pagas
);
