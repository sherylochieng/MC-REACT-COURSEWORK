import { useState } from "react";

export default function NameInputTwo(){
    const[name,setName]=useState('')

    return(
        <div>
            <input type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Write ur name"
            
            />

             <p>Hello {name}</p>
             <button onClick={()=>setName('')}>Reset</button>
        </div>

       
    )
}