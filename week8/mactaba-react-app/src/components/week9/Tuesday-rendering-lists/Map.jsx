const students = [
  
    {id:1, name: "Amina", track: "Software Engineering"},
    {id:2, name: "Brian", track: "Data Science"},
    {id:3, name: "Carol", track: "Cyber Security"},
    {id:4, name: "David", track: "Software Engineering"},
    {id:5, name: "Davis", track: "Software Engineering"},
    {id:6, name: "Daniel", track: "Software Engineering"}

];


function StudentTrack(){
    const software = students.filter((student) => student.track === "Software Engineering"
    );

    return (
        <ol>
            {software.map((student) => (
                <li key={student.id}>
                    {student.name}: {student.track}
                </li>
            ))}
        </ol>
    );
}

export default StudentTrack