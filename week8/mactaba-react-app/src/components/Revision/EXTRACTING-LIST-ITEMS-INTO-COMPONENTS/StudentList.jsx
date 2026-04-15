import { useState } from 'react';
import StudentCard from './StudentCard';
import { students } from './StudentData';

export default function StudentList() {
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

      {filteredStudents.length === 0 ? (
        <p>Name not found</p>
      ) : (
        filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))
      )}
    </div>
  )
}