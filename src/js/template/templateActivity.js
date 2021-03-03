import templateHead from "./templateHead";
import {formatClock} from "../functions/functions";

const draw = (data, scaleX, scaleY) => {
  const stateGradients = {
    default: {
      left: ['rgba(0, 0, 0, 0.65)', 'rgba(19, 17, 16, 0.65)', 'rgba(112, 102, 94, 0.2)'],
      right: ['rgba(58, 53, 48, 0.8)', 'rgba(73, 66, 61, 0.8)', 'rgba(112, 102, 94, 0.2)'],
      top: ['rgba(34, 31, 28, 0.7)', 'rgba(62, 57, 52, 0.7)', 'rgba(236, 234, 233, 0.15)']
    },
    third: {
      left: ['rgba(35, 22, 0, 0.9)', 'rgba(112, 92, 94, 0.9)', 'rgba(93, 116, 141, 0.6)'],
      right: ['rgba(35, 22, 0, 0.9)', 'rgba(112, 92, 94, 0.9)', 'rgba(93, 116, 141, 0.6)'],
      top: ['rgba(35, 22, 0, 0.9)', 'rgba(112, 92, 94, 0.9)', 'rgba(93, 116, 141, 0.6)']
    },
    middle: {
      left: ['rgba(33, 22, 2, 0.9)', 'rgba(172, 113, 9, 0.9)', 'rgba(242, 159, 13, 0.2)'],
      right: ['rgba(32, 21, 2, 1)', 'rgba(199, 131, 10, 1)', 'rgba(255, 255, 255, 0.2)'],
      top: ['rgba(33, 22, 2, 0.8)', 'rgba(172, 113, 9, 0.8)', 'rgba(242, 159, 13, 0.2)']
    },
    maximum: {
      left: ['rgba(32, 21, 2, 1)', 'rgba(199, 131, 10, 1)', 'rgba(242, 159, 13, 0.9)'],
      right: ['rgba(32, 21, 2, 1)', 'rgba(199, 131, 10, 1)', 'rgba(242, 159, 13, 0.9)'],
      top: ['rgba(32, 21, 2, 0.8)', 'rgba(199, 131, 10, 0.8)', 'rgba(242, 159, 13, 0.9)']
    }

  }

  const canvas = document.createElement('canvas');
  const widthRatio = 425/668;
  const heightRatio = 112/376;
  canvas.width = window.innerWidth * widthRatio;
  canvas.height = window.innerHeight;
  canvas.style.marginLeft = 'auto'
  canvas.style.marginRight = 'auto'
  canvas.style.display = 'block'

  document.body.append(canvas)

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.scale(2.5, 2.5); //

  const drawCube = (x, y, wx, wy, h , gradient = {}, key = 'default') => {
    ctx.lineJoin = "round"

    //left
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wy); // 2
    ctx.lineTo(x - wx, y - wy - h); // 3
    ctx.lineTo(x, y - h); // 4
    ctx.closePath();

    const gradientLeft = ctx.createLinearGradient(x - wx, y - wy, x, y );// 2,3
    gradientLeft.addColorStop(0, gradient[key].left[0]);
    gradientLeft.addColorStop(1, gradient[key].left[1]);
    ctx.strokeStyle = gradientLeft
    ctx.fillStyle = gradientLeft;
    // ctx.shadowColor = gradient[key].left[2];
    // ctx.shadowBlur = 0.1;
    ctx.stroke();
    ctx.fill();

    //right
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - h); // 2
    ctx.lineTo(x + wx, y - h - wy); // 3
    ctx.lineTo(x + wx, y - wy); // 4
    ctx.closePath();

    const gradientRight= ctx.createLinearGradient(x, y - h, x + wx, y - h - wy);// 2,3
    gradientRight.addColorStop(0, gradient[key].right[0]);
    gradientRight.addColorStop(1, gradient[key].right[1]);

    ctx.strokeStyle = gradientRight
    ctx.fillStyle = gradientRight;
    // ctx.shadowColor = gradient[key].right[2];
    // ctx.shadowBlur = 0.1;
    ctx.stroke();
    ctx.fill();

    //top
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - wy - h); // 2
    ctx.lineTo(x, y - h - wy * 2); // 3
    ctx.lineTo(x + wx, y - h - wy); // 4
    // ctx.shadowInset = true;
    // ctx.shadowColor = gradient[key].top[2];
    // ctx.shadowBlur = 0.01;
    // ctx.shadowOffsetX = -2;
    // ctx.shadowOffsetY = -2;
    ctx.font = "8px serif";
    ctx.fillText(`h: ${h}`, x, y);//debug
    ctx.closePath();

    const gradientTop = ctx.createLinearGradient(x - wx, y - wy - h, x, y - h - wy * 2);// 2,3
    gradientTop.addColorStop(0, gradient[key].top[0]);
    gradientTop.addColorStop(1, gradient[key].top[1]);

    ctx.strokeStyle = gradientTop;
    ctx.fillStyle = gradientTop;
    ctx.stroke();
    ctx.fill();
  }
  // Сторона ромба равна 20.808652046684813

  const countHours = 12

  let startPointX = 17
  const stepHorizontal = 17 // исправлено на 17 (было 34)

  let startPointY = 50
  const stepVertical = 12

  const minHeight = 10

  const days = Object.values(data.data)

  days.map((day, index) => {
    let num = index += 1
    let PointX = num % 2 ? startPointX + stepHorizontal : startPointX
    let PointY =  startPointY += stepVertical
    // console.log(PointX)
    drawCube(PointX, PointY, 17,12, 10, stateGradients )
    const formatTwelve = formatClock(day, 2)

    formatTwelve.map((hours) => {
      const minHeight = 10
      const stepHeight = 10
      let height = hours > 0 ? hours * stepHeight : minHeight
      drawCube(PointX += 34, PointY, 17,12, height, stateGradients, 'middle' )
    });

  })


  //первый ряд
 //  drawCube(
 //    17, // первая точка
 //    50,
 //    17,
 //    12,
 //    20,
 //    stateGradients
 //  );
 //  drawCube(
 //    51,// шаг по x - 34
 //    50,
 //    17,
 //    12,
 //    15,
 //    stateGradients
 //  );
 //
 //  // второй ряд
 //  drawCube(
 //    34,// шаг по x - 34
 //    62, // Второй ряд, шаг по Y - 12
 //    17,
 //    12,
 //    35,
 //    stateGradients,
 //    'maximum'
 //  );
 //  drawCube(
 //    68,// шаг по x - 34
 //    62, // Второй ряд, шаг по Y - 12
 //    17,
 //    12,
 //    15,
 //    stateGradients
 //  );
 //
 // //третий ряд
 //  drawCube(
 //    17,// шаг по x - 34
 //    74, // Второй ряд, шаг по Y - 12
 //    17,
 //    12,
 //    15,
 //    stateGradients
 //  );





}


export default (item) => {
  const htmlHead = templateHead(item)
  draw(item)

  return htmlHead
}

