import React, { Suspense, useState, useEffect } from "react";

const LazyComp = React.lazy(() => import("./LazyComp"));

export default function App() {
  const [showLazyComp, setShowLazyComp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLazyComp(true);
    }, 3000);
  }, []);

  return (
    <div>
      <button onClick={() => setShowLazyComp(true)}>Load Lazy comp</button>
      <Suspense fallback={<div>Loading...</div>}>
        {showLazyComp && <LazyComp />}
      </Suspense>
    </div>
  );
}
