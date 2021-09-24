import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
  useMutation,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

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
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
