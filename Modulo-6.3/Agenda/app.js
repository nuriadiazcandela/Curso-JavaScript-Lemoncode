// Constantes
var WORK_HOURS = [
  '08:00 - 09:00',
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
];

// Datos
var myTeam = [
  {
    name: 'María',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Pedro',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Esther',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Marcos',
    availability: new Array(8).fill(true),
  },
];
WORK_HOURS;

// 1. Generación aleatoria de la disponibilidad
var randomSchedule = () => {
  for (const member of myTeam) {
    for (let i = 0; i < member.availability.length; i++) {
      member.availability[i] = getRandom(true, false);
    }
  }
};

var getRandom = (a, b) => (Math.random() < 0.5 ? a : b);

var isAvailable = (availability) => {
  if (availability === true) {
    return 'Sí';
  } else {
    return 'No';
  }
};

var printTeamSchedule = () => {
  for (const member of myTeam) {
    printSchedule(member);
  }
};

var printSchedule = (member) => {
  console.log('Disponibilidad de: ' + member.name);
  for (var i = 0; i < WORK_HOURS.length; i++) {
    console.log(WORK_HOURS[i] + ': ' + isAvailable(member.availability[i]));
  }
};

randomSchedule();
printTeamSchedule();

// 2. Buscar hueco libre
var findFreeTimeSlot = () => {
  var i = 0;
  var freeTimeSlot;
  var foundTimeSlot = false;

  var availabilityTracker = new Array(myTeam.length).fill(false);
  var timeSlotFreeForEveryone = new Array(myTeam.length).fill(true);

  do {
    for (var j = 0; j < myTeam.length; j++) {
      availabilityTracker[j] = myTeam[j].availability[i] ? true : false;
    }
    if (availabilityTracker.toString() === timeSlotFreeForEveryone.toString()) {
      freeTimeSlot = WORK_HOURS[i];
      foundTimeSlot = true;
    } else {
      availabilityTracker.fill(false);
    }
    i++;
  } while (i < WORK_HOURS.length && foundTimeSlot === false);

  if (foundTimeSlot) {
    console.log('Hueco encontrado en el horario ' + freeTimeSlot);
  } else {
    console.log('Lo siento, No hay hueco disponible en el equipo');
  }
};

findFreeTimeSlot();
