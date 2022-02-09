import shaderVert from '../shaders/texture.vert'
import shaderFrag from '../shaders/texture.frag'

export const sketch = (s) => {
  let shader;
  let shaderTexture;

  let theta = 0;

  let x;
  let y;
  let outsideRadius = 200;
  let insideRadius = 100;

  s.preload = () => {
    shader = s.loadShader(shaderVert, shaderFrag);
  };

  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight, s.WEBGL);
    s.noStroke();

    shaderTexture = s.createGraphics(s.windowWidth, s.windowHeight, s.WEBGL);
    shaderTexture.noStroke();

    x = -50;
    y = 0;
  };

  s.draw = () => {
    shaderTexture.shader(shader);

    shader.setUniform("resolution", [s.width, s.height]);
    shader.setUniform("time", s.millis() / 1000.0);
    shader.setUniform("mouse", [s.mouseX, s.map(s.mouseY, 0, s.height, s.height, 0)]);

    shaderTexture.rect(0, 0, s.width, s.height);

    s.background(22, 22, 30);

    s.texture(shaderTexture);

    s.translate(-150, 0, 0);

    s.push();
    s.rotateZ(theta * s.mouseX * 0.0001);
    s.rotateX(theta * s.mouseX * 0.0001);
    s.rotateY(theta * s.mouseX * 0.0001);
    theta += 0.05;
    s.sphere(125);
    s.pop();

    /* when you put a texture or shader on an ellipse it is rendered in 3d,
      so a fifth parameter that controls the # vertices in it becomes necessary,
      or else you'll have sharp corners. setting it to 100 is smooth. */
    // let ellipseFidelity = s.int(s.map(s.mouseX, 0, s.width, 8, 100));
    // s.ellipse(260, 0, 200, 200, ellipseFidelity);
  };

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  }
};
