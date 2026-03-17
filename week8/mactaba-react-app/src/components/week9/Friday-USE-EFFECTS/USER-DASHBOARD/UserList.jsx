
// the useEffect Hook

// real app fetch data from APIs, listen to browser events, start timers
// store things in local storage & interact w external systems  --side effects



// user dashboard   -----component
// *fetch users from an API
// *show loading states 
// *show errors if something goes wrong
// *display user list   **
// *allow refreshing the user

// UI-----------
// title user dashboard
// number of users
// loading message when data is being fetched
// error message 
// list of user names



// 1. Identify the visual states. What does the UI look like in each possible situation? (e.g., password hidden vs. password visible)
// ehat can the user see on the screen at different moments?

// no users loaded yet .....title, 0, empty
// users loading...... loading users TRI:when a fetch request starts
// an error occurred TRI:when a fetch request fails
// users successfully loaded & displayed TRI: when a fetch request finishes successfully

// 2. Decide what triggers state changes. Is it a button click? A key press? A form submission?


// 3. Represent that information in state. Use the simplest type possible - booleans for on/off, numbers for counts, strings for text.

// users-> list of users []
// loading -> boolean
// error

// 4. Remove any state you do not actually need. Less state means fewer bugs.

// 5. Connect event handlers to update the state. Wire up the event to the setter.
// keep

// import { useState,useEffect } from "react";

// function UserDashboard(){
//     const [users,setUsers] = useState([]);
//     const[isLoading,setIsLoading] = useState(false);
//     const[error, setError] = useState(null);
    
//     useEffect(()=>{
//         setIsLoading(true);
        
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response)=>{

                
//                 if(!response.ok){
//                     throw new Error('failed to fetch users');
//                 }

//                 return response.json();

//             })

//             .then((data)=>{
//                 setUsers(data);

//                 setIsLoading(false);
//             })

//             .catch((err)=>{
//                 setError(err.message);
//                 setIsLoading(false);
//             });


//     },[]);

//     return(
//         <div>
//             <h2>USER DASHBOARD</h2>
//             <p>Total user are:{users.length}</p>

//             {isLoading && <p>Loading users...</p>}
//             {error && <p>Error:{error}</p>}
//             <ol>
//                 {users.map((user)=>(
//                     <li key={user.id}>
//                         {user.name}
//                     </li>
//                 ))}
//             </ol>
//         </div>
//     );
// }
// export default UserDashboard;
import { useState, useEffect } from "react";

function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>USER DASHBOARD</h2>
      <p>Total users: {users.length}</p>

      {isLoading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default UserDashboard;
