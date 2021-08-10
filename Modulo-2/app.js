'use strict';

//Datos hotel
var hotel = {
  name: 'Hotel Best Mojacar',
  location: 'Mojacar',
  img: 'https://cdn2.paraty.es/best-corporate/images/9a41dc593353114=s1900',
};

document.getElementById('name-hotel').innerHTML = 'Hotel ' + hotel.name;
document.getElementById('location-hotel').innerHTML = 'Situado en ' + hotel.location;
document.getElementById('img-hotel').src = hotel.img;

//Puntuación hotel

var rating = prompt('Puntuación: del 1 al 5');

document.getElementById('rating').innerHTML = rating + ' estrellas';

//Usuario anónimo
var anonymous = confirm('¿Quieres que la reseña sea anónima?');

document.getElementById('anonymous').checked = anonymous;
