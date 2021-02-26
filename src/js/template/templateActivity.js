import templateHead from "./templateHead";

const draw = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 442;
  canvas.height = 112;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 10, 100, 100);

  document.body.appendChild(canvas)
}


export default (item) => {
  const htmlHead = templateHead(item)
  draw()

  return htmlHead
}

