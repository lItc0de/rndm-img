import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

import { sketch } from '../sketches/rndmMovement';

const Sketch = () => {
  const canvas = useRef(null);

  useEffect(() => {
    if (!canvas.current) return;

    canvas.current.innerHTML = '';

    new p5(sketch, canvas.current);
  }, [canvas]);

  return <div ref={canvas}></div>;
};

export default Sketch;
