export const sketch = (s) => {
  s.setup = () => {
      s.createCanvas(10, 10);
  }

  s.draw = () => {
      s.background(0);
      s.circle(10, 10, 10);
  }
}
