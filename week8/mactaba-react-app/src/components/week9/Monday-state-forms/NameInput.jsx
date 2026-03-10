

// user types: A
// onChange fires
// react gives the event object :e
// we read the input value: e.target.value which is A
// We update state setName("A")
// react re-renders the component
// Now we have names equals to "A"
// the Ui updates : Hello A


import { useState } from "react";

const NameInput = () => {
    const [name, setName] = useState("");

    return(
        <div>
            <input type="text" 
           value = {name} onChange={(e) => setName(e.target.value)} 
           placeholder="Enter your name" 
           />

            <p>Your name is: {name}</p>
        </div>
    )

}
export default NameInput;
