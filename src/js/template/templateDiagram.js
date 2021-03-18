import templateHead from "./templateHead";
import {createElement} from "../functions/functions";

const templateCircle = (data) => {
  const { totalText, differenceText } = data
  //stroke-dashoffset="371.85"
  return `
    <div class="chart_diagram__circle">
      <svg class="chart_diagram__circle-chart" width="240" height="240" viewBox="0 0 285 285">
        <circle class="chart_diagram__circle-chart-first" r="120" cx="50%" cy="50%"  stroke-dasharray="122.3 753.6" transform="rotate(-120.38 )" transform-origin="center" ></circle>
        <circle class="chart_diagram__circle-chart-second" r="120" cx="50%" cy="50%" stroke-dasharray="131.6 753.6" transform="rotate(-60.86 )" transform-origin="center"></circle>
        <circle class="chart_diagram__circle-chart-middle" r="120" cx="50%" cy="50%" stroke-dasharray="236.85 753.6" transform="rotate(3.09 )" transform-origin="center"></circle>
        <circle class="chart_diagram__circle-chart-last" r="120" cx="50%" cy="50%" stroke-dasharray="253.43 753.6" transform="rotate(117.2 )" transform-origin="center"></circle>
      </svg>
      <div class="chart_diagram__circle-box">
       <h3 class="chart_diagram__circle-title">${totalText}</h3>
       <p class="chart_diagram__circle-result">${differenceText}</p>
      </div>
    </div>
  `
}

const templateRowCommits = (data, index) => {
  const { title, differenceText, valueText } = data
  const [progress, ...allDifferenceText] = differenceText.split(' ')
  const [result, ...allValueText] = valueText.split(' ')

  return `
    <div class="chart_diagram__row">
      <div class="chart_diagram__row-circle chart_diagram__row-circle_${index + 1}"></div>
      <div class="chart_diagram__row-counts">${title}</div>
      <div class="chart_diagram__row-progress">${progress}</div>
      <div class="chart_diagram__row-result">${result}</div>
    </div>
  `
}


export default (item) => {
  const { categories } = item
  const htmlHead = templateHead(item)
  const chart_diagram = createElement('chart_diagram','div')
  chart_diagram.insertAdjacentHTML('afterbegin', templateCircle(item));
  const chart_diagram__info = createElement('chart_diagram__info','div')
  const htmlRow = categories.map((row, index) => templateRowCommits(row, index)).join('')

  chart_diagram__info.insertAdjacentHTML('afterbegin', htmlRow )
  chart_diagram.insertAdjacentHTML('beforeend', chart_diagram__info.outerHTML )

  const app = createElement('app', 'div')
  const appBox = createElement( 'app__box','div')

  app.append(htmlHead)
  appBox.append(chart_diagram)
  app.append(appBox)

  return app.outerHTML

}