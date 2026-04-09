// const quizLists =[
//     {question:"what is react",
//      answer:'react is...'
//     },
//     {
//     question:"largest county?",
//     answer:'uasin gishu is'

//     }
// ]

// function Questions(){

//     return(
//         <div>
//             <li>
//               {quizLists.map((quizList(question,answer){
//                 <p>{question}</p>
//                 <p>{answer}</p>

//             }

//             </li>
          

//             ))}

//         </div>
//     )
    
// }

import { useState } from "react";
export default function Faq(){

    
const [isOpen,setIsopen]=useState(false)

    return(
        <div >
            
            <button onClick={() => setIsopen(!isOpen)}>what is react </button>
            {isOpen && (<p>Full stack developer and educator at Mctaba Labs.</p>)}
            
       

        </div>
    )
}