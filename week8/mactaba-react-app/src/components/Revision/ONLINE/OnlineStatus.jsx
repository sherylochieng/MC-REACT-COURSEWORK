import { useState } from "react";

export default function OnlineStatus(){
    const [isOnline,setIsOnline]=useState(false)

    return(
        <div>
            <p>{isOnline?'you are online':"offline"}</p>
            <button onClick={()=>setIsOnline(!isOnline)}>togglestatus</button>
        </div>
    )
}