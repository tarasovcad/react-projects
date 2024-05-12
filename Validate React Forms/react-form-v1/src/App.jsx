import { useForm } from 'react-hook-form';
import './styles.css';

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input {...register('firstName', { required: 'The field must be filled in' })} />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
