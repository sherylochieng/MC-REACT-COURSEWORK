function Student(){
    const students = [
    {id:1, name: "Amina", track: "Software Engineering", location:"Nairobi"},
    {id:2, name: "Brian", track: "Data Science", location: "Nairobi"},
    {id:3, name: "Carol", track: "Cyber Security",location: "Kisii"},
    {id:4, name: "David", track: "Software Engineering", location:"Nairobi"},
    {id:5, name: "Davis", track: "Software Engineering", location:"Mombasa"},
    {id:6, name: "Daniel", track: "Software Engineering", location:"Nairobi"},


];

const filteredStudents = students.filter(
    (student) => 
        student.track === "Software Engineering" ||
        student.location === "Nairobi"
);

return(
    <div>
        <h2>SOFTWARE ENGINEERING STUDENTS IN NRB</h2>

        {filteredStudents.length === 0 ?(
            <p>no students found</p>
        ):(
            <ol>
                {filteredStudents.map( (student) => (
                    <li key={student.id}>
                        {student.name}

                    </li>
                ))}
            </ol>
        )}
    </div>
);


}

export default Student