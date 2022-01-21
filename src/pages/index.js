import React, { Suspense, lazy } from 'react';

const Sketch = lazy(() => import('../components/sketch'));

const IndexPage = () => {
  const isSSR = typeof window === "undefined"

  return (
    <main>
      <title>Home Page</title>
      {!isSSR && (
        <Suspense fallback={<div />}>
          <Sketch />
        </Suspense>
      )}
    </main>
  );
};

export default IndexPage;
