function StudentProperties( {name,course,age} ){
    return ( 
        <div >
        <div className="Student-card">
            <p>hi i am {name}</p>
            <p>i am taking {course}</p>
             <p>i am {age} years old</p>
        </div>
        </div>
    )
}
function StudentCard() {
   return (
    <div className="Student-profile-area" >
        <p className="Student-profile">Student profile</p>


       <StudentProperties
       name='sheryl'
       course='economics'
       age='12'
       />

        <StudentProperties
       name='joy'
       course='math'
        age='14'
       />

        <StudentProperties
       name='john'
       course='physics'
        age='13'
       />

        <StudentProperties 
       name='roy'
       course='english'
        age='15'
       />


   
    </div>
    
  )
}

export default StudentCard