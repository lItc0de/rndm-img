export const sketch = (dimensions) => (s) => {
  let system;

  s.setup = () => {
    s.createCanvas(dimensions.width, dimensions.height);
    system = new ParticleSystem(s, s.createVector(s.width / 2, 50), dimensions);
  };

  s.draw = () => {
    s.background(0);
    s.circle(10, 10, 10);
    s.fill(237);
    system.addParticle();
    system.run();
  };
};

class Particle {
  constructor(s, position, dimensions) {
    this.s = s;
    this.acceleration = s.createVector(0, 0.05);
    this.velocity = s.createVector(s.random(-2, 2), s.random(-1, 0));
    this.position = position.copy();
    this.lifespan = dimensions.height / 2;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  display() {
    this.s.stroke(200, this.lifespan);
    this.s.strokeWeight(2);
    this.s.fill(127, this.lifespan);
    this.s.ellipse(this.position.x, this.position.y, 12, 12);
  }

  get isDead() {
    return this.lifespan < 0;
  }
}

class ParticleSystem {
  constructor(s, position, dimensions) {
    this.s = s;
    this.origin = position.copy();
    this.particles = [];
    this.dimensions = dimensions;
  }

  addParticle() {
    this.particles.push(new Particle(this.s, this.origin, this.dimensions));
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead) {
        this.particles.splice(i, 1);
      }
    }
  }
}
