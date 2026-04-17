import { useState } from "react";

export default  function FormPreventDefault() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const[showPassword,setShowPassword]=useState(false)
    const [isSubmitted,setIsSubmitted]=useState(false)

    function handleSubmit(e){
    e.preventDefault()

    setName('')
    setEmail('')
    setPassword('')
    setIsSubmitted(true)
    
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>

            <input type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter your Name"
            />
            <br />
            <br />
           
            <input type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
            />
            <br />
            
            <div>

            <input type={showPassword? "text":"password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"
            />
           <button onClick={()=>setShowPassword(!showPassword)}>{showPassword ? "hide":"show"}</button>
            </div>
           

            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Password:{password}</p>

            <button  disabled={name === "" ||email === "" || password === ""}  type="submit" >submit</button>
            {isSubmitted && <p>succesfully submitted</p> }
       
            </form>
             </div>
            
             )

    
}
