import templateHead from "./templateHead";
import {createElement} from "../functions/functions";

const templateChartHtml = (data, orientation, max, heightClient ) => {
  const { value: count, title: num, active } = data
  const ratio = {
    landscape : 117/ max,
    portrait : 270/ max
  }
  const resultHeightCol = Math.floor(count * ratio[orientation])
  const adaptiveHeight = resultHeightCol / heightClient * 100

  return `
    <div class="chart_col${active ? ' chart_col_active' : ''}">
      <div class="chart_col-count">${count}</div>
      <div class="chart_col-box" style="height: ${adaptiveHeight}vh"></div>
      <div class="chart_col-num">${num}</div>
    </div>
  `
}

const templateChartUser = (data) => {
  const { avatar, name, valueText: num } = data
  return `
    <div class="chart__users-el">
      <div class="chart__users-el-avatar">
        <img class="chart__users-el-avatar-img" src="images/2x/${avatar}"  alt="${avatar}" srcset="images/2x/${avatar} 1x, images/4x/${avatar} 2x">
      </div>
      <div class="chart__users-el-info">
        <div class="chart__users-el-name">${name}</div>
        <div class="chart__users-el-num">${num}</div>
      </div>
    </div>
  `
}

export default (item, orientation) => {
  const { values, users } = item
  const maxUsers = 2

  const chartBox = createElement('chart__box', 'div')

  const maximum = Math.max.apply(null, values.map(item => item.value) )
  const heightClient = document.documentElement.clientHeight

  const chartHtml = values
    .slice(-12, -3)
    .map((col) => templateChartHtml(col, orientation, maximum, heightClient))
    .join('');
  chartBox.innerHTML = chartHtml

  const userList = createElement('chart__users', 'div')

  const chartUsersHtml = users
    .slice(0, maxUsers)
    .map((user) => templateChartUser(user))
    .join('');
  userList.innerHTML = chartUsersHtml

  const app = createElement('app', 'div')
  const appBox = createElement( 'app__box','div')

  const htmlHead = templateHead(item)

  app.append(htmlHead)
  appBox.append(chartBox)
  appBox.append(userList)
  app.append(appBox)

  return app.outerHTML

}