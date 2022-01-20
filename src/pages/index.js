import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';

import { sketch } from '../sketches/sketch';

const IndexPage = () => {
  const canvas = useRef(sketchInstance);
  const [sketchInstance, setSketchInstance] = useState(null);
  const [dimensions, _setDimensions] = useState(null);

  const setDimensions = () => {
    const { innerWidth, innerHeight } = window;
    _setDimensions({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    setDimensions();

    window.addEventListener('resize', setDimensions);
  }, []);

  useEffect(() => {
    if (!canvas.current) return;
    if (!dimensions) return;

    canvas.current.innerHTML = '';

    setSketchInstance(new p5(sketch(dimensions), canvas.current));
  }, [canvas, dimensions]);

  return (
    <main>
      <title>Home Page</title>
      <div ref={canvas}></div>
    </main>
  );
};

export default IndexPage;
