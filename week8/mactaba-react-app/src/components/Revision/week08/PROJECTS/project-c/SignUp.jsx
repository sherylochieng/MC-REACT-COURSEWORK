import { useState } from "react";

export default function SignUpForm(){
    const [form, setForm] = useState({ // ✅ cleaner name
    name:'',
    email: '',
    password: '',
    confirmPassword:""
    })
    const[errors,setErrors]=useState({})
    const[success,setSuccess]=useState(false)
    
        function handleSubmit(e){
            e.preventDefault()
    
            const nextErrors = validate(form);
            setErrors(nextErrors);
            
    
            if (Object.keys(nextErrors).length === 0) {
          // All validations passed - submit the form
          
          setForm({
           
            name:'',
            email: '',
            password: '',
            confirmPassword:""
          
        }); 
        // reset fields
            setSuccess(true);
            setErrors({});                                   // clear errors
        }
        }
    
    function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

    if (success){
        return <p>succesfuly signed up</p>
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} />
        {/* Show the error only if errors.name exists */}
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </label>

      <label>
        Email
        <input name="email" value={form.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </label>

      <label>
        Confirm Password
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
        </label>

      <button type="submit">Sign up</button>
    </form>
        </>
    )

}

function validate(form) {
  const errors = {};
  
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!form.email.includes("@")) errors.email = "Enter a valid email address.";
  if (!form.password) errors.password = "Password is required.";
  else if (form.password.length < 8) errors.password = "Password must be at least 8 characters.";
  if (!form.password) errors.password = "Password is required.";
  else if (form.password!==form.confirmPassword) errors.confirmPassword= "Passwords do not match.";
  return errors;
}