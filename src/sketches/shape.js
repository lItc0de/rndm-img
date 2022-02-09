import shaderVert from '../shaders/shape.vert'
import shaderFrag from '../shaders/shape.frag'

export const sketch = (s) => {
  let shader;

  s.preload = () => {
    shader = s.loadShader(shaderVert, shaderFrag);
  };

  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight, s.WEBGL);
    s.noStroke();
  };

  s.draw = () => {
    s.shader(shader);
    shader.setUniform('resolution', [s.width, s.height]);
    shader.setUniform('mouse', s.map(s.mouseX, 0, s.width, 0, 7));
    shader.setUniform('time', s.frameCount * 0.01);

    s.rect(0, 0, s.width, s.height);
  };

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  }
};
