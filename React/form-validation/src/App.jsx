import { useState } from 'react'
import './App.css'

function App() {
 const [formData,setFormData] = useState({
  name: "",
  email: "",
  password: "",
 });

 const [errors, setErrors] = useState({});

 const handleChange = (e) =>{
  setFormData((prev)=>({
    ...prev,
    [e.target.name]: e.target.value,
  }));
 };

 const validate = () =>{
  const newErrors = {};

  if(!formData.name) newErrors.name = "Name is required";
  if(!formData.email.includes("@")) newErrors.email = "Email is invalid";
  if(formData.password.length < 6)
  {
    newErrors.password = "Password must be at least 6 character";
  }

  return newErrors
 }

 const handleSubmit = (e)=>{
  e.preventDefault();

  const validationErrors = validate();
  if(Object.keys(validationErrors).length>0){
    setErrors(validationErrors);
  }else{
    alert("Form submitted!");
    console.log(formData);
    setErrors({});
  }
 };

  return (

    <div>
      <h1>Manual Form Validation</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name: </label>
          <input 
          name='name'
          value={formData.name}
          onChange={handleChange}
          />
          {errors.name && <p  style={{color: "red"}}>{errors.name}</p>}
        </div>

        <div>
          <label>Email: </label>
          <input
          name='email'
          value={formData.email}
          onChange={handleChange}
          />
          {errors.email && <p  style={{color: "red"}}>{errors.email}</p>}
        </div>

        <div>
          <label>Password: </label>
          <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          />
          {errors.password && <p style={{color: "red"}}>{errors.password}</p>} 
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
}

export default App
