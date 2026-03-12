import { useState } from "react";

function Login (){
    const[email,setEmail]=useState('');

    function handleSubmit (e){ 
        e.preventDefault();

        console.log('logging  in with', email);

    }

    return (

        <form onSubmit={handleSubmit}>

            <label>
                Email
                <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter your email"
                
                />

                <button type ='submit'>SUBMIT</button>
            </label>
        </form>
    )
}  

export default Login
