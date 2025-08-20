import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6+ characters")
    .required("Password is required"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert("Form submitted!");
    console.log(data);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Login Form (React Hook Form + Yup)</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label>Email:</label>
          <input {...register("email")} />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit" style={{ marginTop: "1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
