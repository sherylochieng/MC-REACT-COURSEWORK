

export default function StudentCard({student}){
    
 return (
    <div>
      <h2>{student.name}</h2>
      <p>{student.admNumber}</p>
      <p>{student.duration}</p>
      <p>{student.attendance}</p>
      <span>{student.active ? 'Active' : 'Inactive'}</span>
    </div>
  )
}