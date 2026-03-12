// Task List

// Goal: Render a list of tasks with visual distinction for completed items.
// Concepts: .map(), keys, conditional rendering, .filter().
// Data: Each task has id, title, completed.
// Stretch: Add "All", "Completed", and "Pending" filter tabs.

import { useState } from "react";


function Task(){


    const [filter, setFilter] = useState("all");


    const tasks = [
        {id: 1, title: "HTML", completed: true},
        {id: 2, title: "CSS", completed: true},
        {id: 3, title: "JAVASCRIPT", completed: true},
        {id:4, title: "React", completed: false},
        {id: 5, title: "backend", completed: false}
    ];

    let filteredTasks = tasks;

    if (filter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    if (filter === "pending") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    return(
        <div>
            <h1>Task list</h1>

            <div>
                <button onClick={() => setFilter("all")}>ALL</button>
                <button onClick={() => setFilter("completed")} >Completed</button>
                <button onClick={() => setFilter("pending")}>Pending</button>
            </div>


            <ul>
                {filteredTasks.map (task => (
                    <li  key={task.id}>
                       {task.completed}
                       {task.title}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Task