import { useFormik } from 'formik';
import { basicSchema } from '../schemas';

const onSubmit = () => {
  console.log('submitted');
};

const BasicForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { email: '', age: '', password: '', confirmPassword: '' },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? 'input-error' : ''}
      />
      <label htmlFor="age">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        id="age"
        type="number"
        placeholder="Enter your age"
        onBlur={handleBlur}
        className={errors.age && touched.age ? 'input-error' : ''}
      />
      <label htmlFor="password">Passowrd</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
        className={errors.password && touched.password ? 'input-error' : ''}
      />
      <label htmlFor="password">Confirm Passowrd</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
      />
      <button className="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
