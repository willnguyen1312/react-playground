import React from "react";
import { noop, uniqueId } from "lodash";

const Hi = ({ onClick = noop }) => {
  return <button onClick={onClick}>Click me!</button>;
};

export default function App() {
  const comps = [<Hi key={1} />, <Hi key={2} />, <Hi key={3} />];

  return comps.map((child) =>
    React.cloneElement(child, {
      onClick: () => console.log(uniqueId()),
    })
  );
}
