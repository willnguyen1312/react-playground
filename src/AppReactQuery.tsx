import React from "react";
import { useToggle } from "react-use";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
  useMutation,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 99999999,
      refetchOnWindowFocus: false,
    },
  },
});

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function Example() {
  const queryClient = useQueryClient();
  const response = useQuery<Post[]>(["post", { a: 1, b: 2 }], () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    );
  });

  const mutation = useMutation(() =>
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
    }).then((res) => res.json())
  );

  return (
    <div>
      <h1>Example</h1>
      <button
        onClick={async () => {
          const result = await mutation.mutateAsync();
          queryClient.invalidateQueries(["post", { b: 2 }]);
        }}
      >
        Post stuff
      </button>
    </div>
  );
}

export default function App() {
  const [show, toggleShow] = useToggle(true);
  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={toggleShow}>Show: {show ? "true" : "false"}</button>
      {show && <Example />}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
