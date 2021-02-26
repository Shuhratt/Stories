import templateHead from "./templateHead";

const draw = () => {
  const canvas = document.createElement('canvas');
  const width = 425/668 * 100;
  const height = 112/376 * 100
  canvas.style.width = `${width}vw`;
  canvas.style.height =`${height}vh`;
  canvas.style.marginLeft = 'auto'
  canvas.style.marginRight = 'auto'
  canvas.style.display = 'block'

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const drawCube = (x, y, wx, wy, h, color) => {

    //left
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wy); // 2
    ctx.lineTo(x - wx, y + h); // 3
    ctx.lineTo(x, y + wy + h); // 4
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill();

    //right
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wx, y - wy); // 2
    ctx.lineTo(x + wx, y + h); // 3
    ctx.lineTo(x, y + wy + h); // 4
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill();

    //top
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wy); // 2
    ctx.lineTo(x, y - wy - h); // 3
    ctx.lineTo(x + wx, y - wy); // 4

    ctx.closePath();
    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill();

  }
  // a = 30.26 / строна ромба

  drawCube(
    30, // loop
    60, // loop
    30,
    30,
    30,
    'blue'
  ); // fig 1
  drawCube(
    90,
    60,
    30,
    30,
    30,
    'red'
  );// fig 2






  document.body.append(canvas)
}


export default (item) => {
  const htmlHead = templateHead(item)
  draw()

  return htmlHead
}

