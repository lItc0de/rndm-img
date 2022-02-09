import shaderVert from '../shaders/gradient.vert'
import shaderFrag from '../shaders/gradient.frag'

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

    s.rect(0, 0, s.width, s.height);

    // Array.from(Array(8).keys()).forEach((_, i) => {
    //   const position = {
    //     x: 120 - s.windowWidth / 2 + i * 180,
    //     y: 120 - s.windowHeight / 2 + i * 100
    //   };
    //   const sphere = new Sphere(s, position);
    //   sphere.draw();
    // });
  };

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  }
};

class Sphere {
  constructor(s, position) {
    this.s = s;
    this.position = position;
    this.color = [30, 120, 110];
  }

  draw() {
    this.s.push();
    this.s.translate(this.position.x, this.position.y);
    this.s.rotateY(this.s.millis() / 1000);
    this.s.fill(...this.color);
    this.s.sphere(80);
    this.s.pop();
  }
}
