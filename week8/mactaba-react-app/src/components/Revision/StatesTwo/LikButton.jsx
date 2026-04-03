import { useState } from "react"

function LikButtonTwo(){
    const [like,setLike]=useState(0)

    function handleClick(e){
        console.log(e)
        setLike(like+1)
       
    }
    
    return(
         <button onClick={handleClick}>Like : {like}</button>
    )
    
}
export default LikButtonTwo
