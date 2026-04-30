import { useState, useEffect } from "react";

export default function PageTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click me ({count})
    </button>
  );
}


// import { useState, useEffect } from "react";

// export default function PageTitle() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//   console.log("This runs after every single render");
// });

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Click me ({count})
//     </button>
//   );
// }

// import { useState, useEffect } from "react";

// export default function PageTitle() {
//   const [count, setCount] = useState(0);

//  useEffect(() => {
//   console.log("This runs once, when the component first mounts");
// }, []);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Click me ({count})
//     </button>
//   );
// }