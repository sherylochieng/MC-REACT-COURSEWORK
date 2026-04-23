import { useState } from "react";

export default function StudentApplicationForm(){
    const [form,setForm]=useState({
        name:'',
        email:'',
        phoneNumber:'',
        experienceLevel:'',
        joiningReason:''
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
        email:'',
        phoneNumber:'',
        experienceLevel:'',
        joiningReason:'' 
    }); 
    // reset fields
        setSuccess(true);
        setErrors({});                                   // clear errors
    }
    }

    function handleChange(e){
        const {name,value}=e.target
        setForm((prev)=>({...prev,[name]:value}))

    }


    if(success){
        return <p>submitted ,successfully..email will be sent.</p>
    }
    return(
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
        Phone Number
        <input
        name="phoneNumber" 
        value={form.phoneNumber} 
        onChange={handleChange} />
        {errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber}</p>}
      </label>

      <label>
        experience level
        <select 
        name="experienceLevel" 
        value={form.experienceLevel} 
        onChange={handleChange}>
        <option value="">-- Select level --</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        </select>
        {errors.experienceLevel && <p style={{ color: "red" }}>{errors.experienceLevel}</p>}
      </label>

       <label>
        Join
        <input
          type="text"
          name="joiningReason"
          value={form.joiningReason}
          onChange={handleChange}
        />
        {errors.joiningReason && <p style={{ color: "red" }}>{errors.joiningReason}</p>}
      </label>

        <button onClick={handleSubmit} type="submit">submit</button>
        </form>
        
        </>
    )
}

    function validate(form){
    const errors = {}
    if(!form.name.trim()){
        errors.name = 'name required'
        
    }
    if(!form.phoneNumber.trim()) {
    errors.phoneNumber = 'phone number required'
    } else if(form.phoneNumber.length < 10) {
    errors.phoneNumber = 'phone number must be at least 10 digits'
    }

    if(!form.email.includes('@')){
        errors.email='email invalid include @'
    }

    if(!form.experienceLevel){
        errors.experienceLevel= 'select one'
    }

     if(!form.joiningReason.trim()){
        errors.joiningReason= 'invalid message'
    }

    return errors
    }