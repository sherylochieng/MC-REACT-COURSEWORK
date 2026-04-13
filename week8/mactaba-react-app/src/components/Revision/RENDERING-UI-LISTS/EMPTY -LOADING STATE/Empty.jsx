const students=[
    {id:1, name:"Sheryl", admNumber:2345, year:4, duration:"6 Months", attendance:"online",active: true},
    {id:2, name:'Joy', admNumber:4567, year:6, duration:'7 Months', attendance:'physical',active: false},
    {id:3, name:'Shila', admNumber:7890, year:7, duration:'8 Months', attendance:'online', active: true},
]

export default function StudentEmpty(){
    if (students.length===0){
    return(
        <div>
           <p>Empty Array</p> 
        </div>
    )}
    return(
        <div>
            {students.map((student)=>
            <div key={student.id}>
                <p>{student.name}</p>
                <p>{student.admNumber}</p>
               
            </div>
            
            )}
        </div>
    )

}