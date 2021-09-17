const reservas = [
  {
    tipoHabitacion: 'standard',
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: 'standard',
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: 'suite',
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

class Reserva {
  constructor() {
    this._reservas = [];
    this._subtotal = 0;
    this._total = 0;
  }

  hasBreakfast(breakfast) {
    return breakfast == true ? 15 : 0;
  }

  roomType(type) {
    if (type === 'standard') {
      return 100;
    } else {
      return 150;
    }
  }

  additionalCharges(person) {
    return person > 1 ? 40 * (person - 1) : 0;
  }

  subtotalCalc(tipoHabitacion, desayuno, pax, noches) {
    this._subtotal = reservas.reduce(
      (acc, { tipoHabitacion, desayuno, pax, noches }) =>
        acc +
        noches *
          (this.roomType(tipoHabitacion) +
            this.additionalCharges(pax) +
            this.hasBreakfast(desayuno) * pax),
      0
    );
  }

  totalCalc(tipoHabitacion, desayuno, pax, noches) {
    const IVA = 1.21;
    this._total = reservas.reduce(
      (acc, { tipoHabitacion, desayuno, pax, noches }) =>
        acc +
        noches *
          (this.roomType(tipoHabitacion) +
            this.additionalCharges(pax) +
            this.hasBreakfast(desayuno) * pax) *
          IVA,
      0
    );
  }

  get subtotal() {
    return this._subtotal;
  }

  get total() {
    return this._total;
  }

  set reservas(reservaExterna) {
    this._reservas = reservaExterna;
    this.subtotalCalc();
    this.totalCalc();
  }
}

class PrivateCustomer extends Reserva {
  constructor() {
    super();
  }
}

class TourOperator extends Reserva {
  constructor() {
    super();
  }

  roomType(type) {
    return (type = 100);
  }

  get total() {
    return this._total * 0.85;
  }
}

const privateCustomer = new PrivateCustomer();
const tourOpertator = new TourOperator();

privateCustomer.reservas = reservas;
console.log('Subtotal tipo particular = ', privateCustomer.subtotal + '€');
console.log('Total tipo praticular = ', privateCustomer.total + '€');

tourOpertator.reservas = reservas;
console.log('Subtotal tipo Tour operator = ', tourOpertator.subtotal + '€');
console.log('Total tipo Tour operator = ', tourOpertator.total + '€');
