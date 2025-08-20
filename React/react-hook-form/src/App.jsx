import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const{
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) =>{
    alert("Form submitted!");
    console.log(data);
  };

  return (
    <div style={{padding: "2rem"}}>
      <h1>Form with react-hook-form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
          {...register("name", {required: "Name is required"})}
          />
          {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input 
          {...register("email",{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          />
          {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input 
          {...register("password", {
            required: "Password is not valid",
            minLength:{
              value: 6,
              message: "Must be at least 6 characters",
            },
          })}
          />
          {errors.password && (
            <p style={{color:"red"}}>{errors.password.message}</p>
          )}
        </div>

          <button type="submit" style={{ marginTop: "1rem" }}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
