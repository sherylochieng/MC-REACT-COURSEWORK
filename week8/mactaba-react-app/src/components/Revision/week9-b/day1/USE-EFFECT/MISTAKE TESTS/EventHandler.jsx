import { useState,useEffect } from "react";

    const[Submitted,setSubmitted]=useState(false)

    useEffect(()=>{
        if(Submitted){
            sendFormData(form)
            setSubmitted(false)
        }
    },[submitted])
