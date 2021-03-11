import templateHead from "./templateHead";

const templateChartHtml = (data, orientation, max, heightClient ) => {

  const ratio = {
    landscape : 117/ max,
    portrait : 270/ max
  }

  const resultHeightCol = Math.floor(data.value * ratio[orientation])
  const adaptiveHeight = resultHeightCol / heightClient * 100;

  return `
    <div class="chart_col">
      <div class="chart_col-count">${data.value}</div>
      <div class="chart_col-box" style="height: ${adaptiveHeight}vh"></div>
      <div class="chart_col-num">${data.title}</div>
    </div>
  `
}

const templateChartUser = (data) => {
  return `
    <div class="chart__users-el">
      <div class="chart__users-el-avatar">
        <img class="chart__users-el-avatar-img" src="images/2x/${data.avatar}"  alt="${data.name}" srcset="images/2x/${data.avatar} 1x, images/4x/${data.avatar} 2x">
      </div>
      <div class="chart__users-el-info">
        <div class="chart__users-el-name">${data.name}</div>
        <div class="chart__users-el-num">${data.valueText}</div>
      </div>
    </div>
  `
}

export default (item, orientation) => {
  const maxUsers = 2;
  const htmlHead = templateHead(item);
  const chartBox = document.createElement('div')
  chartBox.className = 'chart__box'

  const maximum = Math.max.apply(null, item.values.map(item => item.value) )
  const heightClient = document.documentElement.clientHeight

  const chartHtml = item.values
    .slice(-10, -1)
    .map((col) => templateChartHtml(col, orientation, maximum, heightClient))
    .join('');
  chartBox.innerHTML = chartHtml

  const userList = document.createElement('div')
  userList.className = 'chart__users'

  const chartUsersHtml = item.users
    .slice(0, maxUsers)
    .map((user) => templateChartUser(user))
    .join('');
  userList.innerHTML = chartUsersHtml

  const app = document.createElement('div')
  app.className = 'app'

  const appBox = document.createElement('div')
  appBox.className = 'app__box'

  app.append(htmlHead)
  appBox.append(chartBox)
  appBox.append(userList)
  app.append(appBox)

  return app.outerHTML

}