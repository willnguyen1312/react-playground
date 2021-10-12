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
  const { data = [], refetch } = useQuery<Post[]>(
    ["post", { a: 1, b: 2 }],
    () => {
      return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      );
    },
    { enabled: false }
  );

  const mutation = useMutation(() => {
    throw new Error("Oh no");
    // return fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "post",
    // }).then((res) => res.json());
  });

  return (
    <div>
      <h1>Example: {data.length}</h1>
      <div style={{ display: "flex" }}>
        <button onClick={() => refetch()}>Fetch Stuff!!!</button>
        <button
          onClick={async () => {
            try {
              const result = await mutation.mutateAsync();
            } catch (error) {
              console.log(error);
            }

            queryClient.invalidateQueries(["post", { b: 2 }]);
          }}
        >
          Post stuff
        </button>
      </div>
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
