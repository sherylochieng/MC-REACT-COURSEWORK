

import { useState } from "react";

function SignPrevious(){

    const [form,setForm]=useState({
        email:'',
        password:'',
        username:''
    })

    function handleChange(e){
        const {name,value}=e.target

        setForm((prev) => ({...prev,[name]:value}))
    }

    function handleSubmit(e){
        e.preventDefault()

        console.log('log in data',form)
    }

    return(
        <form onSubmit={handleSubmit} >Sign up Form


        <input 
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="enter email"
        />

        <input 
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="enter password"
        />

            <input 
        name="username"
        type="text"
        value={form.username}
        onChange={handleChange}
        placeholder="enter user name"
        />

        <button type="submit">SUBMIT</button>
        </form>
    )
   
}
export default SignPrevious


// import { useState } from "react";

// function SignIn(){

//     // const[email,setEmail]=useState('')
//     // const [password,setPassword]=useState('')
//     //phone, username

//     const [form, setForm] = useState ({
//         email:'',
//         password:'',
//         username:''
//     });

//     function handleChange(e){
//         const {name , value} = e.target;

//         setForm( (prev) => ({
//             ...prev,
//             [name]: value
//         }));
//     }

//     function handleSubmit(e){
//         e.preventDefault();

//         console.log("the log in data:", form)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <h3>Sign up form</h3>

//             <input
//             name="email" 
//             value={form.email} 
//             onChange={handleChange} 
//             placeholder="enter your email"/>


//             <input 
//             name="password" 
//             type="password" 
//             value={form.password}
//             onChange={handleChange}
//             placeholder="enter password" />

//             <input 
//             name="username" 
//             value={form.username} 
//             onChange={handleChange} 
//             placeholder="Enter your username"
//             />


//             <button type="submit">
//                 SIGN UP
//             </button>

//         </form>
//     );
// }    
// export default SignIn

////NOTES

// import { useState } from "react";

// function SignIn(){

//     // const[email,setEmail]=useState('')
//     // const [password,setPassword]=useState('')
//     //phone, username

//     const [form, setForm] = useState ({
//         email:'',
//         password:'',
//         username:''
//     });
// //e is the event obj created by react when the input changes
//     function handleChange(e){
//         const {name , value} = e.target;
//         //this line uses obj destructing
//         //e.target refers to the inpute element that triggered the event
//         //from that input, we extract 2 properties name&value

//         setForm( (prev) => ({ //prev represents the previous state
//             ...prev, //spread operator, copies all the previous values into the new obj
//             [name]: value //computed property name
//             //update the property that matches the input's name
//         }));
//     }

//     function handleSubmit(e){
//         e.preventDefault();

//         console.log("the log in data:", form)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <h3>Sign up form</h3>

//             <input
//             name="email" 
//             value={form.email}  //user@email.com
//             onChange={handleChange} 
//             placeholder="enter your email"/>


//             <input 
//             name="password" 
//             type="password" 
//             value={form.password}
//             onChange={handleChange}
//             placeholder="enter password" />

//             <input 
//             name="username" 
//             value={form.username} 
//             onChange={handleChange} 
//             placeholder="Enter your username"
//             />


//             <button type="submit">
//                 SIGN UP
//             </button>

//         </form>
//     );
// }    
// export default SignIn