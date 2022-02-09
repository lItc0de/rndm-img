export const sketch = (s) => {
  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight, s.WEBGL);
  };

  s.draw = () => {
    s.beginShape(s.TRIANGLE_STRIP);
    s.vertex(30, 75);
    s.vertex(40, 20);
    s.vertex(50, 75);
    s.vertex(60, 20);
    s.vertex(70, 75);
    s.vertex(80, 20);
    s.vertex(90, 75);
    s.endShape();
  };

  s.windowResized = () => {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  };
};
