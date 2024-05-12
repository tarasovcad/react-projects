import { useForm } from 'react-hook-form';
import './styles.css';

function App() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            {...register('firstName', {
              required: 'The field must be filled in',
              minLength: { value: 5, message: 'Minimum 5 symbols' },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}
        </div>
        <label>
          Last Name:
          <input
            {...register('lastName', {
              required: 'The field must be filled in',
              minLength: { value: 5, message: 'Minimum 5 symbols' },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}
        </div>

        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}

export default App;
