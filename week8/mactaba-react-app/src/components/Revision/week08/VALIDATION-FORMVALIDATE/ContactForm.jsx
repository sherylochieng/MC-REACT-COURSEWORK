import { useState } from "react";

export default function ContactForm(){
    const [form,setForm]=useState({
        name:'',
        email:'',
        message:''
    })
    const[errors,setErrors]=useState({})
    const[success,setSuccess]=useState(false)


     function handleChange(e){
        const {name,value}=e.target
        setForm((prev)=>({...prev,[name]:value}))

    }


    function handleSubmit(e){
        e.preventDefault()
    
        const nextErrors = validate(form);
        setErrors(nextErrors);

 
    if (Object.keys(nextErrors).length === 0) {
      // All validations passed - submit the form
      console.log("Submitting:", form);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" }); // reset fields
      setErrors({});                                   // clear errors
    }
  }

  if (success) {
    return <p>Account created successfully! Welcome aboard.</p>;
  }
    

   return (
    <>
    <form onSubmit={handleSubmit}>
         <label>
        Name
        <textarea 
        name="name" 
        value={form.name}
        onChange={handleChange} />
        {/* Show the error only if errors.name exists */}
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </label>

      <label>
        Email
        <input
        name="email" 
        value={form.email} 
        onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </label>

      <label>
        message
        <input
          type="text"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      </label>
        <button onClick={handleSubmit} type="submit">submit</button>
    </form>
    
    </>
   
   )}
   
    function validate(form){
    const errors = {}
    if(!form.name.trim()){
        errors.name = 'name required'
        
    }
    if(!form.email.includes('@')){
        errors.email='email invalid include @'
    }

    if(!form.message.trim()){
        errors.message= 'invalid message'
    }

    return errors
}