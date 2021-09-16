import React from "react";

const Parent: React.FC = (props) => {
  // @ts-ignore
  for (const child of props.children) {
    console.log(child);
  }

  return <div>{props.children}</div>;
};

export default function App() {
  return (
    <Parent>
      <h1>First</h1>
      <h1>Second</h1>
      <h1>Third</h1>
    </Parent>
  );
}
