import { useState } from "react";

export default function Theme(){
    const[isDarkMode,setIsDarkMode]=useState(false)

    return(
        <div >
            <button onClick={()=>setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Light Mode":"dark MODE"}</button>

            <div style={{color:isDarkMode? "white":"black",
                        backgroundColor:isDarkMode? "black": "white"}} >
            <p>heloo shesheee</p>

            </div>

        </div>
    )
}