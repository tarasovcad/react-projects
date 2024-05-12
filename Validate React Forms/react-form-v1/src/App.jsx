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
      <form onSubmit={handleSubmit()}>
        <label htmlFor="">
          First Name:
          <input {...register('firstName')} />
        </label>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
