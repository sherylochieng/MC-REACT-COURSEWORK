// function CounterTwo() {
//   let count = 0;

//   function handleClick() {
//     count = count + 1;
//     console.log(count); // this WILL change
//   }

//   return <button onClick={handleClick}>Count: {count}</button>;
// }

// export default CounterTwo;

// The variable count does change when you click. You'd see it in the console.
// But here's the question I want you to think about:
// Why would the button still always show "Count: 0" on screen, even though count is changing in memory?
// Hint: Think about what happens in React every time the UI needs to update. What does React have to do to show new content on screen?
// Take a guess — what do you think React has to do before you see any change reflected in the browser? 🤔