function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
console.log(suma(3, 5));
console.log(resta(3, 5));
console.log(mult(3, 5));
console.log(div(3, 5));

document.getElementById('suma').addEventListener('click', () => {
  const a = parseInt(document.getElementById('a').value);
  const b = parseInt(document.getElementById('b').value);
  if (isNaN(a)) {
    return (document.getElementById('resultado').innerHTML =
      'Error, debes rellenar los dos números');
  } else if (isNaN(b)) {
    return (document.getElementById('resultado').innerHTML =
      'Error, debes rellenar los dos números');
  } else {
    result = a + b;
  }
  document.getElementById('resultado').innerHTML = 'El resultado es ' + result;
});

document.getElementById('resta').addEventListener('click', () => {
  const a = parseInt(document.getElementById('a').value);
  const b = parseInt(document.getElementById('b').value);
  if (isNaN(a)) {
    return (document.getElementById('resultado').innerHTML =
      'Error, debes rellenar los dos números');
  } else if (isNaN(b)) {
    return (document.getElementById('resultado').innerHTML =
      'Error, debes rellenar los dos números');
  } else {
    result = a - b;
  }
  document.getElementById('resultado').innerHTML = 'El resultado es ' + result;
});

document.getElementById('mult').addEventListener('click', () => {
  const a = parseInt(document.getElementById('a').value);
  const b = parseInt(document.getElementById('b').value);
  if (isNaN(a)) {
    return (document.getElementById('resultado').innerHTML =
      'Error, debes rellenar los dos números');
  } else if (isNaN(b)) {
    return (document.getElementById('resultado').innerHTML =
      'Error, debes rellenar los dos números');
  } else {
    result = a * b;
  }
  document.getElementById('resultado').innerHTML = 'El resultado es ' + result;
});

document.getElementById('div').addEventListener('click', () => {
  const a = parseInt(document.getElementById('a').value);
  const b = parseInt(document.getElementById('b').value);
  if (isNaN(a)) {
    return (document.getElementById('resultado').innerHTML =
      'Error, debes rellenar los dos números');
  } else if (isNaN(b)) {
    return (document.getElementById('resultado').innerHTML =
      'Error, debes rellenar los dos números');
  } else {
    result = a / b;
  }
  document.getElementById('resultado').innerHTML = 'El resultado es ' + result;
});
