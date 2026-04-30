// import { useState,useEffect } from "react";

// export default function InfiniteLoop(){
// const [count, setCount] = useState(0)

// useEffect(() => {
//   setCount(count + 1)
// }, [])

// return <p>Count: {count}</p>


        
    
// }

//BIG ERROR FROM ABOVE CODE,HERES WHAT SHOULD HAPPEN ...USE EFFECT IS ONLY FOR CONNECTING EXTERNAL SYSTEMS 
// AND NOT FOR UPDATING STATE,IF WE UPDATE STATE IN USE EFFECT WITHOUT PROPER DEPENDENCY ARRAY,
// IT WILL CAUSE INFINITE LOOP BECAUSE EVERY TIME THE COMPONENT RENDERS,
// USE EFFECT WILL RUN AND UPDATE THE STATE AGAIN AND AGAIN.



// // Real use — fetching from outside world ✅
// useEffect(() => {
//   fetch('api/products')
//     .then(res => res.json())
//     .then(data => setData(data)) // ← setting state from EXTERNAL data
// }, [])