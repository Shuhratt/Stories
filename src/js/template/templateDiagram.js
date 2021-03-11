import templateHead from "./templateHead";

const templateCircle = (data) => {
  return `
    <div class="chart_diagram__circle">
      <svg class="chart_diagram__circle-chart" width="240" height="240" viewBox="0 0 285 285">
        <circle class="chart_diagram__circle-chart-first" r="120" cx="50%" cy="50%"  stroke-dasharray="188.4 753.6"></circle>
        <circle class="chart_diagram__circle-chart-second" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-188.4"></circle>
        <circle class="chart_diagram__circle-chart-middle" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-376.8"></circle>
        <circle class="chart_diagram__circle-chart-last" r="120" cx="50%" cy="50%" stroke-dasharray="188.4 753.6" stroke-dashoffset="-565.2"></circle>
      </svg>
      <div class="chart_diagram__circle-box">
       <h3 class="chart_diagram__circle-title">${data.totalText}</h3>
       <p class="chart_diagram__circle-result">${data.differenceText}</p>
      </div>
    </div>
  `
}

const templateRowCommits = (data, index) => {
  return `
    <div class="chart_diagram__row">
      <div class="chart_diagram__row-circle chart_diagram__row-circle_${index += 1}"></div>
      <div class="chart_diagram__row-counts">${data.title}</div>
      <div class="chart_diagram__row-progress">${data.differenceText.split(' ')[0]}</div>
      <div class="chart_diagram__row-result">${data.valueText.split(' ')[0]}</div>
    </div>
  `
}


export default (item) => {
  const htmlHead = templateHead(item)
  const app = document.createElement('div')
  app.className = 'app'
  app.append(htmlHead)

  const chart_diagram = document.createElement('div')
  chart_diagram.className = 'chart_diagram';
  chart_diagram.insertAdjacentHTML('afterbegin', templateCircle(item));
  const chart_diagram__info = document.createElement('div')
  chart_diagram__info.className = 'chart_diagram__info'
  const htmlRow = item.categories.map((row, index) => templateRowCommits(row, index)).join('')

  chart_diagram__info.insertAdjacentHTML('afterbegin', htmlRow )
  chart_diagram.insertAdjacentHTML('beforeend', chart_diagram__info.outerHTML )

  const appBox = document.createElement('div')
  appBox.className = 'app__box'

  appBox.append(chart_diagram)
  app.append(appBox)

  return app.outerHTML

}