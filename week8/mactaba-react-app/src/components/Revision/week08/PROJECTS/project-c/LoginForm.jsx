import { useState } from "react";
import LogInForm from "./Login";
import SignUpForm from "./SignUp";


export default function LogInSignUpForm(){
const [isLogin,setIslogin]=useState(false)



return(
    <>
   <button onClick={() => setIslogin(!isLogin)}>{isLogin ? 'Switch to Signup' : 'Switch to Login'}</button>
   {isLogin ? <SignUpForm /> : <LogInForm />}
   </>
)
}