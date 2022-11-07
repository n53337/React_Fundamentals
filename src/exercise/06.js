// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from "react";

// function UsernameForm({ onSubmitUsername }) {
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         const data = e.target.elements.usernameInput.value;
//         console.log(data);
//         onSubmitUsername(data);
//       }}
//     >
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// function App() {
//   const onSubmitUsername = (username) => alert(`You entered: ${username}`);
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />;
// }

// ! USING HOOKS

// function UsernameForm({ onSubmitUsername }) {
//   const usernameInputRef = React.useRef();

//   function handleSubmit(event) {
//     event.preventDefault();
//     onSubmitUsername(usernameInputRef.current.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" ref={usernameInputRef} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// function App() {
//   const onSubmitUsername = (username) => alert(`You entered: ${username}`);
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />;
// }

// ! VALIDATE FORM

function UsernameForm({ onSubmitUsername }) {
  const usernameInputRef = React.useRef();
  const [err, setErr] = React.useState(null);
  const [userInput, setUserInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(usernameInputRef.current.value);
  }

  function handleChange(event) {
    const data = event.target.value;
    // ! Control input value
    setUserInput(data + 1);
    console.log(data);
    // if (data === data.toLowerCase()) {
    //   // ! Control Input value
    //   console.log(userInput, data);
    //   setErr(null);
    // } else {
    //   setErr("The username must be in Lower-case 🚫");
    // }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          value={userInput}
          onChange={handleChange}
        />
      </div>
      <button disabled={Boolean(err)} type="submit">
        Submit
      </button>
      <div style={{ color: "tomato" }}>{err}</div>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
