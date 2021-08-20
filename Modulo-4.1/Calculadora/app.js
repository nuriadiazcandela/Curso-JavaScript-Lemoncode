const buttonIgual = document.getElementById('igual');
var result = document.getElementById('resultado');

let operacion = '';
let array = [];

//Suma
document.getElementById('suma').addEventListener('click', () => {
  const inputNumber = parseInt(document.getElementById('input').value);
  if (isNaN(inputNumber)) {
    return (document.getElementById('resultado').innerHTML = 'Error');
  } else {
    operacion = parseInt(operacion + inputNumber);
    array.push(operacion);
  }
});

//Resta
document.getElementById('resta').addEventListener('click', () => {
  const inputNumber = parseInt(document.getElementById('input').value);
  if (isNaN(inputNumber)) {
    return (document.getElementById('resultado').innerHTML = 'Error');
  } else {
    operacion = parseInt(operacion - inputNumber);
    array.push(operacion);
  }
});

//Multiplicación
document.getElementById('mult').addEventListener('click', () => {
  const inputNumber = parseInt(document.getElementById('input').value);

  if (isNaN(inputNumber)) {
    return (document.getElementById('resultado').innerHTML = 'Error');
  } else {
    if (operacion == 0) {
      operacion = parseInt(1 * inputNumber);
    } else {
      operacion = parseInt(operacion * inputNumber);
    }
    array.push(operacion);
  }
});

//División
document.getElementById('div').addEventListener('click', () => {
  const inputNumber = parseInt(document.getElementById('input').value);

  if (isNaN(inputNumber)) {
    return (document.getElementById('resultado').innerHTML = 'Error');
  } else {
    if (operacion == 0) {
      operacion = parseInt(inputNumber / 1);
    } else {
      operacion = parseInt(operacion / inputNumber);
    }
    array.push(operacion);
  }
});

//Igual
function resultado() {
  return array[array.length - 1];
}
const resultTotal = document.querySelector('#igual');
resultTotal.addEventListener('click', resultado);

function handleButtonClickEqual() {
  console.log(resultado());
  document.getElementById('resultado').innerHTML = 'El resultado es ' + resultado();
}

buttonIgual.addEventListener('click', handleButtonClickEqual);

// *** El resultado sale correcto, solo si se le vuelve a dar al botón de suma, resta, multiplicación o división antes del "igual" *** //

// EJERCICIO 2  Reservas en un Hotel
