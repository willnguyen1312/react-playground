import React from "react";
import mitt, { Emitter } from "mitt";

type Events = {
  foo: string;
  bar: number;
};

const emitter: Emitter<Events> = mitt<Events>();

emitter.on("bar", (data) => {
  console.log(data);
});

function Hello() {
  return <h1>Child</h1>;
}

export default function App() {
  return (
    <div>
      Parent
      <Hello />
      <button onClick={() => emitter.emit("bar", 233)}>Click me</button>
    </div>
  );
}
