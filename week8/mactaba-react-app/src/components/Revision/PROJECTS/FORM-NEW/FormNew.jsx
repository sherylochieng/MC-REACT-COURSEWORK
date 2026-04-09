import { useState } from "react";

export default function FormNew(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const[showPassword,setShowPassword]=useState(false)
    const [isSubmitted,setIsSubmitted]=useState(false)

    // function handleSubmitButton(){
    //     if (name === "" ||email === "" || password === ""){
    //          alert ("fill all fields")

    //     }
    // }

    function handleSubmit(){
    setName('')
    setEmail('')
    setPassword('')
    setIsSubmitted(true)
    
    // alert ("succesfully submited")
    }

    return(
        <div>
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

            <button  disabled={name === "" ||email === "" || password === ""}  onClick={handleSubmit} >submit</button>
            {isSubmitted && <p>succesfully submitted</p> }
        </div>
    )
}