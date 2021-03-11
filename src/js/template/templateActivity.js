import templateHead from "./templateHead";
import { formatClock } from "../functions/functions";

const mapLegend = new Map()
mapLegend.set([0], 'min')
mapLegend.set([1, 2], 'mid')
mapLegend.set([3, 4], 'max')
mapLegend.set([5, 6], 'extra')

const getTypeCube = (num) => {
  let type = ''

  if(num === 0){
    return type = 'min'
  }

  mapLegend.forEach((val, key) => {
    const [begin, end] = key

    if(num >= begin && num <= end){
      type = val
    }
  })

  return type
}
const drawCanvas = (data, orientation) => {
  const activity = document.createElement('div')
  const days = Object.values(data.data)

  const createCube = (selector) => {
    const cube = document.createElement('div')
    cube.className = selector
    return cube
  }

  const createElement = (selector) => {
    const row = document.createElement('div')
    row.className = selector
    return row
  }

  activity.className = `activity activity_${orientation}`
  days.map((day) => {
    const hours = orientation === 'landscape' ? 2 : 1;
    let formatTwelve = formatClock(day, hours)
    const element = createElement(`activity__box_${orientation}`)
    activity.append(element)

    formatTwelve.map((hour) => {
      const type = getTypeCube(hour)
      element.append(createCube(`activity__cube activity__cube_${orientation} activity__cube_${orientation}_${type}`))
    });
  })

  return activity
}

const templateLegend = (count) => {
  const legendRow = document.createElement('div')
  legendRow.className = 'legend__row'

  const legendItem = (text) => {
    const legend__item = document.createElement('div')
    legend__item.className = 'legend__item'
    const item__box = document.createElement('div')
    item__box.className = 'legend__item-box'
    const gap = document.createElement('div')
    gap.className = 'legend__item-text-gap'
    gap.textContent = text

    legend__item.append(item__box)
    legend__item.append(gap)

    return legend__item
  }

  legendRow.append(legendItem(count, count))

  mapLegend.forEach((val, key) => {
    const legendEl = legendItem(key.join('-'))
    legendRow.append(legendEl)
  });

  return legendRow.outerHTML
}


export default (item, orientation) => {
  const hours = orientation === 'landscape' ? '2 часа' : '1 час';

  const htmlHead = templateHead(item)

  const appBox = document.createElement('div')
  appBox.className = 'app__box'
  appBox.append(drawCanvas(item, orientation))

  const legend = document.createElement('div')
  legend.className = 'activity__legend'
  const htmlLegend = templateLegend(hours)

  legend.innerHTML = htmlLegend

  appBox.append(legend)

  const app = document.createElement('div')
  app.className = 'app'

  app.append(htmlHead)
  app.append(appBox)

  return app.outerHTML
}

// Canvas
// const draw = (data, selector, scaleX, scaleY) => {
//
//   const stateGradients = {
//     dark: {
//       default: {
//         left: ['rgba(0, 0, 0, 0.8)', 'rgba(19, 17, 16, 0.8)', 'rgba(112, 102, 94, 0.2)'],
//         right: ['rgba(58, 53, 48, 0.9)', 'rgba(73, 66, 61, 0.9)', 'rgba(112, 102, 94, 0.2)'],
//         top: ['rgba(34, 31, 28, 0.9)', 'rgba(62, 57, 52, 0.9)', 'rgba(236, 234, 233, 0.15)']
//       },
//       third: {
//         left: ['rgba(35, 22, 0, 0.9)', 'rgba(112, 92, 94, 0.9)', 'rgba(93, 116, 141, 0.6)'],
//         right: ['rgba(35, 22, 0, 0.9)', 'rgba(112, 92, 94, 0.9)', 'rgba(93, 116, 141, 0.6)'],
//         top: ['rgba(35, 22, 0, 0.9)', 'rgba(112, 92, 94, 0.9)', 'rgba(93, 116, 141, 0.6)']
//       },
//       middle: {
//         left: ['rgba(33, 22, 2, 0.9)', 'rgba(172, 113, 9, .9)', 'rgba(242, 159, 13, 0.6)'],
//         right: ['rgba(32, 21, 2, 1)', 'rgba(199, 131, 10, 1)', 'rgba(255, 255, 255, 0.6)'],
//         top: ['rgba(33,22,2,0.9)', 'rgba(172,113,9,0.9)', 'rgba(242, 159, 13, 0.6)']
//       },
//       maximum: {
//         left: ['rgba(32, 21, 2, 1)', 'rgba(199, 131, 10, 1)', 'rgba(242, 159, 13, 0.9)'],
//         right: ['rgba(32, 21, 2, 1)', 'rgba(199, 131, 10, 1)', 'rgba(242, 159, 13, 0.9)'],
//         top: ['rgba(32, 21, 2, 0.8)', 'rgba(199, 131, 10, 0.8)', 'rgba(242, 159, 13, 0.9)']
//       }
//     },
//     light: {
//       default: {
//         left: [],
//         right: [],
//         top: []
//       },
//       third: {
//         left: [],
//         right: [],
//         top: []
//       },
//       middle: {
//         left: [],
//         right: [],
//         top: []
//       },
//       maximum: {
//         left: [],
//         right: [],
//         top: []
//       }
//     }
//   }
//
//   const canvas = document.createElement('canvas');
//   const widthRatio = 425/668;
//   // const heightRatio = 112/376;
//   canvas.width = window.innerWidth * widthRatio;
//   canvas.height = window.innerHeight;
//   canvas.style.marginLeft = 'auto'
//   canvas.style.marginRight = 'auto'
//   canvas.style.display = 'block'
//
//   const canvasRender = document.querySelector('canvas')
//   console.log(canvasRender)
//   if (canvasRender) {
//     console.log(canvasRender.parentNode)
//   }
//   // canvasRender.parentNode.removeChild(canvasRender);
//   document.body.append(canvas)
//
//   const ctx = canvas.getContext('2d');
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.scale(2.5, 2.5); //
//
//   ctx.translate( 0, 100)
//
//   const drawCube = (x, y, wx, wy, h , gradient = {}, key = 'default', theme) => {
//     ctx.lineJoin = "round"
//
//     //left
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x - wx, y - wy); // 2
//     ctx.lineTo(x - wx, y - wy - h); // 3
//     ctx.lineTo(x, y - h); // 4
//     ctx.closePath();
//
//     const gradientLeft = ctx.createLinearGradient(x - wx, y - wy - h, x, y );// 3,1
//     gradientLeft.addColorStop(0, gradient[theme][key].left[1]);
//     gradientLeft.addColorStop(0.8, gradient[theme][key].left[0]);
//     gradientLeft.addColorStop(1, gradient[theme][key].left[0]);
//
//     ctx.strokeStyle = gradientLeft
//     ctx.fillStyle = gradientLeft;
//     // ctx.shadowColor = gradient[key].left[2];
//     // ctx.shadowBlur = 0.1;
//     ctx.stroke();
//     ctx.fill();
//
//     //right
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x, y - h); // 2
//     ctx.lineTo(x + wx, y - h - wy); // 3
//     ctx.lineTo(x + wx, y - wy); // 4
//     ctx.closePath();
//
//     const gradientRight= ctx.createLinearGradient(x + wx, y - h - wy, x, y);// 3,1
//     gradientRight.addColorStop(0, gradient[theme][key].right[1]);
//     gradientLeft.addColorStop(0.8, gradient[theme][key].right[0]);
//     gradientRight.addColorStop(1, gradient[theme][key].right[0]);
//
//     ctx.strokeStyle = gradientRight
//     ctx.fillStyle = gradientRight;
//     // ctx.shadowColor = gradient[key].right[2];
//     // ctx.shadowBlur = 0.1;
//     // ctx.font = "8px serif";
//     // ctx.fillText(`x: ${x}`, x, y);//debug
//     ctx.stroke();
//     ctx.fill();
//
//     //top
//     ctx.beginPath();
//     ctx.moveTo(x, y - h);
//     ctx.lineTo(x - wx, y - wy - h); // 2
//     ctx.lineTo(x, y - h - wy * 2); // 3
//     ctx.lineTo(x + wx, y - h - wy); // 4
//     ctx.shadowColor = gradient[theme][key].top[2];
//     // ctx.shadowBlur = 0.1;
//     // ctx.shadowOffsetX = -2;
//     // ctx.shadowOffsetY = -2;
//     // ctx.font = "8px serif";
//     // ctx.fillText(`h: ${h}`, x, y);//debug
//     ctx.closePath();
//
//     const gradientTop = ctx.createLinearGradient(x - wx, y - wy - h, x + wx, y - h - wy);// 2,4
//
//     gradientTop.addColorStop(0, gradient[theme][key].top[0]);
//     // gradientTop.addColorStop(0., gradient[key].top[0]);
//     gradientTop.addColorStop(1, gradient[theme][key].top[1]);
//
//     ctx.strokeStyle = gradientTop;
//     ctx.fillStyle = gradientTop;
//     ctx.shadowBlur = 0.1;
//
//     ctx.stroke();
//     ctx.fill();
//   }
//   // Сторона ромба равна 20.808652046684813
//
//   const countHours = 12
//
//   let startPointX = 17
//   const stepHorizontal = 17 // исправлено на 17 (было 34)
//
//   let startPointY = 50
//   const stepVertical = 12
//
//   let theme = sessionStorage.getItem('theme')
//   const days = Object.values(data.data)
//
//   days.map((day, index) => {
//     let num = index += 1
//     let PointX = num % 2 ? startPointX : startPointX + stepHorizontal
//     let PointY =  startPointY += stepVertical
//     const formatTwelve = formatClock(day, 2)
//
//     const height = buildHeight(formatTwelve[0], 10, 5)
//     drawCube(PointX, PointY, 17,12, height, stateGradients, 'default', theme )
//
//     formatTwelve.map((hours) => {
//       const height2 = buildHeight(hours, 10, 5)
//       drawCube(PointX += 34, PointY, 17,12, height2, stateGradients,'middle', theme )// default , third, middle, maximum
//     });
//
//   })
//
//
// }
