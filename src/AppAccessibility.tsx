import React from "react";
import { useToggle } from "react-use";

function App() {
  const [on, toggleOn] = useToggle(false);

  return (
    <main>
      <h1>Hello there</h1>
      <button onClick={toggleOn} aria-pressed={on ? "true" : "false"}>
        Toggle me: {on ? "true" : "false"}
      </button>
    </main>
  );
}

export default App;
