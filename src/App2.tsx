import React from "react";
import { useAsyncFn } from "react-use";

const Demo = ({ url = "https://jsonplaceholder.typicode.com/posts" }) => {
  const [state, doFetch] = useAsyncFn(async () => {
    const response = await fetch(url);
    const result = await response.text();
    return result;
  }, [url]);

  return (
    <div>
      {state.loading ? (
        <div>Loading...</div>
      ) : state.error ? (
        <div>Error: {state.error.message}</div>
      ) : (
        <div>Value: {state.value?.length}</div>
      )}
      <button onClick={() => doFetch()}>Start loading</button>
    </div>
  );
};

export default Demo;
