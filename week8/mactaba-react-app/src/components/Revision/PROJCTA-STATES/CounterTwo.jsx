import { useState } from "react";

export default function CounterTwo(){
    // const[increase,setIncrease]=useState(0)
    // const[decrease,setDecrease]=useState(0)
     const[count,setCount]=useState(0)

    function handleIncrease(){
        setCount(count +1)
    }

    function handleDecrease(){
        if (count>0){setCount(count -1)}
        
    }

    return(
        <div>
            <p>count :{count}</p>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleDecrease}>decrease </button>
            <button onClick={()=> setCount (0)}>reset</button>
        </div>
    )


}