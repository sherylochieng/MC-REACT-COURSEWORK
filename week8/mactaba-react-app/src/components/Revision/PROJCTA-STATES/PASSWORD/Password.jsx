import { useState } from "react";

export default function Password(){
    const[password,setPassword]=useState('')
    const[showPassword,setShowPassword]=useState(false)

    return(
        <div>

     <input 
    type={showPassword ? 'text' : 'password'}
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    placeholder='enter password'
     />

        <p>password:{password}</p>
    <button onClick={()=>setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'showpassword'}</button>

    
        </div>
    )
   
    
    

}