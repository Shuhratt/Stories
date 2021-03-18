import templateHead from "./templateHead";
import {createElement} from "../functions/functions";

const templateCircle = (data) => {
  const { totalText, differenceText } = data
  return `
    <div class="chart_diagram__circle">
      <svg class="chart_diagram__circle-chart" width="240" height="240" viewBox="0 0 285 285">
        <circle class="chart_diagram__circle-chart-first" r="120" cx="50%" cy="50%"  stroke-dasharray="188.4 753.6"></circle>
        <circle class="chart_diagram__circle-chart-second" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-188.4"></circle>
        <circle class="chart_diagram__circle-chart-middle" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-376.8"></circle>
        <circle class="chart_diagram__circle-chart-last" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-565.2"></circle>
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
  const htmlHead = templateHead(item)
  const app = createElement('app', 'div')
  app.append(htmlHead)

  const chart_diagram = createElement('chart_diagram','div')
  chart_diagram.insertAdjacentHTML('afterbegin', templateCircle(item));
  const chart_diagram__info = createElement('chart_diagram__info','div')
  const htmlRow = item.categories.map((row, index) => templateRowCommits(row, index)).join('')

  chart_diagram__info.insertAdjacentHTML('afterbegin', htmlRow )
  chart_diagram.insertAdjacentHTML('beforeend', chart_diagram__info.outerHTML )

  const appBox = createElement( 'app__box','div')

  appBox.append(chart_diagram)
  app.append(appBox)

  return app.outerHTML

}