import React from "react";
import { AxiosError } from "axios";
import { useAsyncFn } from "react-use";

import { FeedsService, ErrorResponse } from "./api";

function checkAxiosError<T = ErrorResponse>(err: any): err is AxiosError<T> {
  return err;
}

export default function App() {
  const [state, doAsync] = useAsyncFn(async () => {
    try {
      const data = await FeedsService.feeds();
      return data;
    } catch (error) {
      if (checkAxiosError(error)) {
        console.log(error.response);
      }
    }
  }, []);

  return (
    <div>
      <h1>Hi There</h1>
      <p>{state.value && state.value.main_banners?.length}</p>
      <button onClick={doAsync}>Load me</button>
    </div>
  );
}
