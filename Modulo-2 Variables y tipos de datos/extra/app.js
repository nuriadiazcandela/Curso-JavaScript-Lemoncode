'use strict';
///OPCIONAL//

var hoteles = {
  Mojacar: {
    name: 'Hotel Best Mojacar',
    location: 'Mojacar',
    img: 'https://cdn2.paraty.es/best-corporate/images/9a41dc593353114=s1900',
  },
  Barcelona: {
    name: 'Barcelona Catedral',
    location: 'Barcelona',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/103133839.jpg?k=a924558888bc1f44199746cd75c96f198f6e0e042c04169f8d4a36c65b30128a&o=&hp=1',
  },
};
var selectedHotel = prompt(
  'Indique el hotel sobre el que quiere hacer la reseña, Mojacar o Barcelona'
);

document.getElementById('name-hotel').innerHTML = 'Hotel ' + hoteles[selectedHotel].name;

document.getElementById('location-hotel').innerHTML =
  'Situado en ' + hoteles[selectedHotel].location;

document.getElementById('img-hotel').src = hoteles[selectedHotel].img;

//Puntuación hotel
var stars = {
  una: '<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>',
  dos: '<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>',
  tres: '<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>',
  cuatro:
    '<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>',
  cinco:
    '<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>',
};
var rating = prompt('Puntuación: una, dos, tres, cuatro o cinco estrellas');

document.getElementById('rating').innerHTML = stars[rating];
