
const students=[
    {id:1, name:"Sheryl", admNumber:2345, year:4, duration:"6 Months", attendance:"online",active: true},
    {id:2, name:'Joy', admNumber:4567, year:6, duration:'7 Months', attendance:'physical',active: false},
    {id:3, name:'Shila', admNumber:7890, year:7, duration:'8 Months', attendance:'online', active: true},
]

export default function StudentActive(){
    const activeStudents=students
    .filter((student)=>student.active)
    .map((student)=>
            <div key={student.id}>
                <h1>Name:{student.name}</h1>
                <h2>Admission number:{student.admNumber}</h2>
                <p>Year:{student.year} <span>Duration:{student.duration}</span> <span>Attendance:{student.attendance}</span></p>
        </div>
    )

    return(
        <div>{activeStudents}</div>
    )
   

}

// PERFECT! 🎯 That is clean and professional code!
// You just used the chaining pattern from your notes:

// .filter() narrows the array
// .map() transforms it into JSX
// Store in a variable
// Return the variable

// ANOTHER METHOD

// export default function StudentActive(){
//    return (
//   <div>
//     {students
//       .filter((student) => student.active)
//       .map((student) => (
//         <div key={student.id}>
//               <h1>Name:{student.name}</h1>
//                 <h2>Admission number:{student.admNumber}</h2>
//                 <p>Year:{student.year} <span>Duration:{student.duration}</span> <span>Attendance:{student.attendance}</span></p>
//         </div>
//       ))}
//   </div>
// )

// }

// Both are correct. In real codebases:

// Option 1 — used when the logic is complex and you want it readable
// Option 2 — used when it is simple and clean enough inline
