import React, { useEffect, useState, useMemo } from "react";

function Even() {
  useEffect(() => {
    console.log("Even Mounted");

    return () => {
      console.log("Even UnMounted");
    };
  }, []);

  return <p>Event</p>;
}

function Odd() {
  useEffect(() => {
    console.log("Odd Mounted");

    return () => {
      console.log("Odd UnMounted");
    };
  }, []);

  return <p>Event</p>;
}

export default function App() {
  const [counter, setCounter] = useState(0);

  const counterComp = useMemo(() => {
    if (counter % 2) {
      return <Odd />;
    }

    return <Even />;
  }, [counter]);

  return (
    <div>
      {counterComp}
      <input
        type="number"
        value={counter}
        onChange={(event) => setCounter(+event.target.value)}
      />
    </div>
  );
}
