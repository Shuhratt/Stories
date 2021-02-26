import templateHead from "./templateHead";

const draw = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 900;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(50, 50);
  ctx.lineTo(50, 150);
  ctx.lineTo(0, 100);
  ctx.fillStyle = 'blue';


  ctx.stroke();
  ctx.fill();


  document.body.appendChild(canvas)
}


export default (item) => {
  const htmlHead = templateHead(item)
  draw()

  return htmlHead
}

