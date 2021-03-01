import templateHead from "./templateHead";

const draw = () => {
  const canvas = document.createElement('canvas');
  const widthRatio = 425/668;
  const heightRatio = 112/376;
  canvas.width = window.innerWidth * widthRatio;
  canvas.height = window.innerHeight * heightRatio;
  canvas.style.marginLeft = 'auto'
  canvas.style.marginRight = 'auto'
  canvas.style.display = 'block'

  document.body.append(canvas)

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(0, canvas.height);
  ctx.rotate(-Math.PI/2); // поворот

  const drawCube = (x, y, wx, wy, h = 8, gradient = []) => {

    //left
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wy); // 2
    ctx.lineTo(x - wx, y + h); // 3
    ctx.lineTo(x, y + wy + h); // 4
    ctx.closePath();

    const color = '#fff'
    const gradientLeft = ctx.createLinearGradient(x - wx, y - wy, x - wx, y + h);// 2,3
    gradientLeft.addColorStop(0, 'rgba(62, 57, 52, 0.7)');
    gradientLeft.addColorStop(1, 'rgba(34, 31, 28, 0.7)');

    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill();

    // //right
    // ctx.beginPath();
    // ctx.moveTo(x, y);
    // ctx.lineTo(x + wx, y - wy); // 2
    // ctx.lineTo(x + wx, y + h); // 3
    // ctx.lineTo(x, y + wy + h); // 4
    // ctx.closePath();
    //
    // const gradientRight= ctx.createLinearGradient(x + wx, y - wy, x + wx, y + h);// 2,3
    // gradientRight.addColorStop(0, 'rgba(62, 57, 52, 0.7)');
    // gradientRight.addColorStop(1, 'rgba(34, 31, 28, 0.7)');
    //
    // ctx.fillStyle = color;
    // ctx.stroke();
    // ctx.fill();
    //
    // //top
    // ctx.beginPath();
    // ctx.moveTo(x, y);
    // ctx.lineTo(x - wx, y - wy); // 2
    // ctx.lineTo(x, y - wy * 2); // 3
    // ctx.lineTo(x + wx, y - wy); // 4
    //
    // const gradientTop = ctx.createLinearGradient(x - wx, y - wy, x, y - wy * 2);// 2,3
    // gradientTop.addColorStop(0, 'rgba(62, 57, 52, 0.7)');
    // gradientTop.addColorStop(1, 'rgba(34, 31, 28, 0.7)');
    //
    // ctx.closePath();
    // ctx.fillStyle = color;
    // ctx.stroke();
    // ctx.fill();

  }
  // Сторона ромба равна 20.808652046684813

  drawCube(
    20, // первая точка
    25, // первый ряд
    17,
    12,
    8,
  ); // fig 1
  // drawCube(
  //   20,// шаг 34
  //   40,
  //   17,
  //   12,
  //   8,
  // );// fig 2
  // drawCube(
  //   88,
  //   25,
  //   17,
  //   12,
  //   20,
  //   'red'
  // );// fig 2
  //






}


export default (item) => {
  const htmlHead = templateHead(item)
  draw()

  return htmlHead
}

