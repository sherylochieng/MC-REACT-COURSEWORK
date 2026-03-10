import { useState } from "react";


function Search(){

    const [query, setQuery] = useState("");

    const students = [
    {id:1, name: "Amina", track: "Software Engineering"},
    {id:2, name: "Brian", track: "Data Science"},
    {id:3, name: "Carol", track: "Cyber Security"},
    {id:4, name: "David", track: "Software Engineering"},
    {id:5, name: "Davis", track: "Software Engineering"},
    {id:6, name: "Daniel", track: "Software Engineering"}

];

    const filtered = students.filter((student)=>
        student.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input
            value = {query}
            onChange={(e) => setQuery(e.target.value)} //controlled input
            placeholder = "Search" 
            />

            {filtered.length === 0 ? (
                <p>No students found</p>
            ) : (
                <ul>
                    {filtered.map((student) => (
                        <li key={student.id}>
                            {student.name} - {student.track} 

                        </li>
                    ))}
                </ul>
            )
        }
        </div>


    )
    
}
export default Search