import React from "react";

const Wrapper: React.FC = ({ children }) => {
  React.useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);
  return <>{children}</>;
};

export default function App() {
  const [value, setValue] = React.useState(0);

  if (value % 2) {
    return (
      <section>
        <Wrapper>
          <button onClick={() => setValue((value) => value + 1)}>Odd</button>
        </Wrapper>
      </section>
    );
  }

  return (
    <main>
      <Wrapper>
        <button onClick={() => setValue((value) => value + 1)}>Even</button>
      </Wrapper>
    </main>
  );
}
