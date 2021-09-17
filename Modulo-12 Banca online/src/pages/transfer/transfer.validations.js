import { Validators, createFormValidation } from '@lemoncode/fonk';
import {
  dayValidator,
  monthValidator,
  yearValidator,
} from './custom-validator';

const validationSchema = {
  field: {
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern:
            /[A-Z]\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}|ES\d{22}/,
        },
        message: 'Introduzca un número IBAN válido',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern:
            /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/,
        },
        message: 'Introduzca un nombre válido',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /[0-9]/ },
        message: 'Introduzca sólo caracteres numéricos',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']/,
        },
        message: 'Introduzca un concepto correcto',
      },
    ],
    day: [
      {
        validator: dayValidator,
      },
    ],
    month: [
      {
        validator: monthValidator,
      },
    ],
    year: [
      {
        validator: yearValidator,
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
