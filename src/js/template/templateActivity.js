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
  const { data: weeks } = data
  const days = Object.values(weeks)

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

  legendRow.append(legendItem(count))

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

