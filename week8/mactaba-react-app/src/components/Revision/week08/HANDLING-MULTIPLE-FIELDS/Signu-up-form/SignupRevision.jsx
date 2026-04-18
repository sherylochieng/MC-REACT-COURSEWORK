import { useState } from "react";

export default function SignupFormHandlingFields(){
    const [form,setForm]=useState(
        {
            name:'',
            email:'',
            password:''
        }
    )

    const [showpassword,setShowPassword]=useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)


    function handleChange(e){
   
    const {name,value}=e.target
    setForm((prev)=>({...prev,[name]:value}))
    }

    function handleSubmit(e){
       e.preventDefault()  
       setForm(

         {
            name:'',
            email:'',
            password:''
            
        })
        
        setShowPassword(false)
        setIsSubmitted(true)

    }

    // if(isSubmitted) {
    // return  <p>submitted succesfully</p>
    // }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text"
        name="name" 
        value={form.name}
        onChange={handleChange}
        placeholder="entername"
        />
        <br />
        <input type="text"
        name="email" 
        value={form.email}
        onChange={handleChange}
        placeholder="enter email"
        />
        <br />

        <div>
        <input type={showpassword ? "text" : 'password'}
        name="password" 
        value={form.password}
        onChange={handleChange}
        placeholder="enter password"
        />
        <button type= 'button' onClick={()=>setShowPassword(!showpassword)}>{showpassword? 'hide':'show'}</button>
        </div>
       


        <p>{form.name}</p>
        <p>{form.email}</p>
        <p>{form.password}</p>

        <button disabled={form.name === "" || form.email === "" || form.password === ""} type="submit">submit</button>
         {isSubmitted && <p>succesfully submitted</p> }
        </form>
        
        </>
    )

}
