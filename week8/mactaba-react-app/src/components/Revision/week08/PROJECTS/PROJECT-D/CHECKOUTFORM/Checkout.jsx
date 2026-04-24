import { useState } from "react";

export default function CheckOutForm(){
    const [form,setForm]=useState({
        name:'',
        email:'',
        phoneNumber:'',
        deliveryAdress:'',
        PaymentMethod:'',
        oderNotes:''

    })

    const[errors,setErrors]=useState({})
    const[success,setSuccess]=useState(false)

    function handleSubmit(e){
        e.preventDefault()

        const nextErrors = validate(form);
        setErrors(nextErrors);
        

        if (Object.keys(nextErrors).length === 0) {
      // All validations passed - submit the form
      
      setForm({
        name:'',
        email:'',
        phoneNumber:'',
        deliveryAdress:'',
        PaymentMethod:'',
        oderNotes:'' 
    }); 
    // reset fields
        setSuccess(true);
        setErrors({});                                   // clear errors
    }
    }

    function handleChange(e){
        const {name,value}=e.target
        setForm((prev)=>({...prev,[name]:value}))

    }


    if(success){
        return <p>submitted ,successfully..thanks for signing up welcome to christs bride</p>
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <label>
        Name
        <textarea 
        name="name" 
        value={form.name}
        onChange={handleChange} />
        {/* Show the error only if errors.name exists */}
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </label>

      <label>
        Email
        <input
        name="email" 
        value={form.email} 
        onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </label>

        <label>
        Phone Number
        <input
        name="phoneNumber" 
        value={form.phoneNumber} 
        onChange={handleChange} />
        {errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber}</p>}
      </label>

      <label>
        Delivery Address
        <input
        name="deliveryaddress" 
        value={form.deliveryAdress} 
        onChange={handleChange} />
        {errors.deliveryAdress && <p style={{ color: "red" }}>{errors.deliveryAdress}</p>}
      </label>

      <label>
        Payment Method
        <radio 
        name="payment method" 
        value={form.PaymentMethod} 
        onChange={handleChange}>
        <option value="">-- Select level --</option>
        <option value="beginner">mpesa</option>
        <option value="intermediate">card</option>
        <option value="advanced">cash on delivery</option>
        </radio>
        {errors.PaymentMethod && <p style={{ color: "red" }}>{errors.PaymentMethod}</p>}
      </label>

       <label>
        Oder notes
        <input
          type="text"
          name="oder notes"
          value={form.oderNotes}
          onChange={handleChange}
        />
        {errors.oderNotes && <p style={{ color: "red" }}>{errors.oderNotes}</p>}
      </label>

        <button onClick={handleSubmit} type="submit">submit</button>
        </form>
        
        </>
    )
}

    function validate(form){
    const errors = {}
    if(!form.name.trim()){
        errors.name = 'name required'
        
    }
    if(!form.phoneNumber.trim()) {
    errors.phoneNumber = 'phone number required'
    } else if(form.phoneNumber.length < 10) {
    errors.phoneNumber = 'phone number must be at least 10 digits'
    }

    if(!form.email.includes('@')){
        errors.email='email invalid include @'
    }

    if(!form.deliveryAdress.trim()){
        errors.deliveryAdress='delivery adress required'
    }

    if(!form.PaymentMethod){
        errors.PaymentMethod= 'select one'
    }

     if(!form.oderNotes.trim()){
        errors.oderNotes= 'invalid message'
    }

    return errors
    }