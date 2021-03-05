import templateHead from "./templateHead";

const templateCircle = (data) => {
  return `
  <div class="chart_diagram__circle">
      <svg class="chart_diagram__circle-chart" width="240" height="240" viewBox="0 0 285 285">
        <circle class="chart_diagram__circle-chart-first" r="120" cx="50%" cy="50%"  stroke-dasharray="188.2 753"></circle>
        <circle class="chart_diagram__circle-chart-second" r="120" cx="50%" cy="50%" stroke-dasharray="188.2 753" stroke-dashoffset="-188.2"></circle>
        <circle class="chart_diagram__circle-chart-middle" r="120" cx="50%" cy="50%" stroke-dasharray="188.2 753" stroke-dashoffset="-376.5"></circle>
        <circle class="chart_diagram__circle-chart-last" r="120" cx="50%" cy="50%" stroke-dasharray="188.2 753" stroke-dashoffset="-564.75"></circle>
      </svg>
     <div class="chart_diagram__circle-box">
      <h3 class="chart_diagram__circle-title">${data.totalText}</h3>
      <p class="chart_diagram__circle-result">${data.differenceText}</p>
    </div>
  </div>
  `
}

const templateRowCommits = (data) => {
  return `
    <div class="chart_diagram__row">
      <div class="chart_diagram__row-circle"></div>
      <div class="chart_diagram__row-counts">${data.title}</div>
      <div class="chart_diagram__row-progress">${data.differenceText}</div>
      <div class="chart_diagram__row-result">${data.valueText}</div>
    </div>
  `
}


export default (item) => {
  const htmlHead = templateHead(item)

  const app = document.querySelector('.app')

  app.append(htmlHead)

  const chart_diagram = document.createElement('div')
  chart_diagram.className = 'chart_diagram';
  chart_diagram.insertAdjacentHTML('afterbegin', templateCircle(item));
  const chart_diagram__info = document.createElement('div')
  chart_diagram__info.className = 'chart_diagram__info'
  const htmlRow = item.categories.map(row => templateRowCommits(row)).join('')

  chart_diagram__info.insertAdjacentHTML('afterbegin', htmlRow )
  chart_diagram.insertAdjacentHTML('beforeend', chart_diagram__info.outerHTML )

  app.append(chart_diagram)

  return app.outerHTML

}