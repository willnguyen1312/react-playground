import React, { useEffect, useReducer } from "react";

export const enum Messages {
  First = "first",
  Second = "second",
}

console.log(Messages.Second);

export default function App() {
  const [value, rerender] = useReducer((a) => !a, true);

  useEffect(() => {
    let count = 1;

    function log() {
      setTimeout(() => {
        console.log(count);
      }, 3000);
    }

    log();

    return () => {
      count++;
    };
  }, [value]);

  return (
    <div>
      <h1>Effect</h1>
      <button onClick={rerender}>Re-render</button>
    </div>
  );
}
