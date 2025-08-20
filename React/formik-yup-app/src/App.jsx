import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6+ characters")
    .required("Password is required"),
});

function App() {
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values) => {
    alert("Form submitted!");
    console.log(values);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Login Form (Formik + Yup)</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form noValidate>
          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage
              name="password"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit" style={{ marginTop: "1rem" }}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
