import { useState } from "react";

export default function LogInForm(){
    const [login, setLogin] = useState({ // ✅ cleaner name
    email: '',
    password: ''
    })
    const[errors,setErrors]=useState({})
    const[success,setSuccess]=useState(false)
    
        function handleSubmit(e){
            e.preventDefault()
    
            const nextErrors = validate(login);
            setErrors(nextErrors);
            
    
            if (Object.keys(nextErrors).length === 0) {
          // All validations passed - submit the form
          
          setLogin({
           
            email:'',
            password:''
          
        }); 
        // reset fields
            setSuccess(true);
            setErrors({});                                   // clear errors
        }
        }
    
    function handleChange(e) {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  }

    if (success){
        return <p>welcome bck,youre logged in</p>
    }

    return(
        <>
        <form onSubmit={handleSubmit}>

      <label>
        Email
        <input name="email" value={login.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </label>

      <button type="submit">Sign up</button>
    </form>
        </>
    )

}

function validate(login) {
  const errors = {};
  
  if (!login.email.trim()) errors.email = "Email is required.";
  else if (!login.email.includes("@")) errors.email = "Enter a valid email address.";
  if (!login.password) errors.password = "Password is required.";
  else if (login.password.length < 8) errors.password = "Password must be at least 8 characters.";
  return errors;
}