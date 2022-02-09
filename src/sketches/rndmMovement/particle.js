class Particle {
  constructor(scl, cols) {
    this.pos = createVector(random(width), random(height)); // position
    this.vel = createVector(0, 0); // velocity
    // this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0); // accelaration
    this.maxspeed = 1.5;

    this.scl = scl;
    this.cols = cols;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;

    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
  }

  follow(vectors) {
    const x = floor(this.pos.x / this.scl);
    const y = floor(this.pos.x / this.scl);
    const index = x + y * this.cols;

    const force = vectors[index].vector;
    this.applyForce(force);
  }

  show() {
    push();
    stroke(0, 0.5);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
    // square(this.pos.x, this.pos.y, 25);
    pop();
  }
}
