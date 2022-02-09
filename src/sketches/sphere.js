// import shaderVert from "../shaders/sphere.vert";
// import shaderFrag from "../shaders/sphere.frag";

const setOrigin = (s) => {
  s.translate(-s.width * 0.5, -s.height * 0.5); // setting origin to 0, 0
}

const mySetup = (s) => {
  setOrigin(s);
  s.background(22, 22, 30);
  s.stroke(255);
  // s.noStroke();
  s.lights();
}

const rotatingSphere = (s) => {
  s.push();
  s.fill(200, 100, 150);
  s.translate(200, 200, 0);

  s.rotateY(s.millis() / 2000);
  s.sphere(100);
  s.pop();
}

const mySphere = (s) => {
  s.push();
  s.translate(s.width * 0.5, s.height * 0.5);
  s.colorMode('HSB');

  const total = 50;
  const r = 200;
  const coordinates = new Array(total + 1).fill(new Array(total + 1));

  for (let i = 0; i < total; i++) {
    const lat = s.map(i, 0, total, 0, s.PI);

    s.beginShape(s.TRIANGLE_STRIP);
    for (let j = 0; j <= total; j++) {
      const lon = s.map(j, 0, total, 0, s.TWO_PI);

      const x = s.float(r * s.sin(lat) * s.cos(lon));
      const y = s.float(r * s.sin(lat) * s.sin(lon));
      const z = s.float(r * s.cos(lat));

      const hu = s.map(j, 0, total, 0, 255);
      console.log(hu);
      s.fill(204, 255, 255);

      coordinates[i][j] = s.createVector(x, y, z);
      const v1 = coordinates[i][j];
      s.vertex(v1.x, v1.y, v1.z);

      const latNext = s.map(i + 1, 0, total, 0, s.PI);
      const xNext = s.float(r * s.sin(latNext) * s.cos(lon));
      const yNext = s.float(r * s.sin(latNext) * s.sin(lon));
      const zNext = s.float(r * s.cos(latNext));

      s.vertex(xNext, yNext, zNext);
    }
    s.endShape();
  }

  // for (let i = 0; i < total; i++) {
  //   for (let j = 0; j <= total; j++) {
  //     s.point(coordinates[i][j].x, j * 3, 0);
  //   }
  // }

  s.pop();
}

export const sketch = (s) => {

  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight, s.WEBGL);
    mySetup(s);

    mySphere(s);
  };

  s.draw = () => {
    setOrigin(s);
    s.line(0, 0, s.width, s.height)
    rotatingSphere(s);

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
