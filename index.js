const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  const cols = 12;
  const rows = 6;
  const numCells = cols * rows;
  //grid begins
  const gw = width * 0.8;
  const gh = height * 0.8;
  //cell
  const cw = gw / cols;
  const ch = gh / rows;
  //margin
  const mx = (width - gw) * 0.5;
  const my = (height - gh) * 0.5; 
  //an array to store the points we create in for loop
  const points = [];

  let x, y;

  /*
  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.Floor(i / cols) * ch;

    points.push(new Point({x,y}));
  }
  */

  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.save();
    context.translate(mx,my);

    /*
    points.forEach(point => {
      point.draw(context);
    });

    */
    context.restore();
  };
};

canvasSketch(sketch, settings);

class Point {
  constructor({x,y}){
    this.x = x;
    this.y = y;
  }

  draw(context){
    context.save();
    context.translate(this.x, this.y);
    context.fillStyle = `darkorange`;

    context.beginPath();
    context.arc(0,0,10,0 Math.PI *2);
    context.fill();

    context.restore();
  }
}
