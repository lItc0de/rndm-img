export const sketch = (dimensions) => (s) => {
  s.setup = () => {
      s.createCanvas(dimensions.width, dimensions.height);
  }

  s.draw = () => {
      s.background(0);
      s.circle(10, 10, 10);
  }
}
