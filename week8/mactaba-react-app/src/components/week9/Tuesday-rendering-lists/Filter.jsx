const students = [
  { id: 1, name: 'Amina', available: "online "},
  { id: 2, name: 'Brian', available: 'physical'},
  { id: 3, name: 'Linet', available: 'physical'}
];

function Availability() {
    
  const physicalStudents = students.filter((student) => student.available === 'physical');

  return (
    <div>
        <h2>Students available for physical classes:</h2>

        <ul>
      {physicalStudents.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
    </div>
    
  );
}

export default Availability;