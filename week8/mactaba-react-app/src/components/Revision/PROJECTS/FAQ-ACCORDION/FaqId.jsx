import { useState } from "react";

export default function FaqId(){

const faqs = [
  { id:1,question: "What is React?", answer: "React is a JavaScript library." },
  { id:2,question: "What is useState?", answer: "useState is a React Hook." },
  { id:3,question: "What is JSX?", answer: "JSX is HTML-like syntax in JavaScript." },
]
const [openId,setOpenId]=useState(null)  

return(
<div>
{faqs.map((faq) => (
  <div key={faq.id}>
    <button onClick={() => setOpenId(faq.id)}>{faq.question}</button>
    {openId === faq.id && <p>{faq.answer}</p>}
  </div>
))}

</div>
)

 }