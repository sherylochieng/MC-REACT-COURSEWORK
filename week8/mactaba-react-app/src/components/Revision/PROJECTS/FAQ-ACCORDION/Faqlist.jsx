import { useState } from "react";

export default function FaqList(){

const faqs = [
  { question: "What is React?", answer: "React is a JavaScript library." },
  { question: "What is useState?", answer: "useState is a React Hook." },
  { question: "What is JSX?", answer: "JSX is HTML-like syntax in JavaScript." },
]
const [openIndex,setOpenIndex]=useState(null)  

return(
<div>
  
  {faqs.map((faq, index) => (
  <div key={index}>
    <button onClick={() => setOpenIndex(index)}>{faq.question}</button>

    {openIndex === index && <p>{faq.answer}</p>}
  </div>
  ))}

</div>
)

 }