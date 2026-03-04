function Welcome( {name,course} ){
    return ( 
        <div>
            <p>hi i am {name}</p>
            <p>i am taking {course}</p>
        </div>
    )
}
function Testimonials() {
   return (
    <div>
        <p>Studen Testimonials</p>


       <Welcome 
       name='sheryl'
       course='economics'
       />

        <Welcome 
       name='joy'
       course='math'
       />

        <Welcome 
       name='john'
       course='physics'
       />

        <Welcome 
       name='roy'
       course='english'
       />


       <Welcome name='john'/>
       <Welcome name='victoria'/>

   
    </div>
    
  )
}

export default Testimonials
