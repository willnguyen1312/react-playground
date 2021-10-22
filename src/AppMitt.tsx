import React from "react";
import mitt, { Emitter } from "mitt";

import vnLocale from "date-fns/locale/en-US";
import { format } from "date-fns";

const date = new Date();
// const frenchLocale = require('date-fns/locale/fr');
// const format = require("date-fns/format");
const formattedDate = format(date, "P", {
  locale: vnLocale,
});
console.log(formattedDate);

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
      Parent: {formattedDate}
      <Hello />
      <button onClick={() => emitter.emit("bar", 233)}>Click me</button>
    </div>
  );
}
