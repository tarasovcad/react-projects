import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  emial: yup.string().email('Plese enter a valid enter').required('Required'),
  age: yup.number().positive().integer().required('Required'),
  password: yup
    .string()
    .min(5)
    .max(20)
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Required'),
});

// oneOf(): checks if the value of the confirmPassword field is one of the values in the provided array.
