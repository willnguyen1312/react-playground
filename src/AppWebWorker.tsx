import React from "react";
import { wrap } from "comlink";

// https://vitejs.dev/guide/features.html#web-workers
// https://github.com/vitejs/vite/issues/403
// https://github.com/GoogleChromeLabs/comlink
// https://javascript.plainenglish.io/migrating-a-150k-loc-codebase-to-vite-and-esbuild-how-part-2-3-91b0b873f388
async function init() {
  const module = await import("./AppWebWorker.worker?worker");
  const ViteWorker = module.default;
  // @ts-ignore
  return wrap(ViteWorker());
}

init().then(async (worker: any) => {
  console.log(`Counter: ${await worker.counter}`);
  await worker.inc();
  console.log(`Counter: ${await worker.counter}`);
});

export default function App() {
  return <div>Hi there!</div>;
}
