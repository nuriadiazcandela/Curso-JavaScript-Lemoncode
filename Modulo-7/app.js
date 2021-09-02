// Validar un IBAN

// CASO 1
const value = 'ES6600190020961234567890';
const pattern = /^[A-Z]{2}\d{22}$/;

console.log('Regex pattern matchs with ' + value + '? ->', pattern.test(value));

//CASO 2
const value2 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];
const pattern2 = /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/;

value2.forEach((value2) => {
  console.log('Regex pattern matchs with ' + value2 + '? ->', pattern2.test(value2));
});

//CASO 3
const value3 = 'ES6600190020961234567890';
const pattern3 = /^([A-Z]{2})(\d{2})(\s?\d{4}){5}$/;
let result = pattern3.exec(value3);
console.log(result);
console.log('Código del pais: ' + result[1]);
console.log('Dígito de control: ' + result[2]);

// ---------------------------------------

// Validar matrícula coche

// CASO 1
const value4 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
const pattern4 = /^\d{4}(\s|-|_)?[A-Z]{3}$/;

value4.forEach((value4) => {
  console.log('Regex pattern matchs with ' + value4 + '? ->', pattern4.test(value4));
});

//CASO 2
const value5 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
const pattern5 = /^(\d{4})[\s-]?([A-Z]{3})$/;
for (let i = 0; i < value5.length; i++) {
  result5 = pattern5.exec(value5[i]);
  console.log(
    'El número de matricula es: ' +
      value5[i] +
      ', los números: ' +
      result5[1] +
      ' y las letras: ' +
      result5[2]
  );
}
