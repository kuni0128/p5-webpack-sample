import * as p5 from 'p5';

const sketch = (p5: p5) => {
  p5.preload = () => {
  };

  p5.setup = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    p5.background(100);
    p5.ellipse(100, 150, 180, 180);
  };
};

const sketchP = new p5(sketch);
