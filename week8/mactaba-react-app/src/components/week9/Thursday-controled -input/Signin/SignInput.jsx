// WEEK09DAY04
// build contolled inputs in react
// Handle user input using onChange
// Submit forms using onSubmit
// Prevent page reload using preventDefault
// Manage multiple form fields using a single state object
// Validate login inputs
// Display validation errors in the UI
// Reset form state after submission
// Understand why libraries like React Hook Form exi


import { useState } from "react";

function SignIn(){

    const[email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    return (<div>
        <h3> LOG IN</h3>


        <label >

         Email
         <input
         value={email}
         onChange={(e)=> setEmail(e.target.value)} 
         placeholder="Enter your email"
         
         />  

         <p>users email is : {email}</p>
        </label>

        <label>
            Password
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter Your Password"
             />

             <p>user's password is :{password}</p>
        </label>
    </div>
)}

export default SignIn