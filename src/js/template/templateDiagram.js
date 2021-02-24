
const templateDiagramHtml = (data) => {
  document.addEventListener('DOMContentLoaded', () => {


  })


  return `
    <div class="chart_diagram">
      <div class="chart_diagram__circle">
          <svg class="chart_diagram__circle-chart" width="240" height="240" viewBox="0 0 250 250">
            <circle r="120" cx="50%" cy="50%"></circle>
          </svg>
         <div class="chart_diagram__circle-box">
          <h3 class="chart_diagram__circle-title">182 коммита</h3>
          <p class="chart_diagram__circle-result">+42 с прошлого спринта</p>
        </div>
      </div>
      <div class="chart_diagram__info">
        <div class="chart_diagram__row">
          <div class="chart_diagram__row-circle"></div>
          <div class="chart_diagram__row-counts">> 1001 строки</div>
          <div class="chart_diagram__row-progress">+8</div>
          <div class="chart_diagram__row-result">30</div>
        </div>
        <div class="chart_diagram__row">
          <div class="chart_diagram__row-circle"></div>
          <div class="chart_diagram__row-counts">> 1001 строки</div>
          <div class="chart_diagram__row-progress">+8</div>
          <div class="chart_diagram__row-result">30</div>
        </div>
      </div>
    </div>
  `
}


export default (item) => {
  const htmlHead = `
    <h1 class="app__title">${item.title}</h1>
    <h2 class="app__subtitle">${item.subtitle}</h2>`


  return htmlHead.concat(templateDiagramHtml(item))

}