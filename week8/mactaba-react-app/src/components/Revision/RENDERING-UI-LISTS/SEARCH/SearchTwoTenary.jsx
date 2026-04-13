import { useState } from 'react';

const students = [
  {
    id: 1,
    name: 'Sheryl',
    admNumber: 2345,
    year: 4,
    duration: '6 Months',
    attendance: 'online',
    active: true,
  },
  {
    id: 2,
    name: 'Joy',
    admNumber: 4567,
    year: 6,
    duration: '7 Months',
    attendance: 'physical',
    active: false,
  },
  {
    id: 3,
    name: 'Shila',
    admNumber: 7890,
    year: 7,
    duration: '8 Months',
    attendance: 'online',
    active: true,
  },
];

export default function SearchTwoTernary() {
  const [query, setQuery] = useState('');

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search name here"
      />

      {filteredStudents.length === 0 ? 
      (
        <p>Name not found</p>
      ) 
      : 
      
      (
        filteredStudents.map((student) => (
          <div key={student.id}>
            <p>{student.name}</p>
            <p>{student.duration}</p>
          </div>
        ))
      )}
    </div>
  )
}
  
      
   
     

