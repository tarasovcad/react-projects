import { useFormik } from 'formik';
import { basicSchema } from '../schemas';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const BasicForm = () => {
  const { values, errors, touched, isSubmitting ,handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { email: '', age: '', password: '', confirmPassword: '' },
    validationSchema: basicSchema,
    onSubmit,
  });
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
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
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
      {errors.age && touched.age && <p className="error">{errors.age}</p>}
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
      {errors.password && touched.password && <p className="error">{errors.password}</p>}
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
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button disabled={isSubmitting} className="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
