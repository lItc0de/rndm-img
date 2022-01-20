import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';

import { sketch } from '../sketches/sketch';

const IndexPage = () => {
  const canvas = useRef(sketchInstance);
  const [sketchInstance, setSketchInstance] = useState(null);

  useEffect(() => {
    if (!canvas.current) return;

    setSketchInstance(new p5(sketch, canvas.current));
  }, [canvas])

  return (
    <main>
      <title>Home Page</title>
      <h1>Hello</h1>
      <div ref={canvas}></div>
    </main>
  );
};

export default IndexPage;
